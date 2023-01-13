const object = analyzeArray([1,8,3,4,2,6]);

function analyzeArray(array){
  const obj = {
    average: findAverage(array),
    min: findMin(array),
    max: findMax(array),
    length: array.length 
  }

  function findMin(array){
    let min = array[0];
    for(let i = 1; i<array.length; ++i)
      if(array[i]<min)
        min = array[i];
    return min;
  }

  function findMax(array){
    let max = array[0];
    for(let i = 1; i<array.length; ++i)
      if(array[i]>max)
        max = array[i];
    return max;
  }
  return obj;

  function findAverage(array){
    let result=0;
    array.forEach(number=>{
      console.log(number)
      result+=number
    });
    return result/array.length;
  }
}
export default object;
