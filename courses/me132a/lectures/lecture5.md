---
layout: instructions
code: me132a
title: Föreläsning 5
controls: false
date: 2015-02-15
---

# Programmering för webben

## Föreläsning 5

### Dagens innehåll

- mer om villkor i if-satser
- loopar
- indentering

### Villkor i if-satser

Vi har tidigare sett villkor i if-satser:

```php
<?php

?>
```

```php
<?php
if ($language=="Swedish") {
    echo "Välkommen";
}
?>
```

Villkor kan vara mer komplext uppbyggt:

```php
<?php
if ($language=="Swedish" or $language=="Svenska") {
    echo "Välkommen";
}
?>
```

Istället för `or` kan man skriva `||`, istället för `and` kan man skriva `&&`
(finns dock vissa skillnader, se [officiella php-manualen](http://php.net/manual/en/language.operators.logical.php))

#### Logiska operarorer:

```
== lika med
!= inte lika med
< mindre än
> större än
<= mindre än eller lika med
>= större än eller lika med
```

#### Flera villkor med elseif

```php
<?php
if ($age<16)
{
    $category="barn";
}
elseif ($age>=16 and  $age<30)
{
    $category="ung vuxen";
}
else
{
    $category="vuxen";
}
?>
```

### Loopar

Loopar används för att göra samma eller nästan samma sak upprepade gånger. Vanligaste looparna:

- while-loop
- for-loop
- foreach-loop

#### While

```php
<?php
while (villkor) {
    //kod som utförs upprepade gånger, så länge villkoret är uppfyllt}
?>
```

##### Exempel

```php
<?php
$count = 1; //count får startvärdet 1
while ($count<=3) 
{
    echo $count;
    echo "<br>";
    $count++; //++ innebär att $count räknas upp med 1
}
?>
```

#### For

En for-loop kan ses som en mer kompakt variant av en while-loop, där startvärde, villkor och uppräkning står tillsammans

```php
<?php
for (startvärde; villkor; uppräkning) {
    //kod som upprepas}
?>
```

Resultatet blir

```
1
2
3
```

##### Exempel

```php
<?php
for ($count=1; $count<=3; $count++) {
    echo "$count ";
    echo "<br>";
}
?>
```

Resultatet blir

```
1
2
3
```

#### Foreach

Foreach är en variant av for-loop som är väldigt praktisk om man ska loopa igenom en array.

```php
<?php
foreach ($array as $element) {
    //loopen upprepas lika många gånger som det finns element i $array
    //$element kommer för varje varv i loopen att tilldeles nya element från $array}
?>
```

##### Exempel

```php
<?php
$months = array('januari','februari','mars','april','maj','juni','juli','augusti','september','oktober','november','december');
foreach ($months as $onemonth) {
    echo $onemonth;
    echo "<br>";}
?>
```

Resultatet blir

```
januari
februrari
mars
april
maj
juni
juli
augusti
september
oktober
november
december
```

Samma exempel kan göras med en for-loop. Vi använder då funktionen `count()` för att ta reda på hur många element som finns i vår array. Vi behöver även en variabel `$i` som index.

 ```php
<?php
$months = array('januari','februari','mars','april','maj','juni','juli','augusti','september','oktober','november','december');
for ($i=0; $i<count($months); $i++) {
    $onemonth = $months[$i];
    echo $onemonth;
    echo "<br>";}
?>
```

#### Indentering

Indentering eller indrag av kod används både till html-kod och php-kod. Indentering påverkar inte funktionen av program, men är väldigt viktigt för att koden ska bli läsbar, speciellt när man har kombinationer av if-satser och loopar. Den enkla regeln är att all kod på rader som följer efter en öppnande klammer `{` dras in, vanligtvis fyra steg. När man sedan kommer till stängande klammer `}` går man tillbaka lika många steg. 
	

```php
<?php
$animals=array('cat','dog','cat','dog');
$sizes=array('small','big','big','small');
for ($i=0; $i<count($animal); $i++);
    $thisanimal=$animals[$i];
    $thissize=$sizes[$i];
    if ($thisanimal=='cat') {
        if ($thissize=='small') {
           echo "mjau";         } else {
            echo "MJAU";        }    } elseif ($thisanimal == 'dog') {
        if ($thissize=='small') {
           echo "voff";         } else {
            echo "VOFF";        }            }
}
?>
```

Olika texteditorer har offtast funktioner för att automatiskt rätta till felaktig indentering. I Atom kan man till exempel markera det som ska indenteras och välja Edit -> Lines -> Auto indent. 