controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.isHittingTile(CollisionDirection.Bottom)) {
        Player1.vy = -200
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.isHittingTile(CollisionDirection.Bottom)) {
        Player1.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`Secret Room`)
        tiles.placeOnTile(Player1, tiles.getTileLocation(1, 14))
    }
    if (controller.B.isPressed()) {
        tiles.setCurrentTilemap(tilemap`Crate Room`)
        tiles.placeOnTile(Player1, tiles.getTileLocation(1, 14))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchDown, function (sprite, location) {
    game.showLongText("Press A to win", DialogLayout.Bottom)
    if (controller.A.isPressed()) {
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    game.showLongText("Congrats on you go to the secret room press A", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("Press A to open", DialogLayout.Bottom)
    if (controller.A.isPressed()) {
        game.showLongText("GREEDY NOW YOU DIE", DialogLayout.Full)
        game.gameOver(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    game.setDialogTextColor(7)
    if (controller.A.isPressed()) {
        Player1.setImage(assets.image`Player1 Mode2`)
    }
    if (controller.B.isPressed()) {
        Player1.setImage(assets.image`Player1 Mode 3`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Ending Room`)
    tiles.placeOnTile(Player1, tiles.getTileLocation(1, 14))
})
let Player1: Sprite = null
Player1 = sprites.create(assets.image`Player1`, SpriteKind.Player)
controller.moveSprite(Player1, 100, 0)
Player1.ay = 500
scene.cameraFollowSprite(Player1)
tiles.placeOnTile(Player1, tiles.getTileLocation(1, 18))
tiles.setCurrentTilemap(tilemap`Start Level1`)
game.showLongText("Never open a chest press A or B to do things when touching the levers or the chest Press A to jump And B to SUPER JUMP", DialogLayout.Bottom)
