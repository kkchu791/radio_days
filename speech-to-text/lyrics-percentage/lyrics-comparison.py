from fuzzywuzzy import fuzz

personal_lyrics = "Johanna fell into the city"
with open ('correct_lyrics.txt', 'r') as lyric_file:
    real_lyrics = lyric_file.read()
Ratio = fuzz.ratio(personal_lyrics.lower(), real_lyrics.lower())
print(Ratio)
