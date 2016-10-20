//Variables

var gallerySideBarOpen = true;
var page = 1;

$(".dots-navigator .dot:first-child").addClass('dot-selected');

//Nav Menu Click Event Listeners

$("#subscribeLink").click(function(event){
    event.stopPropagation();
    $("#subscribe-modal").show();
});
$(".close-modal").click(function(event){
    event.stopPropagation();
    $("#subscribe-modal").hide();
});
$("#galleryLink").click(function(event){
    event.stopPropagation();
    $("#gallery").css("top",0);
    $(".dots-navigator").find(".dot-selected").removeClass('dot-selected');
    $(".dot2").addClass('dot-selected');
    $(".gallery-side-bar-toggler").addClass("open");
});
$("#teamLink").click(function(event){
    event.stopPropagation();
    $("#team").css("top",0);
});

$(".gallery-side-bar-toggler").click(function(){
    if(gallerySideBarOpen){
        $(".gallery-side-bar-toggler").removeClass("open");
        $(".gallery-side-bar-toggler .stripe").css("background","#fff");
        $(".gallery-side-bar").css("width","0%");
        $(".gallery-wrapper").css("width","95%");

        gallerySideBarOpen = false;
    }else{
        $(".gallery-side-bar-toggler").addClass("open");
        $(".gallery-side-bar-toggler .stripe").css("background","#1565C0");
        $(".gallery-side-bar").css("width","20%");
        $(".gallery-wrapper").css("width","75%");

        gallerySideBarOpen = true;
    }
});

//Dots navigator click listeners

$(".dot1").click(function(event){
    event.stopPropagation();
    if(page==2){
        $("#gallery").css("top","100vh");
    }
    $(".dots-navigator").find(".dot-selected").removeClass('dot-selected');
    $(this).addClass('dot-selected');
});

$(".dot2").click(function(event){
    event.stopPropagation();
    page = 2;
    $("#gallery").css("top",0);
    $(".gallery-side-bar-toggler").addClass("open");
    $(".dots-navigator").find(".dot-selected").removeClass('dot-selected');
    $(this).addClass('dot-selected');
});

$(".dot3").click(function(){

});