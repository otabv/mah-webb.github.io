---
layout: instructions
code: me105a
title: Laboration 7 lösning
---

# Laboration 7 lösning

## Uppgift 1

### index.php

```php
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Uppgift 1</title>
</head>
<body>
<h1>All products</h1>
<?php
//Anslut till databasen
include $_SERVER['DOCUMENT_ROOT']."/k3bope/me105a/connect.php";
//Sök alla produkkter
$sql="SELECT * FROM products";
$result=$pdo->query($sql);
foreach ($result as $row) {
    $prod_id=$row['prod_id'];
    $prod_name=$row['prod_name'];
    $prod_price=$row['prod_price'];
    $prod_desc=$row['prod_desc'];
    //Visa rubriken
    echo "<h2>$prod_name $$prod_price</h2>";
    //Här ska vi visa bilden.
    //Om bilderna ligger i samma katalog som index.php istället
    //för i underkatalogen images ska images/ i raden nedan tas bort. 
    echo "<img src='images/$prod_id.jpg' alt='prod_name'>";
    //Visa produktbeskrivning
    echo "<p>$prod_desc</p>";
}
?>
</body>
</html>
```

## Uppgift 2

### index.php

```php
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Uppgift 2</title>
</head>
<body>
<?php
//Anslut till databasen
include $_SERVER['DOCUMENT_ROOT']."/k3bope/me105a/connect.php";
//Sök alla produkter
$sql="SELECT * FROM products";
$result=$pdo->query($sql);
//öppna filen, gör det möjligt att skriva till filen
$filename="export.txt";
$output=fopen($filename,'w');

foreach ($result as $row) {
    $prod_id=$row['prod_id'];
    $prod_name=$row['prod_name'];
    $prod_price=$row['prod_price'];
    $prod_desc=$row['prod_desc'];
    //fputcsv behöver en array med de kolumner som ska exporteras
    //börja med att skapa en sådan array
    $newrow=array($prod_id,$prod_price,$prod_name,$prod_desc);
    //skriv till filen
    fputcsv($output,$newrow,"\t");
}
//stäng filen
fclose($output);
//visa en länk till filen
echo "Hämta filen <a href='$filename'>här</a>";
?>
</body>
</html>
```

## Uppgift 3

### index.php

```php
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Uppgift 3</title>
</head>
<body>
<?php
//Anslut till databasen
include $_SERVER['DOCUMENT_ROOT']."/k3bope/me105a/connect.php";
//Sök alla produkter
$sql="SELECT * FROM products";
$result=$pdo->query($sql);

//Vi vill ha en tvådimensionell array med innehållet från products.
//Sedan kan vi med json_encode omvandla den till json-format
//Börja med attskapa en tom array $products
$products=array();
foreach ($result as $row) {
    $prod_id=$row['prod_id'];
    $prod_name=$row['prod_name'];
    $prod_price=$row['prod_price'];
    $prod_desc=$row['prod_desc'];
    //skapa en array som innehåller en rad
    $newrow = array('prod_id'=>$prod_id,
                    'prod_name'=>$prod_name,
                    'prod_price'=>$prod_price,
                    'prod_desc'=>$prod_desc);
    //nu ska vi lägga till $newrow till $products som blir en array av arrayer
    //dvs en tvådimensionell array
    $products[]=$newrow;
}
$json = json_encode(array('products'=>$products),JSON_PRETTY_PRINT);
//nu ska vi spara $json i en fil. Normalt slutar json-filer på .json
//men ddwap-servern kan inte alltid visa .json-filer.
//Vi döper därför filen till export.json.txt
$filename="export.json.txt";
file_put_contents($filename,$json);
echo "Exporterad fil finns <a href='$filename'>här</a>";
?>
</body>
</html>
```

