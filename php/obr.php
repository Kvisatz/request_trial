<?php
    //print_r($_GET);
    include_once 'controller/Controller.php';
    //print_r(new Controller());
    // print_r($_GET);
    //header("Content-type: application/json");
    new Controller();
    // $category = $_GET['category'];
    // $search = $_GET['search'];
    // preg_replace('/./', ' ', $category);
    // $category = preg_replace('/[0-9]/', ' ', $category);
    // $connect = new mysqli('localhost', 'root', '', 'trial_web11_teamwork');
    // $sql = "SELECT name FROM `products` WHERE name LIKE '%$search%'";
    // $obj = $connect->query($sql);
    // $data = [];
    // while($row = $obj->fetch_assoc()){
    //     $data[] = $row;
    // }
    // if(is_array($data) && count($data) > 0){
    //     $jsonData = json_encode($data);
    //     header("Content-type: application/json");
    //     echo $jsonData;
    //     die();
    // }
    // else{
    //     echo "error";
    // }
    
?>