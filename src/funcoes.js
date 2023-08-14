/* 2020 - 2023*/

import { aleat } from './mod.js';

/* FUNÇÕES
As funções, no javascript, são objetos atribuíveis a
variáveis e parâmetros de outras funções.*/

/*é possível chamar uma função comun
que fora definida abaixo no código */
conta( 5, 5, 5 );

function a1(a)
{
    let A = a < 10 ? "menor que 10" : "maior que 10";
    if( A == "menor que 10") a1( a + 1 );
    return a || "NotNumber";
}

let retorno1 = a1(11);
let funcao = a1
funcao(9);

/* FUNÇÃO ANÔNIMA
 * é aquela e definida em linha, em um lugar.
 * Não é visível ao código ou seu trecho.
*/

function construtorDeFunçõesMultiplicadoras( multiplicador )
{
    return function( valor )
    {
        return valor * multiplicador;
    }
}

// FUNÇÕES ARROW. uma forma diferente de fazer funções anônimas.

const flecha1 = (val) => { console.log( 'flecha ' + val ); }
const flecha2 = arrow => { console.log( 'rinoceteio' ); }

flecha1();
flecha2();

/* FUNÇÕES E SEUS PARÂMETROS.

Os parâmetros de uma função são armazendados
em uma variável local da função chamada "arguments" de tipo
object. Podes passar dados para funções que não
recebem nada.
 * */

function a()
{
    for ( let argumento of arguments )
    {
        console.log( argumento );
    }
}

a( 1, "Geronimo", true, 4.6 );

/*
Javascript não se importa com o uso ou
não de parâmetros. valores padrões são
permitidos.
 * */

function a3(a = 1, b = 2, c)
{
    console.log( a, b, c );
}

a3( 3, 4 );

/*OPERADOR RESTO OU REST OPERATOR.*/

function conta( b, ...resto )
{
    //...resto == [arg1, arg2, ... argN]
    console.log( a, b, resto );
    for ( let numeroDoResto of resto )
    {
        b += numeroDoResto;
    }
    return b;
}

console.dir( conta );

// CALLBACK
//corrigindo ordem de execução de operações (ou não)
//de duração variável.


function operacao1( chamada )
{
    setTimeout( ()=>{ console.log( "op1 terminou" ) }, aleat() );
    if( chamada ) chamada();
}

function operacao2( chamada )
{
    setTimeout( ()=>{ console.log( "op2 terminou" ) }, aleat() );
    if( chamada ) chamada();
}

function operacao3( chamada )
{
    setTimeout( ()=>{ console.log( "op3 terminou" ) }, aleat()  );
    if( chamada ) chamada();
}

//operacao1();
//operacao2();
//operacao3();
//console.log( 'fim operaçorum' );

operacao1( ()=>
    {
        operacao2( ()=>
            {
                operacao3( ()=>{ console.log( 'fim operaçorum.' ) } );
            }
        );
    }
);

/*Alernativamente, podes definir a callback externamente aos parâmetros.
 *para mitigar o kamehameha acima implementado*/

// IMEDIATELY INVOKED FUNCTION EXPRESSION global e outras frescuras.

(function(a, b)
{
    console.log( a + b );
}
)(10, 10)


/*FUNÇÕES GERADORAS - NÃO ENTREGA-LHE TUDO DE UMA VEZ.*/
function* geradora()
{
    let valor = 0;
    while( true )
    {
        yield valor;
        valor += 2;
    }
}

const aa = geradora();

console.log( aa.next().value );
console.log( aa.next().value );
console.log( aa.next().value );
console.log( aa.next() );

/*FUNÇÕES FÁBRICA de simples objetos*/
/* Podes construir objetos simples e matrízes
 * Com estas funções retornadoras de objetos.
 * */
function obra( nome, autor )
{
    return {
        nome: nome,
        autor: autor,
        
        // getter
        get nomeCompleto() {
            console.log( `${this.nome} ${this.autor}`);
            return `${this.nome} ${this.autor}`;
        },

        // setter
        set mudarNome(novvs) {
            this.nome = novvs;
        }
    }
}

//número de argumentos é variavel.
function gerarLista( )
{
	let index = 0;
	let retorno = [];
	for( index; index < arguments.length; index++ )
	{
		console.log( arguments[index] );
		retorno.push( arguments[ index ] );
	}
	return retorno;
}

let vx1 = obra( 'PrédioA5', 'João' );
vx1.nomeCompleto;
vx1.mudarNome = 'PredioA5-x';

let vx2 = obra( 'PrédioV6', 'Nika' );
vx2.nomeCompleto;
vx2.mudarNome = 'PrédioV7';

let listaGeradaPorFuncao = gerarLista( "A", "B", "C", "D", "E", "F" );


/* FUNÇÃO CONSTRUTORA
 * Constroi objetos assim como uma classe.
 * Pode ser substituida, no ES6, por CLASS.
 * Faz uso do operador de instânciação chamado "new".
 */

function Pessoa( nome, sobrenome )
{
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.retnome = () => { console.log( `${this.nome}` ); }
    const restricaoAcesso = () => { console.log( "Restrito" ); }
}

let p1 = new Pessoa( 'joão', 'silva' );
p1.retnome();
