export default function shiftCharacters(input, shift){
  if(input===undefined)
    throw new Error(`Input is not defined`);
  else if(typeof(input)!=='string')
    throw new Error(`Input is not a string`); 

  //(x+n)%26
  let charCode; 
  let result = ''; 
  let wrap = 0;

  for(let i = 0; i<input.length; i++){
    charCode = input.charCodeAt(i);
    const preshift = charCode+shift;
    if(charCode>64&&charCode<91){
      wrap = ((charCode-65)+shift)%26;
      if(preshift>90){
        charCode = 65 + wrap;
      }else if(preshift<65){
        charCode = 91 + wrap;
      }
      else{
        charCode = preshift;
      }
    }
    else if(charCode>96&&charCode<123){
      wrap = ((charCode-96)+shift)%26;
      if(preshift>122){
        charCode = 96 + wrap;
      }
      else if(preshift<97){
        charCode = 122 + wrap;
      }
      else{
        charCode = preshift;
      }
    }

    result+= String.fromCharCode(charCode)
  }
  console.log(result);
  return result; 
}

shiftCharacters('I am learning a lot about myself', 2);



