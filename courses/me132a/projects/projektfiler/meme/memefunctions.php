<?php
function meme_text(&$im,$size,$x,$y,$font,$text) {
	$col=imagecolorallocate($im,255,255,255); //white text
	$outlinecol=imagecolorallocate($im,0,0,0); //black outline
	$width=2; //width of outline
    // For every X pixel to the left and the right
    $xd=0-abs($width);
    for ($xc=$x-abs($width);$xc<=$x+abs($width);$xc++) {
        // For every Y pixel to the top and the bottom
        $yd=0-abs($width);
        for ($yc=$y-abs($width);$yc<=$y+abs($width);$yc++) {
            $text1 = imagettftext($im,$size,0,$xc,$yc,$outlinecol,$font,$text);
            $yd++;
        }
        $xd++;
    }
    // Draw the main text
    $text2 = imagettftext($im,$size,0,$x,$y,$col,$font,$text);
}	

function adjust_fontsize($originalsize,$font,$text,$maxtextwidth) {	
	if (get_text_width($originalsize,$font,$text)>$maxtextwidth) {
		$newsize=fontsize_from_width($maxtextwidth,$font,$text);
	} else {
		$newsize=$originalsize;
	}
	return $newsize;
}

function get_text_width($size,$font,$text) {
	$bbox=imagettfbbox($size,0,$font,$text);
	$width=$bbox[2]-$bbox[0];
	return $width;
}

function get_text_height($size,$font,$text) {
	$bbox=imagettfbbox($size,0,$font,$text);
	$height=$bbox[1]-$bbox[7];
	return $height;
}

function fontsize_from_width($width,$font,$text) {
	//initial font size:
	$size=1000;
	$width10=get_text_width($size,$font,$text);
	$newsize=floor($size*$width/$width10);
	return $newsize;
}

?>