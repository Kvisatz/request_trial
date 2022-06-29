<?php
include_once 'model/DB.php';
class SearchController{
    public function search($categoryId, $search){
    	$db = new DB();
    	return $db->selectSearchProduct($categoryId, $search);
    }
}