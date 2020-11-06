import { fstat } from 'fs';
import Indulo from "./Indulo";

export default class Verseny {
  private _indulok: Indulo[];

  public get Indulok(): Indulo[] {
    return this._indulok;
  }

  constructor(fileInput: string) {
    this._indulok = [];
    fileInput
      .split("\n")
      .splice(1)
      .filter((x) => x.length > 0)
      .forEach((x) => {
        this._indulok.push(new Indulo(x));
      });
  }
  public getAllWith2OrMoreShots(): number[] {
    return this._indulok
      .map((indulo, index) => {
        return { obj: indulo, szam: index };
      })
      .filter((indulo) => indulo.obj.JoLovesSorozatHossz >= 2)
      .map((x) => x.szam + 1);
  }
  public getInduloWithMostShots(): number {
    return (
      this._indulok
        .map((indulo, index) => {
          return { obj: indulo, szam: index };
        })
        .sort((a, b) => {
          return b.obj.LovesekSzama - a.obj.LovesekSzama;
        })[0].szam + 1
    );
  }
  public makeSorrend() {
    //nem szeretem így megoldani de ilyen a feladat :/
    let sorrend=this._indulok
      .map((x, i) => {
        return { sorszam: i, pontszam: x.Loertek };
      })
      .sort((a, b) => b.pontszam - a.pontszam)
      .map((x, i) => {
        return {
          sorszam: x.sorszam + 1,
          pontszam: x.pontszam,
          helyezes: i + 1,
        };
      }).sort((a,b)=>a.sorszam-b.sorszam);
    const sorok:string[]=[];
    sorrend.forEach(x=>{
        sorok.push(`${x.sorszam} ${x.helyezes} ${x.pontszam}`)
    })
    return sorok;
  }
}
