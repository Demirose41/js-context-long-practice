const Calculator = require('./02-calculator');

// module.imports = require('./02-calculator');

class FancyCalculator extends Calculator{
	constructor(total){
		super(total);
	}

	setTotal(newTotal){
		this.total = newTotal;
		return this.total;
	}

	modulo(num){
		const newTotal = this.total % num;
		this.setTotal(newTotal);
		return this.total;
	}

	squared(){
		this.setTotal(this.total * this.total);
		return this.total;
	}

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}