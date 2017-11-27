$(document).ready(function() {
    $("#hsiao").fadeIn(4000); //jQuery Function 1
    

    $("#hsiao-logo").hover(function() {  //jQuery Function 9
        $("#logo").css("cursor", "pointer")}) //jQuery Function 3

    $("p").hide() //jQuery Function 2

    $("#about-me").hover(function() {
        $("p").slideDown(500) //jQuery Function 2
    })

 

    $(".bearmaps").click(function() { //jQuery Function 8

       
        let button_active = $(this).hasClass("active"); //jQuery Function 7

        let condition = button_active == false;
        if (condition) {
            $(this).addClass("active"); //jQuery Function 5
            $(this).removeClass("inactive"); //jQuery Function 6

           $(".bmap").show(600);
           $(".bmap-description").hide(600);
               s


        } else {
            $(this).addClass("inactive");
            $(this).removeClass("active");


            $(".bmap").hide(600);
            $(".bmap-description").show(600);

            
        }
    })

    $(".snapchat").click(function() {


        let button_active = $(this).hasClass("active"); 

        let condition = button_active == false; 

        if (condition) {
            $(this).addClass("active");
            $(this).removeClass("inactive");

            
               $(".snap").show(600);
               $(".snap-description").hide(600);

        } else {
            $(this).addClass("inactive");
            $(this).removeClass("active");

             $(".snap").hide(600);
             $(".snap-description").show(600);
        }
    })




});