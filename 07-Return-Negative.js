// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    // Code?
    if (num > 0 ){
      return -num ;
  }else{
    return num;
  }
    
    }

      //   another way to get the same result
      function makeNegative(num) {
        return num > 0 ? -num : num;
      } 