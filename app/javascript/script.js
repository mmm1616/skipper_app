let title = "javascriptが使えました";
alert(title);


$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

// clickしたときに色が赤になる