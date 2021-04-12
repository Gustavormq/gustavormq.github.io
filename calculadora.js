var valor;
function botao(num){
    valor = document.calc.visor.value += num;
}
function reseta(){
    document.calc.visor.value = (" ");
}
function calcula(){
    var resultado =eval(valor)
    document.calc.visor.value = resultado. toLocaleString ('pt-br');
}