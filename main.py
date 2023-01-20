def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        我的貼圖2
    """),
    on_overlap_tile)

def on_a_pressed():
    if mySprite.vy == 0:
        mySprite.vy = -175
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite2, location2):
    tiles.place_on_random_tile(mySprite, assets.tile("""
        我的貼圖1
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        我的貼圖0
    """),
    on_overlap_tile2)

mySprite: Sprite = None
relive = 0
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.set_background_color(9)
scene.camera_follow_sprite(mySprite)
tiles.set_current_tilemap(tilemap("""
    層級1
"""))
tiles.place_on_random_tile(mySprite, assets.tile("""
    我的貼圖1
"""))
controller.move_sprite(mySprite, 100, 0)
mySprite.ay = 350