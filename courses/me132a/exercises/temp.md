---
layout: instructions
code: me132a
title: Laboration 6
---

# Laboration 6

##Syfte med laborationen:

- att förstå hur include fungerar i PHP
- att förstå hur egendefinierade funktioner fungerar i PHP
- att se ett enkelt exempel på pseudokod

##Förberedelser:

- Läs sidorna 161-176 i boken, samt kompletterande kursmaterialet include.pdf. Sidorna 165-169 innehåller en del om mysql och databaser som vi inte gått igenom. Läs sidorna ändå, men bekymra er inte om allt inte går att förstå. 

##Lämna in följande:

- Mappen lab6 ihopzippad samt mappen includes ihopzippad.

OBS: Använd samma katalogstruktur som i laboration 1, dvs lägg alla filer lokalt i en mapp ddwap/me132a/lab6. Desstom ska några filer läggas i ddwap/includes/

## Uppgift 1

Uppgiften går ut på att skriva PHP-kod som hittar **minsta** talet i en lista. Utgångspunkten är att det finns en array, `$numbers`, som innehåller ett godtyckligt antal tal, tex: 

{% highlight php  startinline=True %}
$numbers=array(3,42,77,2,18,9,44,88,4,56);
{% endhighlight %}

I detta fall ska utskriften bli:

{% highlight text %}
Minsta talet är 2
{% endhighlight %}

Ta hjälp av följande pseudo-kod:

{% highlight text %}
definiera array $numbers;
definiera en variabel $smallest som får värdet av första elementet i array
för varje element i $numbers:
    kom ihåg aktuellt elementet om det är mindre än $smallest 
skriv ut variabeln $smallest
{% endhighlight %}

Skriv in koden i filen index.php i mappen upp1 i mappen lab6 och testa! Utskriften ska bli det minsta talet i `$numbers`. 

##Uppgift 2

Vi ska nu göra en *funktion* som kan hitta minsta talet i en lista. 

Skapa en mapp upp2 i lab6. Skapa sedan filen functions.inc.php i mappen upp2. 

Filen ska innehålla funktionen `minvalue($numbers)` som hittar och returnerar minsta värdet i en array. Använd koden för att hitta minsta värdet från uppgift 1 när du skriver funktionen. Filen ska endast innehålla phpstart- och sluttag samt funktionsdefinitionen:

{% highlight php %}

<?php
function minvalue($numbers) {
    //definition av funktionen
}
?>
{% endhighlight %}

Skapa sedan filen index.php i mappen upp2. Detta ska vara en komplett fil med head, body etc. Filen ska först infoga functions.inc.php. Sedan ska en array med ett antal tal definieras. Slutligen ska funktionen `minvalue` anropas och minsta talet ska skrivas ut. Utskriften ska bli som i uppgift 1.  

##Uppgift 3

En stor fördel med include är att man kan bygga ett bibliotek av funktioner som man behöver använda flera gånger. Skapa en mapp direkt i ddwap (alltså inte i mappen lab6) som heter includes

I denna mapp kan vi lägga include-filer som kan användas i många olika labbar framöver. Lägg en kopia av functions.inc.php i mappen includes. Komplettera denna med en ny funktion `maxvalue` som hittar största värdet i en array. 

Skapa även en fil som heter footer.inc.html.php liknande den på sidan 172 i boken, men som innehåller ett copyright-tecken, ditt namn och din datoridentitet. Liksom exemplet i boken ska texten ligga i en div-tagg med id="footer". Även denna fil ska ligga i includes. 

Skapa sedan en fil index.php i en mapp upp3 i lab6. Denna fil ska infoga functions.inc.php samt footer.inc.html. 

På sidan 172 i boken beskrivs hur man kan använda `$_SERVER['DOCUMENT_ROOT']` för att komma åt den katalog där include-filerna ligger. För att det ska funka på vår server måste vi komplettera med vårt användarnamn före `/includes/`

{% highlight php  startinline=True %}
include $_SERVER['DOCUMENT_ROOT']."/userid/includes/footer.inc.html.php";
{% endhighlight %}

Börja med att infoga functions.inc.php. Definiera sedan en array `$numbers` som i tidigare uppgifter. Anropa sedan funktionerna maxvalue och minvalue för att hitta största och minsta värdet i `$number`. Utskriften ska bli:

<div style="border:2px solid black; padding:20px">
Minsta talet är 2<br>
Största talet är 88<br>
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
<br>&nbsp;
&copy; Bo Peterson, k3bope
</div>


{% highlight css %}
<style type="text/css">
#footer {
	position:absolute;
	bottom:0.5cm;
}
</style>
{% endhighlight %}
