import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.ts"],
    migrations: [],
    subscribers: [],
})
