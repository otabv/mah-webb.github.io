---
layout: instructions
title: Laboration 6
code: me152a
---

# Laboration 6

Syfte med laborationen:

* att öva på att använda Document Object Model (DOM)
* att fortsätta använda tidigare kunskaper i kombination med DOM

Inlämning sker i form av en mapp (zippad) innehållande:

* en HTML-fil
* en JavaScript-fil
* lösning på alla __Uppgifter__ - lösningarna placeras i er JavaScript-fil

Övrigt:

* ni måste använda er av `"use strict";`
* ni måste använda er av [JSHint](http://jshint.com)
* var nogranna med att dokumentera den kod som ni anser inte beskriver sig själv

Innan ni börjar med laborationen rekommenderas det att läsa på om följande:

* [alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
* [prompt()](https://developer.mozilla.org/en-US/docs/Web/API/window/prompt)
* [confirm()](https://developer.mozilla.org/en-US/docs/Web/API/window/confirm)
* [.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* Några intressanta attribut för HTML-element (via DOM) är: [.children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children), [.firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild) och [.lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild)

_Längst ner finner ni några korta kodexempel också._

När ni använder er av metoden `.addEventListener` på ett HTML-element så tänk på att lägga till argumentet `event` till er funktion, dvs. `function(event) { ... }` då denna kommer vara nyttig i ett flertal uppgifter, testa gärna att köra en `console.log()` på den för att se vad den innehåller!
{: .info}

### Uppgift 1

I den första uppgiften kommer ni bli tilldelad färdig HTML och CSS, dvs. er uppgift är att endast arbeta med JavaScript. Vad ni ska göra är så att om en besökare klickar på en av de tre knappar som finns tillgängliga kommer en klass att läggas till på `<div id="message-box">`. För att förtydliga kan vi ta ett exempel: om en besökare klickar på den första knappen `<button id="success">Success</button>` så ska er `<div>` får klassen "success", dvs. `<div id="message-box" class="success">`. Detta innebär att ni behöver lägga till eventet `click` på varje knapp och baserat på vilken knapp som en besökare klickar på kommer en klass att lägga till på er `<div>` (kort kan vi säga att den klass som ska läggas till är `id` från den knapp som blev klickad).

``` html
<div id="message-box">
    <p>This is a very important message box!</p>
</div>

<button type="button" id="success">Success</button>
<button type="button" id="error">Error</button>
<button type="button" id="info">Info</button>
```

``` css
#message-box {
    border: 1px solid black;
    padding: 15px;
    font-size: 20px;
}
.success {
    background-color: #dff0d8;
    border-color: #98B98B;
}
.error {
    background-color: #f2dede;
    border-color: #BE9090;
}
.info {
    background-color: #d9edf7;
    border-color: #7294A5;
}
```

### Uppgift 2

I den andra uppgiften kommer ni behöva använda er av funktionen `prompt`. Ni ska genom JavaScript göra så att när en besökare klickar på knappen `<button id="add-item">` så ska en popup-ruta komma upp där besökaren kan fylla i en valfri text. Denna texten ska sedan sparas som ett nytt list-element i listan. Grunden för HTML-koden finner ni nedan.

``` html
<ul id="items">
    <li>The first item is free!</li>
</ul>

<button type="button" id="add-item">Add item</button>
```

### Uppgift 3

Komplettera **Uppgift 2** med en extra knapp, `<button>` - ni väljer id och text själv, som raderar det sista elementet i listan varje gång en användare klickar på den.

### Uppgift 4

I uppgift 4 är tanken att ni ska utgå från den HTML-kod ni finner nedan. Ni ska göra så att när en besökare klickar på knappen "X" i ett list-element ska detta list-element raderas (dvs. hela list-elementet, inte bara knappen). **Dock** måste användaren först godkänna detta, det innebär att ni behöver använda er av funktionen `confirm()` innan ni raderar något list-element. Tips: använd er av nyckelordet `this` inuti er funktion för ert event (`click`) för att komma åt list-elementet.

``` html
<ul>
    <li>
        This is the first item
        <button type="button" class="remove-list-item">X</button>
    </li>
    <li>
        This is the second item
        <button type="button" class="remove-list-item">X</button>
    </li>
    <li>
        This is the third item
        <button type="button" class="remove-list-item">X</button>
    </li>
    <li>
        This is the fourth item
        <button type="button" class="remove-list-item">X</button>
    </li>
</ul>
```

### Uppgift 5

I uppgift 5 kommer vi att arbeta med formulär, denna uppgift är också indelad i tre delar.

1. Hämta innehållet från ett ifyllt formulär
2. Validera innehållet innan formuläret skickas
3. Visa med utseende att formuläret inte är korrekt ifyllt eller tomt innan det skickas

Ni kommer bli tilldelad ett färdigt HTML-formulär, det är OK att skapa ett eget men då gäller det att vara nogrann att anpassa delarna till er HTML-kod. Observera att det finns ännu ingen CSS-kod för detta formulär och det ser därför inte så tilltalande ut - lägg därför gärna till lite grundläggande CSS så det blir mer användarvänligt!

``` html
<form method="get" action="" id="apply-for-pet">
    <h2>Ansökan om att skaffa husdjur</h2>
    <input type="text" name="firstname"> Förnamn<br>
    <input type="text" name="lastname"> Efternamn<br>
    <input type="text" name="age"> Ålder<br>
    <input type="text" name="email"> Epost<br>
    
    <div id="pets">
        <p>Typ av husdjur?</p>
        <input type="radio" name="pet" value="dog"> Hund<br>
        <input type="radio" name="pet" value="cat"> Katt<br>
        <input type="radio" name="pet" value="fish"> Fisk<br>
        <input type="radio" name="pet" value="bird"> Fågel<br>
    </div>

    <div id="days">
        <p>Vilka dagar arbetar/studerar ni?</p>
        <input type="checkbox" name="day" value="monday"> Måndag<br>
        <input type="checkbox" name="day" value="tuesday"> Tisdag<br>
        <input type="checkbox" name="day" value="wednesday"> Onsdag<br>
        <input type="checkbox" name="day" value="thursday"> Torsdag<br>
        <input type="checkbox" name="day" value="friday"> Fredag<br>
        <input type="checkbox" name="day" value="saturday"> Lördag<br>
        <input type="checkbox" name="day" value="sunday"> Söndag<br><br>
    </div>
    
    <button type="submit">Skicka ansökan</button>
</form>
```

Varje del är en påbyggnad från den föregående delen
{: .info}

#### Del 1

Innan vi börjar med att hämta innehållet från vårt formulär behöver vi göra två saker. **1)** hämta formuläret (elementet) och **2)** lyssna på eventet `submit` så att vi kan "fånga" formuläret innan det skickas iväg.

Att hämta ett element är inget nytt, ni kan exempelvis nyttja `document.getElementById()`. Sedan sparar ni detta i en variabel och lägger till eventet `submit` genom `.addEventListener("submit", function(event) { ... })`. En sak som ni nu måste göra för att "avbryta" formuläret, dvs. att göra någon form av interaktion med innehållet innan det skickas iväg kan ni göra på följande vis:

``` js
// Förutsätter att ni hämtat ert formulär redan (som variabeln "x")
x.addEventListener("submit", function(event) {
    // Denna raden avbryter att formuläret ska skickas iväg
    event.preventDefault(); 

    // ...

    // Denna raden skickar iväg vårt formulär, denna placeras därför
    // oftast inuti en if-sats eller dylikt
    this.submit();
});
```

Tanken med del 1 är att ni ska helt enkelt skriva ut allt som finns ifyllt i formuläret med `console.log()`. Observera även att all kod kommer placeras inuti vår anonyma (funktion utan namn) funktion.

För att hämta alla element i vårt formulär (textfält, radioknappar, etc.) så kan ni börja med `this.elements`. Denna innehåller alla våra fält, där varje fält kan hämtas genom dess `name=""` attribut, t.ex. om vi vill hämta förnamnet kan vi skriva `console.log(this.elements.firstname.value);`.

Detta funkar för samtliga av våra element förutom våra checkboxar, eftersom där kan en besökare välja flera olika val samtidigt. Det innebär att `this.elements.day` är en array som innehåller varje checkbox. Eftersom det är en array kan vi ju därför enkelt gå igenom denna med en `for` loop! För att kontrollera att en checkbox är vald används attributet `.checked`, dvs. om vi skulle vilja kontrollera om måndag är valt hade vi då skrivit `this.elements.day[0].checked` - dock ska ni göra en loop av detta på valfritt sätt så ni kan skriva ut med `console.log()` vilka dagar som är valda.

#### Del 2

I den andra delen kommer ni introducera en mängd `if`-satser som vardera kontrollerar innehållet för era formulärsfält, nedan presenteras en kravspecifikation för vad varje fält ska innehålla:

* Förnamn - får endast innehålla `0` till `50` bokstäver
* Efternamn - får endast innehålla `0` till `50` bokstäver
* Ålder - måste vara en `Number` och vara mer än `0`
* Epost - får endast innehålla `0` till `50` bokstäver
* Husdjur - ett husdjur måste vara valt
* Dagar - en dag måste vara vald

Om alla kraven går igenom ska formuläret skickas med `this.submit()`, om något av dessa inte stämmer så får ni skriva ut ett felmeddelande med `console.log()`.

#### Del 3

I den tredje delen ska ni påverka utseendet av formuläret på valfritt vis när något av fälten inte är korrekt ifyllda. Detta kan enklast göras på ett av två vis. Antingen gör ni så att när en användare inkorrekt fyllt i ett fält, t.ex. förnamn, så lägger ni till en CSS-klass på fältet (som då t.ex. gör bakgrundsfärgen röd) - eller så gör ni detta (samma princip) med JavaScript.

För att påverka utseende (CSS) med JavaScript använder vi oss av attributet `.style`. Det innebär att om vi skulle vilja göra bakgrundsfärgen på fältet för förnamn hade vi i vår JavaScript kunnat skriva `this.elements.firstname.style.background = "red";`. Allt efter `.style` är helt enkelt CSS-attribut och om vi anger ett värde kommer utseendet då också att ändras.

Gör nu så att om något fält inte är korrekt ifyllt (då skickas inte heller formuläret) så ska utseendet av formuläret återspegla vilket fält som var fel. Tips: tänk på att radioknapparna och checkboxarna ligger i varsin `<div>`.

### Extrauppgift

I denna uppgiften ska ni skapa en timer, dvs. ni kommer ha en knapp som startar er timer, en knapp som stannar den och slutligen en knapp som återställer den. Det räcker att det är en timer som räknar sekunder. Inför denna uppgift rekommenderas det att kort läsa om [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval). För att kort demonstrera hur `setInterval()` fungerar kan ni ta en titt på exemplet nedan. Kort kan vi beskriva det som att vi kan välja att upprepa en funktion, där varje upprepning fördröjs en viss tid (som vi själva anger i millisekunder) - vi har även möjlighet att avbryta dessa uppreningar genom funktionen `clearInterval`.

``` js
function start() {
    // Tom variabel som kommer innehålla vårt intervall
    var printInterval;
    // Variabel som vi använder för att kontrollera
    // antal gånger vi upprepat vår funktion
    var times = 0;
    // Tiden mellan upprepningar skrivs i millisekunder
    // vilket innebär att 1000 = 1 sekund
    var delay = 1000;

    function print() {
        times += 1;

        if (times > 10) {
            clearInterval(printInterval);
        }
        
        console.log("It has been run ", times, " times");
    }

    printInterval = setInterval(print, delay);
}
```

För denna uppgift kan ni även utgå från följande HTML-mall.

``` html
<p id="timer">0s</p>
<button type="button" id="start-timer">Start</button>
<button type="button" id="stop-timer">Stop</button>
<button type="button" id="reset-timer">Reset</button>
```

För att underlätta kommer en lista presenteras nedan med lite tips, tänk på att det går att lösa problemet på en mängd olika vis och dessa tips är bara ett förslag.

* Använd er av två globala variabler, `time` som representerar hur länge vår timer har pågått och `interval` som kan representera det intervall vi använder oss av för att öka vår timer
* Skapa tre funktioner: `start()`, `stop()` och `reset()`
    * `start()` skapar vårt intervall, ökar vår variabel `time` med `1` och ändrar textinnehållet på vår paragraf
    * `stop()` denna raderar endast intervallet genom `clearInterval()`
    * `reset()` avbryter vårt intervall, återställer vår variabel `time` och återställer även vår paragrafs textinnehåll
* Applicera de tre funktionerna till eventet `"click"` på respektive HTML-knapp

## Kodexempel

**Att skapa ett element**

``` js
// Skapa ett stycke
var p = document.createElement("p");
// Skapa en textnod
var textNode = document.createTextNode("Leo finally got an oscar!");
// Lägg till textnoden på vårt stycke
p.appendChild(textNode);

// Alternativ till att ändra text på ett element
// p.textContent = "Leo finally got an oscar!";

// Hämta vår <body>
var body = document.querySelector("body");
// Lägg till vårt stycke sist
body.appendChild(p);
```

**Att radera ett element**

``` js
// Vi utgår från följande HTML
// <p id="info">
//     Lite exempel innehåll <a href="google.com" id="link">här.</a>
// </p>

// Hämta de element vi arbetar med
var p = document.getElementById("info");
var a = document.getElementById("link");

// Vi måste utgå från förälder-elementet när vi ska radera
p.removeChild(a);
```

**Att lägga till ett event på ett element**

``` js
// Hämta knappen vi vill ska ha ett klick-event på sig
var button = document.getElementById("my-button");

// Alternativ till att hämta ett element:
// var button = document.querySelector("#my-button");

// Lägg till ett klick-event
button.addEventListener("click", function(event) {
    // Den kod du vill ska utföras vid ett klick
    // ...

    // "this" representerar knappen som blev klickad
    console.log(this);

    // "event" innehåller information om eventet (klicket)
    console.log(event);
});
```
