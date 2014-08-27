---
layout: instructions
code: me105a
title: Test
controls: false
theme: bopeterson/cleaver-lecture
---

# Sida för att testa layout mm

## En rubrik

{% highlight php %}
<?php
//kod som innehåller php-start-tagg
$list=array('januari','februari','mars');
//standard for-loop för att loopa igenom array
for ($i=0;$i<count($list);$i++) {
    echo $list[$i];
    echo "<br>";
}
?>
{% endhighlight %}

##En tabell med eget style-sheet

<style>
table {border-collapse: collapse;font-size:smaller}
th, td {border: 1px solid #BBBBBB}
th, td {text-align:left}
th, td {padding: 6px;}
</style>

| id  | animal  | color  |
|---|---|---|
| 1 | cat | black |
| 2 | dog | white |
| 3 | elephant | pink |


## PHP-kod utan start-tag

{% highlight php startinline=True %}
$cat=array('id'=>1,'animal'=>'cat','color'=>'black');
$dog=array('id'=>2,'animal'=>'dog','color'=>'white');
$elephant=array('id'=>3,'animal'=>'elephant','color'=>'pink');

$table=array($cat,$dog,$elephant);
//eftersom $cat, $dog och $elephant är arrayer, som i sin tur
//sparas i en array, blir $table en array av arrayer eller en 
//tvådimensionell array

//vi kan skriva ut färgen på andra djuret på följande vis:
echo "The color is " . $table[1]['color'];

//$table[1] motsvarar hela andra raden i tabellen ($dog)
//eftersom numrering börjar från ett.
//$table[1]['color'] motsvarar i sin tur innehållet 
//i kolumnen 'color' i andra raden
{% endhighlight %}

##En bild utan bildtext

![](im2/mysqlquery_myadmin.png)

##Samma bild med bildtext

![Bildtext](im2/mysqlquery_myadmin.png)

### När är det...
...slut

---

