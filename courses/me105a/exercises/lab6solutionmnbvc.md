---
layout: instructions
code: me105a
title: Laboration 6 lösning
---

# Laboration 6 lösning

## Uppgift 1

Laborationens olika php-filer kompletteras efter hand i de olika uppgifterna. Senaste versionen av all php-kod finns under uppgift 4. 
{: .info}

### login.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 1</title>
</head>
<body>
<form action="check.php" method="post">
<input type="email" name="email"> email <br>
<input type="password" name="password"> password <br>
<input type="submit" value="log in">
</form>
</body>
</html>
```


### check.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 1</title>
</head>
<body>
<?php
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

$email=$_POST['email'];
$password=$_POST['password'];
$salt='ijdb';

//gör en md5kodning av lösenordet. Det är det kodade lösenordet+salt vi ska 
//leta efter i author-tabellen
$password=md5($password.$salt);
$sql="SELECT name,id FROM author WHERE email='$email' AND password='$password'";

$result=$pdo->query($sql);
//nu ska $result innehålla en rad om vi angett korrekt email och password
//annars innehåller $result 0 rader

//Sätt först logged in till false.
$loggedin=false;
//Om matchande epost och lösenord hittats kommer loopen att genomlöpas minst
//en gång, och $loggedin kommer att bli true, annars förblir $loggedin false
foreach ($result as $row) {
    $name=$row['name'];
    $id=$row['id']; //id kommer vi att använda först i uppgift 2
    $loggedin=true;
}

if ($loggedin) {
    //inloggningen lyckades
    echo "Welcome $name. ";    
} else {
    //inloggningen misslyckades
    echo "Wrong username or password";
}

?>
</body>
</html>
```

## Uppgift 2

### login.php

Samma kod som i uppgift 1

### check.php

```php
<?php
session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 2</title>
</head>
<body>
<?php
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

$email=$_POST['email'];
$password=$_POST['password'];
$salt='ijdb';

//gör en md5kodning av lösenordet. Det är det kodade lösenordet+salt vi ska 
//leta efter i author-tabellen
$password=md5($password.$salt);
$sql="SELECT name,id FROM author WHERE email='$email' AND password='$password'";

$result=$pdo->query($sql);
//nu ska $result innehålla en rad om vi angett korrekt email och password
//annars innehåller $result 0 rader

//Sätt först logged in till false.
$loggedin=false;
//Om matchande epost och lösenord hittats kommer loopen att genomlöpas minst
//en gång, och $loggedin kommer att bli true, annars förblir $loggedin false
foreach ($result as $row) {
    $name=$row['name'];
    $id=$row['id'];
    $loggedin=true;
}

if ($loggedin) {
    //inloggningen lyckades
    $_SESSION['loggedin']=true;
    $_SESSION['authorname']=$name;
    $_SESSION['authorid']=$id;
    echo "Welcome $name. ";    
    echo "<a href='jokeform.php'>Add a joke</a>";
} else {
    //inloggningen misslyckades
    $_SESSION['loggedin']=false;
    $_SESSION['authorname']='';
    $_SESSION['authorid']='';
    echo "Wrong username or password";
}

?>
</body>
</html>
```

 
### jokeform.php

```php
<?php
session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 2</title>
</head>
<body>
<h1>Add a joke!</h1>
<form method='post' action='add.php'>
<textarea name='joketext' rows='8' cols='40'></textarea><br>
<input type='submit' value='Add'>
</form>
</body>
</html>
```

### add.php

```php
<?php
session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 2</title>
</head>
<body>
<?php
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';
$joketext=$_POST['joketext'];
$jokedate=date('Y-m-d');
$authorid=$_SESSION['authorid'];
$sql="INSERT INTO joke 
      (joketext,jokedate,authorid) VALUES 
      ('$joketext','$jokedate',$authorid)";
$result=$pdo->exec($sql);
echo "$joketext has been added";
?>
</body>
</html>
```

## Uppgift 4

Lösningsförslaget till uppgift 2 är mycket känsligt för sql-injections. Man kan bland annat logga in utan lösenord genom att ange följande email:

```
' OR 'zzz'='zzz';--
```
Man kan även ta bort joke-tabellen genom att mata in följande skämt:

```
Don’t ask a database to help you move furniture. 
They’ve been known to drop tables.','1970-01-01',99999);
DROP TABLE joke;--
```

Ett grundläggande skydd får man genom att använda funktionen `htmlspecialchars`. Ännu bättre skydd får man genom att även använde så kallade *prepared statements*.

### login.php - senaste versionen (samma som uppgift 1)

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 1</title>
</head>
<body>
<form action="check.php" method="post">
<input type="email" name="email"> email <br>
<input type="password" name="password"> password <br>
<input type="submit" value="log in">
</form>
</body>
</html>
```

### check.php - senaste versionen

```php
<?php
session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 4</title>
</head>
<body>
<?php
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

//htmlspecialchars för att skydda mot sql-injection
$email=htmlspecialchars($_POST['email'],ENT_QUOTES,'UTF-8');
$password=$_POST['password']; //här behövs inte htmlspecialchars eftersom password ändå kodas om med md5 nedan
$salt='ijdb';

//gör en md5kodning av lösenordet. Det är det kodade lösenordet+salt vi ska 
//leta efter i author-tabellen
$password=md5($password.$salt);
$sql="SELECT name,id FROM author WHERE email='$email' AND password='$password'";

$result=$pdo->query($sql);
//nu ska $result innehålla en rad om vi angett korrekt email och password
//annars innehåller $result 0 rader

//Sätt först logged in till false.
$loggedin=false;
//Om matchande epost och lösenord hittats kommer loopen att genomlöpas minst
//en gång, och $loggedin kommer att bli true, annars förblir $loggedin false
foreach ($result as $row) {
    $name=$row['name'];
    $id=$row['id'];
    $loggedin=true;
}

if ($loggedin) {
    //inloggningen lyckades
    $_SESSION['loggedin']=true;
    $_SESSION['authorname']=$name;
    $_SESSION['authorid']=$id;
    echo "Welcome $name. ";    
    echo "<a href='jokeform.php'>Add a joke</a>";
} else {
    //inloggningen misslyckades
    $_SESSION['loggedin']=false;
    $_SESSION['authorname']='';
    $_SESSION['authorid']='';
    echo "Wrong username or password";
}

?>
</body>
</html>
```

### jokeform.php - senaste versionen (samma som uppgift 2)

```php
<?php
session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 2</title>
</head>
<body>
<h1>Add a joke!</h1>
<form method='post' action='add.php'>
<textarea name='joketext' rows='8' cols='40'></textarea><br>
<input type='submit' value='Add'>
</form>
</body>
</html>
```

### add.php - senaste versionen

```php
<?php
session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Labb 6, uppgift 4</title>
</head>
<body>
<?php
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

//htmlspecialchars för att skydda mot sql-injection
$joketext=htmlspecialchars($_POST['joketext'],ENT_QUOTES,'UTF-8');
$jokedate=date('Y-m-d');
$authorid=$_SESSION['authorid'];
$sql="INSERT INTO joke 
      (joketext,jokedate,authorid) VALUES 
      ('$joketext','$jokedate',$authorid)";
$result=$pdo->exec($sql);
echo "$joketext has been added";
?>
</body>
</html>
```
