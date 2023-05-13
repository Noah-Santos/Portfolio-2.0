$(function(){
    // on click of the grid section, the content will show
    $(".icon").click(function(){
        id = $(this).attr("id");
        // hides the svg
        $(this).fadeOut(500).queue(function(){
            // makes content appear
            $(`#${id}Info`).removeClass("deactive").addClass("active");
            // clears queue
            $(".door").clearQueue();
        });
    })
})