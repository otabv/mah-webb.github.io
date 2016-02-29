---
layout: blog
title: Om radioknappar och genus
category: all
---

# Om radioknappar och genus

För ett tag sedan uppstod det en diskussion om genus under en föreläsning i kursen [Webbproduktion](http://edu.mah.se/sv/Course/ME135A#Syllabus). Föreläsaren skulle gå igenom radioknappar i webbformulär och använde sig av följande exempel:

![](/assets/img/radiogenusmalefemale.png)

En av studenterna var inte nöjd med exemplet eftersom hen menade att det finns de som varken vill identifiera sig som kvinna eller man. Föreläsaren försvarade exemplet med att det var just bara ett exempel. Och det är ett ganska vanligt exempel. Det första [formulärexemplet](http://www.w3.org/TR/html401/interact/forms.html#h-17.1) man stöter på i The World Wide Web Consortiums specifikation av html 4.01 från 1999 är identiskt med exemplet ovan. Men är "bara ett exempel" ett bra exempel?

Först och främst kan man fråga sig, varför dyker frågan om kön så ofta upp i olika webbformulär? Om man ska registrera sig för att köpa biljett hos [Live Nation](http://www.livenation.se) möts man till exempel av följande formulär där det är obligatoriskt att ange kön: 

![](/assets/img/radiogenuslivenation.png)

Varför bryr sig Live Nation om vad jag har för kön? Antagligen för att kunna föra statistik och ge mig riktade annonser. Som om jag, bara för att jag som vit medelålders man skulle vara intresserad av att boka biljetter till en viss typ av arrangemang. Vore det inte mer intressant om man uppgav vikt och längd? Då hade de i alla fall kunnat använda uppgifterna till att dimensionera läktare, anpassa höjd på scenen mm. Kanske så här:

![](/assets/img/radiogenuslangdvikt.png)

En av riskerna med Male/Female-exemplet är att när man sett det tillräckligt många gånger blir det någon slags allmängiltig regel att ett registreringsformulär ska innehålla frågan om kön, även om det ofta är helt irrelevant. **Exempel befäster strukturer**. Det är därför viktigt att vi som lärare i webbutveckling använder väl valda exempel. Som webbutvecklare är det också **alltid viktigt att kritiskt fundera över vilka uppgifter man vill ha med i ett formulär**. 

Om man ändå vill ha med frågan om kön kan man till exempel göra som i exemplet nedan från <http://scratch.mit.edu> där det finns ett tredje alternativ till Male/Female som man själv kan ange:

![](/assets/img/radiogenusscratch.png)

Åter till The World Wide Web Consortiums specifikationer av html. I [senaste specifikationen för html5 från 2014](http://www.w3.org/TR/html5/forms.html#introduction-1) är Male/Female-exemplet ersatt med ett pizza-exempel:

![](/assets/img/radiogenuspizza.png)

Dessutom finns lite längre ned på samma side ett exempel som innehåller [Bechdel-testet](http://en.wikipedia.org/wiki/Bechdel_test), ett test för testa jämställdhet i filmer. 

![](/assets/img/radiogenusbechdel.png)

Utmärkt av W3C att standardexemplet Male/Female nu är utbytt. Jag hoppas att vi som lärare i webbutveckling också kommer att ha positiva exempel framöver. Men det är också viktigt att veta att vi inte är utbildade i genusvetenskap, och att exempel som kan vara stötande för någon lätt slinker igenom. Då är det skönt att veta att ni studenter inte sväljer vad som helst utan förhåller er kritiskt till oss lärare!

För den som tycker det är intressant och vill läsa mer om kombinationen genus, webbutveckling och programmering kan jag rekommendera följande länkar:

- [Feminist Hacker Barbie](http://www.wired.com/2014/11/feminist-hacker-barbie-just-little-girls-need/)
- [Geek Girl Meetup Öresund](http://geekgirlmeetup.com/oresund/)
- [Girls Who Code](http://girlswhocode.com)

## Slutligen - vad tycker ni? 

<form action="http://ddwap.mah.se/k3bope/genus/reply.php" method="get">
    <fieldset>
        <legend>Vilket av nedanstående alternativ i ett formulär skulle du föredra om du vill registrera dig på en webbplats?</legend>
        <input type="radio" value="0" name="formalternative" /> Man - Kvinna<br>
        <input type="radio" value="1" name="formalternative" /> Man - Kvinna - Hen<br>
        <input type="radio" value="2" name="formalternative" /> Man - Kvinna - Möjlighet att ange eget alternativ<br>
        <input type="radio" value="3" name="formalternative" /> Ingen fråga alls om kön<br>
        <input type="radio" value="4" name="formalternative" /> Jag bryr mig inte<br>
        <textarea rows="5" cols="40" name="comment" placeholder="egen kommentar"></textarea><br>
        <input type="submit" value="Skicka" />
    </fieldset>
</form>


Bo Peterson  
@bo\_peterson

<iframe frameborder="0" src="http://ddwap.mah.se/k3bope/genus/result.php" width="500" height="500">
</iframe>
