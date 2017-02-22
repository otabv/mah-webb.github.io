---
layout: instructions
code: me132a
title: Laboration 5 lösning
---

# Laboration 5 lösning

## Uppgift 1

### upp1.php

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 1</title>
  </head>
  <body>
    <?php
      $names=array("Felix","Oliver","Bo","Lovisa","Sara","Simon");
      //en loop behöver ett startvärde
      $i = 0; //startvärde
      echo "<ul>"; //start-tag för ul före loop
      while ($i < count($names)) { //villkor
         echo "<li>";
         echo $names[$i];
         echo "</li>";
         $i++; //variabeln $i räknas upp med 1
      }
      echo "</ul>"; //slut-tag för ul efter loop
     ?>
  </body>
</html>
```

## Uppgift 2

### upp2.php

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 2</title>
  </head>
  <body>
    <?php
      $names=array("Felix","Oliver","Bo","Lovisa","Sara","Simon");
      echo "<ol>"; //ol start-tag före loop
      //for (startvärde;villkor;uppräkning) {....}
      for ($i=0;$i<count($names);$i++) {
        echo "<li>";
        echo $names[$i];
        echo "</li>";
      }
      echo "</ol>"; //ol slut-tag efter loop
      ?>
  </body>
</html>
```

## Uppgift 3

### upp3.php

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 3</title>
  </head>
  <body>
    <?php
      $names=array("Felix","Oliver","Bo","Lovisa","Sara","Simon");
      echo "<table border=\"1\">"; //table start-tag före loop
      //for (startvärde;villkor;uppräkning) {....}
      for ($i=0;$i<count($names);$i++) {
        $rownumber = $i + 1; //radnummer är alltid ett mer än index för $names
        echo "<tr>"; //ny rad
        echo "<td>"; //starta kol 1
        echo $rownumber; //innehåll i kol 1
        echo "</td>"; //avsluta kol 1
        echo "<td>"; //starta kol 2
        echo $names[$i]; //innehåll i kol 2
        echo "</td>"; //avsluta kol 2
        echo "</tr>"; //avsluta raden
      }
      echo "</table>"; //table slut-tag efter loop
      ?>
  </body>
</html>
```

## Uppgift 4

### upp4.php

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 4</title>
  </head>
  <body>
    <?php
      $names=array("Felix","Oliver","Bo","Lovisa","Sara","Simon");
      echo "<ol>";
      foreach ($names as $name) {
          echo "<li>";
          echo $name;
          echo "</li>";
      }
      echo "</ol>";
    ?>
  </body>
</html>
```

## Uppgift 5 alternativ 1 - foreach-loop

### index.php

```php
<?php
//obs att denna fil endast innehåller php-kod, ingen doctype html etc
$output=""; //skapa en tom variabel output

//$singers om man ska följa handledningen
$actors = array("Sherilyn Fenn","Beyoncé","Heath Ledger","Leonardo DiCaprio","Tom Hardy");

$output .= "<ol>"; //lägg till start-tag för ordered list
foreach ($actors as $actor) {
  // .= betyder "lägg till på slutet i variabeln"
  $output .= "<li>";
  $output .= $actor;
  $output .= "</li>";

}
$output .= "</ol>";

//OBS include 'singers.html.php'; om man ska följa handledningen
include "actors.html.php";
?>
```

### actors.html.php (singers.html.php enligt handledning)

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Actors</title>
</head>
<body>
<p>
<?php echo $output; ?>
</p>
</body>
</html>
```

## Uppgift 5 alternativ 2 - for-loop

### index.php

```php
<?php
//denna fil innehåller ingen doctype html head etc, den innehåller inte heller någon echo. Isället så spara allt som ska skrivas ut i variabeln $output
$output="";

$names=array("Johanna","Pia","Gun-Marie","Shaya","Lillemor","Bo");
$output .= "<ol>";
for ($i=0;$i<count($names);$i++) {
    $output .= "<li>";
    $output .= $names[$i];
    $output .= "</li>";
}
$output .= "</ol>";
include "people.html.php";
?>
```

### people.html.php (singers.html.php enligt handledning)

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Famous people</title>
</head>
<body>
<p>
<?php echo $output; ?>
</p>
</body>
</html>
```

