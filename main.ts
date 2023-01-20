scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖2`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖1`)
})
let mySprite: Sprite = null
let relive = 0
mySprite = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`層級1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖1`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
