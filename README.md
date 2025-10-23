## Multi-stage

1. **Byggfas** – installerar beroenden, kör tester och bygger applikationen.

2. **Körfas** – innehåller bara det som behövs för att köra appen i produktion.

### Varför det här är bättre:

- **Mindre image** – vi slipper dra med dev-beroenden och onödiga filer.
- **Snabbare builds** – `package*.json` kopieras tidigt så Docker kan cachea smartare.
- **Säkrare** – produktionscontainern kör utan utvecklingsverktyg.
- **Smidigare CI/CD** – multi-stage gör det enklare att bygga, testa och rulla ut i samma flöde.
