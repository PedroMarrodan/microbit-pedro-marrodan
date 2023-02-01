i = 0
bclicked = 0
atimes = 0
def interact(interval: number):
    global i
    basic.clear_screen()
    i = 1
    while i < interval + 1:
        basic.show_string("" + str(func(i)))
        basic.pause(100)
        basic.clear_screen()
        i += 1
def func(n: number):
    return ((5 - n) * Math.pow(n, 2)) / n
def numElements():
    global atimes, bclicked
    while bclicked < 1:
        if input.button_is_pressed(Button.A):
            basic.show_string("A")
            basic.clear_screen()
            atimes += 1
            basic.show_string("" + str(atimes))
        elif input.button_is_pressed(Button.B):
            basic.show_string("B")
            bclicked += 1
        basic.pause(50)
    basic.clear_screen()
    basic.show_string("Func")
    interact(atimes)
def showIcon():
    basic.clear_screen()
    music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
        MelodyOptions.ONCE)
    for index in range(4):
        basic.show_icon(IconNames.GHOST)
        basic.pause(100)
        basic.show_icon(IconNames.LEFT_TRIANGLE)
        basic.pause(100)
    basic.clear_screen()
    basic.show_string("Hellow!")
    basic.clear_screen()

def on_forever():
    global atimes, bclicked
    music.set_built_in_speaker_enabled(True)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.show_string("A to input B to calc")
    numElements()
    basic.pause(500)
basic.forever(on_forever)
