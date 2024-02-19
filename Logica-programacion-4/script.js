function generateFibonacci() {
  const input = document.getElementById('userInput').value;
  const n = parseInt(input);

  // Clear previous error and result messages
  document.getElementById('result').textContent = '';
  document.getElementById('error').textContent = '';

  // Check if the input is a valid number
  if (isNaN(n) || n <= 0) {
    document.getElementById('error').textContent = 'Error: Please enter a positive integer.';
    return;
  }

  // Initialize the Fibonacci series
  let a = 0, b = 1, series = [a, b];

  // Calculate the Fibonacci series up to the given number
  for (let i = 2; i < n; i++) {
    const c = a + b;
    series.push(c);
    a = b;
    b = c;
  }

  // Display the Fibonacci series
  document.getElementById('result').textContent = 'Fibonacci Series: ' + series.join(', ');
}
