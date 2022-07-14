/*creará una función que toma una lista y devuelve una lista en el orden inverso.
[1, 2, 3, 4]  -> [4, 3, 2, 1]
[9, 2, 0, 7]  -> [7, 0, 2, 9]*/

function numerosEnReversa(arreglo) {
  const nuevoArreglo = [];

  for (let i = arreglo.length - 1; i >= 0; i--) {
    nuevoArreglo.push(arreglo[i]);
  }
  return nuevoArreglo;
}
const arregloReversa = numerosEnReversa([900000, 1, 2, 3, 23, 56, 78, 23]);

/*Complete el método/función para que convierta las palabras delimitadas por guiones/guiones
bajos en mayúsculas y minúsculas. La primera palabra dentro de la salida debe estar en mayúsculas
solo si la palabra original estaba en mayúsculas (conocido como Upper Camel Case, también conocido como caso Pascal)."the-stealth-warrior"se convierte en "theStealthWarrior" "The_Stealth_Warrior"se convierte en"TheStealthWarrior"*/

function transformar(input) {
  let res = ""; //En res almacenamos el resultado

  for (let i = 0; i < input.length; i++) {
    //Recorremos la entrada caracter por caracter
    if (input[i] === "-" || input[i] === "_") {
      //Si el caracter es - o _
      res += input[i + 1].toUpperCase(); //Agregamos la siguiente letra, convertida a mayúscula, a res
      i++; //Nos salteamos 1 caracter
    } else {
      //Si es cualquier otro caracter
      res += input[i]; //Lo agregamos a res
    }
  }
  return res;
}
//Hallar el cuadrado perfecto de un numero

var isSquare = function (n) {
  let valor = Math.sqrt(n);
  if (valor - Math.floor(valor) != 0 || isNaN(valor)) {
    return false;
  }

  return true;
};
//console.log(isSquare(0));

//comprobar si hay la misma cantidad de x que de o en la cadena ,si no se encuentra debe retornar true

function XO(str) {
  let cadena;
  if (str == undefined) {
    cadena = "";
  } else {
    cadena = str;
  }
  const diccionario = {
    valorO: 0,
    valorX: 0,
  };
  let cont1 = 0;
  let cont2 = 0;
  for (let i = 0; i < str.length; i++) {
    if (normalize(str[i]) == "O") {
      diccionario.valorO = ++cont1;
    } else if (normalize(str[i]) == "X") {
      diccionario.valorX = ++cont2;
    }
  }

  if (
    diccionario.valorO == diccionario.valorX &&
    (diccionario.valorO && diccionario.valorX) == 0
  ) {
    return true;
  } else {
    return false;
  }
}

function normalize(letra) {
  return letra.toUpperCase();
}
//Ordenar una cadena de acuerdo al numero que viene en su palabra ejemplo "hola2 giovani1"  salida "giovani1 hola2"
function order(words) {
  if (words === "") {
    return "";
  }
  let listaw = words.split(" ");
  const regex = /(\d+)/g;
  const arregloPalabras = [];
  let resultado = "";
  for (let i = 0; i < listaw.length; i++) {
    arregloPalabras.push({
      numero: listaw[i].match(regex)[0],
      valor: listaw[i],
    });
  }
  const palabrasOrdenadas = arregloPalabras.sort(function (a, b) {
    return a.numero - b.numero;
  });
  palabrasOrdenadas.forEach((listaOrdenada) => {
    resultado += listaOrdenada.valor + " ";
  });
  return resultado.trim();
}
//asociar los mensajes con respecto a los arreglos
/*  []                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"  */
function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  }
  for (let i = 0; i < names.length; i++) {
    if (names.length == 1) {
      return `${names[0]} likes this`;
    } else if (names.length == 2) {
      return `${names[0]} and ${names[1]} likes this`;
    } else if (names.length == 3) {
      return `${names[0]},${names[1]} and ${names[2]} likes this`;
    } else {
      return `${names[0]},${names[1]} and ${
        names.length - 2
      } others likes this`;
    }
  }
}
//console.log(likes(["Jacob", "Alex", "Mark", "Max", "Gio"]));

/*Una forma común de lidiar con esta situación es eliminar todas las vocales de los comentarios de los trolls, neutralizando la amenaza.
Su tarea es escribir una función que tome una cadena y devuelva una nueva cadena con todas las vocales eliminadas.
Por ejemplo, la cadena "¡Este sitio web es para perdedores LOL!" se convertiría en "Ths wbst s fr lsrs LL!".
Nota: para este kata yno se considera una vocal.
*/

