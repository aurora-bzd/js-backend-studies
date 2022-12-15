// tipo de dado
// booleanos

// conversao implicita -> usa == ao inves de === ( == faz comparaçao so pelo valor)
const numero = 456;
const numeroString = "456"; 
console.log (numero == numeroString);

console.log(numero + numeroString); //concatenou

// Função Number -> transforma string em number
// Função String -> transforma number em string

// conversao explicita
console.log(numero + Number(numeroString));
