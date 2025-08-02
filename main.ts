input.onPinReleased(TouchPin.P2, function () {
    ALARM = true
    while (ALARM == true) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.A, function () {
    if (ALARM == true) {
        ALARM = false
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        ALARM = true
    }
})
let ALARM = false
ALARM = false
basic.forever(function () {
    while (ALARM == true) {
        basic.showIcon(IconNames.Happy)
    }
})
