document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = ( 1666570043933 / 1000) + (86400 * 48) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });


let body = document.body;

body.querySelector('#flipdown').classList.add('flipdown__theme-light');
body.querySelector('.creditTag').style.display = 'none'
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});