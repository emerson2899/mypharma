import { Schema, Model, model, connection } from 'mongoose';


type CategoriType = {
name: string,

}

const schema = new Schema<CategoriType>({
name:String, 
})


// Criando o Model
const modelCategori: string = 'categori';

const categoriModel = connection && connection.models[modelCategori]
? (connection.models[modelCategori] as Model<CategoriType>)
: model<CategoriType>(modelCategori, schema);

export default categoriModel;  