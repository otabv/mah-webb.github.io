---
layout: instructions
code: me105a
title: Självstudier 7
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


#Självstudier 7

##Uppgift 1

Gör en php-sida som exporterar alla kolumner i tabellen **building** i en tab-separerad fil **utan att använda** php-funktionen `fputcsv`

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer1');">

{::options parse_block_html="true" /}
<div id="answer1" style="display:none">

lösning

</div>
<!--END SHOW/HIDE-->
 
##Uppgift 2

Gör en php-sida som exporterar alla kolumner i tabellen **building** i en tab-separerad fil **genom att använda** php-funktionen `fputcsv`

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer2');">

{::options parse_block_html="true" /}
<div id="answer2" style="display:none">

lösning

</div>
<!--END SHOW/HIDE-->

##Uppgift 3

Gör en php-sida som exporterar alla kolumner i tabellen **building** i en komma-separerad fil **genom att använda** php-funktionen `fputcsv`

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer3');">

{::options parse_block_html="true" /}
<div id="answer3" style="display:none">

lösning

</div>
<!--END SHOW/HIDE-->

##Uppgift 4

Gör en sida med länkar till alla exporterade filer så att de enkelt kan hämtas från servern. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer4');">

{::options parse_block_html="true" /}
<div id="answer4" style="display:none">

lösning

</div>
<!--END SHOW/HIDE-->



##Uppgift 5

Lägg till några byggnader som innehåller olika tecken som kan ställa till problem i databassammanhang, och testa om exporten funkar. Testa följande tecken:

- åäö
- ; (semikolon)
- , (komma)
- ' (apostrof)
- " (citationstecken)
- < > (mindre än och större än)

Hur ser den exporterade filen ut?

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer5');">

{::options parse_block_html="true" /}
<div id="answer5" style="display:none">

lösning

</div>
<!--END SHOW/HIDE-->
