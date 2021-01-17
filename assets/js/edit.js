$( document ).ready(function() {
    $(".ts-bx > span a").on("click",function(e){
        e.preventDefault();
        $(".op").toggle();
    });
})