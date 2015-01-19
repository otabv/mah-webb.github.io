---
layout: instructions
code: me132a
title: Föreläsning 2
controls: false
date: 2015-02-19
---


#Programmering för webben 

##Föreläsning 2 

Dagens innehåll 

- Varför använda PHP? Var används PHP? Variabler - Tilldelning - Operatorer 
- Kommentarer 
- Arrayer 

Varför använda PHP? Var används PHP 
Där innehåll skräddarsys efter användaren, tex sociala medier som Facebook, http:// www.facebook.com/login.php 
Bloggar, tex bloggar gjorda med verktyget 
• Wordpress 
Webbplatser där information ständigt uppdateras Diskussionsforum 
• som nyheter och uppslagsverk, tex Wikipedia 
• 
• • • • • 
• 
Variabler 
Variabler används för att lagra data. 
Data kan till exempel vara text eller tal. 
Lagrade data kan ändras, dvs variablernas värde varierar. 
Variabler har namn. 
I PHP har man alltid ett dollartecken $ före variabelnamnet (alt-4 på mac- tangentbord). 
Exempel på variabler: $x, $y, $weight 
Till själva variabelnamnet (det som kommer efter dollartecknet) kan man 
• använda stora eller små bokstäver, siffror samt _ (underscore). 
Variabler (forts.) 
OBS 1: variabelnamn får inte inledas med en siffra. $4you är otillåtet men 
• $me2 är tillåtet. 
OBS 2: variabelnamn är skiftlägeskänsliga (case-sensitive) dvs $Weight, 
• $WEIGHT och $weight är olika variabler. 
• 
OBS 3: svenska tecken åäö får användas i variabelnamn, men kan leda till problem om filer flyttas mellan olika datorsystem. Använd a-z för att undvika problem. 
Tilldelning 
Variabler kan tilldelas (assign) numeriska värden. Tilldelning 
• sker med likhetstecknet = 
Exempel: variabeln weight tilldelas värdet 7 skrivs så här i PHP:  Variabler kan även tilldelas textvärden (strängar). Texter omsluts 
• $weight = 7; 
• av enkla eller dubbla citationstecken (' eller "). 
Exempel: variabeln month tilldelas värdet April skrivs så här:  
• $month = "April"; 
• 
Operatorer används för att utföra beräkningar för att manipulera tal såväl som text. Exempel på aritmetiska operatorer är +, -, *, / (plus, minus, gånger, dividerat med). 
Ett PHP-exempel som beräknar och skriver ut aktuell ålder:  $birthyear = 1965;  $year = 2012;  $age = $year - $birthyear;  
echo $age; 
• 
Operatorer 
Operatorer (forts.) 
Exempel på strängihopslagning:    
$firstname = "Sasha";  $lastname = "Fierce";  $fullname = $firstname . $lastname;  echo $fullname;    Resultat som skrivs ut: SashaFierce 
Med mellanslag mellan för- och efternamn:    
$fullname = $firstname . " " . $lastname;    
Resultat som skrivs ut: Sasha Fierce 
Det finns även strängoperatorer som hanterar text. Den vanligaste operatorn är 
• . (punkt) som slår ihop två texter. 
• 
• 
• flera rader. 
Kommentarer 
En viktig del av programmering är dokumentering och en viktig del av 
• dokumentationen är kommentarer i koden. 
Kommentarer kan skrivas på två sätt, beroende på en kommentar omfattar en eller 
En kommentar för en rad inleds med //    
$area = $height * $width; //area för rektangel beräknas 
• Exempel:  
En kommentar för flera rader inleds med /* och avslutas med */  
• Exempel:  
  /* Följande program beräknar arean av en rektangel.  Ingångsvärden: rektangelns höjd, $height och bredd, $width  Resultat: $area */  $area = $height * $width; 
Arrayer 
Arrayer (kallas ibland vektorer eller fält) är speciella variabler som kan innehålla flera 
• värden. Om en variabel kan liknas vid en låda, kan en array liknas vid en byrå med flera lådor. 
Själva arrayen ("byrån") har ett namn, och de olika elementen ("lådorna") är numrerade. 
• Numreringen börjar med 0. Numren kallas för index 
Varje "låda" kan innehålla ett värde som en vanlig variabel, till exempel ett tal eller en 
• sträng (dvs text). 
• 
En array kan innehålla allt från ett fåtal element till tusentals eller fler element. 
• 
Värden kan tilldelas på följande sätt:    
$drawer = array("nyckel","telefon","passagekort");    
ordet nyckel läggs i låda 0, telefon i låda 1, och passagekort i låda 2  
Arrayer (forts.) 
• 
Värden kan hämtas på följande sätt:    
echo $drawer[0]; //skriver ut nyckel  echo $drawer[1]; //skriver ut telefon  echo $drawer[2]; //skriver ut passagekort    
Arrayer (forts.) 
• 
Värden kan läggas till i en befintlig array:    
$drawer[3] = "plånbok";    
skapar ett fjärde element (med index = 3) med innehållet plånbok. 
Man kan även utelämna index för att lägga till ett element i slutet:    
$drawer[] = "klocka";    
skapar ett femte element (om det redan fanns fyra) med innehållet klocka.     
echo $drawer[3]; //skriver ut plånbok  echo $drawer[4]; //skriver ut klocka  
• 
Arrayer (forts.) 
• 
Variabler kan användas som index:    
$i = 4;  echo $drawer[$i]; //skriver ut klocka  
Arrayer (forts.) 
Associativa arrayer 
Istället för att numrera elementen i en array kan man ge dem namn. De kallas då associativa arrayer. De kan få värden så här:    $days['januari'] = 31;  
$days['februari'] = 28;  $days['mars'] = 31;    Eller så här:  
  $days = array('januari'=>31,'februari'=>28,'mars'=>31);  
• 
Associativa arrayer 
• 
Utskrift:    
echo $days['januari']; //31 skrivs ut  echo $days['februari']; //28 skrivs ut  echo $days['mars']; //31 skrivs ut    
Variabelvärden i strängar 
Värdet på en variabel kan skrivas ut tillsammans med en sträng enligt följande:    $fullname = "Sasha Fierce"; 
echo "I am... $fullname"; //I am... Sasha Fierce skrivs ut 
Men om man använder enkla istället för dubbla citationstecken:    
echo 'I am... $fullname'; //I am... $fullname skrivs ut 
Ofta spelar det ingen roll om man använder ' eller " men i exemplet ovan spelar det som sagt roll. Fler exempel där det spelar roll kommer längre fram i kursen. 
• 
• 
• 
