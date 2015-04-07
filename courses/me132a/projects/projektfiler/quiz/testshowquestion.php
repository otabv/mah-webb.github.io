<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="project.css">
<title>Test show_question</title>
</head>
<body>
<?php
echo "<h1>Test show_question</h1>";
include "functions.php";
$question="Vilken blomma föredrar du?";
$image="flower.jpg";
$alternative=array("ros","maskros","fyrklöver");
show_question($question,$alternative,$image);
?>
</body>
</html>