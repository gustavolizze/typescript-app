import { UseCase } from "common";
import fetch from 'cross-fetch';
import * as CSV from 'csv-string';


export interface MyCdnToAgoraFormatUseCaseInput {
    sourceUrl: string;
    targetPath: string;
}


export class MyCdnToAgoraFormatUseCase implements UseCase<MyCdnToAgoraFormatUseCaseInput | undefined, Promise<any>> {

    async execute({ sourceUrl, targetPath }: MyCdnToAgoraFormatUseCaseInput) : Promise<any> {
        const myCdn = await fetch(sourceUrl).then(res => res.text());

        const myCdnCsv = CSV.parse(myCdn, { comma: "|", });

        return Promise.resolve(myCdnCsv);
    }

}