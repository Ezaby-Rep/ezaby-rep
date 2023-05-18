let textLength = 0;
let text =`هذا العمل هو نتاج مجهود جماعى شارك فيه كل أفراد القسم.. 


الهدف الأساسى منه
 أولا: هو توثيق لجميع المهام التى يضطلع بها القسم و جعلها مرجعا لأى عضو جديد..
 ثانيا: أن يحتوى على كل الملاحظات و التطورات و خطط العمل..
 `

const btn = document.querySelector('.login-btn')

function type() {
	let textChar = text.charAt(textLength++);
	let paragraph = document.getElementById('typed');
	let charElement = document.createTextNode(textChar);
	paragraph.appendChild(charElement);
	if (textLength < text.length + 1) {
		setTimeout(() => type(), 50);
	} else {
		text = '';

    setTimeout(() => {
      btn.style.visibility = 'visible';
    }, 500);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	type();
});
