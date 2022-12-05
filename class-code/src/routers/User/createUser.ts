import { Response, Request, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
const express = require('express');

export async function createUser( req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    console.log(user)

    const userRepo = AppDataSource.getRepository(User)

    let ans;
    try {
        ans = await userRepo.insert(user);

    } catch (error) {
        console.log(typeof error.errno, typeof process.env.DUP_ERROR_CODE)
        if (error.errno === +process.env.DUP_ERROR_CODE) {
            return res.status(400).json({error: "Email already exists"})
        }
        return res.status(400).json({code: error.code});
    }

    return res.status(200).json(ans)
}   
