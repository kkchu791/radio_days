import io
import os
from fuzzywuzzy import fuzz
import ffmpy

# Imports the Google Cloud client library
from google.cloud import speech
from google.cloud.speech import enums
from google.cloud.speech import types


# Instantiates a client
client = speech.SpeechClient()

# The name of the audio file to transcribe
file_name = os.path.join(
    os.path.dirname(__file__),
    'resources',
    'opening.wav')

# Loads the audio into memory
with io.open(file_name, 'rb') as audio_file:
    content = audio_file.read()
    audio = types.RecognitionAudio(content=content)

config = types.RecognitionConfig(
    encoding=enums.RecognitionConfig.AudioEncoding.LINEAR16,
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
print(ratio)
