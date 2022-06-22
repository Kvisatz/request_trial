export default class Supcategory{
    name = "";
    products = [];
    constructor(name, products){
        if(name != undefined && typeof name == 'string'){
            this.name = name;
            // console.log(this.name);
        }
        else{
            console.log('Empty category Name or wrong type');
        }
        if(products != undefined){
            this.products = products;
            // console.log(this.products);
        }
    }
    search(){
        
    }
}