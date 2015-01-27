---
layout: instructions
code: me132a
title: Laboration 2
---

# Laboration 2

Syfte med laborationen:

- att förstå vad variabler är och används till,
- att kunna manipulera variabelvärden med hjälp av operatorer,
- att kunna förstå vad arrayer är.

## Förberedelser:

Läs kapitel 3 t.o.m sidan 56 i boken PHP & MySQL-Novice to Ninja

Lämna in följande: Alla php-filer ihopzippade

OBS: Använd samma katalogstruktur som i laboration 1, dvs lägg alla filer i katalogen `ddwap/me132a/lab2`. För att sedan testa koden måste filerna skickas över till webservern.

## Uppgift 1

Skapa en PHP-fil med namnet upp1.php. Skriv PHP-kod som beräknar och skriver ut arean av en triangel. Formeln för arean av en triangel är A = B * H / 2. 

Programmet ska ha tre variabler, en för bredd, en för höjd och en för area. Programmet ska ge följande utskrift när man öppnar i en webbläsare:

{% highlight text %}
Bredden är 3, höjden är 5, arean är 7.5
{% endhighlight %}

Om man ändrar värdet på en variabel, tex om bredden ändras från 3 till 20 ska man få följande utskrift utan att något annat ändras:

{% highlight text %}
Bredden är 20, höjden är 5, arean är 50
{% endhighlight %}

## Uppgift 2

Skapa en PHP-fil med namnet upp2.php. Skriv kod som slår ihop för- och efternamn.  

Programmet ska innehålla tre variabler, en för förnamn, en för efternamn och en för hela namnet. Programmet ska göra följande:

- variabeln för förnamn tilldelas ditt eget förnamn
- variabeln för efternamn tilldelas ditt eget efternamn
- variabeln för hela namnet tilldelas hela ditt namn genom att med sammanslagningsoperatorn `.` slå ihop variablerna förnamn och efternamn.

Programmet ska ge följande utskrift (men ditt eget namn):

{% highlight text %}
Mitt namn är Bo Peterson
{% endhighlight %}

##Uppgift 3

Spara en kopia av filen från förra uppgiften men nu med namnet upp3.php. Komplettera filen med lämpliga PHP-kommentarer, både av typen för en rad och för flera rader. Programmet ska ge samma utskrift som förra uppgiften.  

##Uppgift 4

Skapa en fil med namnet upp4.php. Skriv PHP-kod som kan skriva ut hur många dagar det är i en viss månad enligt följande:

- Skapa en vanlig array (dvs med numeriska index) som innehåller 12 element, där de olika elementen innehåller antalet dagar i de olika månaderna, dvs 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
- Använd en variabel med namnet `$month` som anger nummer på månaden.
- Använd en variabel med namnet `$i` som används som index för månadsarrayen. **Observera att första elementet i en array har nummer noll**. Det innebär att när man ska visa antalet dagar i femte månaden är det alltså elementet med index=4 som ska visas.

Om `$month` har värdet 5 ska `$i` få värdet `4` och utskriften ska bli

{% highlight text %}
Antal dagar i månad 5 är 31
{% endhighlight %} 

Om `$month` istället har värdet `2` ska utskriften bli

{% highlight text %}
Antal dagar i månad 2 är 28
{% endhighlight %} 
 
##Uppgift 5

Skapa en fil med namnet upp5.php. Använd istället en associativ array med månadsnamnen som index, där de olika elementen innehåller antalet dagar i de olika månaderna. Använd en variabel $month som index till arrayen. Om `$month` har värdet `mars` ska koden ge följande utskrift:

{% highlight text %}
Antal dagar i mars är 31
{% endhighlight %}

Om man ändrar värdet på variabeln `$month` till `februari` ska utskriften bli

{% highlight text %}
Antal dagar i februari är 28
{% endhighlight %}
