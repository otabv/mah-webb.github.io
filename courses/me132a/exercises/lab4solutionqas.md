---
layout: instructions
code: me132a
title: Laboration 4 lösning
---

# Laboration 4 lösning

## Uppgift 1

### upp1.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 1</title>
  </head>
  <body>
    <h1>Formulär</h1>
    <form method="post" action="upp1.php">
      <input type="text" name="firstname"> förnamn <br>
      <input type="text" name="lastname"> efternamn <br>
      <select name="language">
        <option value="sv">Swedish</option>
        <option value="en">English</option>
        <option value="dk">Danish</option>
        <option value="no">Norwegian</option>
        <option value="fi">Finnish</option>
      </select><br>
      <input type="submit" value="Skicka">
    </form>
  </body>
</html>
```

### upp1.php

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 1</title>
  </head>
  <body>
  <h1>Svar på formulär</h1>

  <?php
  //hämta data från formulär
  $firstname=htmlspecialchars($_POST['firstname'],ENT_QUOTES,'utf-8');
  $lastname=htmlspecialchars($_POST['lastname'],ENT_QUOTES,'utf-8');
  $language=htmlspecialchars($_POST['language'],ENT_QUOTES,'utf-8');

  //presentera resultat
  if ($language == "sv") {
    //detta utförs om villkoret är sant
    echo "Välkommen $firstname $lastname";
  } else {
    //detta utförs om villkoret är falskt
    echo "Welcome $firstname $lastname";
  }
  ?>
  </body>
</html>
```

## Uppgift 2

### upp2.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 2</title>
  </head>
  <body>
    <form action="upp2.php" method="post">
      <input type="text" name="fullname"> namn<br>
      <input type="checkbox" name="caps"> använd stora bokstäver<br>
      <input type="submit" value="skicka">
    </form>
  </body>
</html>
```

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
      //hämta data från formulär
      $fullname=htmlspecialchars($_POST['fullname'],ENT_QUOTES,'utf-8');
      //om checkboxen caps inte är förbockad skickas ingen
      //info alls om den, inte ens att den finns
      if (isset($_POST['caps'])) {
        //hämta värdet om checkboxen finns
        $caps=$_POST['caps'];
      } else {
        //om ingen checkbox med namnet caps hittas är den off
        $caps="off";
      }
      
      //förbered utskrift, omvandla eventuellt till stora bokstäver
      $presentation = "Välkommen $fullname";
      if ($caps=="on") {
          //omvandla presentation till stora bokstäver
        $presentation = strtoupper($presentation);
      }
      
      //presentera resultatet
      echo $presentation;
    ?>
  </body>
</html>
```

## Uppgift 3

### upp3.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 3</title>
  </head>
  <body>
    <form action="upp3.php" method="post">
      <input type="text" name="fullname"> namn<br>
      <input type="checkbox" name="caps"> använd stora bokstäver<br>
      <input type="submit" value="skicka">
    </form>
  </body>
</html>
```

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
      //hämta data från formulär
      $fullname=htmlspecialchars($_POST['fullname'],ENT_QUOTES,'utf-8');
      //om checkboxen caps inte är förbockad skickas ingen
      //info alls om den, inte ens att den finns
      if (isset($_POST['caps'])) {
        //hämta värdet om checkboxen finns
        $caps=$_POST['caps'];
      } else {
        //om ingen checkbox med namnet caps hittas är den off
        $caps="off";
      }
      
      //förbered utskrift, omvandla eventuellt till stora bokstäver
      $presentation = "Välkommen $fullname";
      if ($caps=="on") {
          //omvandla presentation till stora bokstäver
        $presentation = mb_strtoupper($presentation);
      }
      
      //presentera resultatet
      echo $presentation;
    ?>
  </body>
</html>
```

## Uppgift 4

### upp4.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 4</title>
  </head>
  <body>
    <h1>Formulär</h1>
    <form method="post" action="upp4.php">
      <input type="text" name="firstname"> förnamn <br>
      <input type="text" name="lastname"> efternamn <br>
      <select name="language">
        <option value="sv">Swedish</option>
        <option value="en">English</option>
        <option value="dk">Danish</option>
        <option value="no">Norwegian</option>
        <option value="fi">Finnish</option>
      </select><br>
      <input type="submit" value="Skicka">
    </form>
  </body>
