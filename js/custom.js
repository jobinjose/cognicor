$(document).ready(function() {
$('.navbtn').click(function() {
$('.navbtn').removeClass('navactive');
});
$('#nav1').click(function() {
$('#nav1').addClass('navactive');
});

$('#products_nav').click(function() {
$('#products_nav').addClass('navactive');
});

$('#awards_nav').click(function() {
$('#awards_nav').addClass('navactive');
});

$('#about_nav').click(function() {
$('#about_nav').addClass('navactive');
});

$('#careers_nav').click(function() {
$('#careers_nav').addClass('navactive');
});

$('#downloads_nav').click(function() {
$('#downloads_nav').addClass('navactive');
});

$('#contact_nav').click(function() {
$('#contact_nav').addClass('navactive');
});

});


function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#home").click(function() {
   scrollToAnchor('_home');
});

$("#products").click(function() {
   scrollToAnchor('_products');
});

$("#awards").click(function() {
   scrollToAnchor('_awards');
});

$("#about").click(function() {
   scrollToAnchor('_about');
});

$("#careers").click(function() {
   scrollToAnchor('_careers');
});

$("#downloads").click(function() {
   scrollToAnchor('_downloads');
});

$("#contact").click(function() {
   scrollToAnchor('_contact');
});
