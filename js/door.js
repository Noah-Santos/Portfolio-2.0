$(function(){
    // function to change the page when clicked on
    $(".homeLinks").click(function(){
        let page = $(this).attr("id");
        // // closes door and displays new section then opens door
        $(".door").css({transform: "translateY(0%)"}).delay(1000).queue(function(){
            // removes active class from home page and adds to now active page
            $(".homeGrid").delay(1000).removeClass("active").addClass("deactive");
            $(`.${page}`).delay(1000).removeClass("deactive").addClass("active");
            $(".door").css({transform: "translateY(-100%)"});
        });
    })
})