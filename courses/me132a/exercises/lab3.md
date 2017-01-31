---
layout: instructions
code: me132a
title: Laboration 3
---

# Laboration 3

Syfte med laborationen:

- att förstå hur man använder formulär för att skicka data som behandlas av PHP-kod.

## Förberedelser:

Läs kapitel 3, s. 57-70 i boken PHP & MySQL

## Inlämning

Lämna in en **zip-fil** som innehåller följande på peergrad.io:

- Alla php- och html-filer du skapat
- En text-fil som innehåller länkar till dina php och html-filer. 

OBS: Använd samma katalogstruktur som i laboration 1, dvs lägg alla filer i katalogen `me132a/lab3`


## Uppgift 1

Första uppgiften är att skapa ett formulär med två fält, ett för *namn* och ett för *epost-adress*. Döp filen till *upp1.html*.

![](im3/form1.png)

När man klickar *skicka* ska man komma till en PHP-sida med filnamnet *upp1.php* som visar namn och e-postadress enligt följande:

![](im3/svar1.png)

## Uppgift 2

Skapa ett formulär som är identiskt med formuläret i uppgift 1 men döp den till *upp2.html*. 

![](im3/form2.png)

När man klickar *Skicka* ska den leda vidare till sidan *upp2.php*:

![](im3/svar2.png)

Denna sida ska visa en klickbar mailto-länk. HTML-koden för en sådan länk ser ut enligt följande:

{% highlight html %}
Skicka mail: <a href="mailto:bo.peterson@mah.se">Bo Peterson</a>
{% endhighlight %}


## Uppgift 3

Nu ska ett lite mer omfattande formulär göras, med följande utseende:

![](im3/form3.png)

Menyn med betalningssätt ska innehålla minst två alternativ. Formuläret ska leda vidare till 

![](im3/svar3.png)

Svarsidan behöver *inte* hantera kryssrutan för nyhetsbrev. 

## Uppgift 4

Om man inte använt sig av funktionen `htmlspecialchars()` kan man få konstiga och ibland rent av skadliga resultat om en användare matar in html-kod i formulären. 

Testa att mata in 

`<h1>dittnamn`

i fältet *förnamn* i formuläret (men ersätt *dittnamn* med det du heter). Klicka *Skicka*. Vad händer?

Komplettera lösningen till uppgift 3 så att den oskadliggör eventuell kod i inmatningsfält.

## Uppgift 5

Gör ett formulär där man kan mata in radien på en cirkel. Formuläret ska leda vidare till en php-sida som beräknar cirkelns area. Bestäm själv hur sidan ska se ut. För att utföra beräkningen behövs konstanten &pi; som man i php kan skriva `M_PI`.  


<!-- uppgift 5 i laboration 2 (förra laborationen) med ett formulär så att man kan välja en viss månad i en dropdownmeny och sedan få veta hur många dagar det är i den månaden. Svarsidan kan se nästan likadan ut som i laboration 2, men måste hämta rätt månad från formuläret. 

Följande sida

![](im3/form5.png) 

leder fram till denna:

![](im3/svar5.png)

**OBS** Sidan med månadsmenyn måste även ha en skicka-knapp som inte syns i bilden. 

-->