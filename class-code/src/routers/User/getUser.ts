import { Response, Request, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
const express = require('express');

export async function getUserWithData( req: Request, res: Response, next: NextFunction) {
    const { UserId} = req.params;

    const userRepo = AppDataSource.getRepository(User);

    const user = await userRepo.find({
        relations: {
            user_data: true
        },
        where: {
            id: +UserId
        }
    })
    
    return res.status(200).json(user)
}
