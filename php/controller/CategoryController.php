<?php
include_once 'model/DB.php';
class CategoryController{
    
    public function selectAllCategory($lang){
        // echo 1;
        $data = [];
        $db = new DB();
        $data['sup_category'] = $db->selectAllSupCategory($lang);
        $data['big_category'] = $db->selectAllBigCategory($lang);
        return $data; 
    }
}