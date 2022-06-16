import { Agora, AgoraFile, MyCdn } from "models";
import { IAgoraFileWriter } from "services/agora-file-writer";
import fs from 'fs';


export class AgoraFileWriter implements IAgoraFileWriter {

    writeFromMyCdn(myCdnRows: MyCdn[], localPath: string): Promise<void> {
        const agoraRows = myCdnRows.map(myCdn => Agora.fromMyCdn(myCdn));
        const agoraFile = new AgoraFile({ rows: agoraRows });

        return new Promise((resolve, reject) => {
             fs.writeFile(localPath, agoraFile.toString(), {
                encoding: 'utf-8'
             }, (err) => {
                if (err) {
                    reject(err);
                }

                resolve();
             });
        });
    }

}