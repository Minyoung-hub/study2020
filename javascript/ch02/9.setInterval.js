let timeId = setInterval(() => console.log('tick'), 1000);

setTimeout(() => {
	clearInterval(timeId);
	console.log('stop');
}, 3000);

console.log(new Date());

let time = setInterval(() => console.log(new Date() + 8), 1000);
