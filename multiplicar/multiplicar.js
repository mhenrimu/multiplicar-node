const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            console.log("Uno de los argumentos no es entero");
        }
        let dato = "";
        for (let i = 0; i <= limite; i++) {
            dato += `${base} * ${i} = ${base * i}\n`;
        }
        if (dato === "") {
            reject("No hay resultados")
        } else {
            resolve(dato);
        };
    })
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("Usted debe ingresar un número");
            return
        }

        let data = "";

        for (let i = 0; i <= limite; i++)
            data += `${base} * ${i} = ${base * i}\n`;

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })


}

module.exports = { crearArchivo, listarTabla }