function verificarrespuestas(){
   // alert("");

   var total = 5;  /*total de preguntas*/
   var puntos = 0;  /*puntos a responder cada pregunta*/

   var myform = document.forms["testform"]; /*referencia al formulario*/
var respuestas = ["b","d","a","b","a"];  /*almacena las respuestas de las preguntas*/
/*respuestas   =   1   2   3   4   5 */
for(var i = 1; i <= total; i++){/*ciclo for */
    if(myform["p" + i].value === null || myform["p" + i].value === ""){  /*sentencia if - analiza la respuesta de cada pregunta. valor "p1" (atributo name) */
    /*( || ) devuelve el valor booleano true si uno o ambos operandos son true y, de lo contrario, devuelven false.*/
       alert("te falta responder la pregunta 👉🏻" + " " + "#" + i);  /*alerta (mensaje) en pantalla*/
       return false; /*permite terminar con el ciclo "for"*/
    }else{ /*sentencia - verifica si la respuesta es correctas*/
       if(myform["p" + i].value === respuestas[i - 1]){ /*verifica las espuesta y las compara con las correctas */
          puntos++; /*obtenemos los puntos correctos elegidos por el usuario*/
       }
    }
}

 var resultado = document.getElementById("resultado"); /*resultado (puntos)*/
 /*resultado.innerHTML = '<h3>Obtuvistes <span>'+ puntos +'</span> de <span>'+ total +' puntos  </span></h3>';*/

 alert (resultado.innerHTML ="obtuviste" + " " + puntos + " " + "de" + " " + total + " " + "puntos.");/*mensje en pantalla*/
 return false; /*termina con todo el codigo*/
}

