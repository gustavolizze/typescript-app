import { MyCdn } from "models";
import { AgoraFileWriter } from "./agora-file-writer";
import sinon, { SinonStub } from 'sinon';
import fs from 'fs';



describe('AgoraFileWriter Implementation class tests', () => {
    let writeFile!: SinonStub;

    beforeEach(() => {
        writeFile = sinon.stub(fs, 'writeFile');
    });


    afterEach(() => {
        writeFile.restore();
    })


    it('Should write agora file corretly', () => {
        const service = new AgoraFileWriter();

        service.writeFromMyCdn([new MyCdn({ 
            title: '"GET /robots.txt HTTP/1.1"|',
            cacheStatus: 'LOST',
            responseSize: 316,
            statusCode: 200,
            timeTaken: 515,
        })], './teste.csv');

        expect(writeFile.calledOnce).toBeTruthy();
    });
});