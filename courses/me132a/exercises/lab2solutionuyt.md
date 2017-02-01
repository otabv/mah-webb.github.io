---
layout: instructions
code: me132a
title: Laboration 2 lösning
---

# Laboration 2 lösning

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
      $width = 33;
      $height = 72;

      $area = $width * $height / 2;

      echo "Bredden är ";
      echo $width;

      echo ", höjden är ";
      echo $height;
      
      echo ", arean är ";
      echo $area;
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
      $firstname = "Bo";
      $lastname = "Peterson";
      $fullname = $firstname . " " . $lastname;

      echo "<h2>Alternativ 1</h2>";
      echo "Mitt namn är ";
      echo $fullname;

      echo "<h2>Alternativ 2</h2>";
      echo "Mitt namn är $fullname";

      //OBS det räcker att ha gjort ett alternativ. Andra alternativ
      //är också möjliga
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
      /* Detta är ett php-program som använder
      sammanslagningsoperatorn för att slå ihop
      strängar med text */

      $firstname = "Bo";
      $lastname = "Peterson";
      //slå ihop förnamn, mellanslag och efternamn för att skapa hela namnet
      $fullname = $firstname . " " . $lastname;


      echo "<h2>Alternativ 1</h2>";
      //visa resultatet med två echo
      echo "Mitt namn är ";
      echo $fullname;

      echo "<h2>Alternativ 2</h2>";
      //visa resultatet med en echo
      echo "Mitt namn är $fullname";

      //OBS det räcker att ha gjort ett alternativ. Andra alternativ
      //är också möjliga.
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
    //startvärden
    $days_in_months = array(31,28,31,30,31,30,31,31,30,31,30,31);
    $month = 2; //månad som människor räknar, 2 = februari

    //beräknade värden
    $i = $month - 1; //så som php räknar
    $days_in_selected_month = $days_in_months[$i];

    //presentera resultatet
    echo "Antal dagar i månad ";
    echo $month;
    echo " är ";
    echo $days_in_selected_month;
    echo "<br>";
    ?>
  </body>
</html>
```


