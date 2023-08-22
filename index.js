"use strict";
function Multiplicação({ numero_01, numero_02 }) {
    const Resultado = numero_01 * numero_02;
    return Resultado;
}
const arg = { numero_01: 3, numero_02: 2 };
const resultado = Multiplicação(arg);
console.log(resultado);
function Saudação(nome) {
    const pessoa = {
        nome: nome,
    };
    return pessoa;
}
const PessoaSaudada = Saudação('mateus');
console.log(`Ola, ${PessoaSaudada.nome}`);
