import express, { Application, Response, Request } from "express";
import userRouter from "./routes/userRouter"

const hostName: string = "127.0.0.1";
const port: number = 9999;

const app: Application = express();


app.get("/", (request: Request, response: Response) => {
    response.json({
        msg: "Server is Started",
    })
})

app.use("/api/users", userRouter)

app.listen(port, hostName, () => {
    console.log(`Express Server Started at http://${hostName}:${port}`);
})