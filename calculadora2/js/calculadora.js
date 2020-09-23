function calcular(operacao){
   let valor1 = parseInt(document.op.valor1.value);
   let valor2 = parseInt(document.op.valor2.value);
   let resultado = 0;
   if(isNaN(valor1) || isNaN(valor2)){
      alert('Valores inválidos!');
   }
   else{
      switch(operacao){
         case 'somar':
             resultado = valor1 + valor2;
             break;
         case 'sub':
             resultado = valor1 - valor2;
             break;
         case 'div':
             resultado = valor1 / valor2;
             break;
         case 'mult':
             resultado = valor1 * valor2;
             break;
         default:
             resultado = 0;
     }
     document.op.resultado.value = resultado;

   }
   
  
}

function apagar(){
   document.op.valor1.value = '';
   document.op.valor2.value = '';
   document.op.resultado.value = '';
}