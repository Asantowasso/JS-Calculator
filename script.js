//What will we need for the calculator to work...
// Event listeners for the buttons
// Function to calculate the operations use "getelementbyID?"

const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys')

//We can add an event listener to all the keys this way
keys.addEventListener('click', e => {
  if (e.target.matches('button')){
    //This will create an action
    const key = e.target
    const action = key.dataset.action
  if(
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide' 
) {
  console.log('operator key!')
}
  
  
  }
})

if (!action) {
  console.log('number key!')


}

