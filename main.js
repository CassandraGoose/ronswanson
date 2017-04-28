$(document).ready(function() {

  callAPI()

  function callAPI() {
    $.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes', result => {
      $('#quotespot').empty()
      var theQuote = result[0].toUpperCase()
      $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=ron+swanson', results => {
        $('#divChunk').empty()
        var theGif = results.data.image_url
        $('#divChunk').prepend(`<div class="row">
              <div class="col s10 offset-s2 bottomsies">
                <div class="card cardcolor">
                  <div class="card-image">
                    <img class="max-img" src="${theGif}">
                  </div>
                  <div class="card-content textcolor cardcolor">
                    <p class="textcolor">${theQuote}</p>
                    <p class="textcolor"><i>-Ron Swanson</i></p>

                  </div>
                </div>
                <a class="waves-effect waves-light btn btncolor textcolor" id="thebutton">I need more ron</a>

              </div>
            </div>`)
      })

    });
  }

$('#thebutton').click(function() {
  callAPI()
})

})
