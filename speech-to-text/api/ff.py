import os
path = '.'

for filename in os.listdir(path):
    if (filename.endswith(".mov")): #or .avi, .mpeg, whatever.
        os.system("ffmpeg -i {0} out.wav".format(filename))
    else:
        continue
