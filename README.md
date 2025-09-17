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
* Sätter upp mappstruktur - lägger in mappar för context, pages och components. Installerar dependencies (react-router-dom v6.3).
* Skapar setup för routing (BrowserRouter, Routes/Route). Skapar link mellan "/Startpage", "/Countries" och "/Collection".
* Skapar en select-dropdown där jag map()ar ut värdet från variabel med en array som består av regioner/världsdelar.
* Skapar funktion för Region pick-handler som sätter selectedRegion till det valda regionen. En console.log() för vald region (selectedRegion) när selectedRegion är true i dropdown.
* Skapar handleRegionPick() som fetchar alla länder från vald region (https://restcountries.com/v3.1/region/...). Renderar ut flaggan och namnet för landet med map().
* Vid klick på flagga navigeras(useNavigate) jag till detaljerad information om landet (/countries/ "landets namn/:countryName" ).
* Setup för Context och global state-hantering.
* Sätter upp Link från /Countries till detaljerad sida (/CountryData) med hjälp av useParams().
* Kopplar saveCountry till localStorage som sparar landet i localStorage. . När jag lägger till i localStorage använder jag .find() för att först kolla så att landet inte redan finns i LS och då riskerar skapa dublett.