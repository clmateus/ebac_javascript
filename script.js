
const numeroConta = document.getElementById("numero-conta")
const valorDeposito = document.getElementById("valor-deposito")
const descricao = document.getElementById("descricao")
const depositar = document.getElementById("btnDepositar")
const form = document.getElementById("form-deposito")

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split('')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    const nomeBeneficiario = document.getElementById("nome-beneficiario")
    if(validaNome(nomeBeneficiario.value)){
        alert('O nome não está completo!')
    } else {
        alert('Operação realizada com sucesso!')
    }
})