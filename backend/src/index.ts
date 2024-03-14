import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config"

const app = express();
const PORT: number = 5000;

app.use(express.json());
app.use(cors());

app.get('/test', (_req: Request, res: Response) => {
    res.json({msg: "Hello"})
})

app.listen(PORT,() => {
  console.log(`server running at port:${PORT}`)
})
