function mouseMove (event) {
	Game.mouseMove(event);
}

function mouseDown (event) {
	Cursor.clicking = true;

	Player.shoot();
}

function mouseUp (event) {
	Cursor.clicking = false;
}

window.addEventListener("mousemove", mouseMove);

window.addEventListener("mousedown", mouseDown);
window.addEventListener("mouseup", mouseUp);