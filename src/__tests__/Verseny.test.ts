import Verseny from "../Verseny"
import fs from 'fs';

describe('Verseny',()=>{
    let _verseny:Verseny;
    beforeAll(()=>{
        _verseny= new Verseny(fs.readFileSync("./verseny.txt").toString());
    })
    it('should have 2 or more Indulo',()=>{
        expect(_verseny.Indulok.length).toBeGreaterThanOrEqual(2);
    })
    it('should have valid indulos',()=>{
        expect(_verseny.Indulok.find(x=>x.LovesekSzama===0)).toBeFalsy()
    })
    it('should only get indulo with 2 or more good shots in series',()=>{
        _verseny.getAllWith2OrMoreShots().forEach(x=>{
            expect(_verseny.Indulok[x-1].JoLovesek.length).toBeGreaterThanOrEqual(2);
        })
    })
    it('should only contain indulo with less shots than the recorder',()=>{
        _verseny.Indulok.forEach(x=>{
            expect(x.LovesekSzama).toBeLessThanOrEqual(_verseny.Indulok[_verseny.getInduloWithMostShots()-1].LovesekSzama)
        })
    })
    it('should get a list of indulok in appropiate formatting',()=>{
        expect(_verseny.makeSorrend().length).toBe(_verseny.Indulok.length)
    })
})