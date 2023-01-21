controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`終點`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    info.changeLifeBy(-1)
    pause(1000)
})
info.onLifeZero(function () {
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
    info.setLife(30)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`死亡點`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
})
let mySprite: Sprite = null
info.setLife(30)
let relive = 0
mySprite = sprites.create(assets.image`角色`, SpriteKind.Player)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`遊戲關卡`)
tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
