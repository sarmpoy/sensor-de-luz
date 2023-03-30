basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showString("Hace fresquito")
    }
})
