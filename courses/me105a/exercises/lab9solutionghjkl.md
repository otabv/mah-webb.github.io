---
layout: instructions
code: me105a
title: Laboration 9 lösning
---

# Laboration 9 lösning

## Uppgift 1

### uppgift1.php

```php
<!doctype html>
<html>
<head>
<style>
.products {float:left}
.vendors {clear:both} 
</style>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>
<body>
<?php
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';
$sql='SELECT * FROM products INNER JOIN vendors ON vendors.vend_id=products.vend_id ORDER BY vendors.vend_id';
$result=$pdo->query($sql);
$last_vend_name='';
foreach ($result as $row) {
	$vend_name=$row['vend_name'];
	$prod_name=$row['prod_name'];
	$prod_price=$row['prod_price'];
	$prod_desc=$row['prod_desc'];
	$prod_id=$row['prod_id'];
    //if-sats för att visa vend_name för endast första produkten från en viss vendor
	if ($vend_name!=$last_vend_name) {
		echo "<div class='vendors'>";
		echo "<h2>$vend_name</h2>";
		echo "</div>";
		$last_vend_name=$vend_name;
	}
	
	echo "<div class='products'>";
	echo "<h3>$prod_name</h3>";
	echo "$prod_desc <br>";
	echo "$";
	echo "$prod_price<br>";
	echo "<img src='images/$prod_id.jpg'>";	
	echo "</div>";
}

?>
</body>
</html>
```



## Uppgift 2

### uppgift2.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>
<body>
<?php
include $_SERVER['DOCUMENT_ROOT'].'/k3bope/me105a/connect.php';
$sql='SELECT * FROM products INNER JOIN vendors ON vendors.vend_id=products.vend_id ORDER BY vendors.vend_id';
$result=$pdo->query($sql);
$export="";
foreach ($result as $row) {
	$vend_name=$row['vend_name'];
	$prod_name=$row['prod_name'];
	$prod_price=$row['prod_price'];
	$prod_desc=$row['prod_desc'];
	$prod_id=$row['prod_id'];
	$prod_picture="images/$prod_id.jpg";
	$export.="$vend_name\t$prod_id\t$prod_picture\t$prod_price\t$prod_name\t$prod_desc\n";
}
$filename="export.txt";
//vi kan istället använda fputcsv som i förra labben
file_put_contents($filename,$export);
echo "<a href='$filename'>Hämta filen $filename</a>";

?>
</body>
</html>
```

### export2.txt

```
Bears R Us	BR01	images/BR01.jpg	5.99	8 inch teddy bear	8 inch teddy bear, comes with cap and jacket
Bears R Us	BR02	images/BR02.jpg	8.99	12 inch teddy bear	12 inch teddy bear, comes with cap and jacket
Bears R Us	BR03	images/BR03.jpg	11.99	18 inch teddy bear	18 inch teddy bear, comes with cap and jacket
Doll House Inc.	BNBG01	images/BNBG01.jpg	3.49	Fish bean bag toy	Fish bean bag toy, complete with bean bag worms with which to feed it
Doll House Inc.	BNBG02	images/BNBG02.jpg	3.49	Bird bean bag toy	Bird bean bag toy, eggs are not included
Doll House Inc.	BNBG03	images/BNBG03.jpg	3.49	Rabbit bean bag toy	Rabbit bean bag toy, comes with bean bag carrots
Doll House Inc.	RGAN01	images/RGAN01.jpg	4.99	Raggedy Ann	18 inch Raggedy Ann doll
Fun and Games	RYL01	images/RYL01.jpg	9.49	King doll	12 inch king doll with royal garments and crown
Fun and Games	RYL02	images/RYL02.jpg	9.49	Queen doll	12 inch queen doll with royal garments and crown

```

### InDesign-mall

[Ladda ned mall](assetslab9solution/mall_uppg2.indd)

### Resulterande pdf

[Ladda ned pdf](assetslab9solution/result_uppg2.pdf)

## Uppgift 3

### InDesign-mall

[Ladda ned mall](assetslab9solution/mall_uppg3.indd)

### Resulterande pdf

[Ladda ned pdf](assetslab9solution/result_uppg3.pdf)

För att åäö ska fungera måste man välja `Encoding: Unicode` i InData-exporten

