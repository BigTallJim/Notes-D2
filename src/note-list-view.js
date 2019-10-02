(function(exports) {
  function noteListView(noteList) {
    this.htmlString = "";
    for(var i = 0; i < noteList.returnList().length; i++){
      this.htmlString += "<tr><td>"
      + noteList.returnList()[i].returnText()
      + "</td></tr>";
    };
  };
  exports.noteListView = noteListView;
})(this);