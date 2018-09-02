const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];

const multiplicar = require('./multiplicar/multiplicar.js');

switch (comando) {
    case 'listar':
        multiplicar.listarTabla(argv.b, argv.l)
            .then(dato => console.log(dato.green))
            .catch(err => console.log(err));
        break;
    case 'crear':
        multiplicar.crearArchivo(argv.b, argv.l)
            .then(archivo => { console.log(`Se ha generado el archivo: ${archivo.green}`); })
            .catch(err => console.log(err));
        break;
    default:
        console.log('Otra cosa');
}