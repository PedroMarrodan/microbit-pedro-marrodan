let i = 0
let bclicked = 0
let atimes = 0
function interact(interval: number) {
    
    basic.clearScreen()
    i = 1
    while (i < interval + 1) {
        basic.showString("" + ("" + func(i)))
        basic.pause(100)
        basic.clearScreen()
        i += 1
    }
}

function func(n: number): number {
    return (5 - n) * Math.pow(n, 2) / n
}

function numElements() {
    
    while (bclicked < 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.clearScreen()
            atimes += 1
            basic.showString("" + ("" + atimes))
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            bclicked += 1
        }
        
        basic.pause(50)
    }
    basic.clearScreen()
    basic.showString("Func")
    interact(atimes)
}

function showIcon() {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        basic.showIcon(IconNames.LeftTriangle)
        basic.pause(100)
    }
    basic.clearScreen()
    basic.showString("Hellow!")
    basic.clearScreen()
}

basic.forever(function on_forever() {
    
    music.setBuiltInSpeakerEnabled(true)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.showString("A to input B to calc")
    numElements()
    basic.pause(500)
})
