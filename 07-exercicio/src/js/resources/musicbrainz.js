import axios from 'axios'

function musicbrainz_artist_search() {
    axios.get('http://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json')
        .then(function (response) {
            console.log('sucesso', response.data);
        })
        .catch(function (error) {
            console.log('error', error);
        });
}

export default musicbrainz_artist_search