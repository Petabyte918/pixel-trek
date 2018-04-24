var Sprite = {
	draw: function (image, current_frame, dimension_x, dimension_y, destination_x, destination_y, scale_x, scale_y, frames = 8) {
		ctx.drawImage(image, current_frame * dimension_x, 0, dimension_x, dimension_y, destination_x, destination_y, scale_x, scale_y);
	},

	nextFrame: function () {
		 if (Player.currentFrame < Player.frames - 1) {
		 	Player.currentFrame += 1;
		 } else {
		 	Player.currentFrame = 0;
		 }

		Particle.array.forEach(function (element, index) {
			if (element.frame < Particle.frames) {
				Particle.array[index].frame += 1;
			} else {
				Particle.array[index].splice(index, 1); //delete animation
			}
		});
	}
};