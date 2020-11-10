# Céllövészet

A 2014.05.13. napon tartott emelt informatika érettségi megoldása TS-ben.
Eredeti feladatsor angol nyelven (4.feladat: Shooting): [educatio.hu](http://dload.oktatas.educatio.hu/erettsegi/feladatok_2014tavasz_emelt/e_infma_14maj_fl.pdf)

## Elérés

A project kipróbálható [herokun](https://celloveszet.herokuapp.com)

## Használat

### Környezet

Node környezet és node package manager szükséges.

### Telepítés

```bash
git clone https://github.com/hiimbalii/Celloveszet
cd Celloveszet
npm install
```

## Használat

```bash
npm run start
```

vagy

```bash
nodemon
```

## Feladat leírás

A Sor Lövészegylet rendszeresen rendez versenyt az alábbi, igen egyszerű szabályokkal:

- A lövések leadására korlátozott idő áll rendelkezésre, ezért a versenyzők eltérőszámú lövést adhatnak le.
- A lövéseket sorszámozott korongokra kell leadni.
- Találatnak számít, ha a korongot bárhol érinti a lövedék.
  •A lövésekhez pontértéket rendelnek: amíg nem hibázik valaki, minden találata 20 pontot ér; de rontás esetén minden hiba 1 ponttal csökkenti – egészen nulláig – a későbbi lövésekkel szerezhető pontszámot. A lövés pontértéke nem lehet negatív.
- Az végez előrébb a versenyben, aki több pontot szerez. A holtversenyt nem döntik el, mindegyik versenyző ugyanolyan helyezéssel végez, tehát mindenki helyezése megegyezik a nála több pontot sz
  erzett versenyzők számánál eggyel nagyobb számmal.
  A verseny.txt állományban versenyzőnként feljegyeztük a lövések eredményét. A fájl első sorában a versenyzők száma (`2`≤`v`≤`100`) szerepel. A következőv sorban legfeljebb l (4≤l≤40) karakter található, egy versenyző lövéseinek sorozata. Egy lövést egy karakter ír le, a – karakter a sikertelen, a + karakter a sikeres lövést rögzíti.
  Például:
  ```
  5
  +--+
  -+-+++-
  -+--+--
  ++---
  -++--
  ```
  A példában a 4. sor azt mutatja, hogy a 3-as rajtszámú lövőnek a 2. és az 5. lövése talált, tehát a versenyző csak két korongot talált el. Mivel elsőre hibázott, az első találat 19 pontot ér, aztán a két újabb hiba miatt már csak 17 pontot jelentett a második találat. Tehát összesen 36 pontot szerzett. Az 5. sorban szereplő, 4-es rajtszámú versenyző ugyancsak 2 találattal 40 pontot szerzett.
  Készítsen programot, amely a verseny.txt állomány adatait felhasználva az alábbi kérdésekre válaszol! A program forráskódját mentse loves néven! (A program megírásakor a felhasználó által megadott adatok helyességét, érvényességét nem kell ellenőriznie, feltételezheti, hogy a rendelkezésre álló adatok a leírtaknak megfelelnek.)
  A képernyőre írást igénylő részfeladatok eredményének megjelenítése előtt írja a képernyőre a feladat sorszámát (például: 3. feladat:), az 5. feladat esetén pedig a részfeladat betűjelét is! Ha a felhasználótól kér be adatot, jelenítse meg a képernyőn, hogy milyen értéket vár! Az ékezetmentes kiírás is elfogadott.

## Feladatok

1. Olvassa be a `verseny.txt` állományban található adatokat, és annak felhasználásával oldja meg a következő feladatokat!
2. Írja a képernyőre azon versenyzők rajtszámát, akiknek egymás után két (vagy több) lövése is talált! A versenyzők rajtszámát egy-egy szóközzel válassza el egymástól!
3. Írja a képernyőre, hogy melyik versenyző adta le a legtöbb lövést! Ha többen is ugyanannyi lövést adtak le, elegendő egyikük rajtszámát kiírni
4. Készítsen függvényt `loertek` néven az alábbi algoritmus alapján! A függvény egy `+` és `–` jeleket tartalmazó, legfeljebb 40 hosszúságú karaktersorozathoz hozzárendeli a feladatban képviselt pontértékét. A függvény elkészítésekor az algoritmusban megadott változóneveket használja! Az elkészített függvényt a további feladatok megoldásánál használja fel! A függvény bemenő paramétere az egy játékos lövéseit leíró karaktersorozat, értéke pedig az ahhoz rendelt pontszám.

```
Függvény loertek(sor:karaktersorozat):egész szám
  aktpont:=20
  ertek:=0
  Ciklus i:=1-től hossz(sor)-ig
    Ha aktpont>0 és sor[i]=”-” akkor
      aktpont:=aktpont-1
    Különben
      ertek:=ertek+aktpont
    Elágazás vége
  Ciklus vége
  loertek:=ertek
Függvény vége
```

5. Kérje be a felhasználótól egy versenyző sorszámát, majd írja ki, hogy:

- hányadik lövései találtak (az értékeket egymástól szóközzel válassza el!)
- hány korongot talált el összesen
- milyen hosszú volt a leghosszabb hibátlan lövéssorozata
- hány pontot ért el!
  Az eredmény megjelenítése előtt írja képernyőre a részfeladat betűjelét is!

6. Állítsa elő a `sorrend.txt` állományban a verseny végeredményét! A fájlban soronként tüntesse fel a versenyző helyezését, rajtszámát és pontszámát! A helyezés megadásakor a holtversenyt a bevezetőben megfogalmazott szabályok alapján az alábbi mintához hasonlóan kezelje! Az adatokat egy-egy tabulátorral (ASCII kódja a 9-es) válassza el egymástól! A lista legyen pontszám szerint csökkenő!

### Példa Sorrendek.txt

```
1 2 73
2 4 40
3 1 38
3 5 38
5 3 36
```

### Példa output

```
2. feladat: Az egymast kovetoen tobbszor talalo versenyzok: 2 4 5
3. feladat: A legtobb lovest leado versenyzo rajtszama: 2
5. feladat: Adjon meg egy rajtszamot! 2
5a. feladat: Celt ero lovesek: 2 4 5 6
5b. feladat: Az eltalalt korongok szama: 4
5c. feladat: A leghosszabb hibatlan sorozat hossza: 3
5d. feladat: A versenyzo pontszama: 73
```

## Hozzájárulás

Sajnos a feladat jellege miatt a hozzájárulás nem lehetséges

## License

[The Unlicense](https://unlicense.org//)

Based on [JedlikTsTemplate](https://github.com/nitslaszlo/JedlikTsTemplate) by [Laszlo Nits](https://github.com/nitslaszlo)
