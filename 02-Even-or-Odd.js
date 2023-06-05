//   exercis 2
//   Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(chiffre) {
  
    if (chiffre % 2 === 0){
      return "Even";
      
    } else {
      return "Odd";
    }
      
  }

  // un autre façon pour avoir le même résultat 
  
  function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }