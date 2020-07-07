import './lib/lib';


const div = document.querySelectorAll('div')

$('li').eq(2).addClass('active');
$('li').on('click', function () {
		const a = $(this).index()
		console.log(a);

})

