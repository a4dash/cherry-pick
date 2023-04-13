let cheery: Sprite = null
game.splash("Cherry Picker")
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    ....ffffff..............
    ....ff2cccf.........cf..
    .....ff2cccfff.....c4f..
    ....cc22222222ccccc44f..
    ...c9b244422222ccc442f..
    ..c99944222222222242fc..
    .c2b9912222222222222fcc.
    c222b1111b22222222cc22cf
    f2222221992222ccccccc22f
    .f22222222222c222cffffff
    ..ff2222222c442222ff....
    ....fffffffff442222fc...
    .........f2cff442222c...
    .........fccfffc2222c...
    ..........fc2ffffffff...
    ...........c2fff........
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(500, function () {
    cheery = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.Food)
    cheery.setPosition(randint(0, 160), randint(0, 120))
})
