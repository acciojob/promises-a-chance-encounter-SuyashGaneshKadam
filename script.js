//your JS code here. If required.
// Array to store results
const results = [];

// Create promises
const promises = Array(5).fill().map((_, i) => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if(random < 0.5) {
      reject(`Error in promise ${i+1}`); 
    } else {
      resolve(Math.floor(Math.random() * 10) + 1);
    }
  });
});

// Wait for all promises to settle
Promise.all(promises)
  .then(values => {
    // Log resolved values
    values.forEach(value => {
      results.push(`<p>${value}</p>`);
    })
  })
  .catch(error => {
    // Log rejected errors 
    results.push(`<p>Promise rejected with error: ${error}</p>`);
  });

// Print results to output
document.getElementById('output').innerHTML = results.join('');