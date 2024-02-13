//Made by Shubham Pandey

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);


document.addEventListener('DOMContentLoaded', function () {
  // This function will be executed when the DOM is fully loaded
  alert('Hi there this is Shubham Pandey and Welcome to the website, some days ago i went to tha HAL museum Bengaluru and there I explored many things Liike Aircraft,FighterJet etc.. and I clicked some photos of Aircraft/FighterJet and from that I made a website to spread the knowledge about HAL and their Aircrafts. "Thanks for visiting".');
});

// JavaScript code for screen compatibility
function checkScreenSize() {
  // Get the width of the screen
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Log a message based on screen width
  if (screenWidth < 600) {
    console.log("Small screen: " + screenWidth + "px width");
  } else if (screenWidth < 1200) {
    console.log("Medium screen: " + screenWidth + "px width");
  } else {
    console.log("Large screen: " + screenWidth + "px width");
  }
}

// Call the function when the page loads and on window resize
window.onload = window.onresize = checkScreenSize;