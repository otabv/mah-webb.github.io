---
layout: instructions
code: me105a
title: Laboration 8 lösning
---

# Laboration 8 lösning

## Uppgift 1

### uppgift1.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Lab 8 uppgift 1</title>
</head>

<body>
<?php
// Anslut till databasen
include $_SERVER['DOCUMENT_ROOT'] . '/k3bope/me105a/connect.php';

// Hämta all produktinformation
$sql = 'SELECT prod_id, prod_name, prod_desc, prod_price FROM products';
$results = $pdo->query($sql);

$delimiter="\t";
$filename='export1.txt';
// Öppna filen för att kunna skriva till den
$output = fopen($filename, 'w');
//skapa en array med det som ska stå i textfilens rubrikrad
$header=array("prod_id","@prod_picture","prod_price","prod_name","prod_desc");
fputcsv($output, $header, $delimiter);

foreach ($results as $row) {
	// Bestäm vilka kolumner vi vill ska skrivas till filen och lägg i en array
	$image="/images/".$row['prod_id'].".jpg";
	$values = array(
		$row['prod_id'],
		$image,
		$row['prod_price'],
		$row['prod_name'],
		$row['prod_desc']
	);
	// Skriv alla värden ($values) till vår fil ($file)
	// Separera alla värden med en tab (\t)
	fputcsv($output, $values, $delimiter);
}

// Stäng filen
fclose($output);

echo "<h1>A file has been created</h1>";
echo "<a href='$filename'>$filename</a>";
?>

</body>
</html>
```

### export1.txt

```
prod_id	@prod_picture	prod_price	prod_name	prod_desc
BNBG01	/images/BNBG01.jpg	3.49	"Fish bean bag toy"	"Fish bean bag toy, complete with bean bag worms with which to feed it"
BNBG02	/images/BNBG02.jpg	3.49	"Bird bean bag toy"	"Bird bean bag toy, eggs are not included"
BNBG03	/images/BNBG03.jpg	3.49	"Rabbit bean bag toy"	"Rabbit bean bag toy, comes with bean bag carrots"
BR01	/images/BR01.jpg	5.99	"8 inch teddy bear"	"8 inch teddy bear, comes with cap and jacket"
BR02	/images/BR02.jpg	8.99	"12 inch teddy bear"	"12 inch teddy bear, comes with cap and jacket"
BR03	/images/BR03.jpg	11.99	"18 inch teddy bear"	"18 inch teddy bear, comes with cap and jacket"
RGAN01	/images/RGAN01.jpg	4.99	"Raggedy Ann"	"18 inch Raggedy Ann doll"
RYL01	/images/RYL01.jpg	9.49	"King doll"	"12 inch king doll with royal garments and crown"
RYL02	/images/RYL02.jpg	9.49	"Queen doll"	"12 inch queen doll with royal garments and crown"
```

### InDesign-mall

[Ladda ned mall](assetslab8solution/mall_uppg1.indd)

### Resulterande pdf

[Ladda ned pdf](assetslab8solution/result_uppg1.pdf)

## Uppgift 2

### uppgift2.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Lab 8 uppgift 2</title>
</head>

<body>
<?php
// Anslut till databasen
include $_SERVER['DOCUMENT_ROOT'] . '/k3bope/me105a/connect.php';

// Hämta all produktinformation
$sql = 'SELECT prod_id, prod_name, prod_desc, prod_price FROM products';
$results = $pdo->query($sql);

$delimiter="\t";
$filename='export2.txt';
// Öppna filen för att kunna skriva till den
$output = fopen($filename, 'w');
// I denna uppgiften behöver vi ingen rubrikrad
foreach ($results as $row) {
	// Bestäm vilka kolumner vi vill ska skrivas till filen
	$image="images/".$row['prod_id'].".jpg";
	$values = array(
		$row['prod_id'],
		$image,
		$row['prod_price'],
		$row['prod_name'],
		$row['prod_desc']
	);
	// Skriv alla värden ($values) till vår fil ($file)
	fputcsv($output, $values, $delimiter);
}

// Stäng filen
fclose($output);

echo '<h1>A file has been created</h1>';
echo "<a href='$filename'>$filename</a>";
?>

</body>
</html>
```



### export2.txt

```
BNBG01	images/BNBG01.jpg	3.49	"Fish bean bag toy"	"Fish bean bag toy, complete with bean bag worms with which to feed it"
BNBG02	images/BNBG02.jpg	3.49	"Bird bean bag toy"	"Bird bean bag toy, eggs are not included"
BNBG03	images/BNBG03.jpg	3.49	"Rabbit bean bag toy"	"Rabbit bean bag toy, comes with bean bag carrots"
BR01	images/BR01.jpg	5.99	"8 inch teddy bear"	"8 inch teddy bear, comes with cap and jacket"
BR02	images/BR02.jpg	8.99	"12 inch teddy bear"	"12 inch teddy bear, comes with cap and jacket"
BR03	images/BR03.jpg	11.99	"18 inch teddy bear"	"18 inch teddy bear, comes with cap and jacket"
RGAN01	images/RGAN01.jpg	4.99	"Raggedy Ann"	"18 inch Raggedy Ann doll"
RYL01	images/RYL01.jpg	9.49	"King doll"	"12 inch king doll with royal garments and crown"
RYL02	images/RYL02.jpg	9.49	"Queen doll"	"12 inch queen doll with royal garments and crown"
```

### InDesign-mall

[Ladda ned mall](assetslab8solution/mall_uppg2.indd)

### Resulterande pdf

[Ladda ned pdf](assetslab8solution/result_uppg2.pdf)


