import { UseCase } from "common";
import { IAgoraFileWriter, IRemoteMyCdnReader } from "services";


export interface MyCdnToAgoraFormatUseCaseInput {
    sourceUrl: string;
    targetPath: string;
}


export class MyCdnToAgoraFormatUseCase implements UseCase<MyCdnToAgoraFormatUseCaseInput | undefined, Promise<any>> {

    constructor(
        private readonly remoteMyCdnReader: IRemoteMyCdnReader, 
        private readonly agoraFileWriter: IAgoraFileWriter
    ) 
    {}

    async execute({ sourceUrl, targetPath }: MyCdnToAgoraFormatUseCaseInput) : Promise<any> {
        if (!sourceUrl) {
            throw new Error('Informe a url do \"Minha CDN Arquivo\" ');
        }

        if (!targetPath) {
            throw new Error('Informe o destino de escrita do \"Agora arquivo \"');
        }

        const myCdnFile = await this.remoteMyCdnReader.read(sourceUrl);

        await this.agoraFileWriter.writeFromMyCdn(myCdnFile, targetPath);
    }

}