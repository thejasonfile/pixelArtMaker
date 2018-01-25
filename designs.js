$(function() {

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
    return $('#pixel_canvas').children().remove();
  }

  function fillSquare() {
    $(this).css('background-color', getColorValue());
  }

  function makeGrid() {
    // clear the previous grid
    clearGrid();

    // get input values for width and height
    let rows = getWidthValue();
    let cols = getHeightValue();

    // nested loop to build grid and append it to table
    for (let r = 0; r < rows; r++) {
      $('#pixel_canvas').append(`<tr class='row${r}'></tr>`);
      for (let c = 0; c < cols; c++) {
        $(`.row${r}`).append(`<td></td>`);
      }
    }
  }

  // EVENT LISTENERS
  
  // clicking the submit button builds the grid
  $('input[type="submit"]').click(function(e) {
    /**
    * the default behavior for a submit button is to refresh the page
    * this needs to be prevented
    **/
    e.preventDefault();
    makeGrid();
  });

  // clicking a grid square changes the background color
  $('#pixel_canvas').on('click', 'td', fillSquare);

});
