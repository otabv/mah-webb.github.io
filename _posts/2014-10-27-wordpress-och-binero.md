---
layout: blog
title: WordPress & Binero
category: wordpress
---

# WordPress & Binero

## Skapa ett binerokonto


Ni måste ha en kampanjkod för att kunna registrera ett konto på binero utan kostnad.
{: .info}

För att registrera er på binero med en kampanjkod börjar ni med att besöka följande sida: `https://store.binero.se/`. Därefter följer ni stegen i samband med de som listas nedan med förtydligande - var nogrann!

1. Fyll i textrutan med det domännamn ni skulle vilja ha (t.ex `lisanilsson.se` eller `andersjohansson.se`). **Observera** att det ska vara en `.se` domän och ni **måste** välja en direkt
2. På nästa steg väljer ni vilken typ av tjänst, i detta fallet ska det vara **Privatpaketet** (kostanden för detta kommer försvinna på sista steget)
3. Fyll i era personuppgifter, tänk på att komma ihåg vilken email ni registrerar för det kommer skickas ut en bekräftelse till denna
4. På sista steget kan ni välja "Faktura", under dessa val kan ni fylla i kampanjkoden - var nogranna när ni fyller i denna så det inte blir fel. När denna är ifylld bör priserna ändras till 0kr - kontrollera detta innan ni slutligen väljer att acceptera allt.

När ni gått igenom alla stegen så kommer ett par emails att skickas till den mail ni registrerade er med. Detta kan ta en stund så vänligen vänta (ibland kan ni även behöva kontrollera er skräppost).
{: .info}


## Installera WordPress på binero

_Beroende på hur snabbt ni loggar in efter ni registrerat ert konto kan vissa funktioner ännu inte vara aktiva_.

För att installera WordPress på binero behöver vi först logga in på bineros kontrollpanel (fliken finner ni överst på deras startsida). Uppgifter som användarnamn och lösenord kommer att skapas för de olika tjänsterna så var beredd på att anteckna dessa inför framtiden, det går givetvis alltid att komma åt dessa vid ett senare tillfälle.

### FTP

Bineros kontrollpanel:

1. Välj "Översikt" i vänstermenyn.
2. Välj fliken "FTP".
3. Skriv ner IP-adressen (preview-värdnamn).
4. Skriv ner användarnamnet (detta brukar börja med en sifferkombination likt 180221).
5. Klicka på användarnamnet (grön länk) och fyll sedan i ett nytt lösenord, anteckna även detta.

Nu har vi uppgifterna för att kunna logga in på webbhotellets FTP-server genom ett FTP-program (alt. FTP klient), förslagsvis [FileZilla][fz]. FTP som begrepp kan kort beskrivas som att vi kan komma åt filer på ett avlägset filsystem.

Om vi utgår från FileZilla så fyller vi i följande fält för att logga in (det skiljer sig inte mycket i andra program):

I den senaste version av FileZilla behöver vi ansluta på ett alternativt vis som listas nedan, om ni har en äldre version av FileZilla sedan innan kan ni fortfarande utgå från det tidigare viset.
{: .info}

__Nya:__

* I menyn väljer ni _Arkiv_ -> _Platshanteraren_ (alt. _File_ -> _Site Manager_)
* I vänstermenyn välj att skapa en _Ny plats_ (alt. _New Site_) - döp denna sedan till något relevant
* I högermenyn under _Värd_ (alt. _Host_) fyller ni nu i något i stil med `ftp.mindomän.se`
* Under _Kryptering_ (alt. _Encryption_) väljer ni det sista alternativet _Enkel FTP_
* Under _Inloggningstyp_ (alt. _Logon type_) väljer ni _Normal_ och fyller därefter i ert användarnamn och lösenord för er FTP
* Klicka sedan "OK" __inte__ "Anslut" -> gå sedan tillbaka i menyn (Arkiv) och klicka anslut (detta gör att allt ni gjorde sparas till framtiden)

__Gamla:__

* __Host__: IP-adressen/preview-värdnamn.
* __Username__: användarnamnet (det som börjar med en sifferkombination).
* __Password__: det lösenord ni själva fyllde i på bineros kontrollpanel.
* __Port__: denna behövs inte fyllas i (standard är siffran 21).

Om binero har hunnit registrera ert konto och domän bör ni nu se en mapp med ett namn likt `erdomän.se` (om denna ännu inte finns kan ni vänta en liten stund). Gå in på mappen med er domän som namn. Därefter bör ni finna en mapp vid namn `public_html` - här kommer vi framöver att placera WordPress (dvs. föra över filer till denna mapp). Innan vi kan göra detta måste fortsätta med ett par andra steg.

_Filer som börjar med en punkt i FileZilla kan ignoreras_.

### Databas

Bineros kontrollpanel:

1. Välj "Databaser -> MySQL" i vänstermenyn.
2. Klicka på "Lägg till databas".
3. Fyll i uppgifterna för databasnamn (t.ex labb eller wordpress) och lösenord, anteckna sedan dessa uppgifter (samt "standardanvändare"). Det spelar ingen roll vad ni döper databasen till, undvik åäö.
4. Klicka på "Lägg till" och vänta.

Nu har vi skapat den databas (där man sparar information) som sedan ska kopplas till WordPress. Dock behöver vi ytterligare ett par uppgifter nedskrivna:

1. Välj "Översikt" i vänstermenyn.
2. Välj fliken "Databaser".
3. Om ni har en dropdown vid "Databas" så välj rätt databas (denna visas endast om ni har mer än en databas).
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

För att kunna installera WordPress måste vi först ladda ner den [engelska versionen][wp_en] eller [svenska versionen][wp_sv]. Efter ni laddat ner denna öppnar vi filen så vi får fram våran WordPress mapp, denna mapp ska innehålla många filer och tre stycken mappar.

Nu ska vi utföra själva installationen av WordPress:

1. Öppna ert FTP-program och logga in (detta gjorde vi tidigare).
2. Välj mappen `public_html` (den som finns under mappen med er domän som namn).
3. Nu ska ni föra över alla filer från den mappen ni precis laddade ner, observera att det är innehållet av denna mappen - inte mappen i sig. För över dessa filerna till mappen `public_html` (detta kan ta en stund). Det fungerar att dra filerna från er dator till FileZilla.
    - Om ni har en fil vid namn `binero-default.html` innan överföring så kan ni radera denna.
4. När filöverföringen är klar ska ni besöka er egen domän i en webbläsare, t.ex `http://erdomän.se`.
    - Om detta inte fungerar kan det vara så att er domän ännu inte registrerats, då kan ni istället pröva `http://erdomän.se.preview.binero.se`.
5. Följ nu installationsguiden från WordPress och använd de uppgifter som ni tidigare antecknat. Om ni är osäkra på att ni har rätt uppgifter kan ni alltid gå in på bineros kontrollpanel under "Översikt" och hitta dom där.

Nu bör ni lyckats installera WordPress och har möjlighet att logga in!

[wp_en]: https://wordpress.org/download/
[wp_sv]: https://sv.wordpress.org
[fz]: https://filezilla-project.org
