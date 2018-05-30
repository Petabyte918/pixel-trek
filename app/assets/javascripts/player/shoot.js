var Bullet = {
	array: [],

	spawnX: 0,
	spawnY: 4,

	spawnXwithoutPI: 0,
	spawnYwithoutPI: 4,

	new: function (type, x, y, radian, uuid = null) {
		let speed = 20.0; // pixels per step

		radian += 89.67;

		let x_velocity = speed * Math.cos((radian) * Math.PI / 180);
		let y_velocity = speed * Math.sin((radian) * Math.PI / 180);

		expiration = Date.now() + 1000; //milliceonds

		this.array.push({
			speed: speed,
			type: type,

			x: x,
			y: y,

			x_velocity: x_velocity,
			y_velocity: y_velocity,

			radian: radian,
			expiration: expiration,

			uuid: uuid
		});

		//cartridge ejection sprite

		let cartridgeSpawnX = 9 * Math.cos(radian * Math.PI / 180); // coordinates for spawning bullet cartridges
		let cartridgeSpawnY = 9 * Math.sin(radian * Math.PI / 180);

		if (uuid == Player.uuid) {
			Particle.cartridgeEject(Player.x + Math.round(cartridgeSpawnX), Player.y + Math.round(cartridgeSpawnY));
		}
	},

	drawAll: function () {
		this.array.forEach(function (element, index) {
			ctx.save();
			ctx.beginPath();

			ctx.translate((element.x + View.x), (element.y + View.y));
			ctx.rotate(element.radian * Math.PI / 180);
			ctx.translate(-(element.x + View.x), -(element.y + View.y));

			ctx.drawImage(bullet_image, element.x + View.x, element.y + View.y);

			ctx.restore();
		});
	},

	step: function () {
		this.array.forEach(function (element, index) {
			if (element.expiration > Date.now()) {
				Bullet.array[index].x += element.x_velocity;
				Bullet.array[index].y += element.y_velocity;
			} else {
				Bullet.array.splice(index, 1); //deletes bullet
			}

			//detect player collision
			let playerShot = false;
			let shotUUID = null;
			let BreakException = false;

			var bulletX = element.x;
			var bulletY = element.y;

			try {
				ServerPlayer.all.forEach(function (element, index) {
					playerShot = Collision.check([bulletX, bulletY], [element.x, element.y], 5, 5, 35, 21);

					shotUUID = element.uuid;

					if (playerShot === true) throw BreakException;
				});
			} catch (e) {
		      if (e !== BreakException) throw e;
		    }

			if (playerShot) {
				App.game.addParticle({
					particle: "blood",
					x: element.x + 10,
					y: element.y + 10
				}); // adding bullet sprite dimensions to center the particle

				App.game.deleteBullet(index);
				App.game.shotPlayer({
					damage: 20,
					shot_uuid: shotUUID
				});
			}
		});
	},

	delete: function (index) {
		Bullet.array.splice(index, 1); //deletes bullet
	}
};