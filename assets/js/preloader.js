$('body').append('<div style="display:flex;justify-content:center;align-items:center;" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}