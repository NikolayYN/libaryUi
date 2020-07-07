import $ from '../core';


$.prototype.html = function (html) {
		if (html) {
				return this[0].innerHTML = html;
		}
		return  this[0].outerHTML;


}