const fs = require('fs');


const crearArchivo = async(base = 5, list = false, limit = 10) => {

    try{
        let salida = '';

    
        for(let i = 1; i <= limit ; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
    
        if(list){
            console.log("======================");
            console.log(`  Tabla del ${base}  `);
            console.log("======================");
            console.log(salida); 
        } 
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        console.log(`Tabla-${base} creada`)
    
        return `tabla-${base}.txt`;
    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}