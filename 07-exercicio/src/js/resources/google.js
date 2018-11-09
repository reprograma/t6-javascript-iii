import axios from 'axios'
import credentials from '../credentials'

function google_image_search(search, index) {
    return new Promise(function (resolve, reject) {
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&q=${search}&searchType=image&imgSize=huge`)
            .then(function (response) {
                const image_index = index ? index : 0
                if (response.data.items[index]) {
                    resolve(response.data.items[image_index].link)
                } else {
                    reject("Nenhum resultado encontrado.")
                }
            })
            .catch(function (error) {
                reject(error)
            });
    })
}

export default google_image_search