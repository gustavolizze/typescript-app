import { MyCdn } from "models";

export interface IRemoteMyCdnReader {
    read(sourceUrl: string): Promise<MyCdn[]>;
}