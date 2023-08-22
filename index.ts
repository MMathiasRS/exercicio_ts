interface Numero {
  numero_01: number;
  numero_02: number;
}

function Multiplicação({ numero_01, numero_02 }: Numero): number {
  const Resultado = numero_01 * numero_02;
  return Resultado;
}

const arg: Numero = { numero_01: 3, numero_02: 2 };
const resultado = Multiplicação(arg);
console.log(resultado);

interface Pessoa {
  nome: string;
}

function Saudação(nome:string): Pessoa {
  const pessoa: Pessoa = {
    nome: nome,
  };

  return pessoa;
}


const PessoaSaudada = Saudação('mateus')
console.log(`Ola, ${PessoaSaudada.nome}`)
