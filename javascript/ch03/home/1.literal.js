let user= {
		_name: 'error',
		
		get name(){
			return this._name;
		}, 
		
		set name(name){
			if(name.length >= 4)
				this._name = name;
			else console.log('name must be at least 4 characters.');
		}
}

console.log(user.name);
user.name = 'minyoung';
console.log(user.name);
user.name = 'min';
console.log(user.name);
