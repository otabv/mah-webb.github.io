---
layout: instructions
code: me132a
title: Föreläsning 4
controls: false
date: 2015-02-05
---

# Programmering för webben

## Föreläsning 4

### Dagens innehåll

- Strängar
    - Dubbla eller enkla citationstecken?
    - Escape-tecken
    - Konkatenering
    - Strängfunktioner
    - Jämföra strängar
- Kontrollstrukturer
    - if-else

### Strängar

En sträng är helt enkelt en sammanhängande följd av tecken.
Tecknen kan vara bokstäver, siffror, mellanslag, speciella
symboler mm

För att tala om var en sträng *börjar* och *slutar* använder man
i PHP enkla eller dubbla citationstecken

Exempel på strängar:

'en enkel sträng'

"Sträng nummer 2"

### Dubbla eller enkla citationstecken?

Det spelar oftast ingen roll om man använder enkla eller
dubbla citationstecken, men det finns undantag nämligen om man ska skriva ut ett variabelvärde inuti en sträng:

```php
<?php
$name = "Bo P";
echo "Välkommen $name.";
?>
```

Utskriften blir

```
Välkommen Bo P.
```

```php
<?php
$name = "Bo P";
echo 'Välkommen $name.';
?>
```

Utskriften blir

```
Välkommen $name.
```

Man måste alltså skilja på variabeln *namn* och variabelns *värde*. Med *enkla* citationstecken så skrivs *variabelnamnet* ut, med *dubbla* citationstecken skrivs *variabelvärdet* ut. 

Om man vill skriva citationstecken inne i en sträng finns det olika sätt att lösa det:

```php
<?php
//Om man vill använda citationstecken inuti en sträng:
$name = "Christian "Chippen" Wilhelmsson"; //funkar inte
$name = 'Christian "Chippen" Wilhelmsson'; //funkar
$name = "Christian \"Chippen\" Wilhelmsson"; //funkar
$name = 'Tim O'Reilly'; //funkar inte
$name = "Tim O'Reilly"; //funkar
$name = 'Tim O\'Reilly'; //funkar också
?>
```

### Escape-tecken

Tecknet \ (backslash) kallas för escape-tecken, och används för att få med tecken i strängar som inte kan vara med direkt.

Ibland är det tvunget med escape-tecken, tex om både
enkla och dubbla citationstecken ska vara med i
samma sträng:

```php
<?php
$name = "Tom \"Haren\" O'Hara"; //funkar
$name = 'Tom "Haren" O\'Hara'; //funkar också
?>
```

### Konkatenering

Konkatenering innebär att man slår ihop strängar.

`.` (punkt) används som konkateneringsoperator

```php
<?php
$firstname="Bo";
$middlename="Göran";
$lastname="Peterson";
$space=" ";
$fullname=$firstname.$space.$middlename.$space.$lastname;
echo $fullname; //Bo Göran Peterson skrivs ut
//Alternativ:
$fullname="$firstname $middlename $lastname";
echo $fullname; //Bo Göran Peterson skrivs ut
?>
```

Operatorn `.=` kan användas för att bygga på en
existerande strängvariabel:

```php
<?php
$fullname="Bo"; //$fullname får startvärdet Bo
$fullname.=" "; //ett mellanslag läggs till
$fullname.="Peterson"; //Peterson läggs till
echo $fullname; //Bo Peterson skrivs ut
?>
```

### Strängfunktioner

- Det finns en mängd strängfunktioner som vi kommer att använda
framöver, men **varning**: flera av funktionerna funkar inte med åäö.

- strtolower() - omvandlar till små bokstäver.
- strtoupper() - omvandlar till stora bokstäver.
- htmlspecialchars() - omvandlar till html-koder
- strrev() - vänder på en sträng
- stripslashes() - tar bort \
- trim() - tar bort "whitespace" i början och slutet av sträng
- str_replace() - ersätter text med annan text
- strlen() - beräknar längden av en sträng
- strpos() - letar efter en sträng i en annan sträng


### If-sats

if-satsen är enklaste
kontrollstrukturen

```php
<?php
if (villkor) {
	utför viss php-kod
	} else {
	utför annan php-kod}
?>
```


**Exempel**

