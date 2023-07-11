const { default: fetch } = require('node-fetch');

document.addEventListener('submit', async () => {
  try {
    const response = await fetch('/signup');
    const data = await response.json();
    console.log(`inside event listener ${data}`);
  } catch (error) {
    console.log(error);
  }
});
