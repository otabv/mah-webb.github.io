---
layout: instructions
code: me132a
title: Laboration 3 lösning
---

# Laboration 3 lösning

## Uppgift 1

### upp1.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>upp1</title>
  </head>
  <body>
    <form action="upp1.php" method="post">
      <input type="text" name="fullname"> Namn<br>
      <input type="email" name="email"> E-post<br>
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
    <title>upp1</title>
  </head>
  <body>
    <?php
      //ta hand om data från formuläret
      $fullname = $_POST["fullname"];
      $email = $_POST["email"];

      //nu har vi två variabler, $fullname och $email
      //som innehåller det som matades in i formuläret
      echo "<h2>Alternativ 1</h2>";
      echo "Välkommen ";
      echo $fullname;
      echo " med adressen ";
      echo $email;

      echo "<h2>Alternativ 2</h2>";
      echo "Välkommen $fullname med adressen $email";
    ?>
  </body>
</html>
```

### upp2.html

Identisk med upp2.html, förutom `action="upp2.php"`


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>upp2</title>
  </head>
  <body>
    <form action="upp2.php" method="post">
      <input type="text" name="fullname"> Namn<br>
      <input type="email" name="email"> E-post<br>
      <input type="submit" value="Skicka">
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
    <title>upp2</title>
  </head>
  <body>
    <?php
      //ta hand om data från formuläret
      $fullname = $_POST["fullname"];
      $email = $_POST["email"];

      //nu har vi två variabler, $fullname och $email
      //som innehåller det som matades in i formuläret

      //målet är att skapa följande kod:
      //Skicka mail: <a href="mailto:nånting">nåt annat</a>
      //obs att det behövs \ före ett dubbelt citationstecken som är mellan 
      //ett inledande och avslutande dubbelt citationstecken
      echo "<h2>Alt 1</h2>";
      echo "Skicka mail: <a href=\"mailto:";
      echo $email;
      echo "\">";
      echo $fullname;
      echo "</a>";

      //alternativ två, allt på samma rad
      echo "<h2>Alt 2</h2>";
      echo "Skicka mail: <a href=\"mailto:$email\">$fullname</a>";
    ?>
  </body>
</html>
```

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
    <input type="text" name="username"> Användarnamn <br>
    <input type="password" name="password"> Lösenord <br>
    <input type="text" name="firstname" > Förnamn <br>
    <input type="text" name="lastname" > Efternamn <br>
    <input type="email" name="email" > E-post <br>
    <input type="text" name="mobile" > Mobilnummer <br>
    <input type="text" name="street" > Gata <br>
    <input type="text" name="zip"> Postnummer <br>
    <input type="text" name="city" > Stad <br>
    <select name="payment">
    <option>Kredikort</option>
    <option>Kontant</option>
    </select> Betalningsmetod <br>
    <input type="checkbox" name="newsletter" value="yes" > Skicka nyhetsbrev <br>
    <input type="submit" value="Skicka">
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
    //steg 1: lägg in alla värden från formuläret i lämpliga variabler
    $username=$_POST["username"];
    $password=$_POST["password"]; //används inte, kan hoppas över
    $firstname=$_POST["firstname"];
    $lastname=$_POST["lastname"];
    $email=$_POST["email"];
    $mobile=$_POST["mobile"];
    $street=$_POST["street"];
    $zip=$_POST["zip"];
    $city=$_POST["city"];
    $payment=$_POST["payment"];

    //steg 2: visa resultatet
    echo "Användarnamn: $username";
    echo "<br>";
    echo "Namn: $firstname $lastname";
    echo "<br>";
    echo "Epost: $email";
    echo "<br>";
    echo "Mobiltelefon: $mobile";
    echo "<br>";
    echo "Adress: $street, $zip $city";
    echo "<br>";
    echo "Betalningsmetod: $payment";
    echo "<br>";
    ?>
  </body>
