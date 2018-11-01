const input_search = document.querySelector("input")
const results_container = document.getElementById("results")

input_search.addEventListener("blur", function () {
    results_container.innerHTML = "<img id='loading' src='loading.gif' />"
    get_data(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.value}&type=video&key=${gkey}`)
        .then(function(data) {
            data = JSON.parse(data)
            results_container.innerHTML = ""
            // ou...
            // while (results_container.firstChild) {
            //     results_container.removeChild(results_container.firstChild)
            // }
            if (data.items.length > 0) {
                for (const video of data.items) {
                    results_container.innerHTML += `
                        <a href="https://www.youtube.com/watch?v=${video.id.videoId}">
                            <h1>${video.snippet.title}</h1>
                            <p>${video.snippet.description}</p>
                        </a>
                    `
                }
            } else {
                results_container.innerHTML = "<p>Nenhum resultado encontrado</p>"
            }
        })
        .catch(function(error) {
            results_container.innerHTML = `<p>${error}</p>`
        })
})