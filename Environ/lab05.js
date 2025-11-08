let number = 0;
let images = [
  "https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1484",
  "https://images.unsplash.com/photo-1498015583783-4abcab4a760a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
];

// When the button with id="no" is clicked
$("#no").click(function() {
  // Change the image source
  number = (number + 1) % images.length;
  $("#hell").attr("src", images[number]);
});
