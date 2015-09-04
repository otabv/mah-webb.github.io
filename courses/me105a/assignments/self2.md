---
layout: instructions
code: me105a
title: Självstudier 2
---

<script>
  var toggle = function(id) {
  var mydiv = document.getElementById(id);
  if (mydiv.style.display === 'block' || mydiv.style.display === '')
    mydiv.style.display = 'none';
  else
    mydiv.style.display = 'block'
  }
</script>

<style>
table {border-collapse: collapse;font-size:smaller}
th, td {border: 1px solid #BBBBBB}
th, td {text-align:left}
th, td {padding: 6px;}
</style>

#Självstudier 2

##Uppgift 1

Gör en sida *showrooms.php* som visar alla rum och antal platser i rummen som finns lagrade i tabellen *classroom* från föreläsning 1 och självstudieuppgift 1.

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer1');">

<div id="answer1" style="display:none">

<p>showrooms.php:</p>

{% highlight php %}
<?php
//ändra userid till ditt eget
include $_SERVER['DOCUMENT_ROOT'].'/userid/me105a/connect.php';

$sql="SELECT * FROM classroom";
$result=$pdo->query($sql);

foreach ($result as $row) {
	$roomnumber=$row['roomnumber'];
	$seats=$row['seats'];
	
	echo "$roomnumber har $seats platser";
	echo "<br>";
}
?>
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->

##Uppgift 2

Gör en sida *showrooms.php* som visar alla rum och antal platser i rummen som finns lagrade i tabellen *classroom* men nu ska de vara sorterade i stigande ordning med minst antal platser först och flest antal platser sist i listan.

Vi har inte gått igenom hur man sorterar ett sökresultat från en databas än. För att lösa denna uppgift kan du t. ex. googla "sort sql"

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning 1" onclick="toggle('answer2');">

<div id="answer2" style="display:none">

<p>Ändra SELECT-raden till</p>

{% highlight php  startinline=True %}
$sql="SELECT * FROM classroom ORDER BY seats";
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->

##Statistik

Jättesnällt om du talar om att du gjort eller försökt göra självstudien. Det är helt anonymt.

<iframe frameborder="0" src="http://ddwap.mah.se/k3bope/me105a/self/result.php?thisstudy=2" width="500" height="500">
</iframe>

