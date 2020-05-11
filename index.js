// http://stackoverflow.com/a/23371115/604040
$('.page').click(function() {
    $(this).removeClass('no-anim').toggleClass('flipped');
   $('.page > div').click(function(e) {
        e.stopPropagation();
   });
 reorder()
});
function reorder(){
   $(".book").each(function(){
    var pages=$(this).find(".page")
    var pages_flipped=$(this).find(".flipped")
    pages.each(function(i){
        $(this).css("z-index",pages.length-i)
    })
    pages_flipped.each(function(i){
        $(this).css("z-index",i+1)
    })
   });
}
 reorder()

 var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background
  }
