particlesJS.load('particles-js', 'particlesConfig.json', function () {
    console.log('callback - particles.js config loaded');
});

//Variables

var gallerySideBarOpen = true;
var teamSideBarOpen = true;
var page = 1;

$(".dots-navigator .dot:first-child").addClass('dot-selected');
// $(".gallery-side-bar-toggler").addClass("open");
// $(".team-side-bar-toggler").addClass("open");
setTimeout(function () {
    $(".gallery-side-bar-toggler").trigger("click");
    $(".team-side-bar-toggler").trigger("click");
},0.1);

//Nav Menu Click Event Listeners

$("#subscribeLink").click(function (event) {
    event.stopPropagation();
    $("#subscribe-modal").show();
});
$(".close-modal").click(function (event) {
    event.stopPropagation();
    $("#subscribe-modal").hide();
});
$("#galleryLink").click(function (event) {
    event.stopPropagation();
    $("#gallery").css("top", 0);
    $(".dots-navigator").find(".dot-selected").removeClass('dot-selected');
    $(".dot2").addClass('dot-selected');
    page = 2;
});
$("#teamLink").click(function (event) {
    event.stopPropagation();
    $("#team").css("top", 0);
    $(".dots-navigator").find(".dot-selected").removeClass('dot-selected');
    $(".dot3").addClass('dot-selected');
    page = 3;
});

$(".gallery-side-bar-toggler").click(function () {
    if (gallerySideBarOpen) {
        $(".gallery-side-bar-toggler").removeClass("open");
        $(".gallery-side-bar-toggler .stripe").css("background", "#fff");
        $(".gallery-side-bar").css("width", "0%");
        $(".gallery-wrapper").css("width", "95%");

        gallerySideBarOpen = false;
    } else {
        $(".gallery-side-bar-toggler").addClass("open");
        $(".gallery-side-bar-toggler .stripe").css("background", "#1565C0");
        $(".gallery-side-bar").css("width", "20%");
        $(".gallery-wrapper").css("width", "75%");

        gallerySideBarOpen = true;
    }
});
$(".team-side-bar-toggler").click(function () {
    if (teamSideBarOpen) {
        $(".team-side-bar-toggler").removeClass("open");
        $(".team-side-bar-toggler .stripe").css("background", "#fff");
        $(".team-side-bar").css("width", "0%");
        $(".team-wrapper").css("width", "95%");

        teamSideBarOpen = false;
    } else {
        $(".team-side-bar-toggler").addClass("open");
        $(".team-side-bar-toggler .stripe").css("background", "#2E7D32");
        $(".team-side-bar").css("width", "20%");
        $(".team-wrapper").css("width", "75%");

        teamSideBarOpen = true;
    }
});

//Dots navigator click listeners

$(".dot1").click(function (event) {
    event.stopPropagation();
    if (page == 2 || page == 3) {
        $("#gallery").css("top", "100vh");
        $("#team").css("top", "200vh");
    }
    $(".dots-navigator").find(".dot-selected").removeClass('dot-selected');
    $(this).addClass('dot-selected');
});

$(".dot2").click(function (event) {
    event.stopPropagation();
    if (page == 3) {
        $("#team").css("top", "200vh");
    }
    page = 2;
    $("#gallery").css("top", 0);
    $(".dots-navigator").find(".dot-selected").removeClass('dot-selected');
    $(this).addClass('dot-selected');
});

$(".dot3").click(function () {

    if (page == 2) {
        $("#gallery").css("top", "100vh");
    }

    page = 3;
    $("#team").css("top", 0);
    $(".dots-navigator").find(".dot-selected").removeClass('dot-selected');
    $(this).addClass('dot-selected');
});