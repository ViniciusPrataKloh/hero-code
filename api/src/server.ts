import express, { Application, NextFunction, Request, Response } from "express";
import { UsersRoutes } from "./application/routes/UsersRoutes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersRoutes = new UsersRoutes().getRoutes();

app.use('/users', usersRoutes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof Error){
    return response.status(400).json({
      message: error.message
    });
  }

  return response.status(500).json({
    message: "Internal server error."
  });
} );

app.listen(3333, () => {
  console.log("Server is running on port 3333");
})