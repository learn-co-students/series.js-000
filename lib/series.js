function Series(numSeq)
{
  var numberArray = new Array();
  var newnumSeq = numSeq.split("");
  newnumSeq.forEach(function(number){
    var newNum = parseInt(number)
    numberArray.push(newNum)});
  this.digits = numberArray;
}



 Series.prototype.slices = function(number){
 var slicedArray = new Array();
 var timesDo = this.digits.length - number + 1
 var i = 0
    if (number <= this.digits.length) {
      for (i; i < timesDo; i++){
        var clone = this.digits.slice(0)
        slicedArray.push(clone.splice(i, number))
      }
      return slicedArray
  } else
    throw new Error("Slice size is too big.")
};



// var strain = {

//   keep: function(array, eachFunction){
//     array.forEach(function(arrayItem, index){
//       if (eachFunction(arrayItem) == false){
//         array.splice(index, 1);
//       } else
//         arrayItem
//        });
//     return array
//   },

//   discard: function(array, eachFunction){
//     array.forEach(function(arrayItem, index){
//       if (eachFunction(arrayItem) == true){
//         array.splice(index, 1);
//       } else
//         arrayItem
//        });
//     return array
//   }


// };