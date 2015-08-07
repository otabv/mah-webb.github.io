---
layout: instructions
code: me105a
title: Självstudier 1
---


<script>
  var toggle = function() {
  var mydiv = document.getElementById('answer1');
  if (mydiv.style.display === 'block' || mydiv.style.display === '')
    mydiv.style.display = 'none';
  else
    mydiv.style.display = 'block'
  }
</script>

<div id="answer1">asdf</div>
<input type="button" value="visa/göm svar" onclick="toggle();"></input>


#Självstudier 1

##Uppgift 1

Starta MySQL Query Browser och skapa tabellen *classroom* från föreläsningsanteckningarna.

##Uppgift 2

Lägg till följande klassrum med hjälp av lämpliga SQL-satser i MySQL Query Browser;


<style>
table {border-collapse: collapse;font-size:smaller}
th, td {border: 1px solid #BBBBBB}
th, td {text-align:left}
th, td {padding: 6px;}
</style>


| roomnumber  | seats  |
|---|---|
| B305 | 28 |
| C310 | 40 |
| B303 | 20 |

##Uppgift 3

Fullständiga beteckningen på B305 är egentligen K2B305. Vad händer om du försöker lägga till K2B305 istället? Varför?

## Lösning till uppgift 1




{% highlight sql %}
CREATE TABLE classroom (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomnumber CHAR(4),
  seats INT
)
{% endhighlight %}## Lösning till uppgift 2
	
SQL för att lägga till rum:

{% highlight mysql %}
INSERT INTO  classroom (roomnumber,seats) VALUES ('B305',28);
INSERT INTO  classroom (roomnumber,seats) VALUES ('C310',40);
INSERT INTO  classroom (roomnumber,seats) VALUES ('B303',20);
{% endhighlight %}

## Lösning till uppgift 3

Kolumnen roomnumber får max innehålla 4 tecken. Man får ett felmeddelande om man försöker lägga in mer än fyra tecken:

{% highlight text %}
Data too long for column 'roomnumber' at row 1{% endhighlight %}

