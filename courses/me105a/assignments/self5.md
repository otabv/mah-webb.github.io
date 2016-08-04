---
layout: instructions
code: me105a
title: Självstudier 5
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


# Självstudier 5

## Uppgift 1 

Ange SQL för att lista alla rum inklusive antal platser och vilken byggnad de ligger i. Testa med MySQL Query Browser. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer1');">

{::options parse_block_html="true" /}
<div id="answer1" style="display:none">

{% highlight mysql %}
SELECT name,roomnumber,seats FROM classroom 
INNER JOIN building ON building.id=buildingid
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->

 
## Uppgift 2

Sök alla salar med minst 30 sittplatser. Visa namn på sal, antal platser och namn på byggnad. OBS: om du inte matat in några salar med minst 30 sittplatser kommer du inte att få några träffar. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer2');">

<div id="answer2" style="display:none">

{% highlight sql %}
#bygg vidare på sökningen från uppgift 1
SELECT name,roomnumber,seats FROM classroom 
INNER JOIN building ON building.id=buildingid
WHERE seats >= 30
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->


## Uppgift 3

Sök samtliga salar i en av byggnaderna som finns inmatad (tex Niagara), sortera salarna i storleksordning. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer3');">

<div id="answer3" style="display:none">

{% highlight mysql %}
SELECT name,roomnumber,seats FROM classroom 
INNER JOIN building ON building.id=buildingid
WHERE name = 'Niagara'
ORDER BY seats
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->


## Uppgift 4

Sök alla salar med beteckning som börjar med B. Visa namn på sal och antal platser. 

<!--START SHOW/HIDE-->
<input type="button" value="visa/göm lösning" onclick="toggle('answer4');">

<div id="answer4" style="display:none">

{% highlight mysql %}
#här räcker det att söka i tabellen classroom
SELECT roomnumber,seats FROM classroom WHERE roomnumber LIKE 'B%'
{% endhighlight %}

</div>
<!--END SHOW/HIDE-->

## Statistik

Jättesnällt om du talar om att du gjort eller försökt göra självstudien. Det är helt anonymt.

<iframe frameborder="0" src="http://ddwap.mah.se/k3bope/me105a/self/result.php?thisstudy=5" width="500" height="500">
</iframe>

