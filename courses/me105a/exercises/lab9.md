---
layout: instructions
code: me105a
title: Laboration 9
---

<style>
pre {white-space: pre-wrap;}
img { 
   border:1px solid #CCCCCC;
}
</style>

#Laboration 9

I labb 7 gjorde vi en webbsida med produkter. I labb 8 gjorde vi en liknande layout i InDesign och importerade data från databasen. 

![](im9/bild1.png)

I denna labb ska vi göra både en liknande webbsida och ett liknande InDesign-dokument, men nu ska produkterna grupperas efter vilken leverantör som tillhandahåller produkterna. I laboration 4 lärde vi oss att man med INNER JOIN kan söka i flera tabeller som är relaterade till varandra. Vi ska göra en sökning i tabellerna products och vendors så att vi får fram alla produkter med tillhörande leverantör. Sökningen 

{% highlight mysql %}
SELECT prod_id,prod_name,prod_price,prod_desc,vend_name 
FROM products INNER JOIN vendors ON products.vend_id=vendors.vend_id 
ORDER BY vendors.vend_id
{% endhighlight %}

resulterar i följande resultat

![](im9/bild2.png)

där **vend_name** upprepas för varje produkt. Dagens uppgift går ut på att göra en webbsida och ett InDesign-dokument där varje leverantör visas som en rubrik, följt av de produkter som leverantören kan tillhandahålla. 

##Uppgift 1

Gör en webbsida liknande uppgift 1 i laboration 7, men med produkterna grupperade under levarantörsnamnet. (här nedan har css med float:left använts för att få produkterna bredvid varandra, men det går även att ha produkterna under varandra om man inte vill använda css)

![](im9/bild3.png)

##Uppgift 2

Nu ska en liknande sida göras med InDesign med InData-plugin. Första steget blir att komplettera exportfilen från laboration 8, uppgift 2, så att den även innehåller *vend_name*. Filen export.txt ska innehålla i tur och ordning 

{% highlight text %}
vend_name,prod_id, prod_picture, prod_price, prod_name, prod_desc
{% endhighlight %}

![](im9/bild4.png)

Nästa steg är att lägga till en if-sats även i InData-koden från förra labben. I förra labben såg vår InData-kod ut så här:

{% highlight text %}
«fields prod_id, prod_picture, prod_price, prod_name, prod_desc
«set filename of picture 1 to prod_picture
«set pictureposition of picture 1 to aspectratiofit
«prod_name»
«prod_desc»
$«prod_price»
{% endhighlight %}

Vi måste dels komplettera första raden med vend_name, 

{% highlight text %}
«fields vend_name,prod_id, prod_picture, prod_price, prod_name, prod_desc
{% endhighlight %}

Vi måste också, före prodname, lägga till vend_name, men bara om det skiljer från produkten innan. Det kan man göra med följande if-sats i InData:

{% highlight text %}
«if vend_name is not prev vend_name»«vend_name»«endif»
{% endhighlight %}

Vi får då vår kompletta InData-kod:

{% highlight text %}
«fields vend_name,prod_id, prod_picture, prod_price, prod_name, prod_desc
«set filename of picture 1 to prod_picture
«set pictureposition of picture 1 to aspectratiofit
«if vend_name is not prev vend_name»«vend_name»«endif»
«prod_name»
«prod_desc»
$«prod_price»
{% endhighlight %}

Skapa ett InDesign-dokument precis som i laboration 8, uppgift 2, lägg in ny InData-kod och importera export.txt. OBS en bugg i InData gör att man först måste byta namn på export.txt till export.tab. Resultatet ska bli något i stil med:

![](im9/bild5.png)

## Uppgift 3 - frivillig men rekommenderad

ej klar