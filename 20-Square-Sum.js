// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 becaus


function squareSum(numbers){
    let sum = 0;
    
   for(let i =0; i < numbers.length ; i++){
     
      sum += numbers[i]**2;
     
   }
   
 return sum;
 }


   //   another way to get the same result


   function squareSum(numbers)
{ 
  let totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}

   //   another way to get the same result
   function squareSum(numbers){ 
    
    return numbers.reduce((sum,current) => sum + (current ** 2), 0);

   }


