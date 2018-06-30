// Select color input
// Select size input
var color, height, width, cell;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(e){
  e.preventDefault();
  color = $('#colorPicker').val();
  height =$('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid();
});

$('#colorPicker').change(function(){
  color = $('#colorPicker').val();
});

function makeGrid() {
  for(var i=0; i<height; i++){
    $('#pixelCanvas').append('<tr></tr>');
  }
  var rows = $('#pixelCanvas').children('tr');
  rows.each(function(){
    for(var j=0; j<width; j++){
      $(this).append('<td></td>');
    }
  cell = $(this).find('td');
    cell.click(function(){
      $(this).attr('bgcolor',color);
    });
  });
// Your code goes here!
}
