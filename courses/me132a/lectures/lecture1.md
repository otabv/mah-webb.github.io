---
layout: instructions
code: me132a
title: Föreläsning 1
controls: false
date: 2016-01-18
---

# Programmering för webben	

## Kurslitteratur

### PHP & MySQL – Novice to Ninja av Kevin Yank

![](im1/ninja.png)

Samma bok kommer att användas i fortsättningskursen *Databasbaserad publicering* nästa termin. 

## Vad innehåller kursen?

Grunder i programmering - generellt för olika programmeringsspråk

Programmering i programspråket PHP

### Vad är programmering?

**Kort defininition av programmering:** creating a sequence of instructions to enable the computer to do something 

**Från wikipedia:** Computer programming (often shortened to programming or coding) is the process of writing, testing, debugging/troubleshooting, and maintaining the source code of computer programs. This source code is written in a programming language. 

### Vad är webbprogrammering?

Webbprogrammering innebär vanligtvis att man skriver program som inte kan köras fristående, utan som kräver en webbläsare för att köras. 

### Vad är PHP?

PHP står för **PHP: Hypertext Preprocessor**  och är ett programmeringsspråk som är utvecklat för att passa bra ihop med HTML-kod och webbsidor. PHP är, till skillnad från JavaScript som också används med HTML-kod, ett språk för program som körs på *webservern*, så kallad *server-side scripting*. 

Officiell webbplats: <http://www.php.net/>

### Vad finns det mer för alternativ till PHP ?

Java, C, C++, C#, Python, Ruby är exempel på programmeringsspråk som kan användas till samma sak som PHP. 

PHP-kod används huvudsakligen för att ge webbsidor dynamiskt innehåll och interaktivitet. PHP-kod inbäddas vanligtvis i html-kod. 

PHP-kod börjar med `<?php` och avslutas med `?>`

`echo` används när man vill att något som PHP beräknat fram ska synas på en webbsida

### Exempel på en ren html-sida och en sida med inbäddad php-kod

```html<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>HTML test</title>
</head>
<body>
<p>
This is a test!
</p>
</body>
</html>
```

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>PHP test</title>
</head>
<body>
<p>
<?php
$text="This is a PHP-test";
echo $text;
?>
</p>
</body>
</html>
```

### Exempel från föreläsningen 2017-01-16

**f1.php**

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Exempel föreläsning 1, 2017-01-16</title>
</head>
<body>
<p>
<!--html-kommentar-->
Här har vi <i>vanlig</i> html-kod.
</p>

<p>
<?php
//allt efter // på en rad är en kommentar
//php-koden nedan skapar html-kod

//variabler börjar med dollar-tecken
//$tag är variablens namn, <i> är variablens värde
$tag="<i>"; 
$endtag="</i>";

//i echo-satsen nedan ersätts variabelnamnen med variabelvärden. 
echo "Här har vi istället $tag php-kod $endtag";
?> 
</p>

<p>
<?php
//funktionen date kan visa både datum och klockslag.
$time = date("H:i:s"); //visa timmar, minuter och sekunder
echo "Klockan är $time";
?>
</body>
</html>
```

