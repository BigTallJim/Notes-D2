(function(exports) {
  function noteList() {
    this.list = []
  }
  noteList.prototype.returnList= function() {
    return this.list
  }
  noteList.prototype.createNote = function(text) {
    var highestId = 0;
    if(this.list.length > 0){
      var highestId = Math.max.apply(Math, this.list.map(function(o) { return o.id; }))
    }
    
    this.list.push(new note(text, highestId+1))
  }
  exports.noteList = noteList;
})(this);
