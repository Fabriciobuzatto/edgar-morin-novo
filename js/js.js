$("#open-nav").on("click", function(){
    $(".nav-main").toggleClass("open-nav-main");
    $(".container").toggleClass("move-container");
    $(".nav-mask").toggleClass("add-nav-mask");
});
    
$(".nav-mask").on("click", function(){
    $(".nav-main").removeClass("open-nav-main");
    $(".container").removeClass("move-container");
    $(".nav-mask").removeClass("add-nav-mask");
});


// $("#collapseTextOpen01").on("click", function(){
//     $("#btn-expand-text-01").toggleClass("btn-expand-hover img");
// });
// $("#collapseTextOpen02").on("click", function(){
//     $("#btn-expand-text-02").toggleClass("btn-expand-hover img");
// });
// $("#collapseTextOpen03").on("click", function(){
//     $("#btn-expand-text-03").toggleClass("btn-expand-hover img");
// });
// $("#collapseTextOpen04").on("click", function(){
//     $("#btn-expand-text-04").toggleClass("btn-expand-hover img");
// });


$('[data-toggle="collapse"]').click(function(index) {
    $("#"+this.id).toggleClass("btn-expand-hover img");
});


$('#busca').click(function(e) {
    $('.busca').addClass('is-active');
    e.preventDefault();
});

$(".busca__close").click(function(e) {
    $('.busca').removeClass('is-active');
    e.preventDefault();
});

$("#episodios").click(function(e) {
    $('.episodios').addClass('episodios-active');
    $('#carouselExampleIndicators').addClass('episodios');
    $('.vida-episodios').addClass('episodios');
    e.preventDefault();
});






