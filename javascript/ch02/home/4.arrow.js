let shef1 = food => `sweet ${food}`;
let shef2 = food => `hot ${food}`;
let waiter = (food, shef) => shef(food);

console.log(waiter('jajang', shef1));
console.log(waiter('jajang', shef2));
console.log(waiter('cham', shef1));