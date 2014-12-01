---
layout: instructions
title: Föreläsning X
code: me134a
---

<script>
function displayDate()
{
document.getElementById("demo").innerHTML=Date();
}
</script>


#Scriptspråk

##Bortom HTML - Introduktion till scriptspråk

Bo Peterson bo.peterson@mah.se

Här finns <a href="http://ddwap.mah.se/k3bope/me119a/2012/scriptinhopp/allkod.zip">dagens kod</a>

Scriptspråk används till exempel för att lägga till *interaktivitet* och skapa *dynamik*

###Client side
    
- nästan bara JavaScript <a href="http://en.wikipedia.org/wiki/Client-side_scripting">http://en.wikipedia.org/wiki/Client-side_scripting</a>

###Server side
  
Flera alternativ:
  
- Perl
- Python
- PHP
- ASP
- Ruby
  
<a href="http://en.wikipedia.org/wiki/Server-side_scripting">http://en.wikipedia.org/wiki/Server-side_scripting</a>

###JavaScript
      
Enklaste exemplet:

{% highlight html %}
<a href="javascript:alert('Hello, world!')">Hello, world</a>
{% endhighlight %}

 <a href="javascript:alert('Hello, world!')">Hello, world</a><br />
 
       
        
Lite mer avancerat:

{% highlight html %}
<script>
function displayDate()
{
document.getElementById("demo").innerHTML=Date();
}
</script>
<div id="demo">Click button to show date here</div>
<button type="button" onclick="displayDate()">Display Date</button></div>
{% endhighlight %}
        
Fler exempel:

<a href="http://codepen.io/bopeterson/pen/ZYbppE/l">Räkna tecken</a>
        
<a href="http://codepen.io/bopeterson/pen/EaVgNy">Validering</a>

  
  
###jQuery

Ett stort JavaScript-bibliotek med färdiga funktioner
      
<a href="http://codepen.io/bopeterson/pen/azvmpm">Fade in, fade out</a>
  
###Canvas - möjlighet att rita med html5
      
<a href="http://codepen.io/bopeterson/pen/gbawgK">Enkelt statiskt exempel</a>
      
<a href="http://www.djallo.se/hunden/game4.html">Animering</a>
  
###PHP

<a href="http://ddwap.mah.se/k3bope/me119a/2012/scriptinhopp/hello.php">hello.php</a>

{% highlight php %}
<?php
echo "Hello world <br>";
echo date("G:i:s",time());
?>
{% endhighlight %}
      
      
      
<a href="http://ddwap.mah.se/k3bope/me119a/2012/scriptinhopp/form.html">Formulärexempel</a>
 
  
  
###Databaser

- MySQL
- SQLite
  

###Ajax

Asynchronous JavaScript and XML
     
<a href="http://ddwap.mah.se/k3bope/me119a/2012/scriptinhopp/namesuggestion.html">Namesuggestion</a>
  
  
##Serverside JavaScript
      
- Node.js
  

