// contains test instructions
var test_note = new note('JS rocks');
var test_note_array =  new noteList()
test_note_array.createNote("Favorite drink: Beer")

function testDefaultText() { 
  result = assert.isTrue(test_note.returnText() === 'JS rocks');
  return arguments.callee.name + ': ' + result;
};

function testNewNoteOnList() { 
  result = assert.isTrue(test_note_array.returnList().pop().returnText() === 'Favorite drink: Beer');
  return arguments.callee.name + ': ' + result;
};
