export default class Request{
	params = "";
	constructor(params){
		if(params == undefined || params == null){
			console.log("error");
		}
		this.params = params.slice(1);
		console.log(this.params);
		console.log(typeof(this.params));
		console.log(this.params.split("&"));
	}


}