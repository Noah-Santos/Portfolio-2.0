// use box-shadow for the spotlight
$(function(){
    $(".next").click(function(){
        $(".active").css("transform", "scale(0.8)");
        $(".active").next().css("transform", "scale(1.2)").addClass("active").css("transform", "scale(1)")
        // for(let i = 1; i < $(".carouselProjects").children(); i++){
        //     if(i == $(".carouselProjects").children()-1){
        //         i = 0;
        //     }

        //     $(".carouselProjects").eq(i).css("transform", "scale(1.2)").addClass("active").delay(500).css("transform", "scale(1)");

        // }
    })
})