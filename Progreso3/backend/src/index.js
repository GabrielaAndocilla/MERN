require('dotenv').config();

const app =require('./app');
require('./database');
const port= 4000;


async function main(){
    const port= app.get('port');
    await app.listen(port)
    console.log(`Servidor iniciado en el puerto  ${port}`);

}

main(); 
