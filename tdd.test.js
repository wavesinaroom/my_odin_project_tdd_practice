import firstToCapital from './capitalize.js';
import reverseString from './reverse.js';
import * as Calculator from './calculator.js';
import shiftCharacters from './caesar_cipher.js';
import object from './analyze_array.js';

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
    it('Takes away two positive integers', ()=>{
      expect(Calculator.substraction(5,2)).toBe(3);
    });
    it('Takes away a negative integer and a positive integer', ()=>{
      expect(Calculator.substraction(-5,2)).toBe(-7);
    });
    it('Takes away two negative integers', ()=>{
      expect(Calculator.substraction(-5,-2)).toBe(-3);
    });
    it('Takes away two floats', ()=>{
      expect(Calculator.substraction(2.3, 1.8)).toBe(0.5);
    });
  });  

  describe('Multiplication', ()=>{
    it('Checks if input is actually two numbers', ()=>{
      expect(()=>{Calculator.multiplication('One', 'Two')}).toThrowError(`Either input is not a number`);
    });
    it('Multiplies two positive integers', ()=>{
      expect(Calculator.multiplication(5,2)).toBe(10);
    });
    it('Multiplies a negative integer and a positive integer', ()=>{
      expect(Calculator.multiplication(-5,2)).toBe(-10);
    });
    it('Multiplies two negative integers', ()=>{
      expect(Calculator.multiplication(-5,-2)).toBe(10);
    });
    it('Multiplies two floats', ()=>{
      expect(Calculator.multiplication(2.3, 1.8)).toBe(4.14);
    });
  });  

  describe('Division', ()=>{
    it('Checks if input is actually two numbers', ()=>{
      expect(()=>{Calculator.division('One', 'Two')}).toThrowError(`Either input is not a number`);
    });
    it('Divides two positive integers', ()=>{
      expect(Calculator.division(6,2)).toBe(3);
    });
    it('Divides a negative integer and a positive integer', ()=>{
      expect(Calculator.division(-6,2)).toBe(-3);
    });
    it('Divides two negative integers', ()=>{
      expect(Calculator.division(-6,-2)).toBe(3);
    });
    it('Divides two floats', ()=>{
      expect(Calculator.division(2.3, 1.8)).toBe(1.277);
    });
  });  
});

describe('Caesar cipher', ()=>{
  it('There\'s no input', ()=>{
    expect(reverseString).toThrowError(`Input is not defined`);
  });
  it('Input must be string otherwise throw exception', ()=>{
    expect(()=>{firstToCapital(2)}).toThrowError(`Input is not a string`);
  });
  it('Shifts a letter', ()=>{
    expect(shiftCharacters('a', 1)).toBe('b');
  });
  it('Shifts more than one letter', ()=>{
    expect(shiftCharacters('abc', 2)).toBe('cde');
  });
  it('Keeps gaps in a string', ()=>{
    expect(shiftCharacters('I am learning a lot about myself', 1)).toBe('J bn mfbsojoh b mpu bcpvu nztfmg');
  });
  it('Wraps char if it it\'s greater than unicode char numbers for letters', ()=>{
    expect(shiftCharacters('xyz', 3)).toBe('abc');
  });
  it('Wraps uppercase char if it it\'s greater than unicode char numbers for letters', ()=>{
    expect(shiftCharacters('XYZ', 3)).toBe('ABC');
  });
  it('Wraps char if it it\'s lesser than unicode char numbers for letters', ()=>{
    expect(shiftCharacters('abc', -3)).toBe('xyz');
  });
  it('Wraps uppercase char if it it\'s lesser than unicode char numbers for letters', ()=>{
    expect(shiftCharacters('ABC', -3)).toBe('XYZ');
  });
});

describe('Analyze array', ()=>{
  it('Checks average', ()=>{
    expect(object).toHaveProperty('average', 4);
  });
  it('Checks min',()=>{
    expect(object).toHaveProperty('min', 1);
  });
  it('Checks max', ()=>{
    expect(object).toHaveProperty('max',8);
  });
  it('Checks length', ()=>{
    expect(object).toHaveProperty('length', 6);
  });
});
