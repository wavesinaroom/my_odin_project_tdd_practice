function reverseString(input){
  if(input===undefined)
    throw new Error(`Input is not defined`);
  else if(typeof(input)!=='string')
    throw new Error(`Input is not a string`); 

  let reversed = [];
  for(let i = 0; i<input.length; ++i){
    reversed[i] = input[input.length-1-i];
  }
  return reversed.join('');
}

module.exports = reverseString;
