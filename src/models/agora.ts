import { MyCdn } from './my-cdn';

export class Agora {
    title!: string;
    httpMethod!: string;
    statusCode!: number;
    uriPath!: string;
    timeTaken!: number;
    responseSize!: number;
    cacheStatus!: string;


    constructor({ title, cacheStatus, httpMethod, responseSize, statusCode, timeTaken, uriPath  }: {
        title: string,
        httpMethod: string,
        statusCode: number,
        uriPath: string,
        timeTaken: number,
        responseSize: number,
        cacheStatus: string
    }) {
        this.title = title;
        this.cacheStatus = cacheStatus;
        this.httpMethod = httpMethod;
        this.responseSize = responseSize;
        this.statusCode = statusCode;
        this.timeTaken = timeTaken;
        this.uriPath = uriPath;
    }

    toString() {
        return `${this.title} ${this.httpMethod} ${this.statusCode} ${this.uriPath} ${this.timeTaken} ${this.responseSize} ${this.cacheStatus}`;
    }


    static fromMyCdn(input: MyCdn): Agora {
        const titleParts = input.title.replace(/"/g, '').split(' ');
        const httpMethod =  titleParts[0];
        const uriPath = titleParts[1];

        return new Agora({
            title: "MINHA CDN",
            cacheStatus: input.cacheStatus,
            timeTaken: input.timeTaken,
            responseSize: input.responseSize,
            statusCode: input.statusCode,
            uriPath,
            httpMethod
        });
    }
}