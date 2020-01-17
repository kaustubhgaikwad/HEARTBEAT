(
    function () {
    // load the map
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }()
);

if ('geolocation' in navigator) {
    var currentLocation = navigator.geolocation.getCurrentPosition(function (position) {
      map.setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }
  var username;

// reference for DOM nodes
var saveNameButton = document.getElementById('saveNameButton');
var saveNameBox = document.getElementById('name-box');
var nameInput = document.getElementById('name');
var welcomeHeading = document.getElementById('welcome-message');
var deliveryHeroBox = document.getElementById('delivery-hero-box');

saveNameButton.addEventListener('click', saveName);

// all functions, event handlers
function saveName (e) {
  var input = nameInput.value;
  if (input && input.trim()) {
    username = input;

    // hide the name box
    saveNameBox.classList.add('hidden');

    // set the name
    welcomeHeading.innerHTML = 'Hi! <strong>' + username +
      (mode === 'user'
        ? '</strong>, type in your Delivery Hero\'s name to track your food.' 
        : '</strong>, type in the customer name to locate the address');
    // show the delivery hero's div now
     deliveryHeroBox.classList.remove('hidden');
  }
  return;
}