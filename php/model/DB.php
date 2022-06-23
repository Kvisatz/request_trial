<?php 
	include_once 'config.php';

	class DB{
		private $connect = null;
		public $users = [];
		public $orders = [];

		public function __construct(){
			$this->connect();			
		}

		private function connect(){
			$connect = new mysqli(HOST, USER, PASS, DATABASE);
			if($mysqli->connect_errno){
				die("ошибка подключения");
			}
			$this->connect = $connect;
		}

		public function select($tableName){
			$sql = 'SELECT * FROM `'.$tableName.'`';
			$objQuery = $this->connect->query($sql);
			return $this->convertData($objQuery);
		}

		public function selectAllBigCategory($lang){
			$sql = 'SELECT id, name_'.$lang.' FROM `big_categories`';
			$objQuery = $this->connect->query($sql);
			//print_r($objQuery);
			echo json_encode($this->convertData($objQuery));
		}

		private function convertData($objQuery){
			$data = [];
			if($objQuery != null){
				
				while ($row = $objQuery->fetch_array(MYSQLI_ASSOC)) {
					//print_r($row);
					$data[] = $row;
				}
			}
			// $data = json_encode($data);
			//print_r($data);
			return $data;
		}
		
	}
?>