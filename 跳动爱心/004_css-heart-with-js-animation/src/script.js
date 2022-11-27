$(document).ready(function(){
  $('div>div>div').each(function(id){
    $(this).css({
      position: 'relative',
      top: '-200px',
      opacity: 0
    });
    var wait = Math.floor((Math.random()*3000)+1);
    $(this).delay(wait).animate({
      top: '0px',
      opacity: 1
    },1000);
  })
});