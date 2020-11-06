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
})