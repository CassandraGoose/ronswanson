$(document).ready(function() {

$('#thebutton').click(function() {
  console.log("hello");
      $.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes', result => {
        $('#quotespot').append(result[0])
      });


})
})
