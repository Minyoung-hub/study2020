for(let i=0; i<2; i++)
	console.log(`for: ${i}`);

for(let i=0, limit=2; i<limit; i++)
	console.log(`for: ${i}`);

let i = 0;
while(i < 2){
	console.log(`while: ${i + 10}`);
	i++;
}

i = -1;
while(++i < 2)
	console.log(`while: ${i + 10}`);

do{
	console.log('do');
}while(false);

for(let i=0; i<5; i++){
	if(i >= 2) break;
	console.log('hello');
}