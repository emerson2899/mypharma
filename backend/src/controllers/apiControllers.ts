import { Request, Response } from "express";
import User from "../models/User";
import Remedios from "../models/Remedios";
import Brand from "../models/Brand";
import Categori from "../models/Categori"
/*import { Phrase } from "../models/Phrase";*/


export const homeUSer = async (req: Request, res:Response) =>{
    let usuarios = await User.find()
    console.log("USUARIOS", usuarios);
}

export const homeRemedios = async (req: Request, res:Response) =>{
    let remedios = await Remedios.find()
    console.log("REMEDIOS", remedios);
}

export const homeBrand = async (req: Request, res:Response) =>{
    let brand = await Brand.find()
    console.log("Marca", brand);
}

export const homeCategori = async (req: Request, res:Response) =>{
    let categori = await Categori.find()
    console.log("Categoria", categori);
}


export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request,res: Response) =>{
    let nRandom: number = Math.floor(Math.random()*10);
    res.json({number: nRandom})
}

export const nome =  (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({nome});
}