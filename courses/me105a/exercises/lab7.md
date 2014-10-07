---
layout: instructions
code: me105a
title: Laboration 7
---

<style>
pre {white-space: pre-wrap;}
img { 
   border:1px solid #FF0000;
}
</style>

#Laboration 7

I denna lab ska vi exportera produkterna i tabellerna products i olika format. Först som en vanlig html-sida, sedan som en tabseparerad fil och slutligen i xml-format.
##Uppgift 1

Uppgiften är att söka alla produkter i tabellen products, och visa en rubrik med produktnamn och pris, sedan en bild, sedan produktbeskrivning. Ni har tillgång till en zip-fil med en bild för varje produkt, och filnamnet är *prod_id.jpg*. För tex Bird bean bag toy med produktid *BNBG02* är filnamnet på bilden *BNBG02.jpg*. 

Webbsidan kan till exempel se ut så här:

![](im7/allproducts.png)

##Uppgift 2

Uppgiften är att skriva en php-sida som skapar en tab-separerad fil med kolumnerna prod_id, prod_price, prod_name och prod_desc för alla produkter i tabellen products. Sidan ska med funktionen file_put_contents() skapa en textfil samt visa en länk till filen. Sidan kan se ut så här:

![](im7/afilehasbeencreated.png)

När man klickar export.txt ska man få fram den tab-separerade filen:

![](im7/tab.png)

##Uppgift 3

Nu ska istället en xml-fil skapas med samma data som i tab-filen i förra uppgiften. Målet är att filen ska ha följande struktur:

![](im7/xml.png)

Rotelementet heter alltså <toycatalog>. Varje rad i tabellen products motsvaras av elementet <toy>. Varje <toy>...</toy> innehåller i sin tur elementen <prod_id>, <prod_price>, <prod_name> och <prod_desc>. 

Gör en php-sida som skapar xml-filen export1.xml och visar en länk till den: 

![](im7/afilehasbeencreated2.png)

Börja med en variabel som tex heter $export och får rotelementet som startvärde:

{% highlight php  startinline=True %}	
$export="<toycatalog>";
{% endhighlight %}

bygg sedan på denna variabel i en while-loop som loopar igenom resultatet från sökningen i products:

{% highlight php  startinline=True %}
$export.="<toy>";
$export.="<prod_id>";
$export.= här ska ett värde ut tabellen products komma
$export.="</prod_id>";
//etcetera
{% endhighlight %}

När man klickar länken ska xml-sidan visas:

![](im7/xml2.png)

##Uppgift 4 - frivillig

PHP har ett antal färdiga funktioner för att bygga upp xml-dokument. 

Ett rotelement med namnet toycatalog kan skapas med följande rader kod:

{% highlight php  startinline=True %}
$doc = new DomDocument('1.0');
$root = $doc->createElement('toycatalog');
$root = $doc->appendChild($root);
{% endhighlight %}

För varje rad i tabellen skapas ett toy-element med följande rader:

{% highlight php  startinline=True %}
$rownode = $doc->createElement('toy');
$root->appendChild($rownode);
{% endhighlight %}

För varje kolumn skapas ett element enligt följande exemel för kolumnen prod_id:

{% highlight php  startinline=True %}
//här skapas taggen <prod_id>:
$child = $doc->createElement("prod_id"); 
$rownode->appendChild($child);
//här fylls taggen <prod_id> med innehåll:
$value = $doc->createTextNode($row["prod_id"]); 
$child->appendChild($value);
{% endhighlight %}

När alla rader och kolumner är tillagda finns hela xml-strukturen i variabeln $doc. Denna variabel kan dock inte skrivas ut direkt utan måste konverteras till en sträng som sedan kan exporteras i en fil. Det görs med koden 

{% highlight php  startinline=True %}
$export = $doc->saveXML(); 
//$export innehåller nu all xml som en text
{% endhighlight %}

Elementet får namnet *prod_id* och innehåller det som finns i $row["prod_id"], dvs det värde som hämtats ur databasen för aktuell rad och kolumn. 

Skapa en php-sida som i 3 men som använder funktionerna ovan för att skapa själva xml-dokumentet. 