

export class MyCdn {

    readonly responseSize!: number;
    readonly statusCode!: number;
    readonly cacheStatus!: string;
    readonly title!: string;
    readonly timeTaken!: number;


    constructor({  cacheStatus, responseSize, statusCode, timeTaken, title }: 
        { 
            responseSize: number,
            statusCode: number,
            cacheStatus: string,
            title: string,
            timeTaken: number 
        }) {
        
            this.title = title;
            this.cacheStatus = cacheStatus;
            this.responseSize = responseSize;
            this.statusCode = statusCode;
            this.timeTaken = timeTaken;
        
    }
}