/*Tienes dos arreglos y un índice.
Copia cada elemento del primer arreglo en el segundo arreglo, en orden.
Comienza insertando elementos en el índice n del segundo arreglo.
Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer
iguales luego de que se ejecute la función.*/

function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
  //Otra forma es : let result = arr2.slice(0,2);
  //solo que este ejercicio te pide que sea en orden.
  for(let i=0; i<arr1.length; i++){
    result.splice(n, 0, arr1[i]);
    n++
    //n++ no hace falta
  }
  return result;
}

frankenSplice([1, 2], ["a", "b"], 1);
