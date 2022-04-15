//itineration 1
const hacker1 = "Juan"
console.log(`The driver name is ${hacker1}`);

const hacker2 = "Rodrigo"
console.log(`The driver name is ${hacker2}`);
//itineration 2
function equalityNames(hacker1, hacker2){
  let firstHacker = hacker1.length
  let secondHacker = hacker2.length
  if (firstHacker > secondHacker) {
    return "The driver has the longest name, it has 4 characters";
  }
  
  else if (firstHacker < secondHacker){
    
    return "It seems that the navigator has the longest name, it has 7 characters";
    
  }
  
  else (firstHacker === secondHacker){
    return "Wow, you both have equally long names, XX characters!"
  }
    
}
equalityNames(firstHacker , secondHacker);

function equalityNames(hacker1, hacker2){
    let firstHacker = hacker1.length
    let secondHacker = hacker2.length
    if (firstHacker > secondHacker) {
      return "The driver has the longest name, it has 4 characters";
    }
    
    else if (firstHacker < secondHacker){
      
      return "It seems that the navigator has the longest name, it has 7 characters";
      
    }
    
    else (firstHacker === secondHacker){
      return "Wow, you both have equally long names, XX characters!"
    }
      
  }
  equalityNames(firstHacker , secondHacker);

//itineration 3
const divide = hacker1.toUpperCase.split (' ')
for(let i= 0; i< hacker1.length; i++){
    console.log(hacker1[i])
}

for(let i=0; i< hacker2.length; i++){
    console.log(hacker2[i]);
}
