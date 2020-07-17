const inputs = document.querySelectorAll('.form-control input');
const labels = document.querySelectorAll('.form-control label');

//input label animation
labels.forEach(label => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms;">${letter}</span>`)
		.join('');
});