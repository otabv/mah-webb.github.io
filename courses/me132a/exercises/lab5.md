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
- Svara på eventuella frågor

OBS: Använd samma katalogstruktur som i laboration 1, dvs lägg alla filer i katalogen ddwap/me132a/lab5.

##Uppgift 1

Gör en PHP-fil som heter upp1.php som innhåller en array med 5 element. Varje element ska innehålla ett namn. Skriv PHP-kod som **med en while-loop** genererar följande HTML-kod, dvs kod som ger en punktlista:

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

xxx bild 



Det är viktigt att utskriften uppdateras om arrayen med namn uppdateras dvs om namn ändras, läggs till eller tas bort. 

## Uppgift 2

Gör en fil upp2.php som istället skriver ut namn från en array **med en for-loop** som en numrerad lista:

{% highlight html %}
<ol>
<li>Namn 1</li>
<li>Namn 2</li>
<li>Namn 3</li>
<li>Namn 4</li>
<li>Namn 5</li>
</ol>
{% endhighlight %}


xxx bild




## Uppgift 3

Gör en php-sida som denna gången döps till index.php och som läggs i katalogen upp3 i lab 5. Denna sida ska använda en for-loop för att skapa en tabell med två kolumner:


{% highlight html %}
<table border="1">
<tr><td>1</td><td>Namn 1</td></tr>
<tr><td>2</td><td>Namn 2</td></tr>
<tr><td>3</td><td>Namn 3</td></tr>
<tr><td>4</td><td>Namn 4</td></tr>
<tr><td>5</td><td>Namn 5</td></tr>
</table>
{% endhighlight %}


xxx bild



**Fråga:** Hur ser en komplett URL ut för denna sida, där det inte framgår att det är en PHP-sida?

##Uppgift 4

for each
xxx


##Uppgift 5

Gör en php-sida som döps till index.php och som läggs i katalogen upp4 i lab 5. 
Filen ska ha samma struktur som exemplet på sidan 84 i boken. 

Sidan ska ska skapa en variabel, $output, som ska innehålla den kod som producerades i uppgift 1. Utgå från följande mall:

xxx bild (eller snarare kod)


OBS att denna fil inte ska innehålla någon html-kod utanför PHP-koden, dvs ingen inledande !DOCTYPE etc.

Det ska istället finnas i filen singers.html.php som i stort sett är identisk med count.html.php i boken:

xxx bild eller snarare kod


Utskriften ska bli den samma som i uppgift 1. 