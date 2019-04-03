//trigger containers & changes to nav per container

init = 0;

//pricing
$(window).scroll(function() 
{ 
    screenheight = $(window).height();
    scrollposition = $(window).scrollTop()+screenheight;
    pricingheight = $("#pricing").height();
    pricingposition = $("#pricing").position().top;
    if ((scrollposition>pricingposition))
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
    servicesheight = $("#services").height();
    servicesposition = $("#services").position().top;
    if ((scrollposition>servicesposition))
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
    contactheight = $("#contact").height();
    contactposition = $("#contact").position().top;
    if ((scrollposition>contactposition))
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
        scrollTop: $("#pricing").offset().top},
        'slow');
});
//go services
$(".nav_item:nth-child(3)").click(function() {
    $('html,body').animate({
        scrollTop: $("#services").offset().top},
        'slow');
});
//go contact
$(".nav_item:nth-child(4)").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});


