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
    const mensagemSucesso = `Montante de <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b>, conta: <b>${numeroContaBeneficiario.value}</b> sucesso!`
    const containerMensagemErro = document.querySelector('.error-message')

    formValido = validaNome(nomeBeneficiario.value)
    if(formValido){
        const containerMensagemSucesso = document.querySelector('.sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none'
        nomeBeneficiario.value = "";
        numeroContaBeneficiario.value = "";
        valorDeposito.value = "";
        descricao.value = "";
    } else {
        nomeBeneficiario.style.border = '1px solid red'
        containerMensagemErro.style.display = 'block'
    }
    
}) 