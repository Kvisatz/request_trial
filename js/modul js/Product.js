export default class Product{
    name = "";
    price = 0;
    discount = 0;
    prodImage = "";
    prodRating = 0;
    amountOfProduct = 0;
    categoryProduct = "";
    supCategoryProduct = "";
    constructor(category, supcategory){
        //console.log(category, supcategory);
        this.categoryProduct = category;
        this.supCategoryProduct = supcategory;
    }
    init(obj){
        if(obj != null){
            console.log(1);
        }
    }
    
}