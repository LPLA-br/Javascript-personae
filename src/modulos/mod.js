// mod.js

export function sept()
{
    let string = "E C M A S C R I P T";
    console.log( string );    
}

export function aleat( min = 1000, max = 5000 )
{
    const numero = Math.random() * ( max - min ) + min;
    return Math.floor( numero );
}
