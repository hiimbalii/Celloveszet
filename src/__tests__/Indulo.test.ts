import Indulo from '../Indulo';

describe('Indulo +--+',()=>{
    let _indulo:Indulo;
    beforeAll(()=>{
        _indulo= new Indulo('+--+');
    })
    it('should have 4 shots',()=>{
        expect(_indulo.LovesekSzama).toBe(4);
    })
    it('should have a loertek of 38',()=>{
        expect(_indulo.Loertek).toBe(38);
    })
    it('should have the 0. and 3. shot to be accurate',()=>{
        const joLovesek=_indulo.JoLovesek;
        expect(joLovesek.length).toBe(2);
        expect(joLovesek[0]).toBe(0);
        expect(joLovesek[1]).toBe(3);
    })
    it('should have a best series of 1',()=>{
        expect(_indulo.JoLovesSorozatHossz).toBe(1)
    })
})
describe('Indulo ++--',()=>{
    let _indulo:Indulo;
    beforeAll(()=>{
        _indulo= new Indulo('++--');
    })
    it('should have 4 shots',()=>{
        expect(_indulo.LovesekSzama).toBe(4);
    })
    it('should have a loertek of 40',()=>{
        expect(_indulo.Loertek).toBe(40);
    })
    it('should have the 0. and 1. shot to be accurate',()=>{
        const joLovesek=_indulo.JoLovesek;
        expect(joLovesek.length).toBe(2);
        expect(joLovesek[0]).toBe(0);
        expect(joLovesek[1]).toBe(1);
    })
    it('should have a best series of 2',()=>{
        expect(_indulo.JoLovesSorozatHossz).toBe(2)
    })
})