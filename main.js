var displayBuffer ="";
var numero ="";
var elemento = [undefined, undefined, undefined];
var resultado = undefined;


 function pressionarNumero(num){
     numero = numero.concat(num.innerHTML);
     exibirDisplay(num.innerHTML);

 }

 function pressionarOperador(operacao){
     elemento[0] = numero;
     elemento[1] = operacao.innerHTML;
     exibirDisplay(operacao.innerHTML);
     numero ="";
 }

 function pressionarIgual(){
     elemento[2] = numero;
     switch(elemento[1]){
         case "+":
            resultado = Number (elemento[0]) + Number(elemento[2]);
            break
         case  "-":
            resultado = Number (elemento[0]) - Number(elemento[2]);
            break
         case  "*":
            resultado = Number (elemento[0]) * Number(elemento[2]);
            break
         case "/":
            resultado = Number (elemento[0]) / Number(elemento[2]); 
            break     


     }
     
     limparDisplay();
     exibirDisplay(resultado);
 }

 function limparMemoria(){
    numero ="";
    elementos = [undefined,undefined,undefined];
    resultado = undefined;

 }

 function limparDisplay(){
     displayBuffer="";
     var tela = document.getElementById("display");
     tela.value = displayBuffer;

 }

 function limparTudo(){
     limparDisplay();
     limparMemoria();
 }

 function exibirDisplay(conteudo){
     displayBuffer = displayBuffer.concat(conteudo);
     var tela = document.getElementById("display");
     tela.value = displayBuffer;


 }
