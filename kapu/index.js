// Listen for messages from the opener
window.addEventListener('message', (event) => {
  // Ensure the message is from a trusted source
  if (event.origin !== 'http://trusted-origin.com') {
      return;
  }

  // Update the message
  const messageElement = document.getElementById('message');
  messageElement.textContent = event.data;
});

// Send a message back to the opener when the button is clicked
document.getElementById('sendMessageButton').addEventListener('click', () => {
  if (window.opener) {
      const message = 'Hello from the opened window!';
      const targetOrigin = 'http://trusted-origin.com'; // Replace with the origin of the opener
      window.opener.postMessage(message, targetOrigin);
  } else {
      console.warn('No opener found!');
  }
});

// Example of sending a message from another window or iframe
// Uncomment the lines below to test sending a message
// const targetWindow = window; // Replace with the target window or iframe
// const targetOrigin = 'http://trusted-origin.com'; // Replace with the target origin
// targetWindow.postMessage('Hello from another window!', targetOrigin);
