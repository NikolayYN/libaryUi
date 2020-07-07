import $ from '../core';

$.prototype.setAttr = function(name,value) {
		if (!name || !value) return this
	for (let i = 0; i< this.length; i++) {
			this[i].setAttribute(name,value);
	}
	return  this;
}