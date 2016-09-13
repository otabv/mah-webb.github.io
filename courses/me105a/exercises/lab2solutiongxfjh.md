---
layout: instructions
code: me105a
title: Laboration 2 lösning
---

# Laboration 2 lösning

## Uppgift 3

Se även index_alt2.php nedan där index och add slagits ihop till en sida. 

### index.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Laboration 2, uppgift 3</title>
</head>
<body>
<h2>Add a joke</h2>
<form method="post" action="add.php">
<textarea name="joketext"></textarea><br>
<!--textarea är att föredra, men man kan även ha input type=text -->
<input type="submit" value="Add">
</form>

<h2>All jokes</h2>
<?php
//anslut till databasen - ersätt k3bope med ert eget användarnamn
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

$sql='SELECT * FROM joke';
$result=$pdo->query($sql); //här funkar *inte* exec eftersom vi hämtar från databasen

//loopa igenom resultatet
foreach ($result as $row) {
    //variabeln $row innehåller alla kolumner i aktuell rad
	//hämta kolumnen joketext ur aktuell rad
    $joketext=$row['joketext'];
	echo "<p>$joketext</p>"; //istället för <p> kan <br> användas för att åtskilja de olika skämten
}
?>

</body>
</html>
```

### add.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Laboration 2, uppgift 3</title>
</head>
<body>
<?php
//anslut till databasen - ersätt k3bope med ert eget användarnamn
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

//kolla vilket skämt som matats in i formuläret
$joketext=htmlspecialchars($_POST['joketext'],ENT_QUOTES,'UTF-8');

//lägg dagens datum i formatet åååå-mm-dd i variabeln $date
$jokedate=date('Y-m-d');

//skapa SQL-kod för att lägga till $joketext och $jokedate
//OBS att man förs måste definiera variabeln $sql och sedan $pdo->... för 
//att SQL-frågan ska utföras. 
$sql="INSERT INTO joke (joketext,jokedate) VALUES ('$joketext','$jokedate')";
$result=$pdo->query($sql); //även $result=$pdo->exec($sql); fungerar för att lägga till i en tabell

//Ge ett bekräftande meddelande. Har används en echo-rad för att
//skriva hela meddelandet. Detta kan också delas up i flera rader. 
echo "<p>This joke:</p><p>$joketext</p><p>has been added ($jokedate)</p>";
?>
</body>
</html>
```

### index_alt2.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Laboration 2, uppgift 3, alternativ 2</title>
</head>
<body>
<h2>Add a joke</h2>
<form method="post" action=""><!--formuläret leder till sig självt-->
<textarea name="joketext"></textarea><br>
<!--textarea är att föredra, men man kan även ha input type=text -->
<input type="submit" value="Add">
</form>

<?php
//här är ett alternativ där index.php och add.php har slagits ihop
//till en sida med både formulär, kod för att lägga till i databas
//och kod för att visa alla skämt

//anslut till databasen - ersätt k3bope med ert eget användarnamn
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

//kolla om vi kommer till denna sida direkt (då ska inget skämt läggas till)
//eller om vi kommer hit genom att klickat "add" i formuläret.
//isåfall finns $_POST['joketext'] och koden för att lägga till nytt skämt
//kommer att köras. 
if (isset($_POST['joketext'])) {
    //kolla vilket skämt som matats in i formuläret
    $joketext=htmlspecialchars($_POST['joketext'],ENT_QUOTES,'UTF-8');

    //lägg dagens datum i formatet åååå-mm-dd i variabeln $date
    $jokedate=date('Y-m-d');

    //skapa SQL-kod för att lägga till $joketext och $jokedate
    //OBS att man förs måste definiera variabeln $sql och sedan $pdo->... för 
    //att SQL-frågan ska utföras. 
    $sql="INSERT INTO joke (joketext,jokedate) VALUES ('$joketext','$jokedate')";
    $result=$pdo->query($sql); //även $result=$pdo->exec($sql); fungerar för att lägga till i en tabell

    //Ge ett bekräftande meddelande.
    echo "<h2>New joke</h2>"; 
    echo "<p>This joke:</p><p>$joketext</p><p>has been added ($jokedate)</p>";
}

$sql='SELECT * FROM joke';
$result=$pdo->query($sql); //här funkar *inte* exec eftersom vi hämtar från databasen

echo "<h2>All jokes</h2>";
//loopa igenom resultatet
foreach ($result as $row) {
    //variabeln $row innehåller alla kolumner i aktuell rad
	//hämta kolumnen joketext ur aktuell rad
    $joketext=$row['joketext'];
	echo "<p>$joketext</p>"; //istället för <p> kan <br> användas för att åtskilja de olika skämten
}
?>

