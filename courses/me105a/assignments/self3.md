---
layout: instructions
code: me105a
title: Självstudier 3
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

#Självstudier 3


##Uppgift 1

Rita E/R-diagram för en databas som ska innehålla två entiteter:

- sal (*classroom*)
- byggnad (*building*)

Följande information om sal ska sparas i databasen:

- salsbeteckning (*roomnumber*)
- antal platser (*seats*)

Följande information om byggnaden ska sparas:

- gatuadress (*street*)
- gatunummer (*streetnumber*)
- benämning (*name*, tex kranen, ubåtshallen etc)

Dessutom ska det framgå i vilken byggnad en viss sal ligger. Det gör man med ett förhållande mellan entiteterna byggnad och sal.

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer1');">

<div id="answer1" style="display:none">

<p><img src="im3/er.png"></p>

</div>
<!--END SHOW/HIDE-->

## Uppgift 2

Vilken typ av förhållande är det mellan byggnad och sal? En-till-en, en-till-många, många-till-en eller många-till-många?

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer2');">

<div id="answer2" style="display:none">

<p>Mellan byggnad och sal är sambandet <b>en-till-många</b>: En byggnad kan innehålla många salar. (Mellan sal och byggnad är sambandet <b>många-till-en</b>).</p>

</div>
<!--END SHOW/HIDE-->



## Uppgift 3

Ta fram tabeller som motsvarar entiteterna sal och byggnad. Vilka kolumner behövs, dels för själva innehållet, men dessutom för att hantera sambandet mellan sal och byggnad?

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer3');">

<div id="answer3" style="display:none">

<p>Vi ser direkt i ER-diagrammet att tabellen <b>classroom</b> behöver kolumnerna <b>id</b>, <b>seats</b> och <b>roomnumber</b>. Dessutom behövs kolumnen <b>buildingid</b> för att koppla ett visst rum till en viss byggnad. </p>

<p>Tabellen <b>building</b> behöver kolumnerna <b>id</b>, <b>name</b>, <b>street</b> och <b>streetnumber</b>. Här behövs ingen extra kolumn. </p>

</div>
<!--END SHOW/HIDE-->

##Statistik

Jättesnällt om du talar om att du gjort eller försökt göra självstudien. Det är helt anonymt.

<iframe frameborder="0" src="http://ddwap.mah.se/k3bope/me105a/self/result.php?thisstudy=3" width="500" height="500">
</iframe>

