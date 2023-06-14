import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

class Authorization{

    authorize(request: Request, response: Response, next: NextFunction){
        const authHeader = request.headers.authorization;
            
        if(!authHeader){
            return response.status(401).json({
                code: "token.missing",
                message: "Token missing"
            });
        }

        const [, token] = authHeader.split(" ");

        const secretKey: string | undefined = process.env.TOKEN_SECRET_KEY;

        if(!secretKey){
        throw new Error("Invalid token secrety key!");
        }

        try{
            const {sub} = verify(token, secretKey) as IPayload;

            request.user_id = sub;

            next();
        } catch(error){
            return response.status(401).json({
                code: "token.expired",
                message: "Token expired"
            });
        }
    }
}

export {Authorization}
