import { DataSource } from "typeorm"

import Product from './entity/Product';
import Comment from './entity/Comment';

import * as dotenv from 'dotenv';
import ProductSize from './entity/ProductSize';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "products-arsenii",
    synchronize: true,
    logging: true,
    entities: [Product, Comment, ProductSize],
    migrations: [],
    subscribers: [],
})
