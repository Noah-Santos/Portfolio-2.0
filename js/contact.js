$(function(){
    // on hover of the grid section, the content will show
    $(".targetInfo").hover(function(){
        let id = $(this).attr("id");
        $(id).css("display", "flex");
    });
})