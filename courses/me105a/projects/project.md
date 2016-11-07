---
layout: instructions
code: me105a
title: projekt
---

<style>
pre {white-space: pre-wrap;}
</style>

# Projekt, Databasbaserad publicering 2016

Projektet går ut på att bygga en interaktiv databas där innehållet kan visas både i tryck och på webben.

Projekt görs självständigt. Projektet måste innehålla:

- En databas som innehåller minst tre entiteter som har förhållanden till varandra. 
- Minst en ett-till-många-relation. 
- E/R-diagram som visar databasens struktur.
- Webbsidor med formulär som gör det möjligt att mata in data i några av tabellerna. Det är ok att några av tabellerna har fått data inlagt i förväg, till exempel med MySQL Query Browser.
- Webbsida med sökfunktion.
- Möjlighet att exportera Innehållet i tabellerna i tab-separerat format.
- InDesign-mallar som med hjälp av InData kan importera den tab-separerade filen och sedan vara grund till ett tryckt dokument.

För betyget **godkänd** krävs, förutom det som nämns ovan:

- HTML-kod ska kunna matas in i formulär på ett säkert sätt utan att html-taggar förstör övrig layout. 
- Välkommenterad kod. 
- Strukturerad kod med indragningar.
- En reflektionen över er lösnings säkerhets- och integritetsaspekter.

För betyget **väl godkänd** krävs även

- Minst en många-till-många-relation. 
- Grundläggande skydd mot sql-injection.
- Användande av *prepared statements*. 
- ÅÄÖ ska hanteras korrekt i in- och utmatningar. 

Följande lämnas in:

En projektrapport som innehåller:

- En beskrivning av er databas. Vad gör den? Hur fungerar den? Är det något som inte fungerar som tänkt?
- E/R-diagram.
- Tabellstruktur, dvs vilka tabeller ni har, och vilka kolumner de innehåller. 
- Reflektion över er lösnings säkerhets- och integritetsaspekter.
- Komplett webbadress till lösningen. **Om webbadress saknas i rapporten kan jag inte testa er lösning och projektet blir underkänt.**

Dessutom måste följande finnas i en zip-fil:

- PHP-kod
- Tab-separerad exportfil
- Indesign-mall som kan importera exportfilen
- **PDF-fil** som resultat av att mallen importerat den tab-separerade filen 

## Projektstart

Första steget är att välja projektförslag (se nedan) och tänka ut vilka entiteter som behövs, och sedan göra ett E/R-diagram. Under första handledningstillfället kan ni få hjälp med struktur och E/R-diagram. 

## Projektförslag

Följande uppgifter finns som förslag:

- Bibliotek (katalog över böcker)
- Nyhetssite
- Databas med begagnade varor
- Filmografi (katalog över filmer)
- Sportresultat
- Receptsamling
- Webbshop
- Bildarkiv
- Blog
- Eget förslag. Ange i så fall ert förslag!
- Meme-databas

## Handledning

Handledning kommer att finnas tillgänglig under de schemalagda laborationstillfällena. 

## Projekttips

Här finns några [projekttips](tips.html). Använd även miniprojektet som inspiration. 