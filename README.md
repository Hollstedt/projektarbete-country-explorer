## Projektarbete - Country Explorer :rocket:

### Att tänka på under hela projektet :dart:
* Ingen dör. Det löser sig.
* Jobba på en sak åt gången.
* Få inte panik - console-loga!
* Funktion först. Estetik sedan.
* Spreta inte.
* Håll ihop det.
* Ha kul - det skall vara :bread::bread::bread::bread::bread: av :bread::bread::bread::bread::bread: toasts.



### Arbetsflöde :computer:
1. Sätter upp mappstruktur - lägger in mappar för context, pages och components. Installerar dependencies (react-router-dom v6.3).
2. Skapar setup för routing (BrowserRouter, Routes/Route). Skapar link mellan "/Startpage", "/Countries" och "/Collection".
3. Skapar en select-dropdown där jag map()ar ut värdet från variabel med en array som består av regioner/världsdelar.
4. Skapar funktion för Region pick-handler som sätter selectedRegion till det valda regionen. En console.log() för vald region (selectedRegion) när selectedRegion är true i dropdown.