function capitalise(word) {
  return String(word).charAt(0).toUpperCase() + String(word).slice(1);
}

module.exports = { capitalise };

console.log(capitalise("hello"));

 
//I expect this function to capatalise the first character in a passed string
//Passed: "hello" Expected: "Hello"