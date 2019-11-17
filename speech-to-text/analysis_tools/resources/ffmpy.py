import ffmpy

ff = ffmpy.FFmpeg(inputs={'opening.mov': None},outputs={'output.wav': None})
ff.run()
