class Ponto {
    constructor(nome, posX, posY) {
        this.nome = nome
        this.x = posX
        this.y = posY
    }

    mover_horizontalmente(distancia) {
        this.x += distancia
        return this.x
    }

    mover_verticalmente(distancia) {
        this.y += distancia
        return this.y
    }

    mover(distanciaX, distanciaY) {
        this.x += distanciaX
        this.y += distanciaY
        return [ this.x, this.y ]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt( ( Math.abs( x1 - x2 ) ) ** 2 + ( Math.abs( y1 - y2 ) ) ** 2 )
    }
}

class Div extends Ponto {
    constructor(nome, cor, posX, posY, altura, largura) {
        super(nome, posX, posY)

        this.cor = cor
        this.altura = altura
        this.largura = largura
    }

    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"
        body.appendChild(this.node)
    }

    // direcao: up, down, left, right
    mover_na_tela(direcao, incremento) {
        if (direcao === "up") {
            this.mover_verticalmente(-incremento)
            this.node.style.top = this.y + "px"
        } else if (direcao === "down") {
            this.mover_verticalmente(incremento)
            this.node.style.top = this.y + "px"
        } else if (direcao === "left") {
            this.mover_horizontalmente(-incremento)
            this.node.style.left = this.x + "px"
        } else if (direcao === "right") {
            this.mover_horizontalmente(incremento)
            this.node.style.left = this.x + "px"
        }
    }
}

const div = new Div("beatriz", "lime", 300, 300, 150, 150)
div.desenhar()

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        div.mover_na_tela("up", 10)
    } else if (event.key === "ArrowDown") {
        div.mover_na_tela("down", 10)
    } else if (event.key === "ArrowLeft") {
        div.mover_na_tela("left", 10)
    } else if (event.key === "ArrowRight") {
        div.mover_na_tela("right", 10)
    }
})