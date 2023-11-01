var qdrImg1 = document.getElementById('qdr1');
var qdrImg2 = document.getElementById('qdr2');
var qdrImg3 = document.getElementById('qdr3');

function mudaImgTurma1() {
    document.getElementById('qdr1').style.display = 'block';
    document.getElementById('qdr2').style.display = 'none';
    document.getElementById('qdr3').style.display = 'none';
}
function mudaImgTurma2() {
    document.getElementById('qdr1').style.display = 'none';
    document.getElementById('qdr2').style.display = 'block';
    document.getElementById('qdr3').style.display = 'none';
}
function mudaImgTurma3() {
    document.getElementById('qdr1').style.display = 'none';
    document.getElementById('qdr2').style.display = 'none';
    document.getElementById('qdr3').style.display = 'block';
}

function menu() {
    var menu = document.getElementById('itens');
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}