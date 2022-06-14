
import { MyCdn } from './my-cdn';


describe('MyCdn Class unit', () => {

    it('Should be create corretly', () => {
        const myCdn = new MyCdn({
            title: 'ABC',
            cacheStatus: 'HIT',
            responseSize: 500,
            statusCode: 200,
            timeTaken: 699
        });

        expect(myCdn.title).toEqual('ABC');
        expect(myCdn.cacheStatus).toEqual('HIT');
        expect(myCdn.responseSize).toEqual(500);
        expect(myCdn.statusCode).toEqual(200);
        expect(myCdn.timeTaken).toEqual(699);
    })

})