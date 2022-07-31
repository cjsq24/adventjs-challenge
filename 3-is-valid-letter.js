/*
  El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

  Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

  Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

  ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

  Ejemplos:

  "bici coche (balón) bici coche peluche" // -> ✅
  "(muñeca) consola bici" // ✅

  "bici coche (balón bici coche" // -> ❌
  "peluche (bici [coche) bici coche balón" // -> ❌
  "(peluche {) bici" // -> ❌
  "() bici" // ❌
        

  Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/

const isValid = (letter) => {
  const regexp = /[\{\[]/;
  const splitOne = letter.split("(")[1];
  const gifts = splitOne.split(")")[0];
  return gifts !== "" && !gifts.match(regexp) && splitOne.includes(")");
};

const letter = "bici coche (balón) bici coche peluche";
console.log(isValid(letter));
