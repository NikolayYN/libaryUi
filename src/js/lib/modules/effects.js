import $ from '../core';


function animateRequest(dur, cb, fin) {
		let start = null;

		function _animateRequest(time) {
				if (!start) start = time;
				const progress = time - start;
				const completion = Math.min(progress / dur, 1)

				cb(completion)
				if (progress < dur) {
						requestAnimationFrame(_animateRequest);
				} else {
						if (typeof (fin) === 'function') {
								fin()
						}
				}
		}

		return _animateRequest;
}

$.prototype.fadeIn = function (dur, display = 'block', fin) {
		for (let i = 0; i < this.length; i++) {
				this[i].style.display = display;
				const _fadeIn = (opacity) => {
						this[i].style.opacity = (opacity)
				}

				requestAnimationFrame(animateRequest(dur, _fadeIn, fin));
		}
		return this
}
$.prototype.fadeOut = function (dur, fin) {
		for (let i = 0; i < this.length; i++) {

				const _fadeOut = (opacity) => {
						this[i].style.opacity = 1 - opacity;
						if (this[i].style.opacity === '0') {
								this[i].style.display = 'none';
						}
				}
				requestAnimationFrame(animateRequest(dur, _fadeOut, fin));
		}
		return this
}

function checkToggle(display) {
		return display === 'none';
}

$.prototype.fadeToggle = function (dur, display = 'block', fin) {

		for (let i = 0; i < this.length; i++) {
				const check = checkToggle(window.getComputedStyle(this[i]).display)
				const _toggle = (opacity) => {
						if (!check) {
								this[i].style.opacity = 1 - opacity;
								if (this[i].style.opacity === '0') {
										this[i].style.display = 'none';
								}
						} else {
								this[i].style.display = display;
								this[i].style.opacity = opacity
						}
				}
				requestAnimationFrame(animateRequest(dur, _toggle, fin));
		}
		return this
}