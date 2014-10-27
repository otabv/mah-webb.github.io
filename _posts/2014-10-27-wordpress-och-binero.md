---
layout: blog
title: WordPress & Binero
category: wordpress
---

# WordPress & Binero

## Skapa ett binerokonto

Använd er kampanjkod för att registrera ett konto på binero.

Adressen är `https://www.binero.se/bestall?campaign=` där ni __lägger till__ kampanjkoden i slutet. Här fyller ni sedan i era personuppgifter och vilken domän ni vill ha. __Observera__ - för att domänen ska vara gratis krävs det att ni registrerar en domän direkt.

Skulle fråga om val av server uppstå väljer ni "Linux".

## Installera WordPress på binero

_Beroende på hur snabbt ni loggar in efter ni registrerat ert konto kan vissa funktioner ännu inte vara aktiva_.

För att installera WordPress på binero behöver vi först logga in på bineros kontrollpanel (fliken finner ni överst på deras startsida). Uppgifter som användarnamn och lösenord kommer att skapas/redigeras så var beredd på att anteckna dessa inför framtiden (det går givetvis alltid att få dessa från bineros kontrollpanel).

### FTP

Bineros kontrollpanel:

1. Välj "Översikt" i vänstermenyn.
2. Välj fliken "FTP".
3. Skriv ner IP-adressen (preview-värdnamn).
4. Skriv ner användarnamnet (detta brukar börja med en sifferkombination likt 180221).
5. Klicka på användarnamnet och fyll sidan i (och skriv ner) ett nytt lösenord.

Nu har vi uppgifterna för att kunna logga in på webbhotellets FTP-server genom ett FTP-program (alt. FTP klient), förslagsvis [FileZilla][fz].

Om vi utgår från FileZilla så fyller vi i följande fält för att logga in (det skiljer sig inte mycket i andra program):

* __Host__: IP-adressen/preview-värdnamn.
* __Username__: användarnamnet (det som börjar med en sifferkombination).
* __Password__: det lösenord ni själva fyllde i på bineros kontrollpanel.
* __Port__: denna behövs inte fyllas i (standard är siffran 21).

Om binero har hunnit registrera ert konto och domän bör ni nu se en mapp med ett namn likt `erdomän.se` (om denna ännu inte finns kan ni vänta en liten stund). Gå in på mappen med er domän som namn. Därefter bör ni finna en mapp vid namn `public_html` - här kommer vi framöver att placera WordPress. Innan vi kan göra detta måste fortsätta med ett par andra steg.

_Filer som börjar med en punkt kan ignoreras_.

### Databas

Bineros kontrollpanel:

1. Välj "Databaser -> MySQL" i vänstermenyn.
2. Klicka på "Lägg till databas".
3. Fyll i uppgifterna för databasnamn och lösenord (dessa är valfria), skriv ner uppgifterna (även "standardanvändare").
4. Klicka på "Lägg till" och vänta.

Nu har vi skapat den databas (där man sparar information) som sedan ska kopplas till WordPress. Dock behöver vi ytterligare ett par uppgifter nedskrivna:

1. Välj "Översikt" i vänstermenyn.
2. Välj fliken "Databaser".
3. Om ni har en dropdown vid "Databas" så välj rätt databas (visas endast om ni har mer än en databas).
4. Skriv ner databasnamnet om ni inte redan gjort detta.
5. Skriv ner värdnamnet.
6. Skriv ner användarnamnet.

Vid installationen av WordPress kommer ni använda er av dessa uppgifter. Termerna som används för dessa är följande:

* __Database Name__: databasnamnet (det som ni själva valde när ni skapade databasen).
* __User Name__: användarnamnet (alt. "standardanvändare" när ni skapade databasen).
* __Password__: det lösenord ni själva valde när ni skapade databasen.
* __Database Host__: värdnamnet (den ganska långa adressen).
* __Table Prefix__: ignorera detta.

### WordPress

För att kunna installera WordPress måste vi först ladda ner den [engelska versionen][wp_en] eller [svenska versionen][wp_sv]. Efter ni laddat ner denna öppnar vi filen så vi får fram våran WordPress mapp, denna kommer innehålla ett stort antal filer. Nu ska vi utföra själva installationen av WordPress:

1. Öppna ert FTP-program och logga in (detta gjorde vi tidigare).
2. Välj mappen `public_html` (den som finns under mappen med er domän som namn).
3. Nu ska ni föra över alla filer från den mappen ni precis laddade ner, observera att det är innehållet av denna mappen - inte mappen i sig. För över dessa filerna till mappen `public_html` (detta kan ta en stund).
    - Om ni har en fil vid namn `binero-default.html` innan överföring så kan ni radera denna.
4. När filöverföringen är klar ska ni besöka er egen domän i en webbläsare, t.ex `http://erdomän.se`.
    - Om detta inte fungerar kan det vara så att er domän ännu inte registrerats, då kan ni istället pröva `http://erdomän.se.preview.binero.se`.
5. Följ nu installationsguiden och använd de uppgifter som ni tidigare antecknat. Om ni är osäkra på att ni har rätt uppgifter kan ni alltid gå in på bineros kontrollpanel under "Översikt" och hitta dom där.

Nu bör ni lyckats installera WordPress och har möjlighet att logga in!

[wp_en]: https://wordpress.org/download/
[wp_sv]: https://sv.wordpress.org
[fz]: https://filezilla-project.org
