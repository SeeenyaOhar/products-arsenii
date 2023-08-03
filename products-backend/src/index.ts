import "reflect-metadata"
import { AppDataSource } from "./data-source"
import { Express, Request, Response } from 'express';
import * as express from 'express';
import * as dotenv from 'dotenv';
import Product from './entity/Product';

dotenv.config();
AppDataSource.initialize();

const app: Express = express();
const port = process.env.PORT;

app.get('/api/v1/products', async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(Product);

    res.json(await repo.find());
});
  
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });