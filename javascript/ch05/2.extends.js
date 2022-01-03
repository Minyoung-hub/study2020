class Animal {
	constructor(name) {
		this.name = name;
	}
	
	run(speed) {
		this.speed = speed;
		console.log(`${this.name} run at ${this.speed}.`);
	}
	
	stop() {
		this.speed = 0;
		console.log(`${this.name} stop.`);
	}
}

let animal = new Animal('animal');
animal.run(100); // animal run at 100.
animal.stop(); // animal stop.

class Rabbit extends Animal {
	hide(){
		console.log(`${this.name} hide.`);
	}
}

let rabbit = new Rabbit('rabbit');
rabbit.run(30); // rabbit run at 30.
rabbit.stop(); // rabbit stop.
rabbit.hide(); // rabbit hide.

//
function face(view) {
	let cls;
	
	switch(view) {
	case 'human':
		cls = class {
			work() {
				console.log('work rightly.');
			}
		}; break;
	case 'money':
		cls = class {
			work() {
				console.log('work too much.');
			}
		};
	}
	
	return cls;
}

class Worker extends face('human'){}
new Worker().work(); // work rightly.

let Employee = class extends face('human'){};
new Employee().work(); // work rightly.

Employee = class extends face('money'){};
new Employee().work(); // work too much.

/** method overloading **/
class Lion extends Animal {
	hide() {
		console.log(`${this.name} hide.`);
	}
	
	stop() {
		super.stop();
		this.hide();
	}
}

let lion = new Lion('Lion');
lion.run(200); // Lion run at 200.
lion.stop();
// Lion stop.
// Lion hide.

/** constructor overriding **/
class Tiger extends Animal {
	constructor(...args){
		super(...args);
	}
}

new Tiger('tiger').run(300); // tiger run at 300.

class Leopard extends Animal {
	constructor(name) {
		super(name);
		this.speed = 300;
	}
}

let leopard = new Leopard('leopard');
leopard.run(200); // leopard run at 200.
leopard.run(); // leopard run at undefined.