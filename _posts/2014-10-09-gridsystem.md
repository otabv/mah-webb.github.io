---
layout: blog
title: Gridsystem
category: css
---

# Gridsystem

Termen "Gridsystem" inom CSS innebär att vi skapar återanvändbara [klasser][css classes] för att enkelt kunna skapa den layout vi vill. En fördel med detta är att vi blir konsekventa i vår layout, det vill säga att vi utgår från samma klasser och struktur i vår HTML baserat på vårt gridsystem. Ytterligare en fördel med detta är att man lägger en grund för att ta steget vidare mot Responsive Web Design - att anpassa sidan för olika skärmstorlekar (surfplattor, mobiler, etc.).

Hur gör man då för att skapa sig ett gridsystem i CSS? Det finns inte endast en korrekt lösning utan det är upp till var och en vad de anser vara korrekt. Vad vi föreslår är två olika lösningar som i grunden gör samma sak men som utformas på två olika vis och har därmed sina egna för- och nackdelar. Grunden för båda dessa är att möjliggöra layouter enligt en 12-kolumns-layout (se figur 1).

![Gridsystem](/assets/img/gridsystem.png) _Figur 1. Gridsystem i form av 12-kolumns-layout._

Nedan kommer båda dessa förslag att presenteras med tillhörande stilmall samt HTML-kod. Vi utgår även från en sidobredd på 960 pixlar.

## Förslag 1

Detta förslag är det som presenterats i våra laborationer. Denna typ av gridsystem utgår ifrån att man delar in sin layout i _rader_ och _kolumner_ där man placerar kolumner inom en rad. Exempelvis kan vi i figur 1 se att första _raden_ innehåller tre stycken _kolumner_. 

Exempel på en HTML mall:

{% highlight html linenos %}
<!-- Innehållet placeras i en övergripande <div> för att centreras. -->
<div class="wrapper">
    <!-- Första raden -->
    <div class="row">
        <div class="columns-6">6</div>
        <div class="columns-6">6</div>
    </div>
    <!-- Andra raden -->
    <div class="row">
        <div class="columns-4">4</div>
        <div class="columns-4">4</div>
        <div class="columns-4">4</div>
    </div>
    <!-- Tredje raden -->
    <div class="row">
        <div class="columns-12">12</div>
    </div>
    <!-- Fjärde raden -->
    <div class="row">
        <div class="columns-3">3</div>
        <div class="columns-3">3</div>
        <div class="columns-3">3</div>
        <div class="columns-3">3</div>
    </div>
</div>
{% endhighlight %}

Observera att denna HTML mall utgör våran layout, inte innehållet. Detta innebär att det innehåll vi eventuellt har (paragrafer, bilder, etc.) placeras då inom de olika kolumerna (exempelvis `<div class="columns-6"></div>`).
{: .info}

Förslag på CSS till ovanstående HTML mall:

{% highlight css linenos %}
/* Klass för att centrera allt innehåll. */
.wrapper {
    width: 960px;
    margin: 0 auto; /* Automatisk höger/vänster marginal. */
}

/*
    Denna klass används för att skapa en rad i vår layout.
    Kort beskrivet innebär denna klass att den bestämmer att
    en rad inte får ha något innehåll till höger och vänster
    om sig.
*/
.row { clear: both; }
.row:after {
    content: "";
    display: table;
    clear: both;
}

/* Gemensam mall för våra kolumner. */
.columns-12, .columns-6, .columns-4, .columns-3 {
    float: left;
    margin: 10px;
    padding: 10px;

    /* Tillfälliga attribut för att visuellt demonstrera deras innebörd. */
    height: 80px;
    background: #eeeeee;
}

/* Enskilda mallar för våra kolumner. */
.columns-12 { width: 920px; }
.columns-6 { width: 440px; }
.columns-4 { width: 280px; }
.columns-3 { width: 200px; }
{% endhighlight %}

Ovanstående HTML samt CSS mall borde ge ett resultat likt det som visas i figur 2.

![Gridsystem exempel](/assets/img/gridsystem_example.png) _Figur 2. Lösningsförslag 1._

Fördelar med detta förslag är att man tydligt delar in sin HTML kod i _rader_ och _kolumner_. Detta innebär även att det är enkelt att exempelvis lägga en bakgrund eller liknande på en rad och så vidare.

## Förslag 2

Ett alternativ till förslag 1 är att istället för att dela in vår layout i rader och kolumner kan vi bestämma vilka kolumer vi vill ha och sedan separera dessa och på så vis uppnå samma resultat.

Exempel på en HTML mall:

{% highlight html linenos %}
<!-- Innehållet placeras i en övergripande <div> för att centreras. -->
<div class="wrapper">
    <!-- Första raden -->
    <div class="columns-6">6</div>
    <div class="columns-6">6</div>
    <div class="clearfix"></div>
    <!-- Andra raden -->
    <div class="columns-4">4</div>
    <div class="columns-4">4</div>
    <div class="columns-4">4</div>
    <div class="clearfix"></div>
    <!-- Tredje raden -->
    <div class="columns-12">12</div>
    <div class="clearfix"></div>
    <!-- Fjärde raden -->
    <div class="columns-3">3</div>
    <div class="columns-3">3</div>
    <div class="columns-3">3</div>
    <div class="columns-3">3</div>
    <div class="clearfix"></div>
</div>
{% endhighlight %}


Observera att istället för att dela in rader i vår HTML så separerar vi raderna genom att nyttja `<div class="clearfix"></div>` efter rad för att vår layout ska fungera som den ska.
{: .info}

Förslag på CSS till ovanstående HTML mall:

{% highlight css linenos %}
/* Klass för att centrera allt innehåll. */
.wrapper {
    width: 960px;
    margin: 0 auto; /* Automatisk höger/vänster marginal. */
}

/* Denna klass är den som separerar våra olika rader i vår layout. */
.clearfix { clear: both; }

/* Gemensam mall för våra kolumner. */
.columns-12, .columns-6, .columns-4, .columns-3 {
    float: left;
    margin: 10px;
    padding: 10px;

    /* Tillfälliga attribut för att visuellt demonstrera deras innebörd. */
    height: 80px;
    background: #eeeeee;
}

/* Enskilda mallar för våra kolumner. */
.columns-12 { width: 920px; }
.columns-6 { width: 440px; }
.columns-4 { width: 280px; }
.columns-3 { width: 200px; }
{% endhighlight %}

Ovanstående HTML och CSS mall bör producera samma resultat som visas i figur 2.

Fördelar med detta förslag är bland annat att vi slipper ytterligare en nivå av HTML-element i form av `<div class="row"></div>`, samt att det kan vara enklare att förstå.

## Sammanfattning

Båda lösningsförslagen producerar i slutändan samma resultat (med mindre olikheter) och således spelar det ingen roll vilket man väljer att använda.

/Sebastian & Johannes

[css classes]: https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors
