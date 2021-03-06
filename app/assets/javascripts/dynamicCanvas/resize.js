var Screen = {
	pixelDensity: 0.5,

	toPixelDensity: function (pixels) {
		return pixels * this.pixelDensity;
	}
};

var resizeCanvas;

var pixelDensity = Screen.pixelDensity;

resizeCanvas = function () { //resizes canvas to browser window
    var aspectRatio = window.innerWidth / window.innerHeight;

    canvas.width = window.innerWidth * pixelDensity;
    canvas.height = window.innerHeight * pixelDensity;

    document.getElementById('hud').width = window.innerWidth;
    document.getElementById('hud').height = window.innerHeight;

    hudCanvas = document.getElementById('hud');
    mouseCanvas = document.getElementById('mouse');

    document.getElementById('mouse').width = window.innerWidth * pixelDensity;
    document.getElementById('mouse').height = window.innerHeight * pixelDensity;

    View.center();
}