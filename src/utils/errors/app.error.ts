import { StatusCodes } from "http-status-codes";

export interface AppError extends Error {
    statusCode: number
}

export class NotfoundError implements AppError {
    name: string;
    statusCode: number;
    message: string;

    constructor(message: string) {
        this.statusCode = StatusCodes.NOT_FOUND;
        this.message = message;
        this.name = 'NotfoundError'
    } 
}

export class InternalServerError implements AppError {
    name: string;
    statusCode: number;
    message: string;

    constructor(message: string) {
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        this.message = message;
        this.name = 'InternalServerError';
    } 
}

export class BadRequestError implements AppError {
    name: string;
    statusCode: number;
    message: string;

    constructor(message: string) {
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.message = message;
        this.name = 'BadRequestError'
    } 
}