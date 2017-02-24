---
layout: instructions
code: me132a
title: Laboration 6
---

# Laboration 6

## Syfte med laborationen:

- att förstå hur include fungerar i PHP
- att förstå hur egendefinierade funktioner fungerar i PHP

## Förberedelser:

- Läs sidorna 161-176 i boken, samt kompletterande kursmaterialet include.pdf. Sidorna 165-169 innehåller en del om mysql och databaser som vi inte gått igenom. Läs sidorna ändå, men bekymra er inte om allt inte går att förstå än. 

## Lämna in följande:

En zip-fil med 
- alla filer från mappen `lab6` 
- alla filer från mappen `includes`
- en textfil med länkar till php-filerna i uppgift 1-4
- svar på frågorna i uppgift 3

## Uppgift 1

Skapa en fil `index.php` i mappen `upp1` som in sin tur ligger i mappen `lab6`. Filen ska innehålla en funktion `echo_array($array)` som skriver ut innehållet i en array.

En stomme till filen finns nedan. Komplettera funktionen så att innehållet i arrayerna skrivs ut när funktionen anropas. 

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 1, laboration 6</title>
  </head>
  <body>
    <?php
    //funktionsdefinition
    function echo_array($array) {
      //komplettera med en loop som skriver
      //ut alla element i $array


    }

    $numbers=array(3,42,77,2,18,9,44,88,4,56);
    $artists=array("M.I.A.","Santigold","Beyoncé");

    //funktionsanrop
    echo "<h2>Numbers</h2>";
    echo_array($numbers);
    echo "<h2>Artists</h2>";
    echo_array($artists);
    ?>
  </body>
</html>
```

Utskriften ska bli:


**Numbers**
  
3  
42  
77  
2  
18  
9  
44  
88  
4  
56  
  
**Artists**  
  
M.I.A.  
Santigold  
Beyoncé  
  
## Uppgift 2

Uppgiften går ut på att skriva PHP-kod som hittar **minsta** talet i en lista. Utgångspunkten är att det finns en array, `$numbers`, som innehåller ett godtyckligt antal tal, tex: 

```php
<?php
$numbers=array(3,42,77,2,18,9,44,88,4,56);
?>
```

I detta fall ska utskriften bli:

```
Minsta talet är 2
```

Ta hjälp av följande pseudo-kod:

```
definiera array $numbers;
definiera en variabel $smallest som får värdet av första elementet i array
för varje element i $numbers:
    kom ihåg aktuellt elementet om det är mindre än $smallest 
skriv ut variabeln $smallest
```

Skriv in koden i filen `index.php` i mappen `upp2` i mappen lab6 och testa! Utskriften ska bli det minsta talet i `$numbers`. 

## Uppgift 3

Vi ska nu göra en *funktion* som kan hitta minsta talet i en lista. 

Skapa en mapp `upp3` i lab6.  

Skapa sedan `index.php` i mappen som ska innehålla funktionen `minvalue($array)` som hittar och returnerar minsta värdet i en array. Använd koden för att hitta minsta värdet från uppgift 2 när du skriver funktionen. 

Här finns en stomme till filen:

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 3, laboration 6</title>
  </head>
  <body>
    <?php
    //funktionsdefinition
    function minvalue($array) {
      //komplettera med kod som hittar
      //minsta värdet i $numbers


    }

    $numbers=array(3,42,77,2,18,9,44,88,4,56);

    //komplettera med kod som anropar funktionen
    //minvalue och skriver ut resultatet

    ?>
  </body>
</html>
```

Utskriften ska bli som i uppgift 2.  

Testa även att anropa funktionen med en array med namn istället för siffror. Funkar det? Vad innebär det isåfall att minsta namnet skrivs ut?

## Uppgift 4

En stor fördel med include är att man kan bygga ett bibliotek av funktioner som man behöver använda flera gånger. Skapa en mapp direkt i rotkatalogen (alltså inte i mappen lab6) som heter `includes`.

I denna mapp kan vi lägga include-filer som kan användas i många php-filer framöver. Skapa filen `functions.inc.php` i mappen includes. Denna fil ska bara innehålla php-kod. Komplettera denna med funktionerna `echo_array` och `minvalue` samt en ny funktion `maxvalue` som hittar största värdet i en array. 

En stomme till filen finns här:

```php
<?php
function echo_array($array) {
	//koden från uppgift 1
}

function minvalue($array) {
	//koden från uppgift 3
}

function maxvalue($array) {
	//ny kod
}
?>
```

Skapa även en fil som heter `footer.inc.html.php` liknande den på sidan 172 i boken, men som innehåller ett copyright-tecken, ditt namn och ditt användarnamn. Liksom exemplet i boken ska texten ligga i en div-tagg med id="footer". Även denna fil ska ligga i includes. 

Skapa sedan en fil `index.php` i en mapp `upp4` i `lab6`. Denna fil ska infoga `functions.inc.php` samt `footer.inc.html.php`. 

På sidan 172 i boken beskrivs hur man kan använda `$_SERVER['DOCUMENT_ROOT']` för att komma åt den katalog där include-filerna ligger. För att det ska funka på vår server måste vi komplettera med vårt användarnamn före `/includes/`

```php
<?php
include $_SERVER['DOCUMENT_ROOT']."/userid/includes/footer.inc.html.php";
?>
```

Börja med att infoga functions.inc.php. Definiera sedan en array `$numbers` som i tidigare uppgifter. Anropa sedan funktionerna echo_array, maxvalue och minvalue för att hitta största och minsta värdet i `$number`. Utskriften ska bli:

<div style="border:2px solid black; padding:20px">
Innehåll i array:<br>
3<br> 
42<br>
77<br>
2<br>
18<br>
9<br>
44<br>
88<br>
4<br>
56<br>
Minsta talet är 2<br>
Största talet är 88<br>
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
&copy; Bo Peterson, k3bope
</div>

Följande css kan användas för att placera sidfoten längst ned på sidan:

```css
<style>
#footer {
	position:absolute;
	bottom:0.5cm;
}
</style>
```
