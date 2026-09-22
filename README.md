# Goodreads

## Om projektet

Jag har skapat en app där användaren kan lägga till böcker i två olika listor. En lista visar böcker användaren vill läsa och den andra visar böcker som användaren har läst.

## Funktioner

Användaren kan lägga till böcker och markera dem som lästa eller olästa. Det går även att betygsätta lästa böcker med 1–5 stjärnor och ta bort böcker från båda listorna.

## Tekniker

Jag har använt JavaScript, HTML och CSS för att skapa appen.

Jag använder Firebase Realtime Database för att lagra böckernas data. Kommunikationen med Firebase sker genom HTTP-requests med GET, POST, PATCH och DELETE för att hämta, lägga till, uppdatera och ta bort data.

Bootstrap används för grundstyling tillsammans med egen CSS.

Projektet använder Vite som utvecklingsverktyg och för att bygga applikationen.

Appen publiceras med Netlify och koden finns på GitHub.

## Projektstruktur

Jag har delat upp JavaScript-koden i olika moduler som ansvarar för olika delar av applikationen.

- `main.js` ansvarar för att starta appen och hantera formuläret.
- `FirebaseRequests.js` ansvarar för de generella anropen för att hämta och lägga till böcker.
- `Book.js` innehåller Book-klassen och metoder som ändrar eller tar bort specifika böcker.
- `Render.js` ansvarar för att skapa och uppdatera det som visas för användaren i DOM:en.
- `index.html` innehåller den statiska strukturen och innehållet på sidan.
- `style.css` ansvarar för appens egna styling.

## API och dokumentation

Projektet använder Firebase Realtime Database för att lagra böckernas data. Kommunikationen med databasen sker via Firebase Realtime Database REST API med HTTP-metoderna GET, POST, PATCH och DELETE.

Dokumentation:

- Firebase Realtime Database REST API: https://firebase.google.com/docs/reference/rest/database
- Firebase Realtime Database: https://firebase.google.com/docs/database
- Bootstrap: https://getbootstrap.com/docs/5.3/
- Vite: https://vite.dev/guide/

## Installation

För att köra projektet lokalt:

1. Klona projektet från GitHub:

```bash
git clone https://github.com/aliciaholm-utb/be26-js2-goodreads-alicia-holm.git
```

2. Gå in i projektmappen:

```bash
cd be26-js2-goodreads-alicia-holm
```

3. Installera projektets dependencies:

```bash
npm install
```

4. Starta utvecklingsservern:

```bash
npm run dev
```

5. Öppna länken som visas i terminalen för att köra appen i webbläsaren.

## Live demo

Netlify: [LÄNK TILL APPEN]

## GitHub

Repository: https://github.com/aliciaholm-utb/be26-js2-goodreads-alicia-holm
