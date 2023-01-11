export{add, substraction, multiplication, division}
function add(a,b){
  if(typeof(a)!=='number'||typeof(b)!=='number')
    throw new Error(`Either input is not a number`);
  return a+b;
}

function substraction(a,b){
  if(typeof(a)!=='number'||typeof(b)!=='number')
    throw new Error(`Either input is not a number`);
  return roundResult(Math.fround(a-b), 2);
}

function multiplication(a,b){
  if(typeof(a)!=='number'||typeof(b)!=='number')
    throw new Error(`Either input is not a number`);
  return a*b;
}

function division(a,b){
  if(typeof(a)!=='number'||typeof(b)!=='number')
    throw new Error(`Either input is not a number`);
  return roundResult(Math.fround(a/b), 3);
}

function roundResult(number, digits){
  const multiplier = 10**digits;
  let adjusted = number*multiplier;
  const truncated = Math[adjusted < 0 ? 'ceil':'floor'](adjusted);
  return truncated / multiplier;
}

