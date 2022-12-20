function apresentar (nome) {
    return `meu nome é ${nome}`
}

//obs: operador de maior ou igual que >= (primeiro o operador de maior e dps o de igual)
//arrow function

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// arrow function com mais de uma linha de instruçao

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numero de 1 a 9"
    } else { 
        return num1 + num2
    }
}

// Hosting: arrow function se comporta como expressao