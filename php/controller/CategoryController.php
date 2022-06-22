<?php
include_once 'model/DB.php';
class CategoryController{
    
    public function selectAllCategory(){
        // echo 1;
        $db = new DB();
        return $db->selectAllBigCategory();
    }
}