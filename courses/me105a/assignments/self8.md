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

Följande fil är exporterad från tabellen **building** från tidigare självstudier, men även kompletterad med en kolumn som innehåller filnamn på bilder av byggnaderna. 

![](im8/exportfil.png)

Denna fil finns att [ladda ned](buildings.txt). 

Även bilder på byggnaderna finns att ladda ned:

- [niagara](im8/niagara.png)
- [orkanen](im8/orkanen.png)
- [scylla](im8/scylla.png)
- [odontologen](im8/odontologen.png)
- [gaddan](im8/gaddan.png)
- [halsasamhalle](im8/halsasamhalle.png)

Använd InDesigns mergefunktion för att ladda in den tab-separerade textfilen och gör en layout som innehåller namn, adress och bild på byggnaderna. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answerXXX');">

{::options parse_block_html="true" /}
<div id="answerXXX" style="display:none">

lösning

</div>
<!--END SHOW/HIDE-->


