<?php 
include_once 'controller/CategoryController.php';
class Controller{
    function __construct(){
       //print_r($_GET);
        if(isset($_GET) && !empty($_GET)){
            //print_r($_GET);
          if(isset($_GET['all_category']) && isset($_GET['lang']) && $_GET['lang'] != null){
            //print_r($_GET);
            if(!file_exists('controller/CategoryController.php')){
                die();
            }
            include_once 'controller/CategoryController.php';
            $controller = new CategoryController();
            //print_r($controller);
            if($_GET['all_category'] == 0){
                // header("Content-type: application/json");
                $lang = $_GET['lang'];
                $controller->selectAllCategory($lang);
                die();
            }
          } 
        }
        // else{
        //     header("location: ../test.html");
        // }
    }


}