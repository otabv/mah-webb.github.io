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

Istället för `or` kan man skriva `||`, Istället för `and` kan man skriva `&&`
(finns dock vissa skillnader, se [officiella php-manualen](http://php.net/manual/en/language.operators.logical.php))

#### Logiska operarorer:

- == lika med
- != inte lika med
- < mindre än
- \> större än
- <= mindre än eller lika med
- \>= större än eller lika med

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