</html>
```

### upp4.php

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 4</title>
  </head>
  <body>
  <h1>Svar på formulär</h1>

  <?php
  //hämta data från formulär
  $firstname=htmlspecialchars($_POST['firstname'],ENT_QUOTES,'utf-8');
  $lastname=htmlspecialchars($_POST['lastname'],ENT_QUOTES,'utf-8');
  $language=htmlspecialchars($_POST['language'],ENT_QUOTES,'utf-8');

  //presentera resultat
  if ($language == "sv") {
    echo "Välkommen $firstname $lastname";
  } elseif ($language == "en") {
    echo "Welcome $firstname $lastname";
  } elseif ($language == "dk") {
    echo "Velkommen $firstname $lastname";
  } elseif ($language == "no") {
    echo "Velkommen $firstname $lastname";
  } elseif ($language == "fi") {
    echo "Tervetuloa $firstname $lastname";
  }
  ?>
  </body>
</html>
```

## Uppgift 5

### upp5.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 5</title>
  </head>
  <body>
    <h1>Sasha Fierce är alter ego för:</h1>
    <form action="upp5.php" method="post">
      <input type="radio" name="singer" value="alicia keys"> Alicia Keys<br>
      <input type="radio" name="singer" value="beyonce"> Beyoncé<br>
      <input type="radio" name="singer" value="rihanna"> Rihanna<br>
      <input type="submit" value="skicka">
    </form>
  </body>
</html>
```

### upp5.php

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 5</title>
  </head>
  <body>
    <?php
      if (isset($_POST['singer'])) {
        //om något av de tre alternativen är valda
        $singer=htmlspecialchars($_POST['singer'],ENT_QUOTES,'utf-8');
      } else {
        //om inget alternativ är valt:
        $singer = "undefined";
      }

      //kolla om man svarat rätt och presentera resultat
      if ($singer=="beyonce") {
        echo "Rätt svar!";
      } else {
        echo "Fel svar!";
      }
    ?>
  </body>
</html>
```

## Uppgift 6

### upp6.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 6</title>
  </head>
  <body>
    <!--
    Vi kan välja att alla checkboxar har samma namn,
    då hamnar resultatet i en array.
    Istället kan varje checkbox ha eget namn,
    då hamnar resultatet i vanliga variabler.
    Vi väljer alt 2, utan array.-->
    
    <form method="post" action="upp6.php">
      <input type="checkbox" name="box1"> Rihanna heter Robin <br>
      <input type="checkbox" name="box2"> Robyn har gjort en låt som heter likadant som en Rihanna-låt<br>
      <input type="checkbox" name="box3"> Alicia Keys har en italiensk mamma<br>
      <input type="checkbox" name="box4"> Beyonce väntar trillingar<br>
      <input type="checkbox" name="box5"> Alicia Keys har fyra pappor<br>
      <input type="submit" value="skicka">
    </form>
  </body>
</html>
```

### upp6.php

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 6</title>
  </head>
  <body>
    <?php
      //hämta från formulär
      //varje $box-variabel får värdet on om den är förbockad och off om den inte är det
      if (isset($_POST["box1"])) {
        $box1=$_POST["box1"];
      } else {
        $box1="off";
      }
      if (isset($_POST["box2"])) {
        $box2=$_POST["box2"];
      } else {
        $box2="off";
      }
      if (isset($_POST["box3"])) {
        $box3=$_POST["box3"];
      } else {
        $box3="off";
      }
      if (isset($_POST["box4"])) {
        $box4=$_POST["box4"];
      } else {
        $box4="off";
      }
      if (isset($_POST["box5"])) {
        $box5=$_POST["box5"];
      } else {
        $box5="off";
      }
      
      //nu har vi $box1-5 som är on eller off
      //korrekt svar är: box1 och box2 ska vara förbockade
      //resten ska inte vara det
      //Ja, Rihanna heter Robin Fenty
      //Ja, de heter båda "Don't Stop the Music" men är olika låtar *
      //Nej, men hennes mamma har italienskt påbrå
      //Nej, tvillingar (februari 2017)
      //Nej, det tror jag verkligen inte
      //
      //* För övrigt har både Rihanna och Robyn gjort låtar ft. Snoop Dogg. 

      if ($box1 == "on" and
          $box2 == "on" and
          $box3 == "off" and
          $box4 == "off"  and
          $box5 == "off") {
          echo "Rätt svar";
      } else {
          echo "Fel svar";
      }
    ?>
  </body>
</html>
```

