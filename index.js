const sum = require("../sumNum");


function sumItems(array) {
  let sum = 0;
  for(const num of array){
    if(Array.isArray(num)){
        sum += sumItems(num);
      console.log(sum);
    } else {
      sum += num;
    }
  }
  return sum
}



  
  
module.exports = sumItems;
  