```php
<?php
$name=$_GET['name'];
$lang=$_GET['lang'];

if ($lang=="sw") {
	echo "Välkommen $name";
} else {
	echo "Welcome $name";}
```

**Observera** dubbla likhetstecken `==` som är
en *jämförelseoperator*. Ett likhetstecken `=` är *tilldelningsoperatorn*.

**Exempel med elseif**

```php
<?php
if ($lang=="sw") {
	echo "Välkommen $name";
} elseif ($lang=="no") {
	echo "Velkommen $name";} else {
	echo "Welcome $name";}
?>
```

Man kan lägga på hur många else if som helst men det blir snabbt otympligt. Ett alternativ är att använda `switch`. Läs mer om switch på <http://php.net/manual/en/control-structures.switch.php>

Ibland behöver man tre likhetstecken `===` i jämförelser. Mer om det finns att läsa på <http://php.net/manual/en/language.operators.comparison.php>

**Exempel för att kolla data från formulär**

Funktion `isset()` tillsammans med en if-sats är mycket användbart för att kolla om en variabel finns eller inte: 

```php
<?php
$x = 5;
if (isset($x)) {
	echo 'varibeln $x finns<br>';} else {
	echo 'variabeln $x finns inte<br>';}
if (isset($y)) {
	echo 'varibeln $y finns<br>';} else {
	echo 'variabeln $y finns inte<br>';}
?>
``` 

Resultatet blir

```
varibeln $x finns
variabeln $y finns inte
```

Funktionen är väldigt användbar för att kolla att data kommer från ett formulär:

```php
<?php
if (isset($_POST['email'])) {
	$email = $_POST['email'];} else {
	$email = "okänd epostadress";}

echo "Epost: $email";
?>
```

### Exempel från föreläsning 2016-02-08

#### Exempel 1

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Föreläsning 4, exempel 1</title>
</head>

<body>
<?php
$x='en enkel sträng';

$spelalt1 = '"Chippen" spelar fotboll med Tim O\'Reilly'; //funkar

$spelalt2 = "\"Chippen\" spelar fotboll med Tim O'Reilly"; //funkar

$spelalt3 = "\"Chippen\" spelar fotboll med Tim O\'Reilly"; //funkar inte

echo $spelalt1 . "<br>";
echo $spelalt2 . "<br>";
echo $spelalt3 . "<br>";

//vi vill göra strängen "\"'
$komplicerat = "\"\\\"'";

echo $komplicerat;

?>


</body>
</html>
```

#### Exempel 2

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Föreläsning 4, exempel 2</title>
</head>

<body>
<?php

$text = "Jag "; //$text får startvärde
$text .= "har "; //$text utökas med nytt värd
$text .= "katt ";
$text .= "som ";
$text .= "vill ";
$text .= "äta ";
$text .= "tonfisk";

echo $text;
?>

</body>
</html>
```

#### Exempel 3

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Föreläsning 4, exempel 3</title>
</head>

<body>
<?php

$text = "Jag "; //$text får startvärde
$text .= "har "; //$text utökas med nytt värd
$text .= "katt ";
$text .= "som ";
$text .= "vill ";
$text .= "äta ";
$text .= "tonfisk";

echo $text;

echo "<br>";

//nu vill vi omvandla texten till VERSALER

$textversal = strtoupper($text);

echo $textversal;

echo "<br>";

//åäö funkade inte, prova mb_strtoupper istället mb = multibyte

$textversal2 = mb_strtoupper($text);
echo $textversal2;
echo "<br>";

//vi ska testa baklängesspråk

echo strrev($text);


?>


</body>
</html>
```

#### Exempel 4

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Föreläsning 4, exempel 3</title>
</head>

<body>
<?php

$text = "Jag "; //$text får startvärde
$text .= "har "; //$text utökas med nytt värd
$text .= "katt ";
$text .= "som ";
$text .= "vill ";
$text .= "äta ";
$text .= "tonfisk";

echo $text;

echo "<br>";

//nu vill vi omvandla texten till VERSALER

$textversal = strtoupper($text);

echo $textversal;

echo "<br>";

//åäö funkade inte, prova mb_strtoupper istället mb = multibyte

$textversal2 = mb_strtoupper($text);
echo $textversal2;
echo "<br>";

//vi ska testa baklängesspråk

echo strrev($text);


?>


</body>
</html>
```