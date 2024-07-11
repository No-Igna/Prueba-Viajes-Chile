$(window).scroll(function(){
    if($("#navbarfijo").offset().top > 350){
        $("#navbarfijo").removeClass("bg-transparent");
        $("#navbarfijo").addClass("bg-black");
    } else{
        
        $("#navbarfijo").removeClass("bg-black");
        $("#navbarfijo").addClass("bg-transparent");
    }
})
// smooth scroll con js.
// $(function () {
//     $("a").click(function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var gato = this.hash;
//             $("html, body").animate({
//                 scrollTop: $(gato).offset().top
//             }, 800);
//         }
//     });


   
// });