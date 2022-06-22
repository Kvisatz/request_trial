<?php
	include_once 'DB.php';
	$category_request = new DB();
	$category_request->select('sup_categories');
	 print_r($category_request->select('sup_categories'));
?>