// (() => {
// 		function $(selector) {
// 				const el = document.querySelector(selector)
// 				const obj = {}
//
// 				obj.hide = ()=> {
// 						el.style.display = 'none'
// 						console.log(this)
// 						return obj
// 				}
// 				obj.show = function(){
// 						el.style.display = "block"
// 						return obj
// 				}
// 				return obj;
// 		}
// 		window.$ = $;
// })()


const $ = function (selector) {
		return new $.prototype.init(selector);
}
$.prototype.init = function (selector) {
		if (!selector) {
				return this; // {}
		}
		if (selector.tagName) {
				this[0] = selector;
				this.length = 1
				return
		}
		let a = null
		try {
				a	 = document.querySelectorAll(selector);
		} catch(e){}
		a ?
			Object.assign(this, (document.querySelectorAll(selector))) :
			Object.assign(this, selector);

		this.length = a ?document.querySelectorAll(selector).length :
			selector.length
// this.length = document.querySelectorAll(selector).length;
		return this;
}

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;

