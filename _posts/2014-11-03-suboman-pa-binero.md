---
layout: blog
title: Subdomän på Binero
category: wordpress
---

# Subdomän på Binero

Att skapa en subdomän på Binero för en ny WordPress installation kräver nästan samma process som presenterades i [WordPress & Binero][post], där vi __inte__ behöver skapa ett nytt FTP konto. Dock behöver vi skapa en subdomän som vi tidigare inte gjort.

## Skapa en ny subdomän

1. Välj "Domän och Webbplats" -> "Webbplatser" i vänstermenyn.
2. Klicka på "Lägg till".
3. Ange "Domäntyp" som "Subdomän".
4. Fyll i önskat namn på din subdomän (gemener, inte åäö). Välj din egen domän i dropdownmenyn.
5. Klicka på "Lägg till webbplats" och vänta.

Nedan summeras de stegen som presenterades i [WordPress & Binero][post].

## Skapa en ny databas

Kom ihåg att anteckna de uppgifter ni skapar.

1. Välj "Databaser" -> "MySQL" i vänstermenyn.
2. Klicka på "Lägg till databas".
3. Fyll i uppgifterna för databasnamn och lösenord.
4. Klicka på "Lägg till" och vänta.

## Installera WordPress

1. Ladda ner den [engelska][en] eller [svenska][sv] versionen av WordPress.
2. Öppna ert FTP-program och logga in (uppgifterna finner ni på Binero).
3. När ni är inloggade bör ni nu finna mappen er subdomän (e.g. `labb.kalle.se`). Välj mappen `public_html`. Ni kan radera filen `binero-default.html`.
4. Nu ska ni föra över alla de filer som ni precis laddade ner från WordPress, tänk på att det är innehållet (dvs. alla filer) inte själva mappen som ska föras över. Placera alla filer i mappen `public_html`.
5. När filöverföringen är klar kan ni besöka er subdomän. Om den ännu inte är aktiv kan ni lägga till `.preview.binero.se` i slutet av er adress.
6. Nu kan ni följa den installationsguide som kommer från WordPress. Tänk på att använda er av de nya uppgifterna ni nu skapat. Uppgifterna finner ni på Binero under "Översikt" om ni inte antecknat dessa.

Nu bör ni lyckats skapa en subdomän samt en ny installation av WordPress. Denna process kan ni upprepa flera gånger för att ha flera subdomäner!

[post]: blog/wordpress/wordpress-och-binero.html
[en]: https://wordpress.org/download/
[sv]: https://sv.wordpress.org
