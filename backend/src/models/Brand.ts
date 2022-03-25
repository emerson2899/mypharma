import { Schema, Model, model, connection } from 'mongoose';


type BrandType = {
name: string,

}

const schema = new Schema<BrandType>({
name:String, 
})


// Criando o Model
const modelBrand: string = 'Brand';

const BrandModel = connection && connection.models[modelBrand]
? (connection.models[modelBrand] as Model<BrandType>)
: model<BrandType>(modelBrand, schema);

export default BrandModel; 