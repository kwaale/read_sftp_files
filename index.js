const ftp = require("basic-ftp");

example();

async function example(){
    const client = new ftp.Client()
    client.ftp.verbose = true;
    try {
        console.log('linea 1');
        await client.access({
            host:"194.5.159.161",
            user:"mguida",
            password:"QWEzxc2021##",
            secure:true,
            port:22,
        })
        console.log('linea 2');
        
       //Carpeta: /filtros
       //await client.ensureDir("/filtros/")
        console.log('await client.list("/filtros")');
        //console.log(await client.list("/filtros"));
        //await client.uploadFrom("Callcenter_LVC_Envio_Encuesta_20210824_1.csv")
        //await client.downloadTo("Callcenter_LVC_Envio_Encuesta_20210824_1.csv")
    } catch (error) {
        console.log('XXXX',error)
    }
    client.close();
}

console.log('sfdsfd');