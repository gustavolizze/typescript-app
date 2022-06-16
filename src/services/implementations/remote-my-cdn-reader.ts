import { MyCdn } from "models";
import { IRemoteMyCdnReader } from "services/remote-my-cdn-reader";
import axios from 'axios';
import * as CSV from 'csv-string';


export class RemoteMyCdnReader implements IRemoteMyCdnReader {

    async read(sourceUrl: string): Promise<MyCdn[]> {
        const bodyText = await axios.get(sourceUrl, { responseType: 'text' }).then(res => res.data);
        const myCdnRows = CSV.parse(bodyText, { comma: "|",  });
        const cdnObj = myCdnRows.map(result => new MyCdn({
            responseSize: +result[0],
            statusCode: +result[1],
            cacheStatus: result[2],
            title: result[3],
            timeTaken: +result[4]
        }));

        return cdnObj;
    }

}