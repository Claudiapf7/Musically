

$(document).ready(function () {
    //donar vida al logo

    $(document).ready(function(){
        setInterval(logo,50);
     });
    function logo(){
    $("#logo img")
    .animate({scale: 1}, "slow")
    .animate({scale: 1.05}, "slow");
}
    //botó per tornar a l'inici
    //el boto apareix quan baixem i desapareix si tornem a pujar
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeTo(0, 1000);
        } else {
            $('#toTop').fadeTo(1000,0);
        }
    });
    
    $("#toTop").on("click", function() {
        $("html, body").animate({scrollTop: 0}, 1000);
     })

     //obrim el menú per dispositius movils
    $("#dropdown").on("click", function(){
        $('.menuFull').toggle();
        $('header').toggle();

        })
       
    });


