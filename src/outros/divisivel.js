/*
* Programa que verifica a divisibilidade
* de um número passado pela linha de comando
* implementação em javascript
* 0 é o node, 1 é o script, 2... argumentos de linha de comando
* console.log(process.argv);
* console.log(Number(arg));
*/

const arg = process.argv.slice(2);

function main()
{
	var retorno = 0;
	for(var a = 1.0; a != 12.0; a++)
	{
		retorno = restoDeDivisão( Number(arg), a);
		console.log("resultado da divisão: %f divisão por: %i  %s", Number(arg)/a, a, retorno);
	}
}

function restoDeDivisão(valorTestado, numDivisibilidade)
{
	if( (valorTestado % numDivisibilidade) != 0 ) return "não divisivel";
	else if( (valorTestado % numDivisibilidade) == 0 ) return "divisivel";
	else return "erro tosco";
}

main();
