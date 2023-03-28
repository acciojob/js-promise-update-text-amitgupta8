function updateText() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  })
  .then(message => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = message;
  })
  .catch(error => {
    console.error(error);
  });
}

// Example usage:
updateText();
