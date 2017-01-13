'use strict';

var Series = function(str){

	this.string = str;

	for(var count in str = str.split('')) {
		str[count] = parseInt(str[count]);
	}

	this.digits = str;
};

Series.prototype.slices = function(num){
	if(num > this.digits.length){
		throw new Error('Slice size is too big.');
	}

	var split_array = [];

	for(var count = 0; count < this.digits.length; count++)	{
		var inner_count = count;
		var temp_array = [];
		var counter = 0;

		while(counter < num){
			if (!(this.digits[inner_count] == undefined)) {
				temp_array.push(this.digits[inner_count]);
				inner_count += 1;
				counter += 1;
			} else {
				inner_count += 1;
				counter += 1;
			}
		}
		
		if (!(temp_array.length != num)) {
			split_array.push(temp_array);
			temp_array = [];
			counter = 0;
		}
	}
	return split_array;
}
