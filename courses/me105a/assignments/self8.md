---
layout: instructions
code: me105a
title: Självstudier 8
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


#Självstudier 8

##Uppgift 1

Följande fil är exporterad från tabellen **building** från tidigare självstudier, men även kompletterad med en kolumn som innehåller filnamn på bilder av byggnaderna. InDesign kräver UTF-16- format på filen istället för UTF-8 som vi brukar använda, annars fungerar inte åäö.

![](im8/exportfil.png)

Denna fil finns att ladda ned: [buildings.txt UTF-16](buildings.txt). 

Även bilder på byggnaderna finns att ladda ned:

- [niagara](im8/niagara.png)
- [orkanen](im8/orkanen.png)
- [scylla](im8/scylla.png)
- [odontologen](im8/odontologen.png)
- [gaddan](im8/gaddan.png)
- [halsasamhalle](im8/halsasamhalle.png)

Använd InDesigns mergefunktion för att ladda in den tab-separerade textfilen och gör en layout som innehåller namn, adress och bild på byggnaderna. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer1');">

{::options parse_block_html="true" /}
<div id="answer1" style="display:none">

Följande InDesign-mall läser in buildings.txt och skapar en layout:

[buildings.indd](buildings.indd)

Resultatet av en datamerge blir följande fil:

[buildings_result.indd](buildings_result.indd)

</div>
<!--END SHOW/HIDE-->


