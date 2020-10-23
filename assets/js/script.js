let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.legth >= 100) {
        txtAssunto.innerHTML = 'Texto está grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulario enviado com sucesso')
    } else {
        alert('Preencha o furmálrio corretamente!')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.heigth = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'
}


/*var: escopo(tudo que esta dentro de {}) global, pode ser acessado em qualquer lugar
let: e esse so pode ser usado uma vez
const: constante igual java, pouco usado */

/* Case Sensitive = reconehce letras maiusculas e minisculas
por tag: get elementByTagName()
por id: getElementById()
por nome: getElementByName()
por classe: getElementsByClassNAme()
por seletor: querySelector() */

/*declaracao de variaveis */
/*declaracao de variaveis */