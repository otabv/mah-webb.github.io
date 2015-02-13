---
layout: instructions
code: me132a
title: Laboration 5
---

# Laboration 5

Syfte med laborationen:


## Förberedelser:

Syfte med laborationen:

Att förstå hur olika kontrollstrukturer såsom for-loop och while-loop fungerar i PHP

Förberedelser:

- Läs sidorna 76-85 i boken. 

Lämna in följande

- Alla php-filer ihopzippade

OBS: Använd samma katalogstruktur som i laboration 1, dvs lägg alla filer i katalogen ddwap/me132a/lab5.

##Uppgift 1

Gör en PHP-fil som heter upp1.php som innehåller en array med 5 element. Varje element ska innehålla ett namn. Skriv PHP-kod som med en **while-loop** genererar följande HTML-kod, dvs kod som ger en punktlista:

{% highlight html %}
<ul>
<li>Namn 1</li>
<li>Namn 2</li>
<li>Namn 3</li>
<li>Namn 4</li>
<li>Namn 5</li>
</ul>
{% endhighlight %}


där Namn 1 - Namn 5 ska vara de namn som finns i arrayen. Resulterande webbsida skulle till exempel kunna se ut så här:

<div style="border:2px solid black">
<ul>
<li>Beyoncé Knowles</li>
<li>Alicia Keys</li>
<li>Jay-Z</li>
<li>Lil&#39; Wayne</li>
<li>Lill Babs</li>
</ul>
</div>



Det är viktigt att utskriften uppdateras om arrayen med namn uppdateras dvs om namn ändras, läggs till eller tas bort. 

## Uppgift 2

Gör en fil upp2.php som istället skriver ut namn från en array med en **for-loop** som en numrerad lista:

{% highlight html %}
<ol>
<li>Namn 1</li>
<li>Namn 2</li>
<li>Namn 3</li>
<li>Namn 4</li>
<li>Namn 5</li>
</ol>
{% endhighlight %}


Resultatet kan se ut så här:

<div style="border:2px solid black">
<ol>
<li>Beyoncé Knowles</li>
<li>Alicia Keys</li>
<li>Jay-Z</li>
<li>Lil&#39; Wayne</li>
<li>Lill Babs</li>
</ol>
</div>


## Uppgift 3

Gör en php-sida upp3.php. Denna sida ska ocks använda en **for-loop**, men nu ska en tabell med två kolumner skapas. Följande HTML-kod ska skapas av PHP:

{% highlight html %}
<table border="1">
<tr><td>1</td><td>Beyoncé Knowles</td></tr>
<tr><td>2</td><td>Alicia Keys</td></tr>
<tr><td>3</td><td>Jay-Z</td></tr>
<tr><td>4</td><td>Lil&#39; Wayne</td></tr>
<tr><td>5</td><td>Lill Babs</td></tr>
</table>
{% endhighlight %}

Resultatet kan se ut så här:

<div style="border:2px solid black;padding:20px">
<table border="1">
<tr><td>1</td><td>Namn 1</td></tr>
<tr><td>2</td><td>Namn 2</td></tr>
<tr><td>3</td><td>Namn 3</td></tr>
<tr><td>4</td><td>Namn 4</td></tr>
<tr><td>5</td><td>Namn 5</td></tr>
</table>
</div>

##Uppgift 4

Nu ska en **foreach-loop** användas för att loopa igenom en **associativ array** och skapa en tabell. Använd samma array med månader som vi använt tidigare:

{% highlight php  startinline=True %}
$days_in_months=array('januari'=>31,'februari'=>28,'mars'=>31,'april'=>30,'maj'=>31,'juni'=>30,'juli'=>31,'augusti'=>31,'september'=>30,'oktober'=>31,'november'=>30,'december'=>31);
{% endhighlight %}

{% highlight html %}
<h2>Foreach-exempel</h2>
<table><tr><td>januari</td><td>31</td></tr>
<tr><td>februari</td><td>28</td></tr>
<tr><td>mars</td><td>31</td></tr>
<tr><td>april</td><td>30</td></tr>
<tr><td>maj</td><td>31</td></tr>
<tr><td>juni</td><td>30</td></tr>
<tr><td>juli</td><td>31</td></tr>
<tr><td>augusti</td><td>31</td></tr>
<tr><td>september</td><td>30</td></tr>
<tr><td>oktober</td><td>31</td></tr>
<tr><td>november</td><td>30</td></tr>
<tr><td>december</td><td>31</td></tr>
</table>
{% endhighlight %}

Resultatet kan då se ut så här:

<div style="border:2px solid black;padding:20px">
<h2>Foreach-exempel</h2>
<table><tr><td>januari</td><td>31</td></tr>
<tr><td>februari</td><td>28</td></tr>
<tr><td>mars</td><td>31</td></tr>
<tr><td>april</td><td>30</td></tr>
<tr><td>maj</td><td>31</td></tr>
<tr><td>juni</td><td>30</td></tr>
<tr><td>juli</td><td>31</td></tr>
<tr><td>augusti</td><td>31</td></tr>
<tr><td>september</td><td>30</td></tr>
<tr><td>oktober</td><td>31</td></tr>
<tr><td>november</td><td>30</td></tr>
<tr><td>december</td><td>31</td></tr>
</table>
</div>

##Uppgift 5

Vi ska nu se hur en PHP-fil kan infoga en annan PHP-fil med hjälp av `include`.

Gör en php-sida som döps till *index.php* och som läggs i katalogen *upp5* i *lab5*. 

Filen ska ha samma struktur som exemplet på sidan 84 i boken. 

Sidan ska ska skapa en variabel, `$output`, som ska innehålla den kod som producerades i uppgift 1. Utgå från följande mall:

{% highlight php  startinline=True %}
<?php
$output='';

/*
här ska skrivas kod som skapar
en punktlista med namn får en array
*/

include 'singers.html.php';
?>
{% endhighlight %}


OBS att denna fil inte ska innehålla någon html-kod utanför PHP-koden, dvs ingen inledande !DOCTYPE etc.

!DOCTYPE etc ska istället finnas i filen *singers.html.php* i samma mapp som *index.php* som i stort sett är identisk med count.html.php i boken:

{% highlight html+php %}
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Singers</title>
</head>
<body>
<p>
<?php echo $output; ?>
</p>
</body>
</html>
{% endhighlight %}

Utskriften ska bli den samma som i uppgift 1 när man tittar på *index.php*.