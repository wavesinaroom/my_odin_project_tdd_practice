const firstToCapital = require('./capitalize')

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
