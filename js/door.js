$(function(){
    // function to change the page when clicked on
    $(".homeLinks").click(function(){
        let page = $(this).attr("id");
        // // closes door and displays new section then opens door
        $(".door").css({transform: "translateY(0%)"}).delay(2000).queue(function(){
            // removes active class from home page and adds to now active page
            $(".contentPage").removeClass("active").addClass("deactive");
            $(`.${page}`).removeClass("deactive").addClass("active");
            $(".door").css({transform: "translateY(-100%)"});
            // clears queue
            $(".door").clearQueue();
        });
        
    })

    // moves door and changes the page for navbar clicked
    $(".navLink").click(function(){
        // gets page id and turns it into the class form
        let pg = $(this).attr("id");
        pg = `${pg}Cont`;
        $(".door").css({transform: "translateY(0%)"}).delay(2000).queue(function(){
            // removes active class from home page and adds to now active page
            $(".contentPage").removeClass("active").addClass("deactive");
            $(`.${pg}`).removeClass("deactive").addClass("active");
            $(".door").css({transform: "translateY(-100%)"});
            // clears queue
            $(".door").clearQueue();
        });
        
    });
})