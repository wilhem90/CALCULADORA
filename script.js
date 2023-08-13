
let calcularbtn = document.getElementById('calcular'),
valor1 = document.getElementById('txtValor1'),
valor2 = document.getElementById('txtValor2'),
cbxOperacao = document.getElementById('cbxOperacao'),
txtResultado = document.getElementById('txtResultado'),
message = ''

calcularbtn.addEventListener('click', (e) => {
    const val1 = parseFloat(valor1.value),
    val2 = parseFloat(valor2.value)

    valor1.focus()
    if(isNaN(val1)){
        message = 'Deve informar o primeiro valor valido!'

    }else{
        if (isNaN(val2)) {
            message = 'Deve informar o segundo valor valido!'
    valor2.focus()
        }else {
            message = ''
            var txtOption = (cbxOperacao.options[cbxOperacao.selectedIndex].text); 
            resultado(val1, val2, txtOption)
        }
    }

    if (message != '') {
        alert(message)
    }
})



function resultado(number1, number2, txtOption) {

    let result = '';
    if (txtOption === 'Soma') {
        result = number1 + number2
    }
    if (txtOption === 'Subtração') {
        result = number1 - number2
    }
    
    if (txtOption === 'Divisão') {
        result = number1 / number2
    }

    if (txtOption === 'Multiplicação') {
        result = number1 * number2
    }

    txtResultado.innerHTML = `A ${txtOption} entre ${number1} e ${number2} é: ${result}`
}




//FIM DO PROGRAMA