function firstToCapital(input){
  if(input===undefined)
    throw new Error(`Input is not defined`);
  else if(typeof(input)!=='string')
    throw new Error(`Input is not a string`); 

  if(/[A-Z]/.test(input))
    return input
  else
    return input[0].toUpperCase();
}
module.exports = firstToCapital;
