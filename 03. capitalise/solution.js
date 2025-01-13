function capitalise(word) {
  return String(word).slice(0,1).toUpperCase() + String(word).slice(1).toLowerCase();
}

module.exports = { capitalise };

console.log(capitalise("hello"));

 
//I expect this function to capatalise the first character in a passed string
//Passed: "hello" Expected: "Hello"