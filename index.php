<?php
header('Access-Control-Allow-Origin: *');
if(!empty($_GET['ly_name']) && !empty($_GET['ly_text'])){
	$ly_name = $_GET['ly_name'];
	$ly_text = $_GET['ly_text'];
	$array = array("ly_name"=>$ly_name,"ly_text"=>$ly_text);
	$str = json_encode($array);
	echo $str;
}
?>