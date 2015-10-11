'use strict';

var Series = function(string){
  this.digits = string.split('').map(function(digit){ 
    return parseInt(digit);
  });
  this.slices = function(num) {
    if (num > this.digits.length) {
      throw new Error('Slice size is too big.');
    }
    var collection = [];
    for (var i = 0; i <= (this.digits.length - num); i++) {
      var y = i;
      var chunk = [];
      for (var j = num; j != 0; j--) {
        chunk.push(this.digits[y]);
        y++;
      }
      collection.push(chunk);
    }
    return collection;
  }
};