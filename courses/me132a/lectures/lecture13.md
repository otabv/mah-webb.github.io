---
layout: instructions
code: me132a
title: Föreläsning 13
controls: false
date: 2015-04-17
---

#Programmering för webben

##Föreläsning 13

###Dagens innehåll

- Felsökning

### Vanliga fel

**Ett mycket vanligt fel** är att man missar tecknet "=" efter name i sina formulär. Man skriver till exempel

{% highlight html %}
<input type="text" name "city"> Stad
{% endhighlight %}

istället för

{% highlight html %}
<input type="text" name="city"> Stad
{% endhighlight %}

Ett enkelt sätt att hitta denna typ av fel är att kolla att alla parametrar har kommit med sidans URL. Om formuläret är korrekt och man har fyllt i fältet `city` med `Lund` så ska webbläsarens adressfält innehålla `city=Lund`, till exempel så här:

`http://ddwap.mah.se/k3bope/add.php?city=Lund`

En förutsättning är dock att man använder `method='get'` i formulärets form-tagg. Om man använder `method='post'` syns inte formulärdata i adressfältet. 

**Ett annat vanligt fel** är att man har olika namn i formuläret och php-sidan som tar emot formulärdata, så att man till exempel hämtar data från föregående formulär med

{% highlight php  startinline=True %}
$stad = $_GET['stad'];
{% endhighlight %}

istället för

{% highlight php  startinline=True %}
$city = $_GET['city'];
{% endhighlight %}


**Ibland ska ett script fungera utan formulärdata**. Man kan då använda funktionen `isset()`:

{% highlight php  startinline=True %}
if (isset($_GET["city"])) {
	$city = $_GET["city"];
} else {
	$city = "unknown";
}
echo "Testutskrift av city: $city <br>";
{% endhighlight %}

Om sidan anropas med 

`http://someserver.se/somedirectory/test.php`

blir utskriften

`Testutskrift av city: unknown`

men om sidan istället anropas med 

`http://someserver.se/somedirectory/test.php?city=Lund`

blir utskriften

`Testutskrift av city: Lund`

**Många fel beror på felaktiga citationstecken**. Man kan ofta välja om man använder enkla eller dubbla citationstecken, men ibland är det avgörande vad man använder. Den stora skillnaden är att *variabelnamn* ersätts av *variabelns värde* om man använder dubbla citationstecken. Om man använder enkla citationstecken sker ingen ersättning, istället används variabelns namn. Ett exempel:

{% highlight php  startinline=True %}
$name = "Robyn Fenty";

echo "<p>Welcome $name</p>"; //värdet av $name kommer att skrivas ut

echo '<p>Welcome $name</p>'; //$name kommer att skrivas ut
{% endhighlight %}

Utskriften blir 

{% highlight text %}
Welcome Robyn Fenty
Welcome $name
{% endhighlight %}

Vanligtvis är det första alternativet man är intresserad dvs att *variabelns värde* används. 

**Filer i fel kataloger** är en vanlig anledning till fel. Ofta gör man ändringar i en fil, uppdaterar sidan i webbläsaren men ingenting händer. Det beror ofta på att man ändrar i en fil med samma namn som den man tänkt ändra, men som ligger i en annan katalog. Detta händer till exempel när man kopierar filer från en katalog till en annan. 

**Felaktiga tecken i filnamn** ställer ibland till med problem. Undvik mellanslag, åäö och andra specialtecken i namn på filer och kataloger. 

**Korrekt indentering** är viktig för att göra koden lättläst och undvika fel. Här har vi ett exempel på en loop som endast ska göras om det finns minst 10 element i en array med namnet `$list`:

{% highlight php %}
<?php
if (count($list)>=10) {
    echo "<h2>Element i listan</h2>";
    echo "<ul>";
    foreach ($list as $element) {
        echo "<li>";
        echo $element;
        echo "</li>";    }
    echo "</ul>";}
?>
{% endhighlight %}

Utan indentering är det svårt att se vilket *kodblock* (kod mellan { och } ) som hör till if-satsen, och vilken som hör till for-loopen:
	
{% highlight php %}
<?php
if (count($list)>=10) {
echo "<h2>Element i listan</h2>";
echo "<ul>";
foreach ($list as $element) {
echo "<li>";
echo $element;
echo "</li>";}
echo "</ul>";}
?>
{% endhighlight %}

### Visa fel

PHP kan skriva ut felmeddelande som ger ledtrådar om vad som är fel. Ofta är dock PHP-servern inställd så att felmeddelande inte visas. Det finns olika sätt att aktivera felmeddelande. Om man själv kan konfigurera sin server kan man ställa in i filen `php.ini` att fel ska visas. På servern ddwap kommer vi inte åt `php.ini`. Istället kan vi skriva följande rader i början av alla php-script:

{% highlight php %}
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
{% endhighlight %}

Följande kod definierar först variabeln `$sum` men kallar den senare felaktigt `$summa`:

{% highlight php  startinline=True %}
error_reporting(E_ALL);
ini_set('display_errors', 1);
$x=5;
$y=10;
$sum=$x+$y;
echo "Summan av $x och $y är $summa";
{% endhighlight %}

Felmeddelandet blir:

`Notice: Undefined variable: summa in C:\inetpub\wwwroot\ad\K3BOPE\test.php on line 16`

När ni får ett felmeddelande är det viktigt att notera på vilken rad felet uppstått. Felet finns oftast i närheten av den raden, men felet kan lika gärna ligga på en närliggande rad, tex raden ovanför. 

### Testutskrifter

Testutskrifter är viktiga för att kolla att variabler innehåller korrekta värden. För att kolla att man verkligen fått med rätt data från ett formulär kan man när man testar lägga till `echo "Testutskrift: $variabelnamn"` enligt följande exempel:


{% highlight php  startinline=True %}
//hämta data från formulär
$city = $_GET["city"];

//testa att data från formulär verkligen kom med
echo "Testutskrift av variabeln city: $city <br>";
{% endhighlight %}

Echo funkar bra för att skriva ut en vanlig variabel, men funkar inte för en array:

{% highlight php  startinline=True %}
$list = array("Anna", "Bertil", "Cecilia");

echo "Testutskrift av list: $list <br>";
{% endhighlight %}

Utskriften blir 

`Testutskrift av list: Array`

För att verkligen se vad $list innehåller finns det ett par användbara funktioner, `print_r` och `var_dump`. Båda skriver ut innehållet i en array. `var_dump` är lite utförligare än `print_r`:

{% highlight php  startinline=True %}
$list = array("Anna","Bertil","Cecilia",123);

echo "Testutskrift av list: $list <br>";

echo "Testutskrift av list: (med print_r)";
echo "<pre>";
print_r($list);
echo "</pre>";

echo "Testutskrift av list: (med var_dump)";
echo "<pre>";
var_dump($list);
echo "</pre>";
{% endhighlight %}

Utskriften blir

{% highlight text %}
Testutskrift av list: (med print_r)
Array
(
    [0] => Anna
    [1] => Bertil
    [2] => Cecilia
    [3] => 123
)

Testutskrift av list: (med var_dump)

array(4) {
  [0]=>
  string(4) "Anna"
  [1]=>
  string(6) "Bertil"
  [2]=>
  string(7) "Cecilia"
  [3]=>
  int(123)
}
{% endhighlight %}

`print_r` skriver ut innehållet i en array, `var_dump` skriver även ut vilken typ innehållet har, i det här fallet *string* och *int* (*int* = *integer* = *heltal*). `<pre>`-taggarna i exemplet gör att testutskriften blir lättare att läsa. 

