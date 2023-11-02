var click_btn_mais = 0;
$("#btn-mais").click(function() {
    click_btn_mais++;
    if(click_btn_mais == 1) {
        $('#home').animate({
            scrollTop: $("#btn-mais").offset().top
        }, 1500);
    }
    else if (click_btn_mais == 2) {
        $('html, body').animate({
            scrollTop: $("#iemol").offset().top
        }, 1500);
        click_btn_mais = 0;
    }

})