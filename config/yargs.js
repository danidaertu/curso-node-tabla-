const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('m', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Muestra el límite de la tabla'
    })
    .check( (argv, options) => {
        if( isNaN( argv.base )) throw 'La base tiene que ser un número'; 
        if( isNaN( argv.limit )) throw 'El límite tiene que ser un número'; 
        return true;
    })
    .argv;


    
module.exports = argv;