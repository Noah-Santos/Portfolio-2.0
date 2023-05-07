$(function(){
    // blurs other screens when one is hovered
    $(".homeLinks").mouseenter(function(){
        $(".homeScreens").not(this).css({filter:"blur(3px)"}, 500);
    });

    // unblurs when not hovering over screen
    $(".homeLinks").mouseleave(function(){
        $(".homeScreens").css({filter:"blur(0px)"}, 500);
    })
})


