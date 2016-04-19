---
layout: instructions
title: GitHub
code: me152a
---

# GitHub

Laborationen går ut på att ni ska skapa ett konto på [GitHub](http://github.com) där ni ska testa att skapa ett projekt. Detta sker i kombination med att använda webbplatsen för GitHub samt terminalen (vi utgår från appen "terminal.app" i datorsalarna). Detta fungerar givetvis att göra på alla operativsystem men detta kräver att ni själva söker information om hur detta görs, ni kan givetvis få hjälp på framtida tillfällen för handledning av projektet.

Nedan presenteras två listor av de olika kommandon som kommer användas, det är inget krav att lära sig detta utantill så nyttja dessa så gott det går och var nogranna att läsa igenom vad respektive kommando gör.

## Terminalen

Nedan listas några av de vanliga kommandon som används i terminalen. Det finns givetvis fler. För att få mer information om ett kommando kan ni skriva `man` följt av ett kommando, exempelvis `man ls` för att ta reda på mer om "ls". Använd "q" för att lämna och pilarna upp och ner för att navigera i texten.

* `ls`, visar alla filer i en katalog. Kommandot kan även följas av en katalog om ni vill visa filer i en annan katalog än den ni befinner er i, exempelvis `ls css` för att visa filer i katalogen "css". För att visa dolda filer kan ni lägga till `-a`, exempelvis `ls -a css` för att visa alla filer, samt dolda, i katalogen "css".
* `cd`, byta katalog. Exempelvis `cd Desktop` för att byta till katalogen "Desktop". Använd `cd ..` för att gå upp ett steg.
* `pwd`, visar namnet på den nuvarande katalogen.
* `rm`, raderar en fil eller en katalog. Exempelvis `rm index.html` för att radera filen "index.html". Använd `rm -r myfolder` för att radera en hel katalog, __OBS!__ detta raderar även alla filer i denna katalogen.
* `touch`, skapa en fil med det namn ni anger, exempelvis `touch index.html` - detta skapar filen "index.html".
* `mkdir`, skapar en katalog med det namn ni anger, exempelvis `mkdir css` - detta skapar katalogen "css".
* `mv`, flyttar eller döper om en fil som ni anger, exempelvis `mv index.html contact.html` eller `mv style.css css/style.css`. Tänk på att om ni flyttar till en katalog måste denna finnas.

## Git

Innan ni använder er av kommandot `git` tillsammans med GitHub behöver ni kontrollera att ert användarnamn och email till GitHub är sparade. Använd kommandot `git config -l` och se om "user.name" och "user.email" finns med korrekta uppgifter. Om dessa inte finns kan ni använda er av följande kommandon för att ändra detta.

* `git config --global user.name "användarnamn"`, här anger ni ert användarnamn.
* `git config --global user.email "email"`, här anger ni er email.

Nedan listas några av de vanligaste kommandon som används i samband med Git och GitHub.

* `git status`, visar statusen för det nuvarande projektet. Här listas bland annat nya filer som lagts till, tagits bort eller ändrats.
* `git clone`, gör en klon (alt. hämtar) ett nytt repositorie.
    * Exempelvis `git clone http://github.com/username/repository.git`, där ni bytar ut användarnamn och repositorie mot det ni vill.
* `git add`, lägger till en eller flera filer som lagts till, tagits bort eller ändrats (för att vidare spara dessa ändringar). Exempelvs `git add css/stylesheet.css` för att lägga till ändringar i filen "stylesheet.css" som befinner sig i katalogen "css".
* `git commit`, spara de filer som lagts till med `git add` där ni även anger en kort kommentar om ändringen. Exempelvis `git commit css/stylesheet.css -m "added new classes for buttons"`. Notera att kommentaren kommer efter sökvägen till er fil i form av `-m "..."` där kommentaren skrivs inom citationstecknen.
* `git pull`, hämtar de senaste ändringarna från ert nuvarande projekt (t.ex om någon annan gjort ändringar). Observera att dessa ändringar kommer spara över era befintliga ändringar. Detta innebär att ni måste vara nogranna med att ni inte gjort ändringar innan ni hämtar de senaste ändringarna och vise versa.
* `git push origin master`, skickar våra sparade ändringar till GitHub. Detta kommer innebära att ni får fylla i ert användarnamn och lösenord - observera att inga tecken kommer visas när ni skriver in, så ni inte tror att något är fel.
