
// the jQuery $ function tells it to target the form element
// .on is a another function (like $) which listens for an event to take place. When it does, it executes the second function which it is taking as an argument. Here that event is 'submit'.

//EVENT DRIVEN PROGRAMMING!

var socket = io();
//the socket now is a reference to the socket.io library


$('form').on('submit', function() {
  var text = $('#message').val();
  socket.emit('message', text);
  $('#message').val('');
  return false;
});

//lastly "return false" tells it to cancel its automatic sending to the server. Here it doesn't need to go that far.

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});

//SERVER-SIDE LOGIC IS WHAT SEPERATES A SITE FROM AN APP.
