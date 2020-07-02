class Dom {
		constructor(selector) {
			this.$el = typeof (selector) === 'string' ?
					document.querySelector(selector) :
					selector;
		}
		html(html){
				if (typeof (html)=== 'string'){
						this.$el.innerHTML = html;
						console.log(this)
						return
				}
				this.$el.outerHTML.trim();
		}
}

export function $(selector) {
	return new Dom(selector)
}