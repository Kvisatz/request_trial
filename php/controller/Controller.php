<?php 
// include_once 'controller/CategoryController.php';
// include_once 'controller/SearchController.php';
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
                echo json_encode($controller->selectAllCategory($lang));
                die();
            }
          } 
          if(isset($_GET['category_id']) && isset($_GET['search']) && $_GET['search'] != null){
            //print_r($_GET);
            $categoryId = (int)$_GET['category_id'];
            //print_r($categoryId);
            $search = $_GET['search'];
            //print_r($search);
            include_once 'controller/SearchController.php';
            $searchController = new SearchController();
            echo json_encode($searchController->search($categoryId, $search));
            
          }
        }
        // else{
        //     header("location: ../test.html");
        // }
    }


}