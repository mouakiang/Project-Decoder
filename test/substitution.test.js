const { expect } = require('chai'); 

const { substitution } = require('../src/substitution'); 

  

describe('substitution', () => { 

  it('should encode a message with a given substitution alphabet', () => { 

    const actual = substitution('hello world', 'zyxwvutsrqponmlkjihgfedcba'); 

    const expected = 'svool dliow'; 

    expect(actual).to.equal(expected); 

  }); 

  

  it('should decode a message with a given substitution alphabet', () => { 

    const actual = substitution('svool dliow', 'zyxwvutsrqponmlkjihgfedcba', false); 

    const expected = 'hello world'; 

    expect(actual).to.equal(expected); 

  }); 

  

  it('should return false if the substitution alphabet is not exactly 26 characters long', () => { 

    const actual = substitution('hello world', 'zyxwvutsrqponmlkjihgfedcb'); 

    expect(actual).to.be.false; 

  }); 

  

  it('should return false if the substitution alphabet has repeated characters', () => { 

    const actual = substitution('hello world', 'zyxwvutsrqponmlkjihgfedcda'); 

    expect(actual).to.be.false; 

  }); 

  

  it('should preserve spaces', () => { 

    const actual = substitution('hello world', 'zyxwvutsrqponmlkjihgfedcba'); 

    const expected = 'svool dliow'; 

    expect(actual).to.equal(expected); 

  }); 

  

  it('should ignore capital letters', () => { 

    const actual = substitution('HeLlO WoRlD', 'zyxwvutsrqponmlkjihgfedcba'); 

    const expected = 'svool dliow'; 

    expect(actual).to.equal(expected); 

  }); 

  

  it('should return false if no substitution alphabet is given', () => { 

    const actual = substitution('hello world'); 

    expect(actual).to.be.false; 

  }); 

}); 