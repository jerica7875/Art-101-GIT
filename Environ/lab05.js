let number = 0;
let images = [
  "https://unsplash.com/photos/sea-of-clouds-fHXP17AxOEk",
  "https://unsplash.com/photos/sea-of-clouds-during-daytime-kSY5T6js2KE",
];
const btn = document.getElementById('no');

// When the button with id="no" is clicked
$("#no").click(function() {
  // Change the image source
  number = (number + 1) % images.length;
  $("#hell").attr("src", images[number]);
});
