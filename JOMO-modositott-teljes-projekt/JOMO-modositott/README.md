# JOMO Desktop

Asztali JOMO alkalmazás Electronnal, reszponzív mobilnézettel.

## Futtatás gépen
1. Telepíts Node.js LTS-t.
2. A projekt mappájában futtasd: `npm install`
3. Indítsd: `npm start`

## Telepíthető alkalmazás készítése
- Windows: `npm run build:win`
- macOS: `npm run build:mac`
- Linux: `npm run build:linux`

A `dist/` mappába kerül a telepítő / hordozható build.

## Funkciók
- Intelligens értesítés-szűrő és digest
- Sürgős/normál értesítések
- Fókusz-időzítő
- Pontok és virtuális kert
- Social-app próbálkozás szimuláció / önkontroll mechanika
- Offline JOMO események interaktív demo-térképen
- Anonim párosítási UI
- Profil és adatvédelmi beállítások
- Helyi állapotmentés localStorage-ban
- Asztali / mobil nézet kapcsoló

## Megjegyzés
A valódi OS-szintű értesítésbefogás, más alkalmazások blokkolása, AI sürgősségi osztályozás, eseménybackend és partnerkuponok külön natív/backend réteget igényelnek.


## Új felületi beállítások
- Sötét/világos mód a felső sávból vagy a Profil > Megjelenés részből kapcsolható. A választás helyben megmarad.
- A főoldal új, tagoltabb elrendezést kapott fókuszblokkal, gyors statisztikákkal, gyorsműveletekkel és külön offline ajánlóval.
