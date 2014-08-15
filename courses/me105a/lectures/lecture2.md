---
layout: instructions
code: me105a
title: Föreläsning 2
controls: false
theme: bopeterson/cleaver-lecture
---

# Databasbaserad publicering

## Föreläsning 2
	

---

### Idag

- PHP-repetition
- Kommunicera med databas

---

### Arrayer och loopar

{% highlight php %}
<?php
$list=array('januari','februari','mars');
//standard for-loop för att loopa igenom array
for ($i=0;$i<count($list);$i++) {
    echo $list[$i];
    echo "<br>";
}

//specialvariant av loop som passar bra för att gå igenom array
foreach ($list as $month) {
    echo $month;
    echo "<br>";
}
?>
{% endhighlight %}

Båda alternativen skriver ut

    januari
    februari
    mars
    

---

### Associativ array

{% highlight php %}
<?php
//associativ array (varje element får ett namn)
$row=array('id'=>'0','animaltype'=>'cat','color'=>'black');
echo $row['color'];
?>
{% endhighlight %}

Följande skrivs ut:

    black

Vi kan se detta som en rad i en tabell, med rubrik och värde:

| id  | animaltype  | color  |
|---|---|---|
| 0 | cat | black |



---


### xxx


