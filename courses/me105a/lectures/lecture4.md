---
layout: instructions
code: me105a
title: Föreläsning 4
controls: false
date: 2014-09-15
theme: bopeterson/cleaver-lecture
---

<style>
table {border-collapse: collapse;font-size:smaller}
th, td {border: 1px solid #BBBBBB}
th, td {text-align:left}
th, td {padding: 6px;}
hr {display: none}
pre {font-size:large}
</style>

# Databasbaserad publicering

## Föreläsning 4

---

### Dagens innehåll

- E/R-modellen, fortsättning
- Frågor till flera tabeller samtidigt
- Många-till-många-relationer

---

### SQL-frågor till flera tabeller

För att man ska ha nytta av förhållanden mellan tabeller måste man kunna ställa SQL-frågor till flera tabeller samtidigt. Om vi tex vill veta telefonnumret till en viss person måste vi fråga både tabellen person och abonnemang. För att ”koppla ihop” tabellerna och fråga båda tabellerna använder vi INNER JOIN:

---

{% highlight sql %}
SELECT * FROM person INNER JOIN abonnemang
{% endhighlight %}

Resultat blir *alla möjliga sätt* att kombinera tabellerna person och abonnemang, och vi får kombinationer som vi inte är intresserade av: 

| namn | personnummer | nummer | operator | personnummer |
| --- | --- | --- | --- | --- |
| Bo Peterson | **6502019999** | 046-123456 | Tele 2 | **6502019999** |
| Sven Svensson | 7312125555 | 046-123456 | Tele 2 | 6502019999 |
| Bo Peterson | 6502019999 | 040-654321 | Telia | 7312125555 |
| Sven Svensson | **7312125555** | 040-654321 | Telia | **7312125555** |
| Bo Peterson | **6502019999** | 040-6657000 | Telia | **6502019999** |
| Sven Svensson | 7312125555 | 040-6657000 | Telia | 6502019999 |
| Bo Peterson | 6502019999 | 0739-654321 | Comviq | 7312125555 |
| Sven Svensson | **7312125555** | 0739-654321 | Comviq | **7312125555** |
| Bo Peterson | 6502019999 | 070-654321 | Telenor | 7312125555 |
| Sven Svensson | **7312125555** | 070-654321 | Telenor | **7312125555** |

---

Detta resultat är inte särskilt användbart, men blir det plötsligt om vi tillfogar villkor på nyckel-kolumnerna. Vi kan börja med att titta på alla markerade rader där primärnyckeln i person är lika med främmande nyckeln i abonnemang.

---

Vi kan välja ut de raderna med följande SQL-sats:

{% highlight sql %}
SELECT * FROM person INNER JOIN abonnemang
ON person.personnummer=abonnemang.personnummer
{% endhighlight %}

| namn | personnummer | nummer | operator | personnummer |
| --- | --- | --- | --- | --- |
| Bo Peterson | 6502019999 | 046-123456 | Tele 2 | 6502019999 |
| Sven Svensson | 7312125555 | 040-654321 | Telia | 7312125555 |
| Bo Peterson | 6502019999 | 040-6657000 | Telia | 6502019999 |
| Sven Svensson | 7312125555 | 0739-654321 | Comviq | 7312125555 |
| Sven Svensson | 7312125555 | 070-654321 | Telenor | 7312125555 |

---

Observera att vi anger person.personnummer och abonnemang.personnummer för att särskilja kolumner i olika tabeller men med samma namn. Vi har nu fått en förteckning över alla telefonnummer. 

Om vi vill ha alla telefonnummer till Sven Svensson lägger vi till ytterligare villkor:

{% highlight sql %}
SELECT * FROM person INNER JOIN abonnemang
ON person.personnummer=abonnemang.personnummer
WHERE namn='Sven Svensson'
{% endhighlight %}

| namn | personnummer | nummer | operator | personnummer |
| --- | --- | --- | --- | --- |
| Sven Svensson | 7312125555 | 040-654321 | Telia | 7312125555 |
| Sven Svensson | 7312125555 | 0739-654321 | Comviq | 7312125555 |
| Sven Svensson | 7312125555 | 070-654321 | Telenor | 7312125555 |

---

Om vi bara är intresserade av namn, nummer och operatör byter vi ut stjärnan mot de kolumner vi vill visa:

{% highlight sql %}
SELECT namn,nummer,operator FROM person
INNER JOIN abonnemang
ON person.personnummer=abonnemang.personnummer 
WHERE namn='Sven Svensson'
{% endhighlight %}

| namn | nummer | operator | 
| --- | --- | --- |
| Sven Svensson | 040-654321 | Telia |
| Sven Svensson | 0739-654321 | Comviq |
| Sven Svensson | 070-654321 | Telenor |

---

### Mer om ER-diagram och många-till-många-relationer

Vi utgår från ett tidigare exempel med person och abonnemang men utökar nu till en många-till-många-relation så att varje person kan ha flera abonnemang och ett abonnemang kan delas av flera personer. För enkelhetens skull inför vi också kolumnen id som primärnyckel i både person och abonnemang. 

![](im4/er.png)

---

Hur översätter man detta till tabeller i en relationsdatabas?

Vi blir nu tvungna att införa en *mellantabell* som knyter samman person och abonnemang. 

Vi inför en mellantabell *personabonnemang* med primärnycklarna från både person och abonnemang.

---

Tabellstrukturen blir:

**person**

| namn | <u>id</u> |
| --- | --- |
| Bo Eriksson | 67 |
| Sven Svensson | 73 |
| Anna Eriksson | 69 |

**abonnemang**

| <u>id</u> | nummer | operatör |
| --- | --- | --- |
| 1 | 046-123456 | Tele 2 |
| 2 | 040-654321 | Telia |
| 3 | 040-6657000 | Telia |

---

**personabonnemang**

| <u>personid</u> | <u>abonnemangid</u> |
| --- |  --- |
| 67 | 1 |
| 67 | 2 |
| 73 | 3 |
| 69 | 1 |

I personabonnemang kan båda kolumnerna innehålla dubbletter. Ingen kolumn kan då ensam vara primärnyckel. De två kolumnerna utgör tillsammans primärnyckeln!

---

### SQL-exempel, många-till-många

För att få en lista över alla telefonnummer och namn kan vi skriva

{% highlight sql %}
SELECT person.namn,abonnemang.nummer FROM person
INNER JOIN personabonnemang
ON person.id=personid
INNER JOIN abonnemang
ON abonnemang.id=abonnemangid
{% endhighlight %}

För att få alla nummer till Bo Eriksson utökar vi frågan:

{% highlight sql %}
SELECT person.namn,abonnemang.nummer FROM person
INNER JOIN personabonnemang
ON person.id=personid
INNER JOIN abonnemang
ON abonnemang.id=abonnemangid
WHERE namn='Bo Eriksson'
{% endhighlight %}

Vi har nu sett de vanligaste exemplen på översättning från ER-diagram till tabeller.


