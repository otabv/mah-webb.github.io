---
layout: instructions
code: me105a
title: Självstudier 4
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

# Självstudier 4

## Uppgift 1 

Skapa tabellerna *classroom* och *building* utifrån E/R-diagrammen från självstudie 3 med lämplig SQL (CREATE TABLE classroom etc). Använd MySQL Query Browser. **OBS** Om du redan har en tabell *classroom* från självstudie 1 måste du börja med att ta bort den. Det gör du med

{% highlight sql %}
DROP TABLE classroom
{% endhighlight %}

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer1');">

<div id="answer1" style="display:none">

{% highlight sql %}
CREATE TABLE classroom (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  roomnumber CHAR(4),
  seats INT,
  buildingid INT
)
{% endhighlight %}

<p>Kolumnen <b>buildingid</b> i <b>classroom</b> kopplar ett visst rum till en viss byggnad. </p>

{% highlight sql %}
CREATE TABLE building (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name TEXT,
  streetnumber CHAR(10),
  street TEXT
)
{% endhighlight %}

<p>Typen CHAR(10) på <b>streetnumber</b>) gör att 10 tecken, både siffror och bokstäver kan sparas, till exempel 3C eller 11H.</p> 

</div>
<!--END SHOW/HIDE-->

 

## Uppgift 2

Gör html och php-sidor med formulär för att mata in byggnader i tabellen *building*.




<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer2');">

<div id="answer2" style="display:none">

<p><b>addbuilding.html</b></p>

{% highlight html+php %}
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Lägg till byggnad</title>
</head>
<body>
<h2>Lägg till byggnad</h2>
<form method="post" action="buildingadded.php">
<input type="text" name="name"> Namn på byggnad<br>
<input type="text" name="street"> Gata<br>
<input type="text" name="streetnumber"> Gatunummer<br>
<input type="submit" value="Lägg till">
</form>
</body>
</html>
{% endhighlight %}


<p><b>buildingadded.php</b></p>

{% highlight html+php %}
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Byggnad tillagd</title>
</head>

<body>
<?php
//gör så att felmeddelande visas
error_reporting(E_ALL);
ini_set('display_errors', 1);

//första steget är att ta hand om data från formuläret
$name=$_POST['name'];
$street=$_POST['street'];
$streetnumber=$_POST['streetnumber'];

//upprätta förbindelse med databasen, ersätt username med ditt eget användarnamn
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';

//lägg in lämplig sql-kod i variabeln $sql
$sql="INSERT INTO building 
(name,street,streetnumber) VALUES
('$name','$street','$streetnumber')";

//skicka sql-förfrågan till databasen
$result=$pdo->exec($sql);

echo "$name has been added<br><br>";

?>
</body>
</html>
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->

## Uppgift 3

Mata in minst två byggnader, tex Niagara (Nordenskiöldsgatan 1) och Orkanen (Nordenskiöldsgatan 10).

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer3');">

<div id="answer3" style="display:none">

<p>Använd formuläret från uppgift 2 för att lägga till byggnaderna</p>

</div>
<!--END SHOW/HIDE-->


## Uppgift 4

Gör formulärsida och sida för att ta emot resultatet från formuläret för att mata in sal i tabellen *classroom*. Man ska med en dropdownmeny kunna välja vilken byggnad en sal ligger i. Denna dropdownmeny ska hämta värden från tabellen *building*. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer4');">

<div id="answer4" style="display:none">

<p><b>addroom.php</b></p>
{% highlight html+php %}
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Lägg till sal</title>
</head>
<body>
<h2>Lägg till sal</h2>
<form method="post" action="roomadded.php">
<input type="text" name="roomnumber"> Salsnummer<br>
<input type="text" name="seats"> Antal platser<br>

<select name='buildingid'>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
//Innehållet i denna meny ska hämtas från tabellen building i databasen, därför måste vi 
//använda php-kod för att dynamiskt skapa innehållet.
//Anslut först till databasen
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';
//sql-kod för att söka alla byggnader som finns:
$sql="SELECT id,name FROM building";
//utför sökningen. 
$result=$pdo->query($sql);
//loopa igenom resultatet
foreach ($result as $row) {
	$id=$row['id']; //kolumnen id från aktuell rad
	$name=$row['name']; //kolumnen name från aktuell rad
	echo "<option value='$id'>$name</option>";
}
?>
</select> Byggnad<br>

<input type="submit" value="Lägg till">
</form>
</body>
</html>
{% endhighlight %}

<p><b>roomadded.php</b></p>
{% highlight html+php %}
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Sal tillagd</title>
</head>
<body>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

//första steget är att ta hand om data från formuläret
$roomnumber=$_POST['roomnumber'];
$seats=$_POST['seats'];
$buildingid=$_POST['buildingid'];

//upprätta förbindelse med databasen
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';

$sql="INSERT INTO classroom 
(roomnumber,seats,buildingid) VALUES
('$roomnumber','$seats','$buildingid')";

$result=$pdo->exec($sql);

echo "$roomnumber has been added<br><br>";
?>
</body>
</html>
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->


## Uppgift 5

Mata in några salar i de olika byggnaderna. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer5');">

<div id="answer5" style="display:none">

<p>Använd formuläret från uppgift 4 för att lägga till salarna</p>

</div>
<!--END SHOW/HIDE-->

## Statistik

Jättesnällt om du talar om att du gjort eller försökt göra självstudien. Det är helt anonymt.

<iframe frameborder="0" src="http://ddwap.mah.se/k3bope/me105a/self/result.php?thisstudy=4" width="500" height="500">
</iframe>



