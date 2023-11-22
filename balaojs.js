let mamacoEl = document.querySelector('#mamaco');


let mamaco = {
    html: mamacoEl,
    
    acc: new Vetor(),

    vel: new Vetor(),

    pos: new Vetor()
}

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



class Robo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.acc = new Vector
    }

    irParaMacacoX(mamaco) {
        const dist_atual = this.pos.distancia(mamaco.pos);

        const dist_esquerda = this.pos.soma(new Vetor(-1)).distancia(mamaco.pos);
        
        const dist_direita = this.pos.soma(new Vetor(1)).distancia(mamaco.pos);

        if (dist_direita < dist_atual) return new Vetor (1); 
        if (dist_esquerda < dist_atual) return new Vector(-1);
        return new Vetor ();
    }

    irParaMacacoY(mamaco) {
        const dist_atual = this.pos.distancia(mamaco.pos);

        const dist_baixo = this.pos.soma(new Vetor(0, -1)).distancia(mamaco.pos);
        
        const dist_cima = this.pos.soma(new Vetor(0, 1)).distancia(mamaco.pos);

        if (dist_cima < dist_atual) return new Vetor (0, 1); 
        if (dist_baixo < dist_atual) return new Vector(0, -1);
        return new Vetor ();
    }

    let acc = new Vetor(0, 0),

    let vel = new Vetor(0, 0),

    let pos = new Vetor(0, 0)
}let mamacoEl = document.querySelector('#mamaco');


let mamaco = {
    html: mamacoEl,
    
    acc: new Vetor(),

    vel: new Vetor(),

    pos: new Vetor()
}

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



class Robo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.acc = new Vector
    }

    irParaMacacoX(mamaco) {
        const dist_atual = this.pos.distancia(mamaco.pos);

        const dist_esquerda = this.pos.soma(new Vetor(-1)).distancia(mamaco.pos);
        
        const dist_direita = this.pos.soma(new Vetor(1)).distancia(mamaco.pos);

        if (dist_direita < dist_atual) return new Vetor (1); 
        if (dist_esquerda < dist_atual) return new Vector(-1);
        return new Vetor ();
    }

    irParaMacacoY(mamaco) {
        const dist_atual = this.pos.distancia(mamaco.pos);

        const dist_baixo = this.pos.soma(new Vetor(0, -1)).distancia(mamaco.pos);
        
        const dist_cima = this.pos.soma(new Vetor(0, 1)).distancia(mamaco.pos);

        if (dist_cima < dist_atual) return new Vetor (0, 1); 
        if (dist_baixo < dist_atual) return new Vector(0, -1);
        return new Vetor ();
    }

    let acc = new Vetor(0, 0),

    let vel = new Vetor(0, 0),

    let pos = new Vetor(0, 0)
}
