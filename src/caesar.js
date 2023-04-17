// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () { 

   

  function caesar(input, shift, encode = true) { 

    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) { 

      return false; 

    } 

     

    input = input.toLowerCase(); 

    let output = ''; 

     

    for (let i = 0; i < input.length; i++){ 

      let char = input[i].charCodeAt(0); 

  

      if (char < 97) { 

        char = String.fromCharCode(char) 

      } else { 

        if (encode) { 

          char = char + shift; 

        } else { 

          char = char - shift; 

        } 

  

        if (char > 122) { 

          char = 96 + (char - 122); 

        } 

        if (char < 97) { 

          let start = 97 - char; 

          char = 123 - start; 

        }  

        char = String.fromCharCode(char); 

      } 

      output += char; 

    } 

     

    return output; 

  } 

  

  return { 

    caesar, 

  }; 

})(); 

module.exports = { caesar: caesarModule.caesar }; 
