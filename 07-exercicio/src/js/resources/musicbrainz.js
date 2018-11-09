import axios from 'axios'

function musicbrainz_artist_search(search) {
    return new Promise(function (resolve, reject) {
        axios.get(`http://musicbrainz.org/ws/2/artist/?query=${search}&fmt=json`)
            .then(function (response) {
                const search_result = response.data.artists[0]
                if (search_result) {
                    resolve({
                        name: search_result.name,
                        life_span: `${search_result["life-span"].begin} - ${search_result["life-span"].ended ? search_result["life-span"].end : "present"}`,
                        area: search_result.area ? search_result.area.name : ""
                    })
                } else {
                    reject("Nenhum resultado encontrado.")
                }
            })
            .catch(function (error) {
                reject(error)
            });
    })
}

export default musicbrainz_artist_search