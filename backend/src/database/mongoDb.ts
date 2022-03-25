import { connect } from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

export const mongoConnect = async ()=>{
    try{console.log("Conectando ao banco...")
     await connect(process.env.MONGO_URL as string, {
        

     });
      console.log("Mongo DB Conectado")} catch(error){ console.log("Erro na conexão: ", error)}
}

