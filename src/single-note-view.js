(function(exports) {
  function singleNoteView(note) {
    this.htmlString = "<td>" + note.returnText() + "</td>";
  };
  exports.singleNoteView = singleNoteView;
})(this);