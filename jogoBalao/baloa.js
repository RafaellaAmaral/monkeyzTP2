let macacoEl = document.querySelector('#mamaco');

class Vetor {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    soma(vetor) {
        return new Vetor(this.x + vetor.x, this.y + vetor.y);
    }

    distancia(vetor) {
        return Math.hypot(this.x - vetor.x, this.y - vetor.y);
    }
}

let macaco = {
    html: macacoEl,
    height: macacoEl.clientHeight,
    width: macacoEl.clientWidth,
    vel: new Vetor(),
    pos: new Vetor()
};

let teclasPressionadas = {
    'w': false,
    's': false,
    'a': false,
    'd': false
};

document.addEventListener('keydown', (event) => {
    if (teclasPressionadas.hasOwnProperty(event.key.toLowerCase())) {
        teclasPressionadas[event.key.toLowerCase()] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (teclasPressionadas.hasOwnProperty(event.key.toLowerCase())) {
        teclasPressionadas[event.key.toLowerCase()] = false;
    }
});

function atualizarPosicao() {
    if (teclasPressionadas['w']) {
        macaco.pos.y -= 3;
        macaco.vel.y = -1;
    }
    if (teclasPressionadas['s']) {
        macaco.pos.y += 3;
        macaco.vel.y = 1;
    }
    if (teclasPressionadas['a']) {
        macaco.pos.x -= 3;
        macaco.vel.x = -1;
    }
    if (teclasPressionadas['d']) {
        macaco.pos.x += 3;
        macaco.vel.x = 1;
    }

    macaco.html.style.top = macaco.pos.y + 'px';
    macaco.html.style.left = macaco.pos.x + 'px';

    requestAnimationFrame(atualizarPosicao);
}

function atirar() {
    let tiroEl = document.createElement('div');
    tiroEl.className = 'tiro';
    let direcaoTiro = new Vetor(macaco.vel.x, macaco.vel.y);
    let velocidadeTiro = 15;
    tiroEl.style.top = macaco.pos.y + 'px';
    tiroEl.style.left = macaco.pos.x + 'px';

    macaco.html.appendChild(tiroEl);



|   


    let intervaloTiro = setInterval(() => {
        tiroEl.pos = tiroEl.pos || { x: parseFloat(tiroEl.style.left) || 0, y: parseFloat(tiroEl.style.top) || 0 };
        tiroEl.pos.x += direcaoTiro.x * velocidadeTiro;
        tiroEl.pos.y += direcaoTiro.y * velocidadeTiro;
        tiroEl.style.left = tiroEl.pos.x + 'px';
        tiroEl.style.top = tiroEl.pos.y + 'px';
    }, 20);


    setTimeout(() => {
        clearInterval(intervaloTiro);
        macaco.html.removeChild(tiroEl);
    }, 500);
}

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        atirar();
    }
});

requestAnimationFrame(atualizarPosicao);
