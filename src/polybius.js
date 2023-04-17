// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () { 
  let pSquare = [ 

    ["ERR"], 
    ["ERR", "a", "f", "l", "q", "v"], 
    ["ERR", "b", "g", "m", "r", "w"], 
    ["ERR", "c", "h", "n", "s", "x"], 
    ["ERR", "d", "(i/j)", "o", "t", "y"], 
    ["ERR", "e", "k", "p", "u", "z"], 
  ]; 

  function letToNum(letter) { 
    let result = 00; 
    for (let i = 0; i < pSquare.length; i++) { 
      for (let j = 0; j < pSquare[i].length; j++) { 
        if (pSquare[i][j] === letter) { 
          result = i * 10 + j; 
        } 
      } 
    } 
    if (letter == "i" || letter == "j") { 
      result = 42; 
    } 
    return result; 
  } 

  function numToLet(number) { 
    let i = Math.floor(number / 10); 
    let j = number - i * 10; 
    return pSquare[i][j]; 

  } 

  function polybius(input, encode = true) { 
    input = input.toLowerCase(); 
    let message = input.split(" "); 
    let newMessage = []; 
    let result = false; 
    message.forEach((word) => { 
      let newWord = []; 
      let separatedWord = word.split(""); 
      if (encode === false) { 
        if (Math.floor(separatedWord.length / 2) != separatedWord.length / 2) { 
          result = true; 
        } 
        let temp = []; 
        for (let i = 0; i < separatedWord.length; i += 2) { 
          temp.push(parseInt(separatedWord[i] + separatedWord[i + 1])); 
        } 
        separatedWord = temp; 
      } 
      separatedWord.forEach((character) => { 
        if (encode === true) { 
          character = letToNum(character); 
        } else { 
          character = numToLet(character); 
        } 
        newWord.push(character); 
      }); 
      newWord = newWord.join(""); 
      newMessage.push(newWord); 
    }); 
    newMessage = newMessage.join(" "); 
    if (result === false) { 
      return newMessage; 
    } else { 
      return false; 
    } 
  }
  return { 
    polybius, 
  }; 
})(); 

module.exports = { polybius: polybiusModule.polybius }; 

 
