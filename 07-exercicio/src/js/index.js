import "../styles/main.scss"

import google_image_search from "./resources/google"
import musicbrainz_search from "./resources/musicbrainz"

const bg = document.getElementById("bg")
const form = document.querySelector("form")
const input = form.querySelector("input")
const main = document.querySelector("main")
const content = document.getElementById("content")

for (const event of ["focus", "click", "keypress"]) {
    input.addEventListener(event, function () {
        main.style.width = "60vw"
    })
}

input.addEventListener("blur", function () {
    if (content.innerHTML !== "" &&
        content.innerHTML !== "Carregando..." &&
        content.innerHTML !== "<p>Erro de conexão.</p>" &&
        content.innerHTML !== "<p>Nenhum resultado encontrado.</p>" &&
        main.style.width === "60vw") {
        main.style.width = input.offsetWidth + main.style.padding * 2 + "px"
    }
})

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const query = input.value
    content.innerHTML = "Carregando..."
    content.style.height = "auto"
    bg.style.opacity = 0
    musicbrainz_search(query)
        .then(function(mb_data) {
            let image_index = 0;
            (function loadImage (index) {
                google_image_search(`${mb_data.name}`, index)
                    .then(function (g_data) {
                        bg.src = g_data
                        bg.onload = function() {
                            bg.style.opacity = 1
                            main.style.width = input.offsetWidth + main.style.padding * 2 +  "px"

                            content.innerHTML = ""
                            content.style.height = 0
                            const h1 = document.createElement("h1")
                            const h3 = document.createElement("h3")
                            const p = document.createElement("p")
                            h1.textContent = mb_data.name
                            h3.textContent = mb_data.life_span
                            p.textContent = mb_data.area
                            content.appendChild(h1)
                            content.appendChild(h3)
                            content.appendChild(p)
                            content.style.height = h1.clientHeight + h3.clientHeight + p.clientHeight + 80 + "px"
                        }
                        bg.onerror = function (error) {
                            console.log("load image error", error)
                            image_index++
                            loadImage(image_index) 
                        }
                    })
                    .catch(function (error) {
                        console.log("google", error)
                        error = error !== "Nenhum resultado encontrado." 
                            ? "Erro de conexão." : error
                        content.innerHTML = `<p>${error}</p>`
                    })
            })(image_index)
        })
        .catch(function (error) {
            console.log("mb", error)
            error = error !== "Nenhum resultado encontrado." 
                ? "Erro de conexão." : error
            content.innerHTML = `<p>${error}</p>`
        })
})