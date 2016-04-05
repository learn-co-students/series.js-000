'use strict';

var Series = function(num_string){
  this.originalString = num_string;
  this.arr = num_string.split(""); 
};

Series.prototype.digits = function() {
  var returnArr = [];   
  for (var i = 0; i < this.arr.length; i++) {
      returnArr.push(Number(this.arr[i]));
    }
  return returnArr;
}

Series.prototype.slices = function(span) {
  if (span > this.digits().length) {
    throw new Error('Slice size is too big.');
  }
  else {
    var rV = [];
    for (var i = 0; i < this.arr.length && span <= this.digits().slice(i, this.digits().length).length ; i++){
      rV.push(this.digits().slice(i, i + span));
    }
    return rV;
  }
}