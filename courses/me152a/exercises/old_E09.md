---
layout: instructions
title: Laboration 8
code: me152a
---

# Laboration 8

Syfte med laborationen:

* att, utöver tidigare kunskaper, öva på att kombinera DOM, `XMLHttpRequest` och `localStorage` för att hämta och spara information från webben

Inlämning sker i form av en mapp (zippad) innehållande:

* en HTML-fil
* en JavaScript-fil
* lösning på __Uppgiften__ - lösningen placeras i er JavaScript-fil

Övrigt:

* ni måste använda er av `"use strict";`
* ni måste använda er av [JSHint](http://jshint.com)
* var nogranna med att dokumentera den kod som ni anser inte beskriver sig själv

I denna laboration introduceras `localStorage`, som är ett objekt i moderna webbläsare som tillåter oss att spara och hämta information. Dokumentationen för detta finner ni [här](https://developer.mozilla.org/en-US/docs/Web/API/Storage) och en kortare tutorial finner ni [här](http://www.binpress.com/tutorial/local-storage/106) (observera att det är bara början av denna som är relevant).

### Uppgiften

Själva uppgiften går ut på att kombinera tidigare kunskaper om Document Object Model och `XMLHttpRequest` tillsammans med `localStorage` för att få dessa att arbeta tillsammans. Tanken med uppgiften är att kunna hämta information (JSON), spara denna i webbläsaren (localStorage) och presentera denna (DOM). Detta ska ske genom olika knappar på webbsidan (dessa presenteras nedan). Tänk på att i denna uppgift behöver ni använda er av någon form av CSS för att göra informationen mer tillgänglig.

Vart ni hämtar information ifrån (dvs. vilken API) är valfritt, exempelvis kan ni använda er av OMDb eller Spotify (där ni själva anger en förbestämd sökning).

I listan nedan presenteras de tre knappar ni ska ha och vad dessa ska utföra (tänk på att själva HTML-koden för dessa bestämmer ni själva):

1. "__Hämta__" - den första knappen har i uppgift att hämta information när en användare klickar på denna. Informationen kommer att sparas genom `localStorage`, detta innebär även att ni får kontrollera om informationen redan finns sparad eller inte. Beroende på om informationen är sparad eller inte kan ni använda funktionen `alert` för att notifiera användaren om detta. Observera att denna knappen endast hämtar och sparar information, dvs. den skapar ingen HTML.

2. "__Visa__" - den andra knappen har i uppgift att visa den informationen ni sparat, detta kan exempelvis göras genom att ni skapar listelement som sparas i en lista. Om ingen information finns sparad kan ni använda er av funktionen `alert` för att notifiera användaren om detta. Hur och vilken information ni väljer att presentera (från den ni har sparat) är upp till er själva.

3. "__Radera__" - den sista knappen har i uppgift att radera all information som är sparad. Detta innebär att ni får kontrollera om det redan finns information eller inte, och beroende på detta kan ni använda er av `alert` för att notifiera användaren. Tänk på att utöver att ta bort den information som sparats i `localStorage` får ni även ta bort den eventuella information som presenterats genom "Visa" knappen.

#### Local Storage

Objektet `localStorage` finns tillgängligt i moderna webbläsare och tillåter oss att spara, hämta och radera information. Denna information sparas i webbläsaren och är därmed kopplad till den webbläsare och användare som utför detta. När det kommer till att spara information kan vi endast spara information av typen `String`, dvs. text av något slag. För att spara information som är mer komplex kan vi nyttja dataformatet `JSON`. Nedan presenteras några exempel som kan vara till hjälp för uppgiften (tänk på att gå igenom dokumentationen också).

{% highlight js linenos %}

// Spara ett värde
localStorage.setItem("firstname", "Sherlock");

// Hämta ett värde
var firstname = localStorage.getItem("firstname");

// Kontrollera om ett värde finns
if (localStorage.getItem("firstname")) {
    // ...
}

// Radera ett värde
localStorage.removeItem("firstname");

// Radera alla sparade värden
localStorage.clear();

// Antal olika värden som är sparade
localStorage.length;

// Om vi vill spara information som är
// mer komplex än en sträng kan vi
// använda oss av JSON.

var person = {
    firstname: "Sherlock",
    lastname: "Holmes",
    siblings: ["Jane", "John"]
};

// Gör om vårt objekt (person) till en
// JSON-sträng och spara det som "person"
localStorage.setItem("person", JSON.stringify(person));

// Hämta värdet för "person" (som är en JSON-sträng)
// och konvertera (parse) detta till ett JavaScript-objekt
var person = JSON.parse(localStorage.getItem("person"));
console.log(person.firstname);
{% endhighlight %}

Den sista metoden som presenteras med `JSON.stringify` och `JSON.parse` är den ni kan använda er av för att spara och hämta information från `localStorage` i kombination med den API ni valt.

#### XMLHttpRequest

Tänk på att för att hämta information från en API så kan ni utgå från följande mall:

{% highlight js linenos %}

// Den URL som leder till det API ni valt
var url = "...";

// Skapa det objekt som används för att kommunicera
// med ert API
var api = new XMLHttpRequest();

// Skicka förfrågan till ert API
api.open("get", url, true);
api.send();

// Den funktionalitet ni vill utföra när ni
// fått ett svar från ert API
api.addEventListener("load", function() {
    // Svaret från API:et sparas som en JSON-string i
    // "this.responseText"

    // Vilket innebär att ni kan exempelvis spara detta direkt
    localStorage.setItem("data", this.responseText);

    // För att senare hämta denna informationen:
    // var data = JSON.parse(localStorage.getItem("data");
});
{% endhighlight %}
