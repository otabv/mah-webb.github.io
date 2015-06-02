# Databasbaserad publicering - föreläsning 1
## Litteratur
Databasteknik
PHP & MySQL - Novice to Ninja
Howard Goldberg, Kevin: XML:Visual QuickStart Guide, Peachpit Press Publications 2008
Dessutom rekommenderas: A Designers Guide to Adobe InDesign and XML
## Huvudsakligt kursinnehåll	
Ett antal trebokstavsförkortningar:
SQL
PHP
XML
samt
InDesign
HTML
## Kursens beståndsdelar som flödesschema
Introduktion till databaser

- Vad är databas?
	En databas kan definieras som ett datorbaserat informationssystem där informationen (databasens data) lagras på ett strukturerat sätt vilket gör det möjligt för många olika tillämpningar att komma åt informationen.
 
- Strukturen på ett databassystem
	Ett databassystem kan delas upp i följande komponenter:
 
	- Systemets data
	- Databashanterare (database management system eller DBMS)
	- Tillämpningar
	- Användare

### Exempel

Ett lagerhanteringssystem är ett typexempel på ett databassystem. 

Först har vi systemets data, dvs information om varor i lagret. 

Sedan har vi databashanteraren som hanterar informationen. 

Olika tillämpningar är olika sätt att se på data i databasen. En tillämpning kan vara att se var i lagret en vara finns, något som behövs för dem som jobbar på lagret. En annan tillämpning kan vara att se vad som finns på lagret vilket kan utnyttjas av en kund som vill ha en viss vara. 
 
	Lagerarbetaren och kunden är två användare av databasen. Båda använder samma bakomliggande data, men sett ur olika vyer eller synvinklar dvs med olika applikationer.
## De olika delarna i ett databassystem
### Vad behövs till ett databassystem?
En databashanterare, till exempel
Access
Oracle
MySQL
SQLite
FileMaker
Neo4j
Fler exempel: se  http://en.wikipedia.org/wiki/Comparison_of_relational_database_management_systems

Gränssnitt för att mata in och ut data, till exempel
Webbsidor med PHP
Inbyggt grafiskt gränssnitt
Skräddarsytt program

Vi kommer att använda MySQL som databashanterare och webbsidor 
med PHP som användargränssnitt.
### Relationsdatabaser
Kursen kommer endast att behandla relationsdatabaser. Utöver relationsdatabaser finns det exempelvis grafdatabaser (se tex http://en.wikipedia.org/wiki/Graph_database)

Relationsdatabaser består av en samling tabeller. Den korrekta termen för en tabell är egentligen relation men oftast används begreppet tabell. Tabeller (relationer) kan vara relaterade till varandra.
### Enkelt exempel på tabell

### Terminologi
Varje rad i en tabell kallas även för en tupel eller en post. 
Varje kolumn kallas även för attribut eller fält. 
Nycklar används för att ange hur tabeller är relaterade till varandra. Mer om det senare i kursen.
### Sammanfattning av terminologi (engelsk term inom parentes)

## om phpmyadmin, om create
