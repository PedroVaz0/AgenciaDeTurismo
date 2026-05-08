let slideAtual = 0;
const totalSlides = 5;

function irParaSlide(n) {
    slideAtual = n;
    document.getElementById('slides').style.transform = `translateX(-${slideAtual * 100}%)`;
    atualizarDots();
}

function moverSlide(direcao) {
    slideAtual = (slideAtual + direcao + totalSlides) % totalSlides;
    irParaSlide(slideAtual);
}

