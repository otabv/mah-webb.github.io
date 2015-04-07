<?php
function find_most($array) {
	//DON'T CHANGE THIS FUNCTION
	//returns the value with most occurancies
	$c = array_count_values($array); 
	$val = array_search(max($c), $c);
	return $val;
}

function shuffle_assoc(&$array) {
	//DON'T CHANGE THIS FUNCTION
	//shuffles both index and value of array
	$keys = array_keys($array);
	shuffle($keys);
	foreach($keys as $key) {
		$new[$key] = $array[$key];
	}
	$array = $new;
	return true;
}
	
function show_question($question,$alternative,$image) {
	//steg 1: komplettera denna funktion så att den visar ett formulär med en fråga
	shuffle_assoc($alternative);
	foreach ($alternative as $onevalue=>$onealternative) {
		//lägg till kod för radiobuttons här
	}
}
?>