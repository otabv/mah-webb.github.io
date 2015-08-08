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

#Självstudier 4

##Uppgift 1 

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

 

##Uppgift 2

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
<form method="post" action="add.php">
<input type="text" name="name"> Namn på byggnad<br>
<input type="text" name="street"> Gata<br>
<input type="text" name="streetnumber"> Gatunummer<br>
<input type="submit" value="Lägg till">
</form>
</body>
</html>
{% endhighlight %}


<p><b>add.php</b></p>

{% highlight html+php %}
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Byggnad tillagd</title>
</head>

<body>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

//första steget är att ta hand om data från formuläret
$name=$_POST['name'];
$street=$_POST['street'];
$streetnumber=$_POST['streetnumber'];

//upprätta förbindelse med databasen
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';

$sql="INSERT INTO building 
(name,street,streetnumber) VALUES
('$name','$street','$streetnumber')";

$result=$pdo->exec($sql);

echo "$name has been added<br><br>";

?>
</body>
</html>
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->

##Uppgift 3

Mata in minst två byggnader, tex Kranen och Ubåtshallen.

##Uppgift 4

Gör formulär för att mata in sal i tabellen *classroom*. Man ska med en dropdownmeny kunna välja vilken byggnad en sal ligger i. 

##Uppgift 5

Mata in några salar i de olika byggnaderna. 


