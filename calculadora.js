var valor
var resultado
function botao(num){
    valor = document.calc.visor.value += num
}
function reseta(){
    document.calc.visor.value = ''
}
function calcular(){
    resultado = eval(valor)
    document.calc.visor.value = resultado.toLocaleString('pt-br');
}
document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode')
    const html = document.querySelector('html')
    const inputDarkMode = document.getElementById('input-dark-mode')

    if(darkModeStorage){
        html.setAttribute("dark", "true")
    }

    inputDarkMode.addEventListener('change', () => {
        if(inputDarkMode.checked){
            html.setAttribute("dark", "true")
            localStorage.setItem('dark-mode', true)
        }else{
            html.removeAttribute("dark")
            localStorage.removeItem('dark-mode')
        }
   })
})