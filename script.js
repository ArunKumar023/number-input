const numberInput = document.getElementById('number-input');
const resultDiv = document.getElementById('result');

numberInput.addEventListener('input', () => {
  const inputNum = parseInt(numberInput.value);
  
  if (inputNum < 0) {
    resultDiv.textContent = 'Enter a positive value';
  } else if (inputNum % 2 === 0) {
    const evenNumbers = [inputNum + 2, inputNum + 4, inputNum + 6];
    resultDiv.textContent = 'Next 3 even numbers: ' + evenNumbers.join(', ');
  } else {
    const oddNumbers = [inputNum + 2, inputNum + 4, inputNum + 6];
    resultDiv.textContent = 'Next 3 odd numbers: ' + oddNumbers.join(', ');
  }
});
