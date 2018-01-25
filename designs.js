$(function() {

  var color = getColorValue();

  // FUNCTIONS

  function getHeightValue() {
    return $('#input_height').val();
  }

  function getWidthValue() {
    return $('#input_width').val();
  }

  function getColorValue() {
    return $('input[type="color"]').val();
  }

  function clearGrid() {
    $('#pixel_canvas').children().remove();
  }

  function fillSquare() {
    $(this).css('background-color', color);
  }

  function makeGrid() {
    //clear the previous grid
    clearGrid();

    //get input values for width and height
    var rows = getWidthValue();
    var cols = getHeightValue();

    //nested loop to build grid and append it to table
    for (var r = 0; r < rows; r++) {
      $('#pixel_canvas').append(`<tr class="row${r}"></tr>`)
      for (var c = 0; c < cols; c++) {
        $(`.row${r}`).append(`<td></td>`)
      }
    }
  }

  // EVENT LISTENERS

  $('input[type="submit"]').click(function(e) {
    e.preventDefault();
    makeGrid()
  });

  $('input[type="color"]').change(function() {
    color = getColorValue();
  })

  $('#pixel_canvas').on('click', 'td', fillSquare)

});
