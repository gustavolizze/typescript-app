import { Agora } from './agora';
import { MyCdn } from './my-cdn';


describe('Agora Class unit', () => {

    it('Should be create corretly', () => {
        const agora = new Agora({
            cacheStatus: 'HIT',
            httpMethod: 'POST',
            responseSize: 214,
            statusCode: 500,
            timeTaken: 315.2,
            uriPath: './test.txt',
            title: 'JEST WITH TYPESCRIPT'
        });


        expect(agora.title).toEqual('JEST WITH TYPESCRIPT');
        expect(agora.cacheStatus).toEqual('HIT');
        expect(agora.httpMethod).toEqual('POST');
        expect(agora.responseSize).toEqual(214);
        expect(agora.statusCode).toEqual(500);
        expect(agora.timeTaken).toEqual(315.2);
        expect(agora.uriPath).toEqual('./test.txt');
    });


    it('Should create from myCdn object', () => {
        const myCdn = new MyCdn({
            title: '"GET /robots.txt HTTP/1.1"',
            cacheStatus: 'HIT',
            responseSize: 500,
            statusCode: 200,
            timeTaken: 699
        });
        const agora = Agora.fromMyCdn(myCdn);

        expect(agora.httpMethod).toEqual('GET');
        expect(agora.title).toEqual('MINHA CDN');
        expect(agora.cacheStatus).toEqual('HIT');
        expect(agora.httpMethod).toEqual('GET');
        expect(agora.responseSize).toEqual(500);
        expect(agora.statusCode).toEqual(200);
        expect(agora.timeTaken).toEqual(699);
        expect(agora.uriPath).toEqual('/robots.txt');
    });


    it('Should generate a string', () => {
        const agora = new Agora({
            cacheStatus: 'HIT',
            httpMethod: 'POST',
            responseSize: 214,
            statusCode: 500,
            timeTaken: 315.2,
            uriPath: './test.txt',
            title: 'JEST WITH TYPESCRIPT'
        });

        const str = agora.toString();

        expect(str).toEqual(`${agora.title} ${agora.httpMethod} ${agora.statusCode} ${agora.uriPath} ${agora.timeTaken} ${agora.responseSize} ${agora.cacheStatus}`);
    });

});