</body>
</html>
```

## Uppgift 4

### index.html

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Laboration 2, uppgift 4</title>
</head>
<body>
<h2>Lägg till en kontakt</h2>
<form method="post" action="add.php">
<input type="text" name="firstname"> Förnamn<br>
<input type="text" name="lastname"> Efternamn<br>
<input type="email" name="email"> E-post<br>
<input type="submit" value="Lägg till">
</form>
</body>
</html>
```

### add.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Laboration 2, uppgift 4</title>
</head>
<body>
<?php
//anslut till databasen - ersätt k3bope med ert eget användarnamn
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

//kolla vilken adress som matats in i formuläret, ta hand om specialtecken
$firstname=htmlspecialchars($_POST['firstname'],ENT_QUOTES,'UTF-8');
$lastname=htmlspecialchars($_POST['lastname'],ENT_QUOTES,'UTF-8');
$email=htmlspecialchars($_POST['email'],ENT_QUOTES,'UTF-8');

//skapa SQL-kod för att lägga till namn och epost
//OBS att man förs måste definiera variabeln $sql och sedan $pdo->... för 
//att SQL-frågan ska utföras. 
$sql="INSERT INTO contacts (firstname,lastname,email) VALUES ('$firstname','$lastname','$email')";
$result=$pdo->query($sql); //även $result=$pdo->exec($sql); fungerar för att lägga till i en tabell

//Ge ett bekräftande meddelande. 
echo "<p>$firstname $lastname</p><p>har lagts till.</p>";
?>
</body>
</html>
```

## Uppgift 5

### showall.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Laboration 2, uppgift 5</title>
</head>
<body>
<h2>Kontakter</h2>

<?php
//anslut till databasen - ersätt k3bope med ert eget användarnamn
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

//sök alla kontakter
$sql='SELECT * FROM contacts';
$result=$pdo->query($sql); //här funkar *inte* exec eftersom vi hämtar från databasen

echo "<h2>Alternativ 1</h2>";

//loopa igenom resultatet
foreach ($result as $row) {
    //variabeln $row innehåller alla kolumner i aktuell rad
    $firstname=$row['firstname'];
    $lastname=$row['lastname'];
    $email=$row['email'];
    echo "$firstname $lastname $email";
}

//samma sak fast i en html-tabell istället

//sök alla kontakter
$sql='SELECT * FROM contacts';
$result=$pdo->query($sql); //här funkar *inte* exec eftersom vi hämtar från databasen

echo "<h2>Alternativ 2</h2>";

echo "<table border='0' cellpadding='2'>"; //table-tag före loopen
//loopa igenom resultatet
foreach ($result as $row) {
    //variabeln $row innehåller alla kolumner i aktuell rad
    $firstname=$row['firstname'];
    $lastname=$row['lastname'];
    $email=$row['email'];
    echo "<tr>"; //rad-tag före en rad
    echo "<td>$firstname</td>"; //kolumn-tag före och efter varje kolumn
    echo "<td>$lastname</td>"; //kolumn-tag före och efter varje kolumn
    echo "<td>$email</td>"; //kolumn-tag före och efter varje kolumn
    echo "</tr>"; //slut-tag efter en rad
}
echo "</table>"; //slut-tag för tabellen efter loopen
?>

</body>
</html>
```

## Uppgift 6

Lösningen fungerar men om man matar in felaktig epostadress måste man börja om med hela formuläret igen. Bättre är att använda javascript direkt vid inmatning, se exempel på <http://www.w3resource.com/javascript/form/email-validation.php>

### add.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Laboration 2, uppgift 6</title>
</head>
<body>
<?php
//anslut till databasen - ersätt k3bope med ert eget användarnamn
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

//kolla vilken adress som matats in i formuläret, ta hand om specialtecken
$firstname=htmlspecialchars($_POST['firstname'],ENT_QUOTES,'UTF-8');
$lastname=htmlspecialchars($_POST['lastname'],ENT_QUOTES,'UTF-8');
$email=htmlspecialchars($_POST['email'],ENT_QUOTES,'UTF-8');

//kolla om $email innehåller @

if (strpos($email,"@")===false) {
    echo "E-postadressen är ogiltig, <a href='index.html'>försök igen</a>";
} else {
    //skapa SQL-kod för att lägga till namn och epost
    //OBS att man förs måste definiera variabeln $sql och sedan $pdo->... för 
    //att SQL-frågan ska utföras. 
    $sql="INSERT INTO contacts (firstname,lastname,email) VALUES ('$firstname','$lastname','$email')";
    $result=$pdo->query($sql); //även $result=$pdo->exec($sql); fungerar för att lägga till i en tabell

    //Ge ett bekräftande meddelande. 
    echo "<p>$firstname $lastname</p><p>har lagts till.</p>";    
}

?>
</body>
</html>
```



