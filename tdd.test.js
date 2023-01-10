import firstToCapital from './capitalize.js';
import reverseString from './reverse.js';
import sum from './calculator.js'

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
    it('Adds to positive integers', ()=>{
      expect(sum(5,2)).toBe(7);
    });
  })
});

