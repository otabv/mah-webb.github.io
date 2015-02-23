---
layout: instructions
code: me132a
title: Föreläsning 6
controls: false
date: 2015-02-23
---

#Programmering för webben

##Föreläsning 6

###Dagens innehållStrukturerad programmering- Include-filer- Funktioner- Pseudo-kod ###Include-filer[Utförlig beskrivning om include-filer](include.pdf)###FunktionerFunktioner är som en "fabrik" som tar in råvaror och matar ut råvarorna i förädlad form:![](im6/funktion1.png)![](im6/funktion2.png) ###FunktionsdefinitionEn funktion som beräknar kvadraten av ett tal. `$x` kallas argument och är input till funktionen. {% highlight php  startinline=True %}
function square($x){    return $x*$x;}{% endhighlight %}En funktion kan ha flera argument. Följande funktion beräknar arean av en rektangel.  {% highlight php  startinline=True %}
function area($width, $height){    $a=$width*$height;    return $a;}{% endhighlight %} 
###Funktionsanrop
När en funktion är definierad kan den anropas många gånger, tex så här:


{% highlight php  startinline=True %}
$hojd=10;
$bredd=7;

//här kommer funktionsanropet:
$yta=area($hojd,$bredd);

echo "En rektangel med bredden $bredd och höjden $hojd har arean $yta";
echo "<br>";

//vi kan nu ge nya värden till $hojd och $bredd
$hojd=1234;
$bredd=6789;

//här kommer ett nytt funktionsanrop:
$yta=area($hojd,$bredd);

echo "En rektangel med bredden $bredd och höjden $hojd har arean $yta";
echo "<br>";

//argumenten till en funktion behöver inte vara en variabler.
//resultatet behöver inte heller sparas i en variabel utan kan
//skrivas ut direkt med echo:

echo "kvadraten av 7 är ";
echo square(7); //49 skrivs ut
{% endhighlight %} 
Resultatet av koden ovan blir:

{% highlight text %}
En rektangel med bredden 7 och höjden 10 har arean 70
En rektangel med bredden 6789 och höjden 1234 har arean 8377626
kvadraten av 7 är 49
{% endhighlight %}###Fördefinierade funktioner och egendefinierade funktioner

Vi har nu sett exempel på hur man kan definiera egna funktioner. PHP innehåller ett stort antal fördefinierade funktioner. Vi har redan använt flera fördefinierade funktioner, tex

htmlspecialchars
strtolower strtoupper

Det finns en stor mängd fördefinerade funktioner i php. Se <http://php.net/manual/en/funcref.php> för fullständig beskrivning.###Repetition av loopar

En loop gör samma sak, eller *nästan* samma sak upprepade gånger. Det finns while-, for- och foreach-loopar.

{% highlight php  startinline=True %}
//En loop som gör samma sak 10 gånger
for ($i=0;$i<10;$i++) {
	echo "Samma sak<br>";}
{% endhighlight %}

Utskriften blir:

{% highlight text %}
Samma sak
Samma sak
Samma sak
Samma sak
Samma sak
Samma sak
Samma sak
Samma sak
Samma sak
Samma sak
{% endhighlight %}

{% highlight php  startinline=True %}
//En loop som gör nästan samma sak 5 gånger
for ($i=0;$i<5;$i++) {
	echo "En siffra: ";
	echo $i;
	echo "<br>";}
{% endhighlight %}

Utskriften blir:

{% highlight text %}
En siffra: 0
En siffra: 1
En siffra: 2
En siffra: 3
En siffra: 4
{% endhighlight %}

Foreach-loopar är praktiska för att gå igenom en array:

{% highlight php  startinline=True %}
$singers=array("Shakira","Beyoncé","Rihanna");

//$singers är en array med flera namn
//$singer blir ett namn åt gången, dvs de olika namnen i $singers i tur och ordning
foreach ($singers as $singer) {
	echo $singer;
	echo "<br>";
}
{% endhighlight %}

Utskriften blir:

{% highlight text %}
Shakira
Beyoncé
Rihanna
{% endhighlight %}

För associativa arrayer kan man med foreach utläsa både namn och värde:

{% highlight php  startinline=True %}
$days_in_months=array("jan"=>31,"feb"=>28,"mar"=>31);

foreach ($days_in_months as $key=>$value) {
	echo "Antal dagar i $key är $value <br>";
}
{% endhighlight %}


Utskriften blir:

{% highlight text %}
Antal dagar i jan är 31 
Antal dagar i feb är 28 
Antal dagar i mar är 31 
{% endhighlight %}

###Repetion av villkor

Jämförelseoperatorer:

{% highlight text %}
== lika med
!= inte lika med
< mindre än
> större än
<= mindre än eller lika med
>= större än eller lika med
{% endhighlight %}

Logiska operatorer:

{% highlight text %}
and och (även &&)
or eller (även ||)
! icke
{% endhighlight %}

Med jämförelsoperatorer och logiska operatorer kan man sätta samman avancerade logiska villkor.

{% highlight php  startinline=True %}
if ($age>=18 and $age<65) {
	echo "Du måste betala fullt pris";
} else {
	echo "Du kan betala rabatterat pris";
}
{% endhighlight %}###Viktigt inför nästa veckaGör följande förberedelse inför labben i nästa vecka:Lägg 5 valfria png-bilder, 5 jpeg-bilder och 5 gif-bilder, alla  150 x 150 px i mappen  
*dvwebb/me132a/lab7/images/*
Se till att filnamnen endast innehåller små bokstäver och siffror, inga åäö. 