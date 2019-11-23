"""
A very hacky, and non-stable way to hardcode and return a percentage of matching 
words. Using Google Cloud Storage, and speech to text api. For this to work make sure The
cloud buckets are accessable for everyone 
(allUsers, read for audio, write for video files)
Seperately you can have the front end send a video to the storage bucket 
This code gets that filename (hardcoded) and translates it an audio file, and returns
a number. Deploy this flask script for hackthons using ngok (just a suggestion)
"""

from flask import Flask
import io
import os
from fuzzywuzzy import fuzz

# Imports the Google Cloud client library
from google.cloud import speech, storage
from google.cloud.speech import enums
from google.cloud.speech import types


# Initializes flask app
app = Flask(__name__)

# Converts video file to audio file
@app.route('/transcribe', methods = ["GET"])
def convert_video():
    os.system("ffmpeg -y -i 'https://storage.googleapis.com/[BUCKET-NAME]/[FILE-NAME]' 'https://storage.googleapis.com/upload/storage/v1/b/[BUCKET-NAME]/o?uploadType=media&name=[FILE-NAME]'")


    # Instantiates a client
    client = speech.SpeechClient()
    # The name of the audio file to transcribe
    file_name = 'gs://[BUCKET-NAME]/[FILE-NAME]'

    language_code = "en-US"
    encoding = enums.RecognitionConfig.AudioEncoding.LINEAR16
    config = {
            "language_code":language_code,
            "encoding":encoding,
            }
    audio = {"uri": file_name}

    # Detects speech in the audio file
    response = client.recognize(config, audio)
    for result in response.results:
        contestants_lyrics = '{}'.format(result.alternatives[0].transcript)

    # Creates a string based on the correct lyrics
    real_lyrics = """When you see my face
            Hope it gives you hell
            Hope it gives you hell
            When you walk my way
            Hope it gives you hell
            Hope it gives you hell
    """ 

    # Analyzes the two strings and returns a percentage of how a like they are.
    ratio = fuzz.ratio(contestants_lyrics.lower(), real_lyrics.lower())
    return str(ratio)

if __name__ == '__main__':
    app.run(debug=True)
