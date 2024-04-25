namespace SpriteKind {
    export const Film = SpriteKind.create()
    export const Peel = SpriteKind.create()
    export const Target = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        if (info.score() > 0) {
            controller.moveSprite(mySprite, 0, 0)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash`, mySprite, 0, -200)
            info.changeScoreBy(-1)
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Number_of_Peels > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 5 5 . . . . . 
            . . . . . . . e 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 e . . . 5 . . . 
            . . . . . . 5 5 5 5 e 5 5 . . . 
            . . 5 5 5 5 5 e 5 5 . . . . . . 
            . . . 5 e e e . 5 5 5 5 . . . . 
            . . . 5 . . . . . . . . 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target, function (sprite, otherSprite) {
    Poloroid_Dan = sprites.create(img`
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111fffffffffffffffffffffffaaaaaaaaaaaffffffffffffffffffff111111
        1111fffffffffffffffffffffaaaaaaaaaaaaaaaffffffffffffffffff111111
        1111fffffffffffffffffffaaaaaaaaaaaaaaaaaaaffffffffffffffff111111
        1111ffffffffffffffffffaaaaaaaaaaaaaaaaaaaaafffffffffffffff111111
        1111fffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaffffffffffffff111111
        1111ffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffff111111
        1111fffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffff111111
        1111fffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffff111111
        1111ffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaffaaafffffffffff111111
        1111ffffffffffffffaaaafffffaaaaaaaaaaaaaff1faaafffffffffff111111
        1111fffffffffffffaaaaaf1f11faaaaaaaaaaff1f1faaaaffffffffff111111
        1111fffffffffffffaaaaaf1f11faaaaaaaaaaf11f1faaaaffffffffff111111
        1111fffffffffffffaaaaaf1f11faaaaaaaaaaf11f1faaaaffffffffff111111
        1111fffffffffffffaaaaaf111faaaaaaaaaaaf1111faaaaffffffffff111111
        1111fffffffffffffaaaaaf11ffaaaaaaaaaaaafffffaaaaffffffffff111111
        1111fffffffffffffaaaaaaffaaaaaaaaaaaaaaaaaaaaaaaffffffffff111111
        1111fffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffff111111
        1111fffffffffffffaaaaaaafffffffffffaaaaaaaaaaaaaffffffffff111111
        1111fffffffffffffaaaaaaaaaaaaaaaaaaffffffffffffaffffffffff111111
        1111fffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffff111111
        1111fffffffffffffaaaaaaaaaaaaaffffaaaaaaaaaaaaaaffffffffff111111
        1111ffffffffffffffaaaaaaaaaaaaaaaaffffaaaaaaaaafffffffffff111111
        1111ffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffff111111
        1111fffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffff111111
        1111fffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffff111111
        1111ffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffff111111
        1111fffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaffffffffffffff111111
        1111ffffffffffffffffffaaaaaaaaaaaaaaaaaaaaafffffffffffffff111111
        1111fffffffffffffffffffaaaaaaaaaaaaaaaaaaaffffffffffffffff111111
        1111fffffffffffffffffffffaaaaaaaaaaaaaaaffffffffffffffffff111111
        1111fffffffffffffffffffffffaaaaaaaaaaaffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Player)
    mySprite.setPosition(170, 170)
    _peel.setPosition(150, 150)
    scene.cameraFollowSprite(Poloroid_Dan)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        if (info.score() > 0) {
            controller.moveSprite(mySprite, 0, 0)
            projectile = sprites.createProjectileFromSprite(img`
                ......11........................
                .....1111.......................
                ....111111......................
                ...11111111.....................
                ..1111111111....................
                ..11111111111...................
                .1111111111111..................
                .1111111111111..................
                111111111111111.................
                1111111111111111................
                11111111111111111...............
                111111111111111111..............
                1111111111111111111.............
                11111111111111111111............
                111111111111111111111...........
                111111111111111111111...........
                111111111111111111111...........
                111111111111111111111...........
                111111111111111111111...........
                111111111111111111111...........
                11111111111111111111............
                1111111111111111111.............
                111111111111111111..............
                11111111111111111...............
                1111111111111111................
                .11111111111111.................
                .1111111111111..................
                .111111111111...................
                ..1111111111....................
                ..111111111.....................
                ....111111......................
                ....11111.......................
                `, mySprite, -200, 0)
            info.changeScoreBy(-1)
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        if (info.score() > 0) {
            controller.moveSprite(mySprite, 0, 0)
            projectile = sprites.createProjectileFromSprite(img`
                ........................11......
                .......................1111.....
                ......................111111....
                .....................11111111...
                ....................1111111111..
                ...................11111111111..
                ..................1111111111111.
                ..................1111111111111.
                .................111111111111111
                ................1111111111111111
                ...............11111111111111111
                ..............111111111111111111
                .............1111111111111111111
                ............11111111111111111111
                ...........111111111111111111111
                ...........111111111111111111111
                ...........111111111111111111111
                ...........111111111111111111111
                ...........111111111111111111111
                ...........111111111111111111111
                ............11111111111111111111
                .............1111111111111111111
                ..............111111111111111111
                ...............11111111111111111
                ................1111111111111111
                .................11111111111111.
                ..................1111111111111.
                ...................111111111111.
                ....................1111111111..
                .....................111111111..
                ......................111111....
                .......................11111....
                `, mySprite, 200, 0)
            info.changeScoreBy(-1)
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        if (info.score() > 0) {
            controller.moveSprite(mySprite, 0, 0)
            projectile = sprites.createProjectileFromSprite(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ............111111..............
                ...........11111111.............
                ..........1111111111............
                .........111111111111...........
                ........11111111111111..........
                .......1111111111111111.........
                ......111111111111111111........
                .....111111111111111111111......
                ....11111111111111111111111.....
                ...1111111111111111111111111....
                ..111111111111111111111111111...
                .11111111111111111111111111111..
                1111111111111111111111111111111.
                11111111111111111111111111111111
                11111111111111111111111111111111
                1111111111111111111111111111111.
                111111111111111111111111111111..
                ..111111111111111111111111111...
                ..11111111111111111111111111....
                ....1111111111111111111111......
                .......11111111111111111........
                `, mySprite, 0, 200)
            info.changeScoreBy(-1)
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
info.onLifeZero(function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Peel, function (sprite, otherSprite) {
    Number_of_Peels += 1
    sprites.destroy(_peel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Film, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    sprites.destroy(Film)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.follow(mySprite, 0)
    pause(1000)
    myEnemy.follow(mySprite, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.follow(mySprite, 0)
    pause(1000)
    myEnemy.follow(mySprite, 70)
    mySunglasses.follow(mySprite, 50)
})
let Poloroid_Dan: Sprite = null
let Number_of_Peels = 0
let projectile: Sprite = null
let _peel: Sprite = null
let Film: Sprite = null
let mySunglasses: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
info.setScore(5)
info.setLife(3)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.follow(mySprite, 70)
mySprite.setPosition(5, 6)
mySunglasses = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . b b b b b b b b b . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySunglasses.follow(mySprite, 50)
Film = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . b b 5 5 b b . . . . . . 
    . . . . b b 5 5 b b . . . . . . 
    . . . . b b 5 5 b b . . . . . . 
    . . . . b b 5 5 b b . . . . . . 
    . . . . b b 5 5 b b . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Film)
_peel = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . 5 . . . 
    . . . . . . 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 . 5 5 5 5 . . . . 
    . . . 5 . . . . . . . . 5 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Peel)
_peel.setPosition(15, 6)
let Dan = sprites.create(img`
    . . . a a a a a a a . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a a a a a a a a a a a . . . . 
    a a a a a a a a a a a a a . . . 
    a a a a a a a a a a a a a . . . 
    a a a a a a a a a a a a a . . . 
    a a a a a a a a a a a a a . . . 
    a a a a a a a a a a a a a . . . 
    a a a a a a a a a a a a a . . . 
    a a a a a a a a a a a a a . . . 
    . a a a a a a a a a a a . . . . 
    . . a a a a a a a a a . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Target)
_peel.setPosition(15, 60)
