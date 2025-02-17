const form = document.getElementById("form-deposito")

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const nomeBeneficiario = document.querySelector(`#nome-beneficiario`)
    const numeroContaBeneficiario = document.querySelector(`#numero-conta`)
    const valorDeposito = document.querySelector(`#valor-deposito`)
    const descricao = document.querySelector(`#descricao`)
    const mensagemSucesso = `Montante de ${valorDeposito.value} depositado para o cliente ${nomeBeneficiario.value}, conta ${numeroContaBeneficiario.value} sucesso!`

    formValido = validaNome(nomeBeneficiario.value)
    if(formValido){
        alert(mensagemSucesso)
        nomeBeneficiario.value = "";
        numeroContaBeneficiario.value = "";
        valorDeposito.value = "";
        descricao.value = "";
    } else {
        return alert('ERRO: Digite o nome completo!')
    }
    
}) 