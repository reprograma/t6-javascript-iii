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

    desenhar(container) {
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"
        container.appendChild(this.node)
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

const container = document.querySelector("main")
const div0 = new Div("beatriz", "lime", 10, 10, 20, 20)
div0.desenhar(container)
const div1 = new Div("wanessa", "red", 40, 40, 20, 20)
div1.desenhar(container)
const divs = [div0, div1]

let active
for (const div of divs) {
    div.node.addEventListener("click", function (event) {
        active = div
    })
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        if (active.y > 0) {
            active.mover_na_tela("up", 10)
        }
    } else if (event.key === "ArrowDown") {
        if (active.y < (container.offsetHeight - active.altura)) {
            active.mover_na_tela("down", 10)
        }
    } else if (event.key === "ArrowLeft") {
        if (active.x > 0) {
            active.mover_na_tela("left", 10)
        }
    } else if (event.key === "ArrowRight") {
        if (active.x < (container.offsetWidth - active.largura)) {
            active.mover_na_tela("right", 10)
        }
    }
})