/* Demostração da linguagem javascript como uma referência rápida */

/*três declarações de funções normais abaixo*/

function numeroAleatorioEmUmLimite(men, mai)
{
	men = Math.ceil(men);
	mai = Math.floor(mai);
	return Math.floor( Math.random() * (mai - men + 1)) + men;
}

function ePar(num)
{
	if(num != 0)
	{
		if( Number.isInteger((num/2)) ) return 1;
		else return 0;
	}
	return 666;
}


function demostracoes()
{
	let stringDeSelecao = Input.value;

	switch( Output.selec )
	{
		case 1:
			Output.value = "Abra o código fonte para acompanha-lo.";
			break;
		case 2:

			/*função ARROW. Flecha substitui function*/
			/*variável = parâmetros flecha {corpo}*/
			const flecha = (a,b) =>
			{
				return a+b;
			}

			/*FUNÇÃO ANÔNIMA*/
			const anonimus = function(a,b)
			{
				return a+b;
			}
			Output.value = `função anonima: ${anonimus(2,2)} função arrow: ${flecha(6,6)}`;

			break;
		case 3:
			let saida = '';
			/*CALLBACK recebe função anonima em seus argumentos*/
			function funcao(parametro)
			{
				parametro();
			}

			function texto()
			{
				saida += (" {função comum}");
			}

			funcao(texto);
			funcao( function (){ saida += " {Função anonima}" } );
			funcao( () => { saida += " {Função arrow}"} );

			Output.value = saida;
			break;
		case 4:
			let numero = 10.5;
			/*HOISTING chamando funções declaradas abaixo no código*/
			/*HOISTING não funciona para funções anônimas e arrow.*/

			let anteDefinido = eFlutuante(numero);//eFlutuante() é uma função nomeada declarada a frente no código.

			Output.value = "flutuante(1|0) " + String(anteDefinido) + ` ${numero}`;
			break;
		case 5:
			/*ORIENTAÇÃO A OBJETOS*/
			//OBJECT LITERAL objeto literalmente declarado (NOTA: objeto, não classe)
			let augusto =
			{
				"nome do individuo": "augusto",
				"vivo": false,
				"idade": 2000,
				"estaVivo": function()
				{
					if(this.idade > 120)
					{
						return "Provávelmente morto";
					}
					else if( this.idade < 0 )
					{
						return "ERRO Idade Negativa";
					}
					else
					{
						return "Provávelmente vivo";
					}
				},
				"envelhecer": function()
				{
					this.idade++;
				},
				"bens materiais":
				{
					"casa": 10,
					"carros": 5,
					"valores": [12, 4.6, "inútil", false]
				}
			}

			let acessarObjeto = "bens materiais";

			Output.value = `Nome: ${augusto['nome do individuo']} Vivo: ${augusto.estaVivo()}` +
					`Idade: ${augusto.idade} Casa: ${augusto['bens materiais'].casa}` +
					`Carros: ${augusto[acessarObjeto].carros}`;
			break;
		case 6:
			/*FUNÇÃO FACTORY retornando um objeto*/

			function construirHumano(nome, sexo = "masculino", CorOlho = "marron")
			{
				let vivo = true;

				function andar()
				{
					return "andando...";
				}

				return {
					vivo,
					CorOlho,
					sexo,
					nome,
					andar: function()
					{
						return this.name + "ambulat";
					},
					morrer: function()
					{
						this.vivo = false;
					},
					andar
				};
			}

			const augustoII = construirHumano("augusto", "masculino", "azul");
			augustoII.morrer();
			Output.value = `nome: ${augustoII.nome} sexo: ${augustoII.sexo} CorOlho: ${augustoII.CorOlho}` +
					` Vivo: ${augustoII.vivo}`;
			break;
		case 7:
			/*FUNÇÃO CONSTRUTORA ou PROTOYPE*/
			function veiculoAutomotivo(nome, numeroDeRodas)
			{
				this.nome = nome;
				this.numeroDeRodas = numeroDeRodas;
			}

			let carro = new veiculoAutomotivo("chevete", 4);
			Output.value = `NomeVeiculo: ${carro.nome} NumeroDeRodas: ${carro.numeroDeRodas}`;
			delete carro;
			break;
		case 8:
			/*---CLASS---*/
			//Ecmascript6 !

			class Retangulo
			{
				//publicos
				comprimento;
				largura;

				/*método construtor não pode
				 *ser sobrecarregado como no C++*/
				constructor(comprimento, largura)
				{
					this.comprimento = comprimento;
					this.largura = largura;
				}

				//métodos
				area()
				{
					return (this.comprimento * this.largura);
				}

				perimetro()
				{
					return ((this.comprimento * 2) + (this.largura * 2));
				}

				alterarLargura(novaLargura)
				{
					this.largura = novaLargura;
				}

				alterarComprimento(novaAltura)
				{
					this.comprimento = novaAltura;
				}
			}

			class Paralelepipedo extends Retangulo
			{
				#altura; //privado

				constructor(comprimento, largura, altura)
				{
					super(comprimento, largura); //chamando construtor da classe base.
					this.#altura = altura;
				}

				volume()
				{
					let volume = super.area() * this.#altura; //chamando método da classe base.
					return volume;
				}

				alterarAltura(novaAltura)
				{
					this.#altura = novaAltura;
				}

				//polimorfismo para perimetro OVERRIDE!

				perimetro()
				{
					return ((this.comprimento * 4) + (this.largura * 4) + (this.#altura * 4));
				}
			}

			let superficie = new Retangulo(10,20);
			let blocoDeCalcamento = new Paralelepipedo(10, 15, 10);
			superficie.alterarComprimento(20);
			Output.value = `superficie area:${superficie.area()} perimetro:${superficie.perimetro()}\n` +
					`blocoDeCalcamento volume:${blocoDeCalcamento.volume()} perimetro:${blocoDeCalcamento.perimetro()}`;

			break;
		case 9:
			/*import arquivo externo*/
			//Output.value = `pi = ${PI}, número de ouro = ${NUMERO_DE_OURO}`;
			break;
		default:
			alert(`Demostração Indisponível para o numero ${stringDeSelecao}`);
			break;
	}
}

function eFlutuante(num)
{
	if(Number(num) === num && num % 1 !== 0) return 1;
	return 0;
}

let Output = 
{
	value:'',
	selec:0
};

function main()
{
	demostracoes();
	return 0;
}

main();
