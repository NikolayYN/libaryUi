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
$.prototype.getElem = function (selector) {
		const copyObj = Object.assign({}, this);
		let changedItems = 0;
		let count = 0;
		for (let i = 0; i < copyObj.length; i++) {
				const arr = copyObj[i].querySelectorAll(selector);
				if (arr.length === 0) continue;
				for (let j = 0; j < arr.length; j++) {
						this[count] = arr[j]
						count++;
				}
				changedItems += arr.length;
		}
		this.length = changedItems;
		const length = Object.keys(this).length;
		for (; changedItems < length; changedItems++) {
				delete this[changedItems]
		}

		return this
}
$.prototype.closest = function (select) {
		let counter = 0;
		for (let i = 0; i < this.length; i++) {
				let a = this[i];
				this[i] = this[i].closest(select);
				if (!this[i]) this[i] = a.parentNode;
				counter++
		}
		const length = Object.keys(this).length;
		for (; counter < length; counter++) {
				delete this[counter]
		}

		return this
}

$.prototype.sibling = function () {
		let changedItems = 0;
		let counter = 0;
		for (let i = 0; i < this.length; i++) {
				const arr = this[i].parentNode.children;
				console.log(arr);
				for (let j = 0; j < arr.length; j++) {
						if (arr[j] === this[i]) {
								continue;
						}
						this[counter] = arr[j];
						counter++
				}
				changedItems += arr.length - 1;
		}
		this.length = changedItems;
		const length = Object.keys(this).length;
		for (; changedItems < length; changedItems++) {
				delete this[changedItems]
		}
		return this
}