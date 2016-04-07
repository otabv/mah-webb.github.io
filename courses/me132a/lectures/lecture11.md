---
layout: instructions
code: me132a
title: Föreläsning 11
controls: false
date: 2015-06-07
---

# Programmering för webben

## Föreläsning 11

### Dagens innehåll

Introduktion till databaser

### Vad är en databas?

- Databaser lagrar information på ett strukturerat sätt.
- Databaser gör det möjligt att komma åt informationen på flera sätt
- Innehåll i databaser kan sökas, sorteras mm

Det finns olika typer av databaser, bland annat relationsdatabaser, objektdatabaser  och grafdatabaser. Vi kommer endast att titta översiktligt på relationsdatabaser.

### Relationsdatabaser

En relationsdatabas är en **samling tabeller**

Exempel på tabell:

id | namn | epost
--- |--- | ---
1 | Bo Peterson | bo.peterson@mah.se
2 | Johannes Karlsson | johannes.karlsson@mah.se
3 | Sebastian Bengtegård | sebastian.bengtegard@mah.se

Ordningen (både rader och kolumner) i en tabell spelar ingen roll. Tabellen nedan är identisk med den ovan.

id | epost | namn
--- |--- | ---
3 | sebastian.bengtegard@mah.se | Sebastian Bengtegård
1 | bo.peterson@mah.se | Bo Peterson
2 | johannes.karlsson@mah.se | Johannes Karlsson

### Relaterade tabeller

En viktig egenskap hos en tabell är att en kolumn (ibland flera kolumner) måste innehålla unika värden. Denna kolumn kallas
*primärnyckel* eller *primary key*. Den kolumnen får aldrig vara tom.

I kommande kurser kommer vi att titta på hur flera tabeller kan vara kopplade till varandra eller *relaterade* till varandra. Detta är en mycket viktig egenskap hos relationsdatabaser. I denna kurs nöjer vi oss att titta på ensamma tabeller.

### Saker man kan göra med en tabell

- Skapa tabell

- Lägga till rader

- Söka och sortera i tabell

- Uppdatera rader

- Ta bort rader

- Allt detta kan göras med ett speciellt språk, Structured Query Language (SQL)

### Skapa tabell

```mysql
CREATE TABLE
tabellnamn
(kolumnnamn1 KOLUMNTYP, kolomnnamn2 KOLUMNTYP, kolumnnamn3 KOLUMNTYP)
```

### Lägga till data i tabell

```mysql
INSERT INTO tabellnamn
(kolumnnamn1, kolumnnamn2, kolumnnamn3) VALUES (värde1, värde2, värde3)
```

### Söka i en tabell

Alla rader och alla kolumner:

```mysql
SELECT * FROM tabellnamn
```

Alla rader men endast kolumn 1 och 3:

```mysql
SELECT kolumnnamn1,kolumnnamn3 FROM tabellnamn
```

Endast rader där en kolumnnamn1 har ett visst värde:

```mysql
SELECT * FROM tabellnamn WHERE
kolumnnamn3='Columbia'
```

**Exempel: Skapa tabellen friends**

```mysql
CREATE TABLE friends
(id INTEGER PRIMARY KEY NOT NULL, name TEXT, email TEXT)
```


`INTEGER` betyder att kolumnen innhåller heltal

`PRIMARY KEY` att kolumnen är primärnyckel

`NOT NULL` att kolumnen inte får vara tom

`TEXT` att kolumnen innehåller text

**Exempel : Lägga till rader**

```mysql
INSERT INTO friends (id,name,email) VALUES
(1,'Beyonce','beyonce@knowles.com')
INSERT INTO friends (id,name,email) VALUES 
(2,'Wyclef Jean','wyclef@yele.org')
INSERT INTO friends (id,name,email) VALUES
(3,'KRS-1','krs@one.com')
```

**Exempel: Söka rader**

```mysql
SELECT email FROM friends WHERE name='Wyclef Jean'
```
 
### DBMS Databese management systems

Det finns många olika så kallade Database Management Systems, DBMS, till exempel:

- SQLite - väldigt enkel men begränsad, gratis. Används av ofta av mobilappar
- MySQL - mycket vanlig, kraftfull, gratis. Används bland annat av WordPress.
- PostgreSQL - också vanlig, kraftfull, gratis
- Oracle - mycket kraftfull, dyr, stora kommersiella system

### PHP och databaser

I denna kursen kommer vi att använda en av de allra enklaste, databashanterarna, SQLite. I fortsättningskurs kommer vi att använda den mer kraftfulla MySQL. SQL-kommandon för båda är i stort sett desamma.

**Exempel: skapa databas med PHP**

```php
<?php
//create a new database or open it if it already exists
$dbname="friendbase.sqlite3";
$base= new PDO("sqlite:$dbname");

//define error reporting mode
$base->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

//define sql-statement for creating a table with three columns
$sql = "CREATE TABLE friends (
          id INTEGER PRIMARY KEY NOT NULL,
          name text,            
          email text)";

//execute the sql-statement
try {
    $base->exec($sql);
    echo "table created";
}
catch (PDOException $e) {
    echo "table could not be created ($e)";
}
?>
```


**Exempel: lägga in rader i tabell med PHP**

```php
<?php
//open database
$dbname='friendbase.sqlite3';
$base= new PDO("sqlite:$dbname");
$base->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

//construct query strings
$sql="INSERT INTO friends (id,name,email) VALUES (1,'Beyonce','beyonce@knowles.com')";

//execute sql statement
try {
    $base->exec($sql);
    echo "row has been added";
} 
catch (PDOException $e) {
    echo "row could not be added ($e)";
}

?>
```

**Exemepel: söka i tabell med PHP**

```php
<?php
//create a new database or open it if it already exists
$dbname="friendbase.sqlite3";
$base= new PDO("sqlite:$dbname");

//define error reporting mode
$base->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

//sql for selecting all rows from database
$sql = "SELECT name,email FROM friends";

//execute query
//note use of "query" instead of "exec"
$results = $base->query($sql);
//loop through the results
//with foreach (recommended)
echo "<h3>foreach</h3>";
foreach ($results as $row) {
    $name = $row["name"];
    $email = $row["email"]; 
    echo "$name $email";
    echo "<br>";
}

//loop through the results
//with while (also possible)
echo "<h3>while</h3>";
$results = $base->query($sql);
while ($row = $results->fetch()) {
    $name = $row["name"];
    $email = $row["email"]; 
    echo "$name $email";
    echo "<br>";
}
?>
```

### Autoincrement och primärnyckel

```mysql
CREATE TABLE friends
(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
name TEXT,
email TEXT)
```

Primärnyckeln får automatiskt ett unikt värde. Vanligtvis startar det på 1, och blir sedan 2, 3 osv. 

