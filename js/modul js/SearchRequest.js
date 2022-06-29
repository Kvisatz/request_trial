//класс поиска продукта по базе данных 
// принимает параметры поиска от страницы в конструктор
// создает AJAX запрос и передает параметры поиска на бэк
export default class SearchRequest{
	params = '';
	constructor(params){
		if(params !== undefined){
			this.params = params;
			this.searchProductReqest();
		}
	}
	searchProductReqest(){
		let request = new XMLHttpRequest();
        request.open('POST', `http://localhost/request_trial/php/obr.php${this.params}`);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log(request);
         request.addEventListener('load', ()=>{
            if(request.status == 200 && request.response != 'error'){
                let obj = JSON.parse(request.response);
                console.log(obj);
                obj.forEach((el)=>{
                	// console.log(el);
                    document.querySelector("header").innerHTML += "<p>" + el.name + "<br>" + "</p>";
                });
            }
            else{
                console.log("error");
                document.querySelector("header").innerHTML += "<p>По вашему запросу товар не найден</p>";
            }
        });

        request.send(this.params);
	}
}