(function(exports) {
  function note(text, id) {
    this.text = text;
    this.id = id;
  }
  note.prototype.returnText = function() {
    return this.text
  }
  exports.note = note;
})(this);