function disemvowel(str) {
  const expresionRegular = /[^a|e|i|o|u]/gi;
  const arregloPalabra = str.match(expresionRegular);
  let frase = "";
  for (let index = 0; index < arregloPalabra.length; index++) {
    frase += arregloPalabra[index];
  }

  return frase;
}
//console.log(disemvowel("This website is for losers LOL!"));
/*Implemente una función que sume dos números 
y devuelva su suma en binario. La conversión se puede hacer antes o después de la adición. */

function addBinary(a, b) {
  const sumaNumeros = a + b;
  return sumaNumeros.toString(2);
}
//console.log(addBinary(3, 0));

//terorema de desigualdad de un triangulo,comprobar si se puede formar el triangulo
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}
//console.log(isTriangle(7, 2, 2));

//convertir de binario a decimal
// [0, 0, 0, 1]
const binaryArrayToNumber = (arr) => {
  const reversed = arr.reverse();
  let valorDecimal = null;
  for (let index = 0; index < reversed.length; index++) {
    if (reversed[index] == 1) {
      valorDecimal = valorDecimal + Math.pow(2, index);
    }
  }
  return valorDecimal;
};
binaryArrayToNumber([0, 0, 0, 0]);

//pasar un valor rgb rango de (0-255) a hexadecimal con codificacion de 6 digitos y devolver el valor mas cercano a un numero no valido
function rgb(r, g, b) {
  let arrValores = [r, g, b].map((valores) =>
    valores < 255 ? (valores < 0 ? 0 : valores) : 255
  );
  const [valor1, valor2, valor3] = arrValores;
  let cadenaHexadecimal = (
    (valor1.toString(16).length == 1
      ? "0" + valor1.toString(16)
      : valor1.toString(16)) +
    (valor2.toString(16).length == 1
      ? "0" + valor2.toString(16)
      : valor2.toString(16)) +
    (valor3.toString(16).length == 1
      ? "0" + valor3.toString(16)
      : valor3.toString(16))
  ).toUpperCase();

  return cadenaHexadecimal;
}
rgb(7723456, -12, 0);

//Dados dos arreglos  A y B retornar los numeros que no pertenezca a la interseccion

function arrayDiff(a, b) {
  let arrayNuevo = a.filter((valorA) => {
    return !b.includes(valorA);
  });
  return arrayNuevo;
}
arrayDiff([2, 2, 3, 4, 5, 6], [2, 2, 3]);
//Funcion de tribonacci,retornar la suma de los tres numeros consecutivos,dependiendo del valor de entrada n
function tribonacci(signature, n) {
  if (n == 0) {
    return [];
  }
  let sumaValores = signature;
  let suma = 0;
  let acumulador = 0;
  for (let index = 0; index < n - 3; index++) {
    for (let i = acumulador; i < sumaValores.length; i++) {
      suma += sumaValores[i];
    }
    acumulador++;
    sumaValores.push(suma);
    suma = 0;
  }
  return sumaValores;
}
//console.log(tribonacci([1, 1, 1], 1));
tribonacci([1, 1, 1], 1);

/*mover la primera letra de cada palabra al final de la misma
luego agregar "ay" al final de la misma  ejemplo:"botella----> otellabay" no debe modificar signos ?¡¿' */

function pigIt(str) {
  const nuevaCadena = str.split(" ");
  const expresion = /[^¿?&!¡]/g;
  const salida = nuevaCadena.map((palabra) => {
    if (palabra.match(expresion)) {
      return palabra.slice(1) + palabra.slice(0, 1) + "ay";
    } else {
      return palabra;
    }
  });
  return salida.join(" ");
}
pigIt("Pig latin is cool");
//console.log(pigIt("Pig latin is cool !"));

//escriba una funcion que reciba una cadena de 0-9 y forme un numero de telefono
function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
//console.log(createPhoneNumber([1, 2, 3, 9, 7, 6, 3, 4, 5, 1]));
//console.log("------------------------");

//dados dos arreglos retornar true si las raices de b ,estan en el arreglo a
function comp(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }
  const valor = array2.every((valor) => {
    let valoe = array1.includes(Math.sqrt(valor));

    return valoe;
  });
  return valor;
}

comp(
  [
    1, 6, 10, 0, 5, 2, 10, 5, 6, 10, 5, 3, 8, 0, 10, 2, 0, 6, 1, 4, 10, 4, 6, 6,
    9,
  ],
  [
    36, 1, 16, 1, 0, 100, 0, 100, 25, 25, 81, 100, 9, 64, 36, 4, 100, 36, 4, 16,
    1, 36, 25, 36, 100,
  ]
);
