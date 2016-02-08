---
layout: instructions
code: me132a
title: Föreläsning 4
controls: false
date: 2015-02-05
---

# Programmering för webben

## Föreläsning 4

### Dagens innehåll

- Strängar
    - Dubbla eller enkla citationstecken?
    - Escape-tecken
    - Konkatenering
    - Strängfunktioner
    - Jämföra strängar
- Kontrollstrukturer
    - if-else

### Strängar

En sträng är helt enkelt en sammanhängande följd av tecken.
Tecknen kan vara bokstäver, siffror, mellanslag, speciella
symboler mm

För att tala om var en sträng *börjar* och *slutar* använder man
i PHP enkla eller dubbla citationstecken

Exempel på strängar:

'en enkel sträng'

"Sträng nummer 2"

### Dubbla eller enkla citationstecken?

Det spelar oftast ingen roll om man använder enkla eller
dubbla citationstecken, men det finns undantag nämligen om man ska skriva ut ett variabelvärde inuti en sträng:

{% highlight php  startinline=True %}
$name = "Bo P";
echo "Välkommen $name.";
{% endhighlight %}

Utskriften blir

{% highlight text %}
Välkommen Bo P.
{% endhighlight %}

{% highlight php  startinline=True %}
$name = "Bo P";
echo 'Välkommen $name.';
{% endhighlight %}

Utskriften blir

{% highlight text %}
Välkommen $name.
{% endhighlight %}

Man måste alltså skilja på variabeln *namn* och variabelns *värde*. Med *enkla* citationstecken så skrivs *variabelnamnet* ut, med *dubbla* citationstecken skrivs *variabelvärdet* ut. 

Om man vill skriva citationstecken inne i en sträng finns det olika sätt att lösa det:

{% highlight php  startinline=True %}
Om man vill använda citationstecken inuti en sträng:
$name = "Christian "Chippen" Wilhelmsson"; //funkar inte
$name = 'Christian "Chippen" Wilhelmsson'; //funkar
$name = "Christian \"Chippen\" Wilhelmsson"; //funkar
$name = 'Tim O'Reilly'; //funkar inte
$name = "Tim O'Reilly"; //funkar
$name = 'Tim O\'Reilly'; //funkar också
{% endhighlight %}

### Escape-tecken

Tecknet \ (backslash) kallas för escape-tecken, och används för att få med tecken i strängar som inte kan vara med direkt.

Ibland är det tvunget med escape-tecken, tex om både
enkla och dubbla citationstecken ska vara med i
samma sträng:

{% highlight php  startinline=True %}
$name = "Tom \"Haren\" O'Hara"; //funkar
$name = 'Tom "Haren" O\'Hara'; //funkar också
{% endhighlight %}

### Konkatenering

Konkatenering innebär att man slår ihop strängar.

`.` (punkt) används som konkateneringsoperator

{% highlight php  startinline=True %}
$firstname="Bo";
$middlename="Göran";
$lastname="Peterson";
$space=" ";
$fullname=$firstname.$space.$middlename.$space.$lastname;
echo $fullname; //Bo Göran Peterson skrivs ut
//Alternativ:
$fullname="$firstname $middlename $lastname";
echo $fullname; //Bo Göran Peterson skrivs ut
{% endhighlight %}

Operatorn `.=` kan användas för att bygga på en
existerande strängvariabel:

{% highlight php  startinline=True %}
$fullname="Bo"; //$fullname får startvärdet Bo
$fullname.=" "; //ett mellanslag läggs till
$fullname.="Peterson"; //Peterson läggs till
echo $fullname; //Bo Peterson skrivs ut
{% endhighlight %}

### Strängfunktioner

- Det finns en mängd strängfunktioner som vi kommer att använda
framöver, men **varning**: flera av funktionerna funkar inte med åäö.

- strtolower() - omvandlar till små bokstäver.
- strtoupper() - omvandlar till stora bokstäver.
- htmlspecialchars() - omvandlar till html-koder
- strrev() - vänder på en sträng
- stripslashes() - tar bort \
- trim() - tar bort "whitespace" i början och slutet av sträng
- str_replace() - ersätter text med annan text
- strlen() - beräknar längden av en sträng
- strpos() - letar efter en sträng i en annan sträng


### If-sats

if-satsen är enklaste
kontrollstrukturen

{% highlight php  startinline=True %}
if (villkor) {
	utför viss php-kod
	} else {
	utför annan php-kod}
{% endhighlight %}


**Exempel**

{% highlight php  startinline=True %}
$name=$_GET['name'];
$lang=$_GET['lang'];

if ($lang=="sw") {
	echo "Välkommen $name";
} else {
	echo "Welcome $name";}
{% endhighlight %}

**Observera** dubbla likhetstecken `==` som är
en *jämförelseoperator*. Ett likhetstecken `=` är *tilldelningsoperatorn*.

**Exempel med elseif**

{% highlight php  startinline=True %}
if ($lang=="sw") {
	echo "Välkommen $name";
} elseif ($lang=="no") {
	echo "Velkommen $name";} else {
	echo "Welcome $name";}
{% endhighlight %}

Man kan lägga på hur många else if som helst men det blir snabbt otympligt. Ett alternativ är att använda `switch`. Läs mer om switch på <http://php.net/manual/en/control-structures.switch.php>

Ibland behöver man tre likhetstecken `===` i jämförelser. Mer om det finns att läsa på <http://php.net/manual/en/language.operators.comparison.php>

**Exempel för att kolla data från formulär**

Funktion `isset()` tillsammans med en if-sats är mycket användbart för att kolla om en variabel finns eller inte: 

```php
<?php
$x = 5;
if (isset($x)) {
	echo 'varibeln $x finns<br>';} else {
	echo 'variabeln $x finns inte<br>';}
if (isset($y)) {
	echo 'varibeln $y finns<br>';} else {
	echo 'variabeln $y finns inte<br>';}
?>
``` 

Resultatet blir

```
varibeln $x finns
variabeln $y finns inte
```

Funktionen är väldigt användbar för att kolla att data finns från ett formulär:

```php
if (isset($_POST['email'])) {
	$email = $_POST['email'];} else {
	$email = "okänd epostadress";}

echo "Epost: $email";
```

