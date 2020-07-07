import './lib/lib';

const div = document.querySelectorAll('div')
$(div).setAttr('data', 'div');
$('li').on('click', function () {
		$(this).addClass('active')
})

