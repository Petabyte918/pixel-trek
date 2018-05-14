var renderFrame = function () {
	requestRenderFrame = requestAnimationFrame(renderFrame);

	//draw stuff
	Terrain.draw();

	Server.drawPlayers();
	Player.draw();

	Bullet.drawAll();

	Weapon.draw();

	Particle.drawAll();

	Text.drawAll();

	if (Hud.visible) Hud.draw();

	//draw cursor
	Cursor.draw(MouseCoordinates.coordsTimesPixelDensity().x, MouseCoordinates.coordsTimesPixelDensity().y);
} 