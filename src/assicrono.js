//  ASSICRONISMO   //

import { aleat } from './mod.js';

function inferno( txt, tempo, linea)
{
    setTimeout( ()=> { console.log(`${tempo} ${txt}`); if(linea) linea(); }, tempo );
}

 // assicronismo sequencial
 // inferno das callbacks
 // pode ser mitigado com definições anônimas em variáveis. 
inferno( "A",aleat( 1000, 6000 ),
    ()=>
    { 
        inferno( "B", aleat( 1000, 7000 ),
        ()=>
        {
            inferno( "C", aleat( 1000, 8000 ) );
        });
    }
);

console.log('\n\n\n');

// PROMISES
// Representa a conclusão ou falha de uma operação assícrona

function prometo( txt, tempo )
{
    /*Retorno de instânciação de objeto*/

    return new Promise( (resolve, reject)=>
        {
            setTimeout( ()=>
                {
                    resolve(txt);
                }, tempo );
        } );
    
}

prometo( 'A', aleat( 1000, 3000 ) )
    .then( resposta =>
        {
            console.log( resposta );
            return prometo('B', aleat( 1000, 3000 ));
        }).then( resposta =>
        {
            console.log( resposta );
            return prometo('B', aleat( 1000, 3000 ));
        }).catch();



