---
layout: instructions
code: me132a
title: Föreläsning 9
controls: false
date: 2015-03-12
---

#Programmering för webben

##Föreläsning 9

###Dagens innehåll
- Cookies
- Sessions

###Cookies

Cookies används för att lagra uppgifter om besökare till en webbplats. Det kan till exempel vara om man besökt en webbplats tidigare eller inte. Det kan också vara söktermer man använt tidigare.

Cookies lagras hos klienten, dvs på användarens dator.

Cookies kan alltså spara data första gången man besöker en webbplats. Dessa
data kan sedan hämtas och användas nästa gång man besöker webbplatsen, under förutsättning att man använder samma dator och samma webbläsare.

Cookies har olika "bäst före"-datum. Man kan ställa in när en cookie går ut.

Mängden data som kan sparas i cookies är begränsad.

PHP-funktionen `setcookie` används för att spara en cookie.

{% highlight php  startinline=True %}
setcookie(name,value,expire)
{% endhighlight %}

eller

{% highlight php  startinline=True %}
setcookie(name,value,expire,path)
{% endhighlight %}

Tidigare sparade cookies kommer man åt med

{% highlight php  startinline=True %}
$_COOKIE['cookiename']
{% endhighlight %}

Cookies måste sparas allra först på en webb-sida, innan någon html-kod kommer.
 
###Sessions

*Sessions* används för att lagra uppgifter *under* ett besök till en viss webbplats till skillnad från *cookies* som används för att lagra uppgifter *mellan* olika besök till en webbplats. En vanlig uppgift som lagras är till exempel användarnamn, och om användaren är inloggad eller inte. En session avslutas vanligtvis när en webbläsare stängs.

Nästa gång webbläsaren startas påbörjas en ny session.

Med sessionsvariabler kan man överföra data från en webbsida till en annan under ett besök på en och samma webbplats. Detta till skillnad från vanliga PHP-variabler som är flyktiga och bara "lever" på den sida de skapas.

PHP-sidor med sessionshantering börjar vanligtvis med PHP-kod som innehåller raden 

{% highlight php  startinline=True %}
session_start();
{% endhighlight %}

innan det kommer någon html-kod.

Koden startar en ny session om ingen session är igång eller återskapar alla sessionsvariabler under en pågående session.

Så fort en session är startad kan man komma åt sessionsvariabler med

{% highlight php  startinline=True %}
$_SESSION['sessionvariablename']
{% endhighlight %}

###Cookie-exempel

Räknar antal besök på en site

{% highlight html+php %}
<?php
//spara antal tidigare besök i variablen $visits eller sätt $visits till 0 om 
//inga tidigare besök gjorts:
if (isset($_COOKIE['visits'])) 
{ 
    $visits = $_COOKIE['visits']; 
} else {
    $visits = 0;
}
//öka visits med 1
$visits += 1;
//spara cookien igen med uppdaterat antal besök
setcookie('visits', $visits, time() + 3600 * 24 * 365);
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Cookies</title>
</head>
<body>
<?php
echo "Howdy partner, this is your visit number $visits to this site.";
?>
</body>
</html>
{% endhighlight %}
 
###Session-exempel

Räknar besök på en viss sida under en session.

{% highlight html+php %}
<?php
session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Sessions</title>
</head>
<body>
<h1>Session 1</h1>
<?php
//öka $_SESSION['visits'] med 1 om den redan finns, ge den annars startvärdet 1. 
if (isset($_SESSION['visits'])) 
{
    $_SESSION['visits']+=1;
}
else
{
    $_SESSION['visits']=1;
}
echo "This is visit ".$_SESSION['visits']." "."during this session. ";
?>
</body>
</html>
{% endhighlight %}

###Ta bort cookies och sessions

Cookies försvinner av sig själva när expire-tiden har gått ut. En cookie kan tas bort genom att sätta expire till en tidpunkt som redan inträffat:

{% highlight php  startinline=True %}
setcookie('visits','',time()-3600*24*365);
{% endhighlight %}

En session kan avslutas med:

{% highlight php  startinline=True %}
$_SESSION=array();
session_destroy();
{% endhighlight %}