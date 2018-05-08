var katzDeli = [ ];

var ticket = 0

function takeANumber(line){
  ticket += 1
  line.push(ticket)
  return `Welcome you're ticket number #${ticket}`
}

// takeANumber(katzDeli) => 'Welcome you're ticket number #1' [1]
// takeANumber(katzDeli) => 'Welcome you're ticket number #2' [1,2]
// nowServing(katzDeli) => 'Currently serving #1' [2]
// takeANumber(katzDeli) => 'Welcome you're ticket number #3' [2,3]

function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length === 0 ){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently: "
  
    for(var element = 0; element < line.length; element++){
      str += `${element+1}.` + ` ${line[element]}, `
    }
    var cleanStr = str.slice(0,-2)
    return cleanStr
  }
}








 //non Destructive methods
 
/*
function takeANumber(line, person){
  var newLine = [...line, person]
  return `Welcome, ${person}. You are number ${newLine.length} in line.`
}


function nowServing(lineCurrent) {
  if (lineCurrent.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var message = `Currently serving ${lineCurrent[0]}.`;
    let newLine = lineCurrent.slice(1);
    return message  
    
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently: "
    var element = 0;
    while( element < line.length){
      str += `${element+1}.` + ` ${line[element]}, `
    element++
    }
    var cleanStr = str.slice(0,-2)
    return cleanStr
  }
}

*/



