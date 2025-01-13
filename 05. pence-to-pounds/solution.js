function convertFromPenceToPounds(pence) {
  const pounds = pence / 100;
  console.log(pounds)
  return `£${pounds.toFixed(2)}`; // Format to two decimal places
}

module.exports = { convertFromPenceToPounds };

console.log(convertFromPenceToPounds(1299)); // should return "£12.99"


/*I expect this function to return the total ammount in pounds and include two decimal places
regardless of if there are 0 pence or not */