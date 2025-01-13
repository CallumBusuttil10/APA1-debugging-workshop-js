function calculatePercentageChange(original, newAmount) {
if (newAmount - original === 0){
  return 0
}

let difference = (newAmount - original) / original;
let percentageResult = difference * 100;
return parseInt(percentageResult.toFixed(2));
}

module.exports = { calculatePercentageChange };
 
console.log(calculatePercentageChange(20,100));


//I expect this function to return the total percentage change coparinng the original number to a new number.