$(function(){
    // function to change the page when clicked on
    $(".homeLinks").click(function(){
        let page = $(this).attr("id");
        window.location.href = `${page}.html`;
    })

    // blurs other screens when one is hovered
    $(".homeLinks").mouseenter(function(){
        $(".homeScreens").not(this).css({filter:"blur(3px)"});
    });

    // unblurs when not hovering over screen
    $(".homeLinks").mouseleave(function(){
        $(".homeScreens").css({filter:"blur(0px)"});
    })
})


