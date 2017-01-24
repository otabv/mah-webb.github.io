---
layout: instructions
code: me132a
title: Laboration 1 lösning
---

# Laboration 1 lösning

## Uppgift 2

### hello.html

```html
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Hello world med ren html</title>
</head>
<body>
Hello world!
</body>
</html>
```

### hello.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Hello world med PHP</title>
</head>
<body>
<?php
echo "Hello world!";
?>
</body>
</html>
```

**Fråga:** Är det någon skillnad (förutom HTML respektive PHP i respektive titel)?  
**Svar:** Nej, resulterande html-kod blir densamma för html och php

## Uppgift 3

### hello2.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Hello world med PHP</title>
</head>
<body>
<?php
echo "Hello world! "; //notera mellanslag på slutet
echo date('l, F dS Y.');
?>
</body>
</html>
```

## Uppgift 4

### hello3.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Hello world med PHP</title>
</head>
<body>
<?php
echo "Hello world! "; //notera mellanslag på slutet
echo date('Y-m-d');
?>
</body>
</html>
```

**Fråga:** Hur ser texten innanför parentesterna till funktionen date( ) ut för att detta resultat ska erhållas?  
**Svar:** 'Y-m-d'


