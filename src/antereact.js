//ESmodules importação
// Para mais detalhes veja os diretórios:
//
import { sept } from './mod.js';
import oct from './mod2.js'; //export default

sept();
oct();

//nulish operator (apenas para null,undefined)
const idade = null;
console.log('idade: ' + (idade ?? 'não informado') );

//Objeto
let usuario =
{
    "nome": "marinelson",
    "senha": "1234"
};
console.log('nome' in usuario);
Object.keys(usuario);
Object.values(usuario);
Object.entries(usuario);

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
/* Possibilita extrair dados de arrays ou objetos em variáveis
 * distintintas. */

let mego = 0;
let megi = 0;

[ mego, megi ] = [34, 24];
console.log( "mego: ", mego, "\nmegi: ", megi, '\n' );

const { nome, senha: renomear, noexiste = "default" } = usuario;

console.log( { nome, senha: renomear, noexiste } );
console.log( nome );

//const { nome, rest... } = usuario;

const matriz1 = [1,2,3,4,5,6,7,8,9];
const [ first, , third, ...rest ] = matriz1;
console.log( [ first, , third, ...rest ] );

//Encadeiamento opcional (verificar existência de valores em objetos)
let usuario2 =
{
    nome: "joao",
    senha: "124",
    sub:
    {
        codigo: "deb23",
        geta: "24445",
        teste(){ console.log( 'teste' ) }
    }
};

console.log( usuario2.sub?.codigo ?? "noexiste" );
usuario2.sub?.teste?.();

//for in e of

let leitura = [ 'a', 'b', 'c', 'd' ];
let saida = "";
for( const valor of leitura )
{
    saida = saida.concat( valor );
}
saida = saida.concat( '\n' );
for( const index in leitura )
{
    saida = saida.concat( index );
}
console.log( saida );

//em objetos
let ship = { "code":"cvn127", "name":"nautilus" };
for( const elemento in ship )
{
    console.log( ship[elemento] );
}

//MÉTODOS DE ARRAY.
//forEach()
matriz1.forEach(item => { console.log( item ) });
//map() transformação de dados em um array.

const novamatriz = matriz1.map( item =>
    {
        if( item == 5 ) return item + 64;
        return item + 1;
    } );

console.log( JSON.stringify( novamatriz ) );

//filter() filtra um array. Busca uma seleção de dados. retorna os encontrados.

const novamatriz2 = matriz1.filter( item => item % 2 === 0 );
console.log( JSON.stringify( novamatriz2 ) );

//every() returna true se todos satisfazem uma condição.

const resultado = matriz1.every( item => typeof item === 'number' );
console.log( resultado );

//some() retorna true se pelo menos um item satisfaz uma condição.

const resultado2 = matriz1.every( item => typeof item !== 'number' );
console.log( resultado2 );

//find() encontrar o primeiro item desse array que satisfaz a condição lógica.
//findIndex() faz a mesma coisa acima descrita. Difere no retorno, pois aqui é o index.

const pares = matriz1.find( item => item % 2 === 0 );
console.log( pares );

//reduce(callback, valorInicial)
const soma = matriz1.reduce( ( acc, item )=>
    {
        console.log( acc + ',' + item );
        return acc + item;
    }, 0 );


//template literals ou Interpolações

const nome2 = "";
const mensagem = `Olá ${nome2 ? nome2 : 'visitante'}`;
console.log( mensagem );

//Promises (assícronismo)
//Sua aplicação não pode parar em espera do resultado de uma ação.

const somaDoisNumeros = (a, b) =>
{
    return new Promise( (resolve, reject) => 
    {
        //simulação de processo retardatário.
        setTimeout(() =>
        {
            if( typeof a != 'number' || typeof b != 'number')
                reject( a + b );
            else
                resolve(a + b);
            
        }, 3000);

    });
}

somaDoisNumeros(1,2).then( soma => { console.log( soma ); } ).catch( err => { console.log( err ) } ).finally( ()=>{ console.log( "Fim de execução do promise." ) } );

// Tratamento de erros para que aplicação não pare a execução

function somaConfiavel( a, b )
{
    if( typeof a !== 'number' || typeof y !== 'number' )
    {
        throw new Error( "ERRO: somaConfiavel() recebeu não numero." );
        //Há várias classes de erro além de Error.
        //  Exemplo: TypeError, SyntaxError, RangeError ...
        //Podes escrever tuas próprias classes de erro.
    }
    return a + b;
}

let estado = false;

try
{
    estado = true;    
    somaConfiavel( 'a', 2 );
    estado = false;
}
catch ( erro )
{
    console.log( erro );
}
finally
{
    estado = false;
    console.log( "Estado foi corrigido para o valor correto." );
}


// A S Y N C    Programação assícrona. Evite o atrasos e travamentos.

async function teste()
{
    try
    {
        const resposta = await fetch('https://api.github.com/users/diego3g');
        const body = await resposta.json();
        console.log( body );
        return body.name;
    }
    catch (err)
    {
        console.log( err );
    }
    finally
    {
        //finally sempre executa indepedentemente se houve erro ou não.
        console.log( "fim do fetch." );
    }
}

teste().then( nome => { console.log( nome ); } );

