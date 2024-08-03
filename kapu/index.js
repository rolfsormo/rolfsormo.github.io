


// Listen for messages from the opener
window.addEventListener('message', (event) => {
  // Ensure the message is from a trusted source
  if (event.origin !== 'https://kapuroastery.fi/') {
      return;
  }

  // Update the message
  const messageElement = document.getElementById('message');
  messageElement.textContent = event.data;
});

// Send a message back to the opener when the button is clicked
document.getElementById('sendMessageButton').addEventListener('click', () => {
  if (window.opener) {
      const message = {
        "previews": [
          "https://drafthorse.fi/kapu/imaging/creator/preview?job=kapu_F_B_Fh1_title_b1_story_Speak_Pro%5Ckapu_F_B_Fh1_title_b1_story_Speak_Pro99x80-1722695455-66ae3f203d471000890058&page=1&print_id=119131",
          "https://drafthorse.fi/kapu/imaging/creator/preview?job=kapu_F_B_Fh1_title_b1_story_Speak_Pro%5Ckapu_F_B_Fh1_title_b1_story_Speak_Pro99x80-1722695455-66ae3f203d471000890058&page=2&print_id=119131",
        ],
        "template": {
          "id": "76630",
          "filename": "kapu_F_B_Fh1_title_b1_story_Speak_Pro",
          "name": "Vaaka etuetiketti nimellä ja kuvalla",
        },
        "print": {
          "id": "119131",
          "edit_link": "https://drafthorse.fi/kapu/imaging/print-ui?hash=3808268e2948fd56f336e350ffb6e20d18f8c86e",
          "pdf": "https://drafthorse.fi/kapu/imaging/print-ui/download?filepath=kapu_F_B_Fh1_title_b1_story_Speak_Pro_kapu_F_B_Fh1_title_b1_story_Speak_Pro99x80_1722695455_66ae3f203d471000890058_34cdfffd.pdf&filesize=122441&filename=Vaaka%20etuetiketti%20nimell%C3%A4%20ja%20kuvalla&hash=3808268e2948fd56f336e350ffb6e20d18f8c86e",
        },
      };
      const targetOrigin = 'https://kapuroastery.fi/';
      window.opener.postMessage(message, targetOrigin);
      console.log('Message sent!');
  } else {
      console.warn('No opener found!');
  }
});

// Example of sending a message from another window or iframe
// Uncomment the lines below to test sending a message
// const targetWindow = window; // Replace with the target window or iframe
// const targetOrigin = 'http://trusted-origin.com'; // Replace with the target origin
// targetWindow.postMessage('Hello from another window!', targetOrigin);
