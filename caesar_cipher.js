export default function shiftCharacters(input, shift){
  if(input===undefined)
    throw new Error(`Input is not defined`);
  else if(typeof(input)!=='string')
    throw new Error(`Input is not a string`); 

  //(x+n)%26
  let charCodes = [];
  let result = ''; 
  for(let i = 0; i<input.length; i++){
    charCodes.push(input.charCodeAt(i));
    if((charCodes[i]>64&&charCodes[i]<91)||(charCodes[i]>96&&charCodes[i]<123))
      charCodes[i] += shift;
    result+= String.fromCharCode(charCodes[i])
  }
  return result; 
}





