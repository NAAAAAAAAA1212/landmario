scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖2`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
    tiles.setTileAt(location, assets.tile`我的貼圖7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`終點0`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖6`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`終點`, function (sprite, location) {
    level += 1
    nextlevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖4`, function (sprite, location) {
    info.setLife(30000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
    info.setLife(30)
})
function nextlevel () {
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`層級3`)
        tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
    }
    if (level == 3) {
        game.over(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`死亡點`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`復活點1`, function (sprite, location) {
    info.setLife(30000)
})
let mySprite: Sprite = null
let level = 0
level = 1
info.setLife(30000)
mySprite = sprites.create(assets.image`角色`, SpriteKind.Player)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`遊戲關卡`)
tiles.placeOnRandomTile(mySprite, assets.tile`復活點1`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
