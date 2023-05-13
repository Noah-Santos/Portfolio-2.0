$(function(){
    // on hover of the grid section, the content will show
    let id;
    $(".contactInfo").hover(function(){
        id = $(this).attr("id");
        $(`#${id}Card`).css("display", "flex");
    });
})