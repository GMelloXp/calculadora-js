const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

//Agora vamos criar um array com todas as teclas que terão na nossa calculadora

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", " "]

//vamos fazer com que os botões inseridos na calculadora possam ser acionados com o click do mouse

document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {

    charKeyBtn.addEventListener('click', function() {

        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

//aqui atribuiremos a função de limpar o display da calculadora para botão C

document.getElementById('clear').addEventListener('click', function() {

    input.value = " "
    input.focus()
})


//vamos criar agora um evento para quando as teclas do teclado forem pressionadas
input.addEventListener('keydown', function(ev) {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {

        input.value += ev.key
        return
    }

    //fazendo com que a tecla backspace do teclado seja acionada pala limpar o último elemento digitado
     if (ev.key === 'Backspace') {

        input.value = input.value.slice(0, -1)
     }
    //fazendo com que a tecla enter calcule o resultado
     if(ev.key === 'Enter') {

         
     }
})

//vamos adicionar ao botão "=" a funcionalidade para calcular

document.getElementById('equal').addEventListener('click', calculate)

//vamos criar uma função para calcular os valores na calculadora

function calculate() {

    //aqui vamos implementar a funcionalidade para quando aparecer algum erro, ou seja, tratamento de erro
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    //aqui é a funcionalidade para fazer os cálculos da calculadora
    const result = eval(input.value)
    resultInput.value = result

    //aqui vamos fazer com que a msg de erro não apareça
    resultInput.classList.remove('error')
}

//aqui vamos adicionar a funcionalidade para o botão de copiar para a área de transferência

document.getElementById('copyToClipboard').addEventListener('click', function(ev) {

    const button = ev.currentTarget
    //agora vamos criar um if para verificar se o texto do botão é igual a 'copy'
    if(button.innerText === 'Copy') {

        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {

        //este else é para quando o botão já tiver copiado para a área de transferência

        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})


//agora iremos adicionar a funcionalidade de trocar o tema da nossa aplicação

document.getElementById('themeSwitcher').addEventListener('click', function() {

    //para mudar o tema para claro
    if(main.dataset.theme === 'dark') {

        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#524a9b')
        main.dataset.theme = 'light'
    } else {

        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#6f62dd')
        main.dataset.theme = 'dark'
    }
})