from fuzzywuzzy import fuzz

personal_lyrics = "Johanna blah blah blah"
real_lyrics = """Johanna drove slowly into the city
    The Hudson river all filled with snow
    She spied the ring on his honor's finger
    Oh, oh, oh"""
Ratio = fuzz.ratio(personal_lyrics.lower(), real_lyrics.lower())
print(Ratio)
