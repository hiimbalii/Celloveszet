import fs from "fs";
import http from "http";
import url from "url";
import Verseny from "./Verseny";

export default class Content {

  public content(req: http.IncomingMessage, res: http.ServerResponse): void {
    const _verseny = new Verseny(fs.readFileSync("./verseny.txt").toString());
    // console.log()
    // favicon.ico kérés kiszolgálása:
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      fs.createReadStream("favicon.ico").pipe(res);
      return;
    }
    if (req.url === "/sorrend.txt") {
        res.writeHead(200, { "Content-Type": "application/text" });
        fs.createReadStream("sorrend.txt").pipe(res);
        return;
    }
    // Weboldal inicializálása + head rész:
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<!DOCTYPE html>");
    res.write("<html lang='hu'>");
    res.write("<head>");
    res.write(
      "<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>"
    );
    res.write(
      "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    );
    res.write("<title>Celloveszet</title>");
    res.write("</head>");
    res.write("<body><form><pre class='m-3'>");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const params = url.parse(req.url as string, true).query;
    // Kezd a kódolást innen -->
    res.write('2. feladat:<br>')
    res.write('Egymas utan tobbet is talalok: ')
    res.write(_verseny.getAllWith2OrMoreShots().join(' '))

    res.write('<br>3. feladat:<br>')
    res.write('Legtobb lovest leado versenyzo rajtszama:')
    res.write(_verseny.getInduloWithMostShots().toString())

   
    res.write(`<br>Kérem a rajtszámot: <input type='number' name='rajtszam' value=${params.rajtszam} style='max-width:100px;' onChange='this.form.submit();'>\n`);
    if(parseInt((params.rajtszam as string),10)){
        let rajtszam=parseInt((params.rajtszam as string),10);
        let versenyzo=_verseny.Indulok[rajtszam-1];
        res.write('5a) Celt ero lovesek:'+versenyzo.JoLovesek.join(' '))
        res.write('<br>')
        res.write('5b) Eltalalt korongok:'+versenyzo.JoLovesek.length)
        res.write('<br>')
        res.write('5c) Leghosszabb sorozat hossza:'+versenyzo.JoLovesSorozatHossz)
        res.write('<br>')
        res.write('5d) Pontszam:'+versenyzo.Loertek)
    } else if(params.rajtszam){
        res.write("Helytelen rajtszám")
    }

    fs.writeFileSync('./sorrend.txt',_verseny.makeSorrend().join('\n'));
    if(fs.existsSync('./sorrend.txt')){
        res.write("<br>6.feladat: ")
        res.write('<a href="sorrend.txt" type="submit">Letöltés!</button>')
    }

    res.write("</pre></form>");
    res.write("</body></html>");
    res.end();
  }
  /**
   *
   */
  constructor() {
  }
}
