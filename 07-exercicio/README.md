# Exercicio API busca artistas

1. escutar pelo evento de submissao do input
    1. pegar o valor dentro do input
    2. usar o valor pra fazer a busca
        1. musicbrainz api - https://wiki.musicbrainz.org/Development/JSON_Web_Service
            exemplo: http://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json
        2. google imagens api
            1. api key - https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
            2. cx - https://cse.google.com/all
            exemplo: https://www.googleapis.com/customsearch/v1?key=AIzaSyC6255HAVIYivmIaVx-nGRnPHAnRokzLrk&cx=007625223586937350343:u5_zvsdy0ki&q=nirvana&searchType=image&imgSize=huge
    3. verifica se retornou algo ou nao
        - se retornou... tranforma em um objeto e usa os dados pra criar o html
        - se nao retornou... mlstra mensagem avisando que nao teve resultados encontrados
        - se deu erro... avisa o usuario que deu erro

