from google.cloud import storage


storage_client = storage.Client()
#client = storage.Client(credentials=credentials, project='CapitalRecordsHackathon')
bucket = storage_client.get_bucket('radio-days-audio-files')
blob = bucket.blob('correct_lyrics.txt')
blob.upload_from_filename('correct_lyrics.txt')
