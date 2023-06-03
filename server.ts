import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import todosRoutes from './routes/todos.routes'
import mongoDBConnection from './config/db';
import bodyParser from 'body-parser';
import morgan from 'morgan'

dotenv.config();
const app: express.Application = express();
const env: string = process.env.ENV || "development"
const host: string = process.env.HOST || "localhost"
const port: number = Number(process.env.PORT) || 5000;

async function startServer(): Promise<void> {
    try {
        await mongoDBConnection()
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://${host}:${port} on the ${env} environment`);
        });
    } catch (error) {
        console.error('server error:', error);
        process.exit(1);
    }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use('/todos', todosRoutes)
app.get('/healthcheck', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is healthy 🚀',
    });
});

startServer();
