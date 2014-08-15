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

{% highlight %}
januari
februari
mars
{% endhighlight %}

---

### Associativ array

{% highlight php %}
<?php
//associativ array (varje element får ett namn)
$row=array('id'=>1,'animal'=>'cat','color'=>'black');
echo $row['color'];
?>
{% endhighlight %}

Följande skrivs ut:

{% highlight %}
black
{% endhighlight %}

Vi kan se detta som en rad i en tabell, med rubrik och värde:

<style>
table {border-collapse: collapse;font-size:smaller}
th, td {border: 1px solid #BBBBBB}
th, td {text-align:left}
th, td {padding: 6px;}
</style>

| id  | animal  | color  |
|---|---|---|
| 1 | cat | black |

---

