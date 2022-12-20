// parametros de funçao

              //2     //2
function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma(5,10));

// parametros x argumentos

// parametros tem uma ordem

function nomeIdade (nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log (nomeIdade("Bruna",29));

                     // 1 como valor inicial, e todo numero multiplicado por 1 = a ele mesmo
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}

                            //9       //6
console.log(multiplica(soma(4,5), soma(3,3)));

                        //9       
 console.log(multiplica(soma(4,5)))