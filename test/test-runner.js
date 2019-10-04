// contains test instructions
var test_note = new note('JS rocks', 1);
var test_note_list =  new noteList();
var test_note_list_view = new noteListView(test_note_list);
var test_single_note_view = new singleNoteView(test_note);


function testDefaultText() { 
  result = assert.isTrue(test_note.returnText() === 'JS rocks');
  return arguments.callee.name + ': ' + result;
};

function testDefaultNoteNumber() { 
  result = assert.isTrue(test_note.id === 1);
  return arguments.callee.name + ': ' + result;
};

function testNewNoteOnList() {
  test_note_list.createNote("Favorite drink: Beer");
  test_note_list.createNote("Favorite food: an big roast dinner");
  result = assert.isTrue(test_note_list.returnList()[0].returnText() === 'Favorite drink: Beer');
  return arguments.callee.name + ': ' + result;
};

function testNewNoteIdOnList() {
  test_note_list.createNote("Favorite drink: Beer");
  test_note_list.createNote("Favorite food: an big roast dinner");
  result = assert.isTrue(test_note_list.returnList()[0].id === 1)
        && assert.isTrue(test_note_list.returnList()[1].id === 2);
  return arguments.callee.name + ': ' + result;
};

function testNoteListView() {
  var test_note_controller = new noteController(new noteList());
  test_note_controller.setHTML();
  result = assert.isTrue($("#app").text() === 'Favourite drink: sel');
  return arguments.callee.name + ': ' + result;
};

function testSingleNoteView() { 
  result = assert.isTrue(test_single_note_view.htmlString === '<td>JS rocks</td>');
  return arguments.callee.name + ': ' + result;
};
