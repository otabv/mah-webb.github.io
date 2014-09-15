---
layout: instructions
code: me105a
title: Föreläsning 4
controls: false
theme: bopeterson/cleaver-lecture
---

# Databasbaserad publicering

textwrangler

## Föreläsning 4

Dagens föreläsning går igenom

xxx


---

## SQL-frågor till flera tabeller

För att man ska ha nytta av förhållanden mellan tabeller måste man kunna ställa SQL-frågor till flera tabeller samtidigt. Om vi tex vill veta telefonnumret till en viss person måste vi fråga både tabellen person och abonnemang. För att ”koppla ihop” tabellerna och fråga båda tabellerna använder vi INNER JOIN:


SELECT * FROM person INNER JOIN abonnemang

Resultat blir en *alla möjliga sätt* att kombinera tabellerna person och abonnemang, och vi får kombinationer som vi inte är intresserade av
