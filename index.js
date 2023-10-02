function scuberGreetingForFeet(someValue){
  let result
  if(someValue <= 400){
    result = "This one is on me!";
  }
  if (someValue > 2000){
    result = 'I will gladly take your thirty bucks.';
  }
  if (someValue > 2500){
    result = 'No can do.';
  }
  return result
} 
function ternaryCheckCity(city){
  let Destination; 
  if (city === 'NYC'){
     Destination= "Ok, sounds good.";
  } else if (city != 'NYC'){
    Destination = 'No go.';
  }
  return Destination
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.';
    }
  }