# Céllövészet

A 2014.05.13. napon tartott emelt informatika érettségi megoldása TS-ben.
Eredeti feladatsor angol nyelven (4.feladat: Shooting): [educatio.hu](http://dload.oktatas.educatio.hu/erettsegi/feladatok_2014tavasz_emelt/e_infma_14maj_fl.pdf)

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
node run start
```

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

### Példa input

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

## Tartalom

_TODO_

## Hozzájárulás

Sajnos a feladat jellege miatt a hozzájárulás nem lehetséges

## License

[The Unlicense](https://unlicense.org//)

Based on [JedlikTsTemplate](https://github.com/nitslaszlo/JedlikTsTemplate) by [Laszlo Nits](https://github.com/nitslaszlo)
