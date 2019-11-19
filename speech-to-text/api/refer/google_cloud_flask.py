from flask import Flask, request, jsonify, make_response
from google.cloud import storage
app = Flask("__name__")
storage_client = storage.Client()
@app.route('/upload', methods=['POST'])
def upload():
    bucket = storage_client.get_bucket('radio-days-audio-files')
    blob = bucket.blob('correct_lyrics.txt')
    blob.upload_from_filename('correct_lyrics.txt')
    return "success"

if __name__ == '__main__':
    app.run(debug=True)
