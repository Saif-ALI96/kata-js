// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (number, string) {
  
    return string.repeat(number);
  }


      //   another way to get the same result
      function repeatStr (n, s) {
        var str="";
        for(var i=0; i < n; i++)
          str+=s;
          return str;
        }