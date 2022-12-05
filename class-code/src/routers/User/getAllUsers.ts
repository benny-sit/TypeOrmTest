import { Response, Request, NextFunction } from "express";
import {AppDataSource} from "../../data-source" 
import { User } from "../../entity/User";


export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
    const userRepo = await AppDataSource.getRepository(User)

    return res.status(200).send(await userRepo.find())
}