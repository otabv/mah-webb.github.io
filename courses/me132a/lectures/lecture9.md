---
layout: instructions
code: me132a
title: Föreläsning 9
controls: false
date: 2015-03-12
---

# Programmering för webben

## Föreläsning 9

### Dagens innehåll
- Cookies
- Sessions

### Cookies

Cookies används för att lagra uppgifter om besökare till en webbplats. Det kan till exempel vara om man besökt en webbplats tidigare eller inte. Det kan också vara söktermer man använt tidigare.

Cookies lagras hos klienten, dvs på användarens dator.

Cookies kan alltså spara data första gången man besöker en webbplats. Dessa
data kan sedan hämtas och användas nästa gång man besöker webbplatsen, under förutsättning att man använder samma dator och samma webbläsare.

Cookies har olika "bäst före"-datum. Man kan ställa in när en cookie går ut.

Mängden data som kan sparas i cookies är begränsad.

PHP-funktionen `setcookie` används för att spara en cookie.

```php
<?php
setcookie(name,value,expire)
?>
```

eller

```php
<?php
setcookie(name,value,expire,path)
?>
```

Tidigare sparade cookies kommer man åt med

```php
<?php
$_COOKIE['cookiename']
?>
```

Cookies måste sparas allra först på en webb-sida, innan någon html-kod kommer.
 
### Sessions

*Sessions* används för att lagra uppgifter *under* ett besök till en viss webbplats till skillnad från *cookies* som används för att lagra uppgifter *mellan* olika besök till en webbplats. En vanlig uppgift som lagras är till exempel användarnamn, och om användaren är inloggad eller inte. En session avslutas vanligtvis när en webbläsare stängs.

Nästa gång webbläsaren startas påbörjas en ny session.

Med sessionsvariabler kan man överföra data från en webbsida till en annan under ett besök på en och samma webbplats. Detta till skillnad från vanliga PHP-variabler som är flyktiga och bara "lever" på den sida de skapas.

PHP-sidor med sessionshantering börjar vanligtvis med PHP-kod som innehåller raden 

```php
<?php
session_start();
?>
```

innan det kommer någon html-kod.

Koden startar en ny session om ingen session är igång eller återskapar alla sessionsvariabler under en pågående session.

Så fort en session är startad kan man komma åt sessionsvariabler med

```php
<?php
$_SESSION['sessionvariablename']
?>
```

### Cookie-exempel

Räknar antal besök på en site

```php
<?php
//spara antal tidigare besök i variablen $visits eller sätt $visits till 0 om 
//inga tidigare besök gjorts:
if (isset($_COOKIE['visits'])) 
{ 
    $visits = $_COOKIE['visits']; 
} else {
    $visits = 0;
}
//öka visits med 1
$visits += 1;
//spara cookien igen med uppdaterat antal besök
setcookie('visits', $visits, time() + 3600 * 24 * 365);
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Cookies</title>
</head>
<body>
<?php
echo "Howdy partner, this is your visit number $visits to this site.";
?>
</body>
</html>
?>
```
 
### Session-exempel

Räknar besök på en viss sida under en session.

```php
<?php
session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Sessions</title>
</head>
<body>
<h1>Session 1</h1>
<?php
//öka $_SESSION['visits'] med 1 om den redan finns, ge den annars startvärdet 1. 
if (isset($_SESSION['visits'])) 
{
    $_SESSION['visits']+=1;
}
else
{
    $_SESSION['visits']=1;
}
echo "This is visit ".$_SESSION['visits']." "."during this session. ";
?>
</body>
</html>
?>
```

### Ta bort cookies och sessions

Cookies försvinner av sig själva när expire-tiden har gått ut. En cookie kan tas bort genom att sätta expire till en tidpunkt som redan inträffat:

```php
<?php
setcookie('visits','',time()-3600*24*365);
?>
```

En session kan avslutas med:

```php
<?php
$_SESSION=array();
session_destroy();
?>
```

### Exempel från föreläsning 2016-03-29

**cookies.php**

```php
<?php
$date=date("Y-m-d H:i:s");
if (!isset($_COOKIE["dateoffirstvisit"])){
    //cookie expires in one year
    setcookie("dateoffirstvisit",$date,time() + 60 * 60 * 24 * 365);
}

setcookie("dateoflastvisit",$date,time() + 60 * 60 * 24 * 365);

?>
<!doctype html5>
<html>
<head>
</head>
<body>
<?php
echo "Dagens datum: $date";

echo "<br>";

echo "Datum för första besök: ";
echo $_COOKIE["dateoffirstvisit"];

echo "<br>";

echo "Datum för senaste besök: ";
echo $_COOKIE["dateoflastvisit"];
?>
</body>
</html>
```

**session.php**

```php
<?php
session_start();
?>
<!doctype html5>
<html>
<head>
</head>
<body>
<h1>Sida 1</h1>
<?php
//$date lever bara på denna sidan
$date = date("Y-m-d H:i:s");
echo $date;
echo "<br>";
//sessionsvariabler lever vidare efter att sidan lämnats
$_SESSION["username"]="bo_peterson";
echo "User: ";
echo $_SESSION["username"];
echo "<br>";
?>
    
<a href="session2.php">Sessionsida nummer 2</a>    
</body>
</html>
```


**session2.php**


```php
<?php
session_start();
?>
<!doctype html5>
<html>
<head>
</head>
<body>
<h1>Sida 2</h1>
<?php
//$date finns inte längre
echo $date;
echo "<br>";

//men en sessionsvariabel kan komma från en tidigare sida
echo "Username: ";
echo $_SESSION["username"];
?>
</body>
</html>
```

