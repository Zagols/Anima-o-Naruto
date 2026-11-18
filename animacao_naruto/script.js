const canvas = document. querySelector("#canvas");
const contexto = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "naruto2.0.png";

const colunas = 3;
const linhas = 4;
const totalFrames = colunas * linhas;

let frameAtual = 0;

const duracaoFrame = 100;
let ultimoMomentoFrame = 0;

imagem.onload = () => {
    const larguraFrame = imagem.width / colunas;
    const alturaFrame = imagem.height / linhas;

    canvas.width = larguraFrame;
    canvas.height = alturaFrame;
    
    desenharFrame();

    requestAnimationFrame(animar);
}

function desenharFrame() {
    const larguraFrame = imagem.width / colunas;
    const alturaFrame = imagem.height / linhas;

    const coluna = frameAtual % colunas;
    const linha = Math.floor(frameAtual / colunas);

    const origemX = coluna * larguraFrame;
    const origemY = linha * alturaFrame;

    contexto.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    contexto.drawImage(
        imagem,
        origemX,
        origemY,
        larguraFrame,
        alturaFrame,
        0,
        0,
        canvas.width,
        canvas.height
    );
}

function proximoFrame() {
    frameAtual++;

    if (frameAtual >= totalFrames) {
        frameAtual = 0;
    }

    desenharFrame();
}

function animar(momento) {
    if(momento - ultimoMomentoFrame >= duracaoFrame) {
        proximoFrame ();
        ultimoMomentoFrame = momento;
    }

    requestAnimationFrame(animar);
}