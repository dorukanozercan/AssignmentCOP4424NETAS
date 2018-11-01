// Image switcher code

var myImage = document.querySelector('img');
console.log(myImage);


myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

/*  DORUKAN ÖZERCAN 1506539
    NETAS Netaş Advanced Web Technologies Assignment 
    DORUKAN ÖZERCAN 1506539 */

  function swapImage(change, primary, secondary){
    src = document.getElementById('change').src;
    if (src.match('images/firefox-icon.png')) {
      document.getElementById('change').src = 'images/firefox2.png';
    } else {
      document.getElementById('change').src='images/firefox-icon.png';
    }
  }

/*  DORUKAN ÖZERCAN 1506539
    NETAS Netaş Advanced Web Technologies Assignment 
    DORUKAN ÖZERCAN 1506539 */


// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}