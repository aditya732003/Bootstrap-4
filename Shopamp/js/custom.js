$(document).ready(function() {
	$(".navbar-toggler").click(function () {
    $(".sidebar").addClass("open");
    $(".body").addClass("open");
});
	$(".close-sidebar").click(function () {
    $(".sidebar").removeClass("open");
    $(".body").removeClass("open");
});
});