// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"

function formatRG(unformatted) {
    let result = unformatted.replace(/\D/g,"");
    result.split("");
    if (result.length === 9){
        return result[0] + result[1] + "." + result[2] + result[3] + result[4] + "." + result[5] + result[6] + result[7] + "-" + result[8];
    } else {
        return result[0] + result[1] + "." + result[2] + result[3] + result[4] + "." + result[5] + result[6] + result[7] + "-" + "x";
    }
}

function formatRG(unformatted) {
    const clearRg = unformatted.replace(/\D/g,"");
    return `${clearRg.substr(0, 2)}.${clearRg.substr(2, 3)}.${clearRg.substr(5, 3)}-${clearRg.substr(8, 1)}`;
}

function formatRG(unformatted) {
    const clearRg = unformatted.replace(/\D/g,"");
    return clearRg.replace(/(\d{1})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4")
}

function cpfValido(cpf) {
    return cpf.match(/(\d{3})\.(\d{3})\.(\d{3})\-(\d{2})/)
}


https://regexr.com/