const form = document.getElementById("form-deposito")
const nomeBeneficiario = document.querySelector(`#nome-beneficiario`)
const containerMensagemErro = document.querySelector('.error-message')
let formValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const numeroContaBeneficiario = document.querySelector(`#numero-conta`)
    const valorDeposito = document.querySelector(`#valor-deposito`)
    const descricao = document.querySelector(`#descricao`)
    const mensagemSucesso = `Montante de <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b>, conta: <b>${numeroContaBeneficiario.value}</b> sucesso!`
    

    if (formValido) {
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

nomeBeneficiario.addEventListener('keyup', function(e){
    formValido = validaNome(e.target.value)

    if(!formValido) {
        nomeBeneficiario.classList.add('error')
        // nomeBeneficiario.style.border = '1px solid red'
        containerMensagemErro.style.display = "block"
    } else {
        nomeBeneficiario.classList.remove('error')
        nomeBeneficiario.style.border = ''
        containerMensagemErro.style.display = 'none'
    }
})