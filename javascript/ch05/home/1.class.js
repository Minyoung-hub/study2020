class Clock {
	constructor({template}){
		this.template = template;
	}
	
	render() {
		let date = new Date();
		
		let hour = date.getHours();
		let min  = date.getMinutes();
		let sec  = date.getSeconds();
		
		if(hour < 10) hour = '0' + hour;
		if(min  < 10) min  = '0' + min;
		if(sec  < 10) sec  = '0' + sec;
		
		let out = this.template
					  .replace('h', hour)
					  .replace('m', min)
					  .replace('s', sec)
		
		console.log(out);
	}
	
	start() {
		setInterval(() => this.render(), 1000);
	}
}

/*new Clock({template: 'h:m:s'}).start();*/

class GapClock extends Clock{
	constructor({template, time}){
		super({template});
		this.time = time;
	}
	start() {
		setInterval(() => this.render(), this.time);
	}
}

new GapClock({template: 'h:m:s', time: 3000}).start();