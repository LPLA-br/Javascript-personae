
let feminino =
	{
		nominativo : ["a","aes"],
		genitivo :   ["ae","arum"],
		ablativo :   ["ab","abs"],
		dativo :     ["aei","ais"],
		acusativo :  ["am","as"],
		vocativo :   ["a","aes"]
	};

let masculino =
	{
		nominativo : ["us","usis"],
		genitivo :   ["i","orum"],
		ablativo :   ["oe","ises"],
		dativo :     ["oi","isos"],
		acusativo :  ["um","os"],
		vocativo :   ["us","usis"]
	};

let neutro =
{
	nominativo : ["ie","es"],
	genitivo :   ["is","ium"],
	ablativo :   ["e","ibus"],
	dativo :     ["ei","ibuis"],
	acusativo :  ["em","eias"],
	vocativo :   ["ie","es"]
};

// node [script] [palavra] [declinacao] {[caso_especifico] [numero]}
// node declinador.js luiz -m nominativo plural
const Argumentos = process.argv;
const Numero = TamanhoMatriz(Argumentos); //número de argumentos passados.

function TamanhoMatriz(mat)
{
	let pos = 0, tamanho = 0;
	while(mat[pos] !== undefined)
	{
		++tamanho;
		++pos;
	}
	return tamanho;
}

function mostrarTabelaDeclinada( declinacao = 3 )
{
	let rotulos = ['nominativo', 'genitivo', 'ablativo', 'dativo', 'acusativo', 'vocativo'];
	let retorno = '';

	for(let linha = 0; linha <= 5; linha++)
	{
		retorno += `\n ${rotulos[linha]} `;
		for(let coluna = 0; coluna <= 1; coluna++)
		{
			if(declinacao == 3)
				retorno += ` ${ Argumentos[2] + (neutro[ rotulos[linha] ][ coluna ]) }`;
			else if(declinacao == 2)
				retorno += ` ${ Argumentos[2] + (masculino[ rotulos[linha] ][ coluna ]) }`;
			else
				retorno += ` ${ Argumentos[2] + (feminino[ rotulos[linha] ][ coluna ]) }`;
		}
	}
	console.log(retorno);
}

function casoEspecifico( declinacao = '-n', caso = 'nominativo', numero = "singular" )
{
	let Numero = {singular : 0, plural : 1};
	let Declinacao = {'-f' : 1, '-m' : 2, '-n' : 3 };
	let retorno = '';

	if(numero == 'singular')
	{
		if(Declinacao[declinacao] == 3)
		{
			retorno += ` ${ Argumentos[2] + (neutro[ caso ][ Numero.singular ]) } `;
		}
		else if(Declinacao[declinacao] == 2)
		{
			retorno += ` ${ Argumentos[2] + (masculino[ caso ][ Numero.singular ]) } `;
		}
		else retorno += ` ${ Argumentos[2] + (feminino[ caso ][ Numero.singular ]) } `;
	}
	else
	{
		if(Declinacao[declinacao] == 3)
		{
			retorno += ` ${ Argumentos[2] + (neutro[ caso ][ Numero.plural ]) } `;
		}
		else if(Declinacao[declinacao] == 2)
		{
			retorno += ` ${ Argumentos[2] + (masculino[ caso ][ Numero.plural ]) } `;
		}
		else retorno += ` ${ Argumentos[2] + (feminino[ caso ][ Numero.plural ]) } `;

	}
	console.log(retorno);
}

function ajuda()
{
	let ajuda = 'node declinador.js [palavra] [declinacao] [[caso_especifico] [numero]]\nnode declinador.js luiz -m nominativo plural';
	console.log("\nAjuda\n");
	console.log(ajuda);
}

switch( Numero )
{

	case 2:
		console.log("nenhuma palavra e declinação especificada.");
		ajuda();
		break;
	case 3:
		console.log("nenhuma declinação especificada. Usando neutra");
		mostrarTabelaDeclinada(3);
		break;
	case 4:
		switch(Argumentos[3])
		{
			case '-f':
				mostrarTabelaDeclinada(1);
				break;
			case '-m':
				mostrarTabelaDeclinada(2);
				break;
			case '-n':
				mostrarTabelaDeclinada(3);
				break;
			default:
				console.log("declinação inválida\nInsira uma dentre: -I -II -III");
				break;
		}
		break;
	case 6:
		casoEspecifico(Argumentos[3], Argumentos[4], Argumentos[5]);
		break;
	default:
		console.log('exessão');
		break;
	
}

