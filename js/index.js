$(function(){
    // function to change the page when clicked on
    $(".homeLinks").click(function(){
        let page = $(this).attr("id");
        window.location.href = `${page}.html`;
    })
})


