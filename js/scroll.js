
$("#btn-mais").click(function() {
        $('#home').animate({
            scrollTop: $("#btn-bola-form").offset().top
        }, 1500);

})
$("#smdiv").click(function() {
    $('html, body').animate({
        scrollTop: $("#iemol").offset().top
    }, 1500);
})

$("#berc").click(function() {
    $("#bercTxt").fadeToggle();
})
$("#mater").click(function() {
    $("#materTxt").fadeToggle();
})
$("#fund").click(function() {
    $("#fundTxt").fadeToggle();
})

$("#btnEq1").click(function() {
    $("#eqContent1").fadeToggle();
})
$("#btnEq2").click(function() {
    $("#eqContent2").fadeToggle();
})