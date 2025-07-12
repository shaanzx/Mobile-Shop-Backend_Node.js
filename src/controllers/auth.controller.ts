import {Request , Response} from "express";
import * as authService from "../services/auth.service";

export const authenticateUser = (request : Request , response : Response) => {
    const { username , password } = request.body;
    const authTokens = authService.authenticateUserService(username,password);
    if (!authTokens) {
        response.status(401).json({error: "Invalid username or password"});
        return;
    } else {
        response.status(200).json({
            message: "User authenticated successfully",
            accessToken: authTokens.accessToken,
            refreshToken: authTokens.refreshToken
        });
    }
}