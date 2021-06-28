scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
info.onCountdownEnd(function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
info.onLifeZero(function () {
	
})
info.player2.onLifeZero(function () {
	
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
// ADVANCED:
// Function Blocks
function FunctionBlock () {
    return 0
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
	
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
	
})
// Game Blocks
game.onUpdate(function () {
	
})
// Loop Blocks
// (Why is on start a loop and pause?)
forever(function () {
	
})
game.onUpdateInterval(500, function () {
	
})
