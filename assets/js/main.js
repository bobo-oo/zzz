// Preloader
function on_sreen_loading() {
    $("#preloader").css("display", "none");
    $("header").css("display", "block");
    $("main").css("display", "block");
    $("footer").css("display", "block");
}
// Scroll Top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(document).ready(function () {

    // alert($("#header").height());
    // alert(window.innerHeight);
    // alert(document.documentElement.clientHeight);
    // alert(document.body.clientHeight);
    var document_height = ((document.documentElement.clientHeight - $("#header").height()) * 100) / document.documentElement.clientHeight;
    $(".section-carousel").height(Math.round(document_height) + "vh");
    $(".section-carousel img").height(Math.round(document_height) + "vh");

    // Show Scroll Top 
    $(window).scroll(function () {
        if ($(this).scrollTop() > document_height) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
        if (document.documentElement.scrollTop > document_height) {
            $("#scroll-up").css("display", "block");
            $(".blog-detail-control").css("display", "block");
            
        } else {
            $("#scroll-up").css("display", "none");
            $(".blog-detail-control").css("display", "none");

        }
        
    });
});