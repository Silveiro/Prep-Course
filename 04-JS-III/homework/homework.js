// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  arry = array.shift();
  return (arry);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  arry = array.pop();
  return (arry);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  arry = array.length;
  return (arry);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  arry = array.map(myFunction);
  function myFunction(value, index, arreglo) {
    return value + 1;
  }
  return (arry);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return (array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return (array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
    var totall = ""; 
    var nuevoArreglito = [];
    for(var i = 0; i<palabras.length;i++)
    nuevoArreglito.push(palabras[i]);
    return nuevoArreglito.join(" ");
  }




function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  newArray = array.some(myNewFunction);
  function myNewFunction(value, index, array) {
    return elemento == value;
  }
  return newArray;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var totall = 0;


  numeros.forEach(function (a) { totall += a; });
  var s = Math.round(totall);
  var g = s.toFixed(0); var m = parseInt(g);
  return m;
};




function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var totall = 0;


  resultadosTest.forEach(function (a) { totall += a; });
  var s = Math.round(totall);
  var g = s.toFixed(0); var m = parseInt(g);
  return m / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let nums = numeros.sort(function (a, b) { return b - a });
  arry = nums.shift();
  return (arry);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length == 0){
    return 0;
  }else if(arguments.length == 1){
    return arguments[0];
  }else{
    var total = 1;
    for (var i = 0; i < arguments.length;i++){
      total = total*arguments[i];
    }
      return total;
    }
  }


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var total = 0;
  arreglo.forEach(myFunction4);
  function myFunction4(value, index, array) {
    if (value > 18) {
      total = total + 1;
    } else {
      total = total + 0;
    }
  } return (total);

}




function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    return ("Es fin de semana");
  } else {
    return ("Es dia Laboral")
  }

}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  numerito = n.toString(); var numi = numerito[0];
  if (numi == 9) {
    return true;
  } else {
    return false;
  }

}





function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var nuevoArreg = [];
  for (var i = 0; i < arreglo.length; i++) {
    nuevoArreg.push((arreglo[0] == arreglo[i]));
  };
  var final = nuevoArreg.find(myFunctionFind);
  function myFunctionFind(value, index, array) {
    return value == false;
  } if (final == false) {
    return false;
  } else if (final == undefined) {
    return true;
  }
}




function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:  

    var m = array.filter(myFunctionFilter);
    function myFunctionFilter(value, index, array) {
      return value == "Enero" || value == "Marzo" || value == "Noviembre";
    } if (m.length > 2) {
      return m;
    } else {
      return "No se encontraron los meses pedidos";
    }
  }


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arry = array.filter(myFunction4);
  function myFunction4(value, index, array) {
    return value > 100;
  }
  return arry;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  nuevoarreglo = [];
  Loop1:
  for (let i = 0; i <= 20; i++) {
    i + 1;
    numero = numero + i; nuevoarreglo.push(numero);

    Loop2:
    for (let i = 10; i < 15; i++) {
      numero = numero + i;
      if (i === numero) break Loop1; return "Se interrumpió la ejecución";
    }
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
