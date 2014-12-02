---
layout: instructions
code: me105a
title: projekt
---

<style>
pre {white-space: pre-wrap;}
</style>

# Projekt, Databasbaserad publicering 2014

Projektet går ut på att bygga en interaktiv databas där innehållet kan visas både i tryck och på webben.

Projekt görs självständigt. Projektet måste innehålla:

- En databas som innehåller minst tre entiteter som har förhållanden till varandra. 
- Minst en ett-till-många-relation. För VG krävs även minst en många-till-många-relation.
- E/R-diagram som visar databasens struktur.
- Webbsidor med formulär med möjlighet att mata in data i några av tabellerna. Det är ok om några av tabellerna har fått data inlagt i förväg, till exempel med MySQL Query Browser.
- Webbsida med sökfunktion.
- Möjlighet att exportera Innehållet i tabellerna i tab-separerat format.
- InDesign-mallar som kan importera den tab-separerade filen och sedan vara grund till en tryckt presentation.

## Projektstart

Första steget är att välja projektförslag (se nedan) och tänka ut vilka entiteter som behövs, och sedan göra ett E/R-diagram. Senast tisdag 18 november mailar ni bo.peterson@mah.se vilket projekt ni valt. Under första handledningstillfället, 18 eller 19 november kan ni får hjälp med struktur och E/R-diagram. 

## Projektrapport

Projektrapporten ska innehålla:

- En beskrivning av er databas.
- E/R-diagram.
- Tabellstruktur, dvs vilka tabeller ni har, och vilka kolumner de innehåller. 
- Komplett webbadress till lösningen. **Om webbadress saknas i rapporten kan jag inte testa er lösning och projektet blir underkänt.**

Dessutom måste följande finnas i en zip-fil:

- PHP-kod
- Tab-separerad exportfil
- Indesign-mall som kan importera exportfilen
- PDF-fil som resultat av att mallen importerat den tab-separerade filen. 

Krav för VG (tillagt 2014-12-02):

- Minst en många-till-många-relation. 
- ÅÄÖ ska hanteras korrekt i in- och utmatningar. 
- Grundläggande skydd mot sql-injection. 
- HTML-kod ska kunna matas in utan att layout förstörs. 
- Välkommenterad kod. 
- Strukturerad kod med indragningar. 

## Projektredovisning

Färdigt projekt redovisas inför klassen torsdag 18 december. Projektet lämnas in på It's learning senast onsdag 17 december kl 12.00. 

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

## Handledning

Handledning kommer att finnas tillgänglig under de schemalagda laborationstillfällena. 

## Projekttips

Här finns några [projekttips](tips.html). 