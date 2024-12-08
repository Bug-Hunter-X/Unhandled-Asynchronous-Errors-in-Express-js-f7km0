const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      // Here's the problem: we're not sending an error response to the client
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate a random error
    const randomError = Math.random() < 0.5;
    if (randomError) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});