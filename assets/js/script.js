$(window).scroll(function(){
    if($("#navbarfijo").offset().top > 350){
        $("#navbarfijo").removeClass("bg-transparent");
        $("#navbarfijo").addClass("bg-black");
    } else{
        
        $("#navbarfijo").removeClass("bg-black");
        $("#navbarfijo").addClass("bg-transparent");
    }
})