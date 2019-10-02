

// contains test instructions
var test_note = new note('JS rocks');
var test_note_list =  new noteList();
test_note_list.createNote("Favorite drink: Beer");
var test_note_list_view = new noteListView(test_note_list);
var test_single_note_view = new singleNoteView(test_note);

function testDefaultText() { 
  result = assert.isTrue(test_note.returnText() === 'JS rocks');
  return arguments.callee.name + ': ' + result;
};

function testNewNoteOnList() { 
  result = assert.isTrue(test_note_list.returnList()[0].returnText() === 'Favorite drink: Beer');
  return arguments.callee.name + ': ' + result;
};

function testNoteListView() { 
  result = assert.isTrue(test_note_list_view.htmlString === '<tr><td>Favorite drink: Beer</td></tr>');
  return arguments.callee.name + ': ' + result;
};

function testSingleNoteView() { 
  result = assert.isTrue(test_single_note_view.htmlString === '<td>JS rocks</td>');
  return arguments.callee.name + ': ' + result;
};
