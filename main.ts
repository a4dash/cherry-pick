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
