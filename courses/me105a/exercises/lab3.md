---
layout: instructions
code: me105a
title: Laboration 3
---

# Laboration 3

Syftet med laborationen är att komplettera joke-databasen så att den även kan hantera vem som som matat in skämten. **OBS** I uppgift 1-3 hanterar vi databasen direkt med SQL-kommandon i MySQL Query Browser. I uppgift 4 använder vi istället PHP-kod.

## Redovisning

Redovisa uppgift 4, 5 och 6 på <http://peergrade.io>.

Lämna in ett ziparkiv döpt till **lab3.zip** som innehåller följande filer:

- Uppgift 4: php-sidorna authorform.php och authoradded.php samt en textfil links.txt med ddwap-länk till authorform.php
- Uppgift 5: skiss av E/R-diagram, handritad eller digitalt framställd
- Uppgift 6: skiss av E/R-diagram, handritad eller digitalt framställd


## Uppgift 1

Gå in på ddwap.mah.se, Manage files, och sedan MySQL Query Browser. Komplettera tabellen joke med en kolumn för **authorname** och en kolumn för **authoremail** enligt s 143 i boken. 

Lägg sedan till några namn och epostadresser. Utgå från följande exempel

{% highlight sql %}
UPDATE joke SET authorname='Bo P', 
authoremail='bo.peterson@mah.se' WHERE id=1
{% endhighlight %}

men ändra authorname, authorid och id till lämpliga värden.

## Uppgift 2

Extra kolumner för namn och epost är inte bästa sättet att hantera användaruppgifter i en databas. Bättre är att skapa en separat tabell med användaruppgifter och sedan koppla tabellerna till varandra. 

- Börja med att ta bort authorname- och authoremailkolumnerna som du just skapat. Se sidan 146. 

- Skapa sedan tabellen author, även det beskrivet på s 146. 

- Slutligen ska tabellen joke kompletteras med kolumnen authorid (se s 146). 

Nu har vi en bättre struktur för databasen och kan börja lägga in data. 

## Uppgift 3

Lägg till dig själv som author i tabellen author. Det kan göras enligt exemplet på s 147, 

{% highlight sql %}
INSERT INTO author SET 
  id=1,
  name=...
{% endhighlight %}

osv. 

Koppla alla skämt du lagt till i jokedatabasen till dig själv. Det gör du med

{% highlight sql %}
UPDATE joke SET authorid=1
{% endhighlight %}

**OBS** Eftersom det inte finns något WHERE på slutet uppdateras *samtliga* rader i tabellen. 

## Uppgift 4

I förra labben gjorde vi php-sidor för att lägga till ett skämt i joke-tabellen. Gör nu sidor på samma sätt för att lägga till name och email i authortabellen. Gör en sida *authorform.php* som leder vidare till *authoradded.php*. Lägg sidorna i */me105a/lab3/uppgift4/*

![](im3/add.png)

I kommande labbar ska vi se hur man kan koppla ihop author-tabellen med joke-tabellen. 

## Uppgift 5

Rita ett E/R-diagram av tabellen *contacts* från tidigare labbar. Vad är entiteten? Vad är attributen?

(Normalt går man åt andra hållet, man börjar att göra E/R-diagrammet, sedan skapar man tabellerna. Här gör vi tvärt om som övning).


## Uppgift 6

Rita ett E/R-diagram över tabellerna *joke* och *author* där det framgår hur joke och author är kopplade till varandra. 

Det går bra att rita E/R-diagrammen med papper och penna, och lämna in foto av skissen som du tar till exempel med mobilkameran. 


