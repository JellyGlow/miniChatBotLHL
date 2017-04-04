
// the jQuery $ function tells it to target the form element
// .on is a another function (like $) which listens for an event to take place. When it does, it executes the second function which it is taking as an argument. Here that event is 'submit'.

//EVENT DRIVEN PROGRAMMING!

$('form').on('submit', function() {
  var text = $('#message').val();
  alert(text);
  return false;
});

//lastly "return false" tells it to cancel its automatic sending to the server. Here it doesn't need to go that far.

//SERVER-SIDE LOGIC IS WHAT SEPERATES A SITE FROM AN APP.
