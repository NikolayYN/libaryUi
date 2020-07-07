import $ from '../core';


$.prototype.html = function (html) {
		for (let i = 0; i < this.length; i++) {
				if (html) {
						this[i].innerHTML = html;
						return this
				}
				return this[i].outerHTML;
		}
		return this
}
$.prototype.eq = function (a = 0) {
		const el = this[a];
		const length = Object.keys(this).length;
		for (let i = 0; i < length; i++) {
				delete this[i];
		}
		this[0] = el;
		this.length = 1;
		return this
}
$.prototype.index = function () {
	const parent = this[0].parentNode;
	const children = [...parent.children];
	function findMyIndex(elem) {
		return elem === this[0]
	}
	return children.findIndex(findMyIndex.bind(this))
}