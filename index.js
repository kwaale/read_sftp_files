const ftp = require("basic-ftp");
const fs = require("fs");

example();

async function example(){
    const client = new ftp.Client()
    client.ftp.verbose = true;
    try {
        console.log('linea 1');
        // const secureOptions = {
        //     // Necessary only if the server requires client certificate authentication.
        //     key: fs.readFileSync('client-key.pem'),
        //     cert: fs.readFileSync('client-cert.pem'),
        //     // Necessary only if the server uses a self-signed certificate.
        //     ca: [ fs.readFileSync('server-cert.pem') ],
        //     // Necessary only if the server's cert isn't for "localhost".
        //     checkServerIdentity: () => { return null; },
        //   };
        await client.access({
            host:"194.005.159.161",
            user:"mguida",
            password:"QWEzxc2021##",
            secure:true,
            port:22,
            //secureOptions:secureOptions
        });
        await client.ensureDir("/filtros")
        console.log('linea 2');
        
       //Carpeta: /filtros
        console.log(await client.list("/filtros"));
        //await client.uploadFrom("Callcenter_LVC_Envio_Encuesta_20210824_1.csv")
        //await client.downloadTo("Callcenter_LVC_Envio_Encuesta_20210824_1.csv")
    } catch (error) {
        console.log('XXXX',error)
    }
    console.log('linea 3');
    client.close();
}

console.log('sfdsfd');