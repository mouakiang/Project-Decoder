const expect = require('chai').expect; 

const polybius = require('../src/polybius'); 

  

describe('polybius', () => { 

  it('should encode a message', () => { 

    const input = 'Hello world'; 

    const expectedOutput = '3251131343 2543241341'; 

  

    const actualOutput = polybius.polybius(input); 

  

    expect(actualOutput).to.equal(expectedOutput); 

  }); 

  

  it('should decode a message', () => { 

    const input = '3251131343 2543241341'; 

    const expectedOutput = 'hello world'; 

  

    const actualOutput = polybius.polybius(input, false); 

  

    expect(actualOutput).to.equal(expectedOutput); 

  }); 

  

  it('should return false if decoding an uneven message', () => { 

    const input = '3251131343 254324134'; 

    const expectedOutput = false; 

  

    const actualOutput = polybius.polybius(input, false); 

  

    expect(actualOutput).to.equal(expectedOutput); 

  }); 

}); 