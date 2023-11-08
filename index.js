// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

var pokemon = "Bulbasauro";
var xpPokemon = 10000;

switch(true) {
    case xpPokemon < 1000:
        pokemon = " pokemon nivel Ferro";
        break;
    case xpPokemon >= 1001 && xpPokemon  <= 2000:
        pokemon = " pokemon nivel Bronze";
        break;
    case xpPokemon  >= 2001 && xpPokemon  <= 5000:
        pokemon = "pokemon nivel Prata";
        break;
    case xpPokemon  >= 6001 && xpPokemon  <= 7000:
        pokemon = " pokemon nivel Ouro";
        break;
    case xpPokemon  >= 7001 && xpPokemon  <= 8000:
        pokemon = " pokemon nivel Platina";
        break;
    case xpPokemon  >= 8001 && xpPokemon <= 9000:
        pokemon = " pokemon nivel Ascendente";
        break;
    case xpPokemon  >= 9001 && xpPokemon  <= 10000:
        pokemon = "pokemon nivel Imortal";
        break;
    default:
        pokemon = "pokemon nivel Radiante";
    }

    console.log(`${pokemon} é um herói de nível ${xpPokemon}.`);