function errorLineColor() {
  var passed = 0;
  var failed = 0;
  var lines = $('.test_log').html().split('</li>');  
  $('.test_log').empty();

  $.each(lines, function() {
    var $this = $('<div>'+this+'</div>');
    $('.test_log').append($this);
    if( $this.text().match('passed') ) {
        $this.css('color', 'green');
        passed += 1;
    }
    else if( $this.text().match('failed') ) {
        $this.css('color', 'red');
        failed += 1;
    }
  });
  return passed + " passed, " + failed + " failed";
};

