---
layout: instructions
code: me105a
title: Självstudier 6
---

<style>
table {border-collapse: collapse;font-size:smaller}
th, td {border: 1px solid #BBBBBB}
th, td {text-align:left}
th, td {padding: 6px;}
</style>

<script>
  var toggle = function(id) {
  var mydiv = document.getElementById(id);
  if (mydiv.style.display === 'block' || mydiv.style.display === '')
    mydiv.style.display = 'none';
  else
    mydiv.style.display = 'block'
  }
</script>


#Självstudier 6

##Uppgift 1 

Skapa en tabell **user** som ska kunna användas för att logga in i building-classroom-databasen från tidigare självstudier. Tabellen ska innehålla följande kolumner:

- **id** av typen INT. Denna kolumn är primärnyckel för tabellen. 
- **username** av typen CHAR(64). Denna kolumn får inte vara tom, och får bara innehålla unika värden
- **password** av typen CHAR(32). Denna kolumn får inte vara tom.

Lägg till tabellen med MySQL Query Browser.

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer1');">

{::options parse_block_html="true" /}
<div id="answer1" style="display:none">

{% highlight mysql %}
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username CHAR(64) UNIQUE NOT NULL,
    password CHAR(32) NOT NULL
)
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->
 
##Uppgift 2

Gör en webbsida där man kan registrera sig genom att mata in användarnamn och lösenord. Om användarnamnet redan finns ska man få ett meddelande om det, om det inte finns ska det läggas till i databasen. Lösenordet ska sparas md5-kodat i databasen. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer2');">

{::options parse_block_html="true" /}
<div id="answer2" style="display:none">

**register1.html**

{% highlight html+php %}
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Registrera användare - steg 1</title>
</head>
<body>
<h2>Registrera användare - steg 1</h2>
<form method="post" action="register2.php">
<input type="text" name="username"> användarnamn<br>
<input type="password" name="password"> lösenord<br>
<input type="submit" value="Registrera">
</form>
</body>
</html>
{% endhighlight %}

**register2.php**

{% highlight html+php %}
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Registrera användare - steg 2</title>
</head>
<body>
<h2>Registrera användare - steg 2</h2>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

//första steget är att ta hand om data från formuläret
$username=$_POST['username'];
$seats=$_POST['password'];

//upprätta förbindelse med databasen
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';

//sql för att lägga till användare
$sql="INSERT INTO user 
(username,password) VALUES
('$username',MD5('$seats'))";

try {
	//lägg till användare i databasen
	$result=$pdo->exec($sql);
	echo "$username har registrerats.";
}
catch (Exception $e)
{
	//visa felmeddelande om username redan fanns.
	//OBS 1 felmeddelandet visas även om man försöker ange ett
	//användarnamn längre än 64 tecken, eller ett tomt användarnamn
	//OBS 2 det blir inget felmeddelande om man lämnar lösenordet tomt. 
	//Även ett tomt lösenord ger 32 tecken när man gör md5-kodning
	echo "Användarnamnet $username finns redan registrerat.";
}
?>
</body>
</html>
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->


##Statistik

Jättesnällt om du talar om att du gjort eller försökt göra självstudien. Det är helt anonymt.

<iframe frameborder="0" src="http://ddwap.mah.se/k3bope/me105a/self/result.php?thisstudy=6" width="500" height="500">
</iframe>

