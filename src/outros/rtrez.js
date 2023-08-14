/* Javascript
 * Regra de três simples
 * pela linha de comando*/

let argumentos = process.argv;

const modo = argumentos[2]; //modo
const d1 = Number(argumentos[3]);
const d2 = Number(argumentos[4]);
const d3 = Number(argumentos[5]);

function main()
{
	let x = 0;
	switch( modo )
	{
		case "--direta":
			x = rdireta(d1, d2, d3);
			break;
		case "--inversa":
			x = rinversa(d1, d2, d3);
			break;
		case "--help":
			ajuda();
			break;
		case "-h":
			ajuda();
			break;
		default:
			console.log("argumento de modo é inválido.");
			break;
	}
	return x;
}

function ajuda()
{
	console.log("SCRIPT modo d1 d2 d3");
	console.log("grandeza1 grandeza2");
	console.log("   d1        d2");
	console.log("   d3        X");
	console.log("modo:");
	console.log("    -h ou --help mostra ajuda.");
	console.log("    --direta  faz regra de trez direta");
	console.log("    --inversa faz regra de trez inversa");
}

function rdireta(D1, D2, D3)
{
	return (D3*D2)/D1;
}

function rinversa(D1, D2, D3)
{
	return (D1*D2)/D3;
}

console.log( main() );

