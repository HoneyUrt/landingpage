$(document).ready(function() {
    
    var flag = true;

    $('.header_burger').click(function() {
        $('.header_burger, .header_menu').toggleClass('active');

        if (flag) {
            $("body").css({"overflow":"hidden"});
            flag = false;
        } else {
            $("body").css({"overflow":"auto"});
            flag = true;
        }
    });

    $(".header_menu").on('click', '[href*="#"]', function(e){
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
        $('.header_burger, .header_menu').removeClass('active');
        $("body").css({"overflow":"auto"});
        e.preventDefault();
      });
}); 