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
* Skapar en select-dropdown där jag .map()ar ut värdet från variabel med en array som består av regioner/världsdelar.
* Skapar funktion för Region pick-handler som sätter selectedRegion till det valda regionen. En console.log() för vald region (selectedRegion) när selectedRegion är true i dropdown.
* Skapar handleRegionPick() som fetchar alla länder från vald region (https://restcountries.com/v3.1/region/...). Renderar ut flaggan och namnet för landet med map().
* Vid klick på flagga navigeras(useNavigate) jag till detaljerad information om landet (/countries/ "landets namn/:countryName" ).
* Setup för Context och global state-hantering.
* Sätter upp Link från /Countries till detaljerad sida (/CountryData) med hjälp av useParams().
* Kopplar saveCountry till localStorage som sparar landet i localStorage. . När jag lägger till i localStorage använder jag .find() för att först kolla så att landet inte redan finns i LS och då riskerar skapa dublett.
* Utökar datan som renderas upp i CountryData (befolkningsmängd, valuta och länk till extern sida för Google Maps-länk). Vissa länder har flera valutor så där använder jag Object.values() för att skapa en array från objektet som sedan mappas ut, och sedan join() för att sätta kommatecken mellan valutorna som finns.
* När ett land sparas till "isCountryAlreadyInCollection" använder jag .find() för att kolla att landet redan finns i arrayen savedCountries och om det gör det så får jag tillbaka true, annars false som sedan används i conditional rendering för knappen "Spara land i collection".
* removeCountryFromCollection() använder .filter() för att ta bort länder från arrayen savedCountries och då också från localStorage. Knappen togglas mellan saveCountry och removeCountryFromCollection beroende på om landet redan är sparat i arrayen eller ej, och skickar vid behov en uppdaterad array till localStorage.
* Bryter ut data från countryData till ny komponent CountryInfo. Renderar just nu ut data i CountryInfo.
* Lägger till knappar för Quiz och Leaderboard för Quiz på Startpage.jsx med hjälp av Link och lägger routes i App.jsx för respektive page.
* Bryter ut data från Countries till ny komponent (RegionSelector) då samma kommer användas under page:"Countries" samt page:"Quiz".
* Implementerar RegionSelector-komponenten (skapad från tidigare) på Quiz-page där handleRegionChange() körs och vid onChange blir selectedRegion satt via setSelectedRegion.
* Skapar handeQuizStart som kollar om användaren angett namn (playersName) samt valt världsdel (selectedRegion). Om båda uppfylls (true) så skall quizen starta, annars får man alert om att ange namn/ välja världsdel. handleQuizStart körs onClick på knapp.
* Skapar upp async fetchRegion() i CountryDataProvider som hämtar region från API baserat på vald region från RegionSelector. Importerar useContext(CountryDataContext) i Quiz.jsx. Utökar handleStartQuiz med sort-funktion som blandar länderna från världsdelen i slumpmässig ordning baserat på om värdet från math.random() är negativt eller positivt och "slicar" sedan den nya arrayen med femton första länderna.