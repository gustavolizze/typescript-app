import { Agora } from './agora';
import { AgoraFile } from './agora-file';



describe('AgoraFile Class unit', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('Should create corretly', () => {
        const spy = jest.spyOn(global, 'Date');
        const agoraFile = new AgoraFile({ rows: [] });
        const date = spy.mock.instances[0];

        expect(agoraFile.version).toEqual('1.0');
        expect(agoraFile.fields).toEqual('provider http-method status-code uri-path time-taken response-size cache-status');
        expect(agoraFile.date).toEqual(date);
    })
    

    it('Should generate string', () => {
        const agora = new Agora({
            cacheStatus: 'HIT',
            httpMethod: 'POST',
            responseSize: 214,
            statusCode: 500,
            timeTaken: 315.2,
            uriPath: './test.txt',
            title: 'JEST WITH TYPESCRIPT'
        });
        const agoraFile = new AgoraFile({ rows: [agora] });
        const str = agoraFile.toString();


        expect(str).toEqual(`#Version: ${agoraFile.version}\n#Date: ${agoraFile.date.toString()}\nFields: ${agoraFile.fields}\n${agora.title} ${agora.httpMethod} ${agora.statusCode} ${agora.uriPath} ${agora.timeTaken} ${agora.responseSize} ${agora.cacheStatus}`);
    });

});