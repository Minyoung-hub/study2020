const okay = true;
const fail = false;

if(fail){
	console.log('hello');
}

if(fail){
	
}else{
	if(okay) console.log('earth');
	else console.log('moon');
} // earth

// false
false;
'';
NaN;
null;
undefined;
0;

// true
true;
'0';
' ';
'hello';
[];
{};
-1;

const foo = okay ? 1 : 0;
console.log(foo); // 1

const bar = 'bar';
switch(bar){
case 'bar':
   console.log('bar'); break;
case 'baz':
   console.log('baz'); break;
default:
   console.log('all right');
} // bar