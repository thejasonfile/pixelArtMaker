$(function() {

  // Select color input
  var colorInput = $('#colorPicker');
  // Select size input
  var gridHeightInput = $('#input_height').val();
  var gridWidthInput = $('#input_width').val();

  function makeGrid(x, y) {
    console.log(x, y);
  }

  // When size is submitted by the user, call makeGrid()
  $('input[type="submit"]').click(function(e) {
    e.preventDefault();
    makeGrid(gridWidthInput,gridHeightInput)
  });

});
