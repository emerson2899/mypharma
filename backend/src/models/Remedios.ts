import { Schema, Model, model, connection } from 'mongoose';


type RemediosType = {
name: string,
brand: string,
price: number,
category: string,
description: string,
invenntory: number,
}

const schema = new Schema<RemediosType>({
name:String,
brand: String,
price: Number,
category: String,
description: String,
invenntory: Number, 
})


// Criando o Model
const modelRemedios: string = 'Remedios';

const productsModel = connection && connection.models[modelRemedios]
? (connection.models[modelRemedios] as Model<RemediosType>)
: model<RemediosType>(modelRemedios, schema);

export default productsModel; 