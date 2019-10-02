// $(document).ready(function() {
//   $('#app').empty();
//   $("#app").html("Howdy");
// });

(function(exports){

  function noteController(noteList){
    noteList.createNote("Favourite drink: seltzer.");
    noteListView = new noteListView(noteList);
  }

  noteController.prototype.setHTML = function() {
    $("#app").append(noteListView.htmlString);
  }
  exports.noteController = noteController;
})(this);

