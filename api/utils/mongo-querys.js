
const { MongoClient } = require('mongodb');
require('dotenv').config()

async function clonarColeccion() {
    const uri = process.env.NODE_ENV === 'development' ? process.env.MONGODB_URI_DEV  : process.env.MONGODB_URI;

    const client = new MongoClient(uri);

    const db = process.env.NODE_ENV === 'development' ? 'pacucoDev' : 'pacuco';

    try {
        await client.connect();
        const origen = client.db(db).collection("guardapolvos");
        const destino = client.db(db).collection("guardapolvos_backup");

        const documentos = await origen.find().toArray();
        if (documentos.length > 0) {
            await destino.insertMany(documentos);
            console.log("Colección clonada con éxito");
        } else {
            console.log("La colección original está vacía");
        }

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

module.exports = clonarColeccion;
