//trigger containers & changes to nav per container
//this trigger method possibly can used to replace the other method that i use on this project

init = 0;

//pricing
$(window).scroll(function() 
{ 
    screenheight = $(window).height();
    scrollposition = $(window).scrollTop()+screenheight;
    con2height = $("#con2").height();
    con2position = $("#con2").position().top;
    if ((scrollposition>con2position))
        {
            //add class to current container
            $('.nav_item:nth-child(2)').addClass('active');
            //remove others
            $('.nav_item:nth-child(3)').removeClass('active');
            $('.nav_item:nth-child(4)').removeClass('active');
            
        } else {
            $('.nav_item:nth-child(2)').removeClass('active');
        }
});
//services
$(window).scroll(function() 
{ 
    screenheight = $(window).height();
    scrollposition = $(window).scrollTop()+screenheight;
    con3height = $("#con3").height();
    con3position = $("#con3").position().top;
    if ((scrollposition>con3position))
        {
            //add class to current container
            $('.nav_item:nth-child(3)').addClass('active');
            //remove others
            $('.nav_item:nth-child(2)').removeClass('active');
            $('.nav_item:nth-child(4)').removeClass('active');
            

        } else {
            $('.nav_item:nth-child(3)').removeClass('active');
        }
});
//contact
$(window).scroll(function() 
{ 
    screenheight = $(window).height();
    scrollposition = $(window).scrollTop()+screenheight;
    con4height = $("#con4").height();
    con4position = $("#con4").position().top;
    if ((scrollposition>con4position))
        {
            //add class to current container
            $('.nav_item:nth-child(4)').addClass('active');
            //remove others
            $('.nav_item:nth-child(2)').removeClass('active');
            $('.nav_item:nth-child(3)').removeClass('active');
        } else {
            $('.nav_item:nth-child(4)').removeClass('active');
        }
});

//nav item active on moing to container by click

//go home
$(".nav_item:nth-child(1)").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

//go pricing

$(".nav_item:nth-child(2)").click(function() {
    $('html,body').animate({
        scrollTop: $("#con2").offset().top},
        'slow');
});
//go services
$(".nav_item:nth-child(3)").click(function() {
    $('html,body').animate({
        scrollTop: $("#con3").offset().top},
        'slow');
});
//go contact
$(".nav_item:nth-child(4)").click(function() {
    $('html,body').animate({
        scrollTop: $("#con4").offset().top},
        'slow');
});


//skrollr
var s = skrollr.init({
    smoothScrolling: true,
    smoothScrollingDuration: 200
});


