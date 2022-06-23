<?php
include_once 'model/DB.php';
class CategoryController{
    
    public function selectAllCategory($lang){
        // echo 1;
        $db = new DB();
        return $db->selectAllBigCategory($lang);
    }
}