import { MyCdn } from "models";


export interface IAgoraFileWriter {
    writeFromMyCdn(myCdnRows: MyCdn[], localPath: string): Promise<void>;
}