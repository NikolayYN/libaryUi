import './lib/lib';


const div = document.querySelectorAll('li')[0]
console.log();

// $('li').eq(2).addClass('active');
// $('li').on('click', function () {
// 		const a = $(this).index()
// 		console.log(a);
//
// })
let a = $(div).sibling()
console.log(a);
