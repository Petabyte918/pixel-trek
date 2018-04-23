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
}

resizeCanvas();