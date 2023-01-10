import firstToCapital from './capitalize.js';
import reverseString from './reverse.js';
import * as Calculator from './calculator.js'

describe('Uppercase Tests', ()=>{
  const regex = /[A-Z]/;
  it('There\'s no input', ()=>{
    expect(firstToCapital).toThrowError(`Input is not defined`);
  });
  it('Input must be string otherwise throw exception', ()=>{
    expect(()=>{firstToCapital(2)}).toThrowError(`Input is not a string`);
  });
  it('First string letter must be capital', ()=>{
    expect(firstToCapital('string')).toMatch(regex);
  });
  it('Keep first letter if is already capital', ()=>{
    expect(firstToCapital('String')).toMatch(regex);
  })
});

describe('Reverse string', ()=>{
  it('There\'s no input', ()=>{
    expect(reverseString).toThrowError(`Input is not defined`);
  });
  it('Input must be string otherwise throw exception', ()=>{
    expect(()=>{firstToCapital(2)}).toThrowError(`Input is not a string`);
  });
  it('No gaps reversed string letters match string mirrowed letter position', ()=>{
    expect(reverseString('Inputisnotastring')).toBe(`gnirtsatonsitupnI`);
  });
  it('Works with gaps between words', ()=>{
    expect(reverseString('Input is not a string.')).toBe(`.gnirts a ton si tupnI`);
  });  
});

describe('Calculator', ()=>{
  describe('Sum', ()=>{
    it('Checks if input is actually two numbers', ()=>{
      expect(()=>{Calculator.add('One', 'Two')}).toThrowError(`Either input is not a number`);
    });
    it('Adds to positive integers', ()=>{
      expect(Calculator.add(5,2)).toBe(7);
    });
    it('Adds a negative integer and a positive integer', ()=>{
      expect(Calculator.add(-5,2)).toBe(-3);
    });
    it('Adds two negative integers', ()=>{
      expect(Calculator.add(-5,-2)).toBe(-7);
    });
    it('Adds two floats', ()=>{
      expect(Calculator.add(2.3, 1.8)).toBe(4.1);
    });
  });

  describe('Substraction', ()=>{
    it('Checks if input is actually two numbers', ()=>{
      expect(()=>{Calculator.substraction('One', 'Two')}).toThrowError(`Either input is not a number`);
    });
    it('Adds to positive integers', ()=>{
      expect(Calculator.substraction(5,2)).toBe(7);
    });
    it('Adds a negative integer and a positive integer', ()=>{
      expect(Calculator.substraction(-5,2)).toBe(-3);
    });
    it('Adds two negative integers', ()=>{
      expect(Calculator.substraction(-5,-2)).toBe(-7);
    });
    it('Adds two floats', ()=>{
      expect(Calculator.substraction(2.3, 1.8)).toBe(4.1);
    });
  });  
});

