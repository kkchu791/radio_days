from flask import Flask
import io
import os
from fuzzywuzzy import fuzz

# Imports the Google Cloud client library
from google.cloud import speech
from google.cloud.speech import enums
from google.cloud.speech import types

# Initializes flask app
app = Flask(__name__)

# Converts video file to audio file
@app.route('/convert-video', methods = ["POST"])
def convert_video():
    path = '/video'
    for filename in os.listdir(path):
        if (filename.endswith(".mov")): 
            os.system("ffmpeg -i {0} audio/out.wav".format(filename))
        else:
            continue
    return "success"

@app.route('/test', methods = ["POST"])
def analysis_tool():
    # Instantiates a client
    client = speech.SpeechClient()
    # The name of the audio file to transcribe
    file_name = os.path.join(
    os.path.dirname(__file__),
    'resources',
    'audio.raw')

    # Loads the audio into memory
    with io.open(file_name, 'rb') as audio_file:
        content = audio_file.read()
    audio = types.RecognitionAudio(content=content)

    config = types.RecognitionConfig(
        encoding=enums.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code='en-US')

    # Detects speech in the audio file
    response = client.recognize(config, audio)
    for result in response.results:
        contestants_lyrics = '{}'.format(result.alternatives[0].transcript)

    # Creates a string based on the correct lyrics
    with open ('correct_lyrics.txt', 'r') as lyric_file:
        real_lyrics = lyric_file.read()

    # Analyzes the two strings and returns a percentage of how a like they are.
    ratio = fuzz.ratio(contestants_lyrics.lower(), real_lyrics.lower())
    return str(ratio)

if __name__ == '__main__':
    app.run(debug=True)
