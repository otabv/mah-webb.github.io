---
layout: instructions
code: me105a
title: Laboration 1
---

# Laboration 1

Syfte med laborationen:
att testa PHP-kod för att kommunicera med MySQL

<!--Redovisning: Redovisa filen index.php från uppgift 3 samt sql-koden från uppgift 4 på It's learning.-->

Genom hela kursen kommer vi att använda samma webbserver som i Programmering för webben, <http://ddwap.mah.se>  med stöd för PHP och MySQL. För att kunna använda MySQL-delen för databaser måste först en databas skapas som sedan kan användas genom hela kursen. 

## Uppgift 1

Stegen på sidorna 35-42 i boken PHP & MySQL - Novice to Ninja ska följas, men något modifierade. De modifierade stegen finns beskrivna nedan. 

Gå till <http://ddwap.mah.se> och logga in.

Klicka sedan MYSQL QUERY BROWSER och logga in. 

**OBS 1** Ange ditt användarnamn med små bokstäver, annars kan det bli problem längre fram i kursen.

![mysql query browser](im1/image001.png)
 

![](im1/image002.png)
 
Om det inte funkar att logga in, prova följande:

Gå till 

<https://ddwap.mah.se/dotnet/create/>

Ange :

- ditt användarnamn
- det lösenord du använder för att logga in på skolans datorer mm
- valfritt nytt lösenord för databasen - detta kan vara samma som för skolans datorer, men bör vara ett annat
- upprepa nytt lösenord för databasen

Testa sedan att logga in med det nya lösenordet på 

<https://ddwap.mah.se/mysqlbrowser/conn.php>

Det finns nu två databaser, en som heter *information_schema*, som vi *inte* kommer att använda, och en som heter samma som ditt användarnamn, i mitt fall *k3bope*. Det är den vi kommer att använda genom hela kursen. I boken heter databasen som används *ijdb* men vi saknar rättigheter att skapa nya databaser och måste därför använda databasen med samma namn som användarnamnet. 

![](im1/image003.png)

Nu ska tabellen *joke* skapas enligt instruktionerna på sidan 38 i boken. 

Börja med att markera databasen med ditt användarnamn i listan till vänster.

![](im1/image004.png)

Skriv sedan in texten på s 38 för att skapa tabellen. Läs i boken vad de olika raderna betyder. 

![](im1/image005.png)


När det är inskrivet klickar du Run. 

Nu har tabellen *joke* skapats. Klicka plustecknet vid Tables så kan du kolla att *joke* finns: 

![](im1/image006.png)

Nu ska en post (en rad) läggas till i tabellen. Det finns beskrivet på sidan 41 i boken. Det finns två sätt att göra det, 

Antingen med SET:

![](im1/image007.png)

eller utan SET:

![](im1/image008.png)

Prova någon av alternativen. Om det funkar kan du se att en rad lagts till i tabellen om du klickar på den:

![](im1/image009.png)

Nu är det klart att börja med den egentliga laborationen.


## Uppgift 2

Uppgiften går ut på att fortsätta med joke-tabellen som skapades i föra uppgiften men nu ska vi istället skriva egen PHP-kod för att kommunicera med tabellen. 

Vi kommer att göra ungefär det som beskrivs på s. 96 och framåt i boken, “Connecting to MySQL with PHP”.  

Vissa saker måste dock bytas ut:

- Username är ert användarnamn
- Databasens namn är inte *ijdb* utan ert *användarnamn*

PHP-filerna sparas på samma sätt som i kursen Programmering för webben. 

Skapa en mapp som heter *me105a*.  Skapa dessutom en mapp i me105a som heter *lab1*. Labbens filer lägger du sedan i *me105a/lab1*. 

Skapa en ny php-fil i mappen *me105/lab1* som döps till *index.php*. 

Testa sedan koden nedan. 

```php
<?php
/* 
steg 1: upprätta kontakt mellan php-sidan och databasen
i boken är dbname=ijdb, men på vår server måste vi
använda vårt användarnamn som databasnamn

ersätt k3bope på två ställen med ert userid och 
ersätt XXXXXXXXX med ert lösenord

OBS: om du var tvungen att logga in på MySQL Query Browser med stora bokstäver, måste du även använda stora bokstäver i användarnamnet på andra stället i raden $pdo=new...
*/

$pdo=new PDO('mysql:host=localhost;dbname=k3bope','k3bope','XXXXXXXXX'); 

/*steg 2: fråga efter alla rader i tabellen joke*/
$sql='SELECT * FROM joke';
$result=$pdo->query($sql);

/*steg 3: visa alla rader*/
foreach ($result as $row) {
	$joketext=$row['joketext'];
	echo $joketext;
	echo "<br>";
}
?>
```

Publicera den på servern och öppna med webbläsare. Om allt funkar ska det skämt som matades in i uppgift 1 visas. 

## Uppgift 3
Som ni ser i föregående uppgift så sparas ert lösenord i klartext i php-filen. Det gör till exempel att den som rättar er labb får tillgång till ert lösenord om ni skickar in filen som den är på it's learning. För att slippa undan är det bättre att lägga lösenordet i en separat fil som infogas med include. Denna fil kan sedan användas genom hela kursen för att ansluta till er databas. En annan brist i koden i föregående uppgift är att eventuella fel vid anslutning till databasen inte hanteras. Även felhanteringen kan läggas in den separata filen med lösenordet. 

Skapa en fil som ligger direkt i katalogen *me105a* (alltså inte i lab1) som heter *connect.php*. Den ska innehålla följande kod (men med *k3bope* ersatt med ert *användarnamn med små bokstäver* och *xxxxxxx* med ert *lösenord*). Filen ska bara innehålla php-kod, ingen html-kod. 

```ppp
<?php
try 
{
	$pdo=new PDO('mysql:host=localhost;dbname=k3bope','k3bope','xxxxxxxx');
	$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	$pdo->exec('SET NAMES "utf8"');
} 
catch (Exception $e)
{
	echo "Unable to connect to the database server.<br>";
	exit();
}
?>
```

Ersätt sedan raden 

```php
$pdo=new PDO(...
```

i index.php med

```php
include $_SERVER['DOCUMENT_ROOT'].'/username/me105a/connect.php';
```

där *username* är ditt användarnamn. 

Testa att öppna index.php med en webbläsare. Om allt funkar ska skämtet som matades in i första uppgiften visas. 

**OBS** Lämna endast in filen index.php på it's learning, behåll connect.php för er själva eftersom den innehåller ert lösenord. 

## Uppgift 4

Använd MySQL Query Browser för att skapa en ny tabell med SQL-kod 

```sql
CREATE TABLE...
```Tabellen ska heta *contacts* och ha följande kolumner:

- id (med auto increment)
- firstname
- lastname
- email

Lägg sedan till ett namn och epostadress till tabellen. 

