import { MyCdnToAgoraFormatUseCase } from 'use-cases';
import { AgoraFileWriter, RemoteMyCdnReader } from 'services/implementations';


(async function main () {
    const sourceUrl = process.argv.slice(2)[0];
    const targetPath = process.argv.slice(2)[1];

    console.log('Starting ...');
    console.log(`Read from ${sourceUrl}`);
    console.log(`Write to ${targetPath}`);

    await new MyCdnToAgoraFormatUseCase(new RemoteMyCdnReader(), new AgoraFileWriter())
        .execute({ sourceUrl, targetPath })
        .then(() => console.log(`End Successfull`))
        .catch((err) => console.error(err.message));
})();