</html>
```

### upp3alt2.php

Ett alternativ där hjälpvariablerna `$fullname` och `$address` skapas.

```php
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 3</title>
  </head>
  <body>
    <?php
      //hämta från formulär
      $username=$_POST["username"];
      $firstname=$_POST["firstname"];
      $lastname=$_POST["lastname"];
      $email=$_POST["email"];
      $mobile=$_POST["mobile"];
      $street=$_POST["street"];
      $zip=$_POST["zip"];
      $city=$_POST["city"];
      $payment=$_POST["payment"];

      //skapa lite hjälpvariabler
      $fullname = $firstname . " " . $lastname;
      $address = $street . ", " . $zip . " " . $city;

      //presentera resultatet
      echo "Användarnamn: $username<br>";
      echo "Namn: $fullname<br>";
      echo "Epost: $email<br>";
      echo "Mobiltelefon: $mobile<br>";
      echo "Adress: $address<br>";
      echo "Betalningsmetod: $payment<br>";


    ?>

  </body>
</html>
```


### upp4.html

Identisk med upp3.html, förutom `action="upp4.php"`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 3</title>
  </head>
  <body>
    <form action="upp4.php" method="post">
    <input type="text" name="username"> Användarnamn <br>
    <input type="password" name="password"> Lösenord <br>
    <input type="text" name="firstname" > Förnamn <br>
    <input type="text" name="lastname" > Efternamn <br>
    <input type="email" name="email" > E-post <br>
    <input type="text" name="mobile" > Mobilnummer <br>
    <input type="text" name="street" > Gata <br>
    <input type="text" name="zip"> Postnummer <br>
    <input type="text" name="city" > Stad <br>
    <select name="payment">
    <option>Kredikort</option>
    <option>Kontant</option>
    </select> Betalningsmetod <br>
    <input type="checkbox" name="newsletter" value="yes" > Skicka nyhetsbrev <br>
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
    <?php
    //steg 1: lägg in alla värden från formuläret i lämpliga variabler
    //använd htmlspecialchars för att oskadliggöra eventuell 
    //htmlkod inmatad i formuläret
    $username=htmlspecialchars($_POST["username"],ENT_QUOTES,'utf-8');
    $password=$_POST["password"]; //htmlspecialchars behövs inte här
    $firstname=htmlspecialchars($_POST["firstname"],ENT_QUOTES,'utf-8');
    $lastname=htmlspecialchars($_POST["lastname"],ENT_QUOTES,'utf-8');
    $email=htmlspecialchars($_POST["email"],ENT_QUOTES,'utf-8');
    $mobile=htmlspecialchars($_POST["mobile"],ENT_QUOTES,'utf-8');
    $street=htmlspecialchars($_POST["street"],ENT_QUOTES,'utf-8');
    $zip=htmlspecialchars($_POST["zip"],ENT_QUOTES,'utf-8');
    $city=htmlspecialchars($_POST["city"],ENT_QUOTES,'utf-8');
    $payment=$_POST["payment"]; //htmlspecialchars behövs inte här

    //steg 2: visa resultatet
    echo "Användarnamn: $username";
    echo "<br>";
    echo "Namn: $firstname $lastname";
    echo "<br>";
    echo "Epost: $email";
    echo "<br>";
    echo "Mobiltelefon: $mobile";
    echo "<br>";
    echo "Adress: $street, $zip $city";
    echo "<br>";
    echo "Betalningsmetod: $payment";
    echo "<br>";
    ?>
  </body>
</html>
```

### upp5.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppgift 5</title>
  </head>
  <body>
    <h1>Ange radien på en cirkel</h1>
    <form action="upp5.php" method="post">
      <input type="text" name="radie">
      <input type="submit" value="Beräkna area">
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
    <h1>Resultat</h1>
    <?php
      $radie = htmlspecialchars($_POST["radie"],ENT_QUOTES,'utf-8');
      $area =  M_PI * $radie * $radie;
      echo "Arean på en cirkel med radien $radie är $area";
    ?>
  </body>
</html>
```




