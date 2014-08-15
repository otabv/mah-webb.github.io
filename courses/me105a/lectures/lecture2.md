---
layout: instructions
code: me105a
title: Föreläsning 2
controls: False
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

{% highlight php %}
januari
februari
mars
{% endhighlight %}

