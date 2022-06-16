import { RemoteMyCdnReader } from './remote-my-cdn-reader';
import sinon, { SinonStub } from 'sinon';
import axios from 'axios';
import * as CSV from 'csv-string';
import { MyCdn } from 'models';




describe('RemoteMyCdn Class Reader implementations tests', () => {
    let _csv!: SinonStub;
    let _axios!: SinonStub;

    beforeEach(() => {
        _axios = sinon.stub(axios, 'get').returns(Promise.resolve(({
            data: `312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2`,
        })));
        _csv = sinon.stub(CSV, 'parse').returns([['312', '200', 'HIT', '"GET /robots.txt HTTP/1.1"', '100.2']] as any);
    });

    afterEach(() => {
        _csv.restore();
        _axios.restore();
    });

    it('Should download file', async () => {
        const service = new RemoteMyCdnReader();
        const url = 'https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt';

        const result = await service.read(url);

        expect(_axios.called).toBeTruthy();
        expect(_csv.called).toBeTruthy();
        expect(result).toEqual([
            new MyCdn({
                title: '"GET /robots.txt HTTP/1.1"',
                responseSize: 312,
                statusCode: 200,
                cacheStatus: 'HIT',
                timeTaken: 100.2
            })
        ]);
    });

});