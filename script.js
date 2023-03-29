//What will we need for the calculator to work...
// Event listeners for the buttons
// Function to calculate the operations use "getelementbyID?"

//We will need functions to clear the screen, display inputs and solve what the user enters

function display(val){
  document.getElementById('result').value += val

  return val
}

function solve(){
  let x = document.getElementById('result').value

  let y = eval(x);

  document.getElementById('result').value = y

  return y
}

function clearScreen() {
  document.getElementById('result').value = ""
}