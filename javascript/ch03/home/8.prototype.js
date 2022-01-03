let life = {
		name: 'life',
		eat(){
			console.log(`${this.name} eat.`);
		},
		excreate(){
			console.log(`${this.name} excreate.`);
		}
}

let animal = {
		name: 'animal',
		move(){
			console.log(`${this.name} move.`);
		}
}

let bird = {
		name: 'bird'
}

let mammal = {
		name: 'mammal'
}

mammal.__proto__ = animal;
bird.__proto__ = animal;
animal.__proto__ = life;

mammal.move();
bird.move();
mammal.eat();
bird.eat();
mammal.excreate();
bird.excreate();