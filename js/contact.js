$(function(){
    // on click of the grid section, the content will show
    $(".icon").click(function(){
        id = $(this).attr("id");
        // hides the svg
        $(this).fadeOut(500).queue(function(){
            // makes content appear
            $(`#${id}Info`).removeClass("deactive").addClass("active");
            // after 2 seconds, info dissapears
            // setTimeout(function(){
            //     // hides info and displays svg
            //     $(`#${id}Info`).removeClass("active").addClass("deactive");
            //     $(`#${id}`).fadeIn(500);
            // }, 2000)
            // clears queue
            $(".door").clearQueue();
        });
    })
})