## Reflektionsuppgift

**Anton Athley**

1. **Vad hände och varför spelar det roll?**

- När jag satte upp CI-pipeline för att bygga images för backend implementerade jag även enhetstester. Lokalt fungerade det utan problem, men i github actions misslyckades testerna då de inte hittade testfilerna i imagen. Efter alldeles för lång tid av felsökande upptäckte jag att problemet låg i .dockerignore filen där _/tests_ låg med. Utöver att vara ett klassiskt problem av att prompta snabbt och felsöka länge spelar detta felsteget roll för min förståelse över hur en felsöker problemet "it works on my machine".

2. **Vad lärde du dig om arbetssättet?**

- Lite och ofta är bättre än mycket och sällan.
- CI/CD handlar inte om att hitta buggar, utan misstag i byggprocessen.
- Vikten av tester - "funkar på min maskin" är inte längre försvarsbart.

3. **Vad gör du annorlunda nästa gång?**

- Promptar mindre dockerignore-filer.
- Börjar "baklänges", dvs planerar ut slutmålet innan jag börjar implementera pipeline i projekt. Detta hade jag ju iofs inte kunnat göra detta projekt, då det har varit en läroprocess mer än något annat. Nu har en ju jobbat med det, så nästa gång blir det lättare!

4. **Lärdom från kursen**

- Devops i stort, varför det underlättar i projekt och att det är ett arbetssätt som är värt att implementera och arbeta med.
- "Ju tråkigare en deployment är, desto bättre är min process."

## Multi-stage

1. **Byggfas** – installerar beroenden, kör tester och bygger applikationen.

2. **Körfas** – innehåller bara det som behövs för att köra appen i produktion.

### Varför det här är bättre:

- **Mindre image** – vi slipper dra med dev-beroenden och onödiga filer.
- **Snabbare builds** – `package*.json` kopieras tidigt så Docker kan cachea smartare.
- **Säkrare** – produktionscontainern kör utan utvecklingsverktyg.
- **Smidigare CI/CD** – multi-stage gör det enklare att bygga, testa och rulla ut i samma flöde.

## V41

**Permanent staging** delas med kund hellre än preview för att få ett ytterligare skyddsnät/testområde innan produkten delas vidare.

**Val av verktyg** Körde på Azure igen för prod, pga kan så gott som copy paste tidigare kod.
**URL: https://brave-rock-006972b03.3.azurestaticapps.net/**
