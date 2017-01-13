'use strict';

var Series = function(str){
	str = str.split('');
	for(var count in str) {
		str[count] = parseInt(str[count]);
	}

	this.digits = str;
};

