$(document).ready(function() {
  var num = Math.floor((Math.random()*10)+1);
  if (num % 2 === 0) {
    $('link[rel="shortcut icon"]').attr('href', "quill.ico");
  }
  console.log("Hi, Sneaky-peeky.");
});