---
layout: instructions
code: me105a
title: projekt
---

#Projekttips

##Lägga till data i flera tabeller

Om man har två tabeller som är kopplade till varandra genom många-till-många förhållande eller ett-till-många-förhållande måste man ibland lägga till data i flera tabeller samtidigt. 

Antag till exempel att vi vill lägga till ett nytt släkte och en ny art i djuripedia från [miniprojektet](miniproject.html). Då ska vi först lägga till en post i tabellen *genus* (släkte). Denna post kommer att få ett nytt id. Sedan ska vi lägga till en post i tabellen *species* (art). Denna art måste kopplas till släktet vi nyss lagt till, dvs kolumnen *genus_id* i *species* måste få det id-värde som det nya släktet fick i tabellen *genus*. Funktionen lastInsertId() kan användas för detta. Antag att vi ska lägga till arten Bäver av släktet Castor. Börja med att lägga till Castor i tabellen *genus*:

{% highlight php  startinline=True %}
//sql kod för att lägga till Castor i tabellen genus
$sql="INSERT INTO genus (sci_name) VALUES ('Castor')";
//utför inläggning i databas
$result=$pdo->query($sql);
//eftersom id i genus är auto_increment kommer id att automatiskt få ett nytt unikt id
//detta id kan vi hämta med funktionen lastInsertId:
$new_genus_id=$pdo->lastInsertId();
{% endhighlight %}


När detta är gjort ska vi lägga till Bäver i tabellen *species* och koppla denna till *genus*. Det nya genus-id som vi har i variabeln $new_genus_id ska in i kolumnen *genus_id* i tabellen *species*:

{% highlight php  startinline=True %}
//sql kod för att lägga till Bäver i tabellen species
$sql="INSERT INTO species (name,genus_id) VALUES ('Bäver',$new_genus_id)";
//utför inläggning i databas
$result=$pdo->query($sql);
{% endhighlight %}

Nu är Bäver inlagd i species och korrekt kopplad till Castor i genus.

##Hämta resultat från sökning utan loop

När vi söker i en tabell med SELECT får vi ofta ett resultat med flera rader och brukar använda en loop för att visa resultat:

{% highlight php  startinline=True %}
$result=$pdo->query($sql);
for ($result as $row) {
    //gör något med varje rad}
{% endhighlight %}

Ibland vet man att resultatet bara innehåller en rad, tex om man söker efter en rad med ett specifikt id. Man kan då använda följande konstruktion för att få en rad utan loop: 

{% highlight php  startinline=True %}
$sql="SELECT * FROM species WHERE id=1";
$result=$pdo->query($sql);
$row=$result->fetch(PDO::FETCH_ASSOC);
//$row innehåller nu alla kolumner från raden med id=1
{% endhighlight %}

