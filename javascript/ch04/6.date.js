let date = new Date();
console.log(date); // 2020-05-21T00:43:23.578Z

// time stamp
date = new Date(0);
console.log(date); // 1970-01-01T00:00:00.000Z

date = new Date(24 * 3600 * 1000);
console.log(date); // 1970-01-02T00:00:00.000Z

date = new Date(-24 * 3600 * 1000);
console.log(date); // 1969-12-31T00:00:00.000Z

// datestring
date = new Date('2025-12-26T13:15:15.999Z');
console.log(date); // 2025-12-26T13:15:15.999Z

//
console.log(
		date.getFullYear(), // 2025
		date.getMonth(), // 11 (0 ~ 11 dnjf)
		date.getDate(), // 26
		date.getHours(), // 22 
		date.getUTCHours(), // 13
		date.getMinutes(), // 15
		date.getSeconds(), // 15
		date.getMilliseconds(), //999
		date.getDay() // 5 (0:일 ~ 6:토)
); // 2025 11 26 20 15 15 999 5

//
console.log(new Date().getTime());  // 1590024027999
console.log(Date.now()); 			// 1590024067184