/*
let shef1 = food => `sweet ${food}`;
let shef2 = food => `hot ${food}`;
let waiter = (food, shef) => shef(food);
console.log(waiter('jajangmyeon', shef1));
console.log(waiter('jajangmyeon', shef2));
console.log(waiter('champon', shef1));
*/

/*
function Waiter(food){
	this.food = food;
	this.eat = function(shef) {
		if(shef == 'shef1')
			console.log(`sweet ${food}`);
		else if(shef == 'shef2')
			console.log(`hot ${food}`);
	};
}

const customer = new Waiter('jajangmyeon');
customer.eat('shef1');
*/

const waiter = new Object();
const shef1 = new Object();
const shef2 = new Object();

shef1.cook = function(food) {
	console.log(`sweet ${food}`);
}

shef2.cook = function(food) {
	console.log(`hot ${food}`);
}

waiter.order = function(food, shef){
	shef.cook(food)
}

waiter.order('jajangmyeon', shef1);
waiter.order('jajangmyeon', shef2);

/*
function Shef(tasty, food){
	   this.tasty = tasty;
	   this.food = food;
	   this.cook = function(food){
	      console.log(`${tasty} ${food}`);
	   }
	}

	function Waiter(food,shef){
	   this.food = food;
	   this.shef = shef;
	   this.order = function(food, shef){
	      return shef.cook(food);
	   }
	}

	const shef1 = new Shef('sweet');
	const shef2 = new Shef('hot');
	const waiter = new Waiter();

	waiter.order('jajangmyeon', shef1);
	waiter.order('jajangmyeon', shef2);
	waiter.order('champon', shef2);
	*/
