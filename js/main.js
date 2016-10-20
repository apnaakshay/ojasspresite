//Variables

var gallerySideBarOpen = true;



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
    $(".gallery-side-bar-toggler").addClass("open");
});

$(".gallery-side-bar-toggler").click(function(){
    if(gallerySideBarOpen){
        $(".gallery-side-bar-toggler").removeClass("open");
        gallerySideBarOpen = false;
    }else{
        $(".gallery-side-bar-toggler").addClass("open");
        gallerySideBarOpen = true;
    }
});