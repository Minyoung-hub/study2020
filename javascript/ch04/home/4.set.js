let user = {name: 'scott'};
let fn = () => 1;
let arr = ['ucal', user, 'toby', fn, 'ucal', user, 1, 1, fn];
function refine(arr){
	// return Array.from(new Set(arr));
	// return [...(new Set(arr))];
	let set = new Set(arr);
	let array = new Array();
	
	for(let user of set){
		array.push(user);
	}
	return array;
}
console.log(refine(arr)); // [ 'ucal', {name: 'scott'}, 'toby', [Function: fn], 1 ]
