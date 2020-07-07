import $ from '../core';

$.prototype.on =function(event, fn) {
		if(!event || !fn) {
				return  this
		}
		for(let i = 0; i < this.length; i++) {
				this[i].addEventListener(event, fn)
		}
		return this;
}
$.prototype.off = function (event, fn) {
		if(!event || !fn) {
				return  this
		}
		for(let i = 0; i < this.length; i++) {
				this[i].removeEventListener(event, fn)
		}
		return this;
}
$.prototype.click = function (event,fn) {
		for(let i = 0; i < this.length; i++) {
			if (event) {
					this[i].removeEventListener('click', fn)
					return this;
			}
			this[i].click();
		}

}