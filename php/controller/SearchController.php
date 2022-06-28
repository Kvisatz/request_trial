<?php
include_once 'model/DB.php';
class SearchController{
    public function search($categoryId, $search){
    	$db = new DB();
    	$db->selectSearchProduct($categoryId, $search);
    }
}