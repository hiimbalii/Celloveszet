export default class Indulo {
  private _sor: string[];
  public get LovesekSzama() {
    return this._sor.length;
  }
  public get Loertek(): number {
    let aktpont = 20;
    let ertek = 0;
    for (let i = 0; i < this._sor.length; i++) {
      const element = this._sor[i];
      if (element === "-") {
        aktpont--;
      } else {
        ertek += aktpont;
      }
    }
    return ertek;
  }
  public get JoLovesek(): number[] {
    return this._sor
      .map((loves, index) => {
        return { loves: loves, szam: index+1 };
      })
      .filter((x) => x.loves === "+")
      .map((x) => x.szam);
  }
  public get JoLovesSorozatHossz(): number {
    let max=0;
    let curr=0;
    for (let index = 0; index < this._sor.length; index++) {
        const element = this._sor[index];
        if(element==='+'){
            curr++;
        }else{
            if(max<curr) max=curr;
            curr=0;
        }
    }
    return max;
  }

  constructor(sor: string) {
    this._sor = [];
    for (let index = 0; index < sor.length; index++) {
      if(sor[index]==='+'||sor[index]==='-')
      this._sor.push(sor[index]);
    }
  }
}
