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


Testar vilt


En inforad

En till inforad
{: .info}


Hej
Hopp
Faderalla
{: .info}


Detta 
	
var 

väl
lite
konstigt
{: .test}

<style>
.test {font-family:"verdana"}
#testid {font-family:"comic sans ms"}
</style>

Blir detta verdana?
{: .test}

Blir detta en id?
{: #testid}

En
id
på
flera
rader
{: #testid}

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


![](im3/er.png)

</div>
<!--END SHOW/HIDE-->


## Uppgift 2

Vilken typ av förhållande är det mellan byggnad och sal? En-till-en, en-till-många, många-till-en eller många-till-många?

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer2');">

<div id="answer2" style="display:none">

<p>Mellan byggnad och sal är sambandet *en-till-många*: En byggnad kan innehålla många salar. (Mellan sal och byggnad är sambandet *många-till-en*).</p>

</div>
<!--END SHOW/HIDE-->



## Uppgift 3

Ta fram tabeller som motsvarar entiteterna sal och byggnad. Vilka kolumner behövs, dels för själva innehållet, men dessutom för att hantera sambandet mellan sal och byggnad?

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer3');">

<div id="answer3" style="display:none">

<p>Vi ser direkt i ER-diagrammet att tabellen *classroom* behöver kolumnerna *id*, *seats* och *roomnumber*. Dessutom behövs kolumnen *buildingid* för att koppla ett visst rum till en viss byggnad. </p>

<p>Tabellen *building* behöver kolumnerna *id*, *name*, *street* och *streetnumber*. Här behövs ingen extra kolumn. </p>

</div>
<!--END SHOW/HIDE-->



##Lösning uppgift 1
 
![](im3/er.png)

##Lösning uppgift 2

Mellan byggnad och sal är sambandet *en-till-många*: En byggnad kan innehålla många salar. (Mellan sal och byggnad är sambandet *många-till-en*).

##Lösning uppgift 3

Vi ser direkt i ER-diagrammet att tabellen *classroom* behöver kolumnerna *id*, *seats* och *roomnumber*. Dessutom behövs kolumnen *buildingid* för att koppla ett visst rum till en viss byggnad. 

Tabellen *building* behöver kolumnerna *id*, *name*, *street* och *streetnumber*. Här behövs ingen extra kolumn. 

