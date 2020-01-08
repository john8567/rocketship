let sandy = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f f f f f f f f f f . . 
. . . . f f f f f f f f f f . . 
. . . f f f f f f f f f f f . . 
. . . f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. 2 4 2 4 2 4 2 4 2 4 2 4 2 . . 
. 2 4 2 4 2 4 2 4 2 4 2 4 2 . . 
. 2 4 2 4 2 4 2 4 2 4 2 4 2 . . 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
sandy.setPosition(75, 120)
for (let index = 0; index < 25; index++) {
    pause(100)
    sandy.y += -6
}
