---
layout: instructions
code: me105a
title: Laboration 4 lösning
---

# Laboration 4 lösning

## Uppgift 1

Filerna *index.php*  samt *add.php* är identiska med samma filer i uppgift 2, förutom att  *index.php* i uppgift 1 saknar länken *add new author*.

## Uppgift 2

### index.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Laboration 4, uppgift 2</title>
</head>
<body>
<h1>Add a joke!</h1>
<form method="post" action="add.php">
<textarea name="joketext"></textarea><br>
<!--obs att selecttaggen kommer före php-koden-->
<select name="authorid">
<?php
//kod för drop-down-meny
//anslut till databasen
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';
//sök alla författare
$sql='SELECT * FROM author';
$result=$pdo->query($sql);
//gör en loop som lägger till <option value='aktueltid'>Aktuellt författarnamn</option>
//varje varv i loopen blir ett alternativ i dropdownmenyn
foreach ($result as $row) {
    //hämta författarens namn i tabellen
    $name=$row['name'];
    //hämta författarens id
    $id=$row['id'];
    echo "<option value='$id'>$name</option>";
}
?>
<!--den avslutnande select kommer efter php-koden-->
</select> select author or <a href='authorform.html'>add new author</a><br>
<input type="submit" value="Add">
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
<title>Laboration 4, uppgift 2</title>
</head>

<body>
<h1>Joke added</h1>
<?php
//anslut till databasen
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';

//hämta data från formuläret
$joketext=$_POST['joketext'];
$jokedate=date('Y-m-d');
$authorid=$_POST['authorid'];

//lägg till skämt i joke-tabellen 
$sql="INSERT INTO joke (joketext,jokedate,authorid) VALUES ('$joketext','$jokedate',$authorid)";
$result=$pdo->query($sql);

echo "$joketext has been added.";
?>
</body>
</html>
```

### authorform.html

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Lab 4, uppgift 2</title>
</head>

<body>
<h1>Add author</h1>
<form method="post" action="authoradded.php">
<input type="text" name="name"> Author name<br>
<input type="email" name="email"> Author email<br>
<input type="submit" value="Add">
</form>
</body>
</html>
```

### authoradded.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 4, uppgift 2</title>
</head>

<body>

<?php
//första steget är att ta hand om data från formuläret
$name=$_POST['name'];
$email=$_POST['email'];
//anslut till databasen
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';

$sql="INSERT INTO author 
(name,email) VALUES
('$name','$email')";

$result=$pdo->exec($sql);

echo "$name has been added";
?>
<br>
<br>
<a href='index.php'>Back to jokeform</a>

</body>
</html>
```

### Refelktion över användbarhet

Vad händer om man matar inte ett skämt, och sedan upptäcker att författaren inte finns med i dropdownmenyn, och klickar *add new author*? Det som bland annat händer är att skämtet har försvunnit från inmatningsrutan när man återvänder till sidan *index.php* . Det finns andra brister också, för många att räkna upp. 

## Uppgift 3

Följande kod söker efter skämt och deras författare i tabellerna *joke* och *author* samtidigt. 

```sql
SELECT * FROM joke INNER JOIN author ON joke.authorid = author.id
```

Om man bara är intresserad av själva skämtet och författaren räcker det att man begränsa sig till kolumnerna *joketext* och *name*:

```sql
SELECT joketext,name FROM joke INNER JOIN author ON joke.authorid = author.id
```

## Uppgift 4

Lägg till WHERE ... efter SQL-koden från förra uppgiften:

```sql
SELECT joketext,name FROM joke INNER JOIN author ON joke.authorid = author.id WHERE name = 'ditt eget namn'
```

## Uppgift 5

### showalljokes.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 4, uppgift 5</title>
</head>
<body>
<h1>Alla skämt</h1>
<?php
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';

echo "<h2>Alternativ 1, med tabell</h2>";
$sql='SELECT joketext,name FROM joke INNER JOIN author ON joke.authorid=author.id';
$result=$pdo->query($sql);
echo "<table border='1'>";
echo "<tr><th>joketext</th><th>name</th></tr>";
foreach ($result as $row) {
	$name=$row['name'];
	$joketext=$row['joketext'];
	echo "<tr><td>$joketext</td><td>$name</td></tr>";
}
echo "</table>";

echo "<h2>Alternativ 2, med br (enklare)</h2>";
$sql='SELECT joketext,name FROM joke INNER JOIN author ON joke.authorid=author.id';
$result=$pdo->query($sql);
foreach ($result as $row) {
	$name=$row['name'];
	$joketext=$row['joketext'];
	echo "$joketext<br>$name<br><br>";
}

?>
</body>
</html>
```
