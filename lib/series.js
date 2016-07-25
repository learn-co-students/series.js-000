'use strict';

function Series(str){
  this.string = str;
  var answer = [];
  for (var i=0; i<this.string.length; i++){
    answer.push(parseInt(this.string.charAt(i)));
  }
  this.digits = answer;
}

Series.prototype.slices = function(number){
  var answer = [];
  if (this.string.length < number){
    throw new Error('Slice size is too big.');
  }
  else{
    for (var i=0; i<this.digits.length-number+1; i++){
      answer.push(this.digits.slice(i,i+number))
    }
    return answer
  }
};