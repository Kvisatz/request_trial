//импорт классов категория, продукт
import Category from "./Category.js";
import Product from "./Product.js";
export default class Allcategories{
    selector = '';
    //поле класса принимающее входящий массив обьектов с бэка
    mass = [];
    //поле класса используется для создания массива экземпляров класса Category
    categories = [];
    //поле класса используется для создания массива экземпляров класса Product
    products = [];
    //конструктор принимает массив обьектов с бэыка как параметр
    constructor(mass, selector){  
           
        if(mass.length > 0){
            //console.log(JSON.parse(mass));
            this.mass = JSON.parse(mass);
            // console.log(this.mass);
            if(selector != undefined && typeof(selector) == 'string'){
                if(document.querySelector(selector) != null){
                    this.selector = document.querySelector(selector);
                    // console.log(this.categories);
                    //вызов метода который создает из принятого с бэка массива обьектов экземпляры класса Product
                    this.productMassiveMaker(this.mass);
                    //вызов метода который перебирает массив Product и по свойству каждого элемента массива создает массив неповторяющихся экземпляров класса Category 
                    this.categoryList(this.products, this.categories);
                    // console.log(this.products);
                    // console.log(this.categories);
                    // this.render(this.selector, this.categories);
                    // console.log(this.selector);
                }   
            } 
            
        }
        // if(selector != undefined && typeof(selector) == 'string'){
        //     if(document.querySelector(selector) != null){
        //         this.selector = document.querySelector(selector);
        //         console.log(this.categories);
        //         this.render(this.selector, this.categories);
        //     }   
        // }  
    }

    //метод который создает из принятого с бэка массива обьектов экземпляры класса Product
    productMassiveMaker(mass){
        for(let mas of mass){
            if(mas != null){
                let product = new Product(mas.category, mas.supcategory);
                this.products.push(product);
            }
        }
        return this.products;
    }
    //метод создания уникальных экземпляров класса Category принимает 
    //на входе 2 массива: 1)массив продуктов
    //2) массив категорий
    //перебирает массив продуктов, проверяет на наличие свойства категории
    //если свойство категории обьекта Product задано 
    // то проверяет есть ли в массиве категорий соответствующая категория
    // если в массиве категорий такой категории нет то она добавляется в массив Other
    categoryList(massObj, categoryMass){
       
        for(let obj of massObj){ 
            if(obj.categoryProduct != undefined){
                // console.log(obj);
                if(categoryMass != undefined){
                    // console.log(obj.categoryProduct);
                    if(!categoryMass.includes(obj.categoryProduct)){
                        categoryMass.push(obj.categoryProduct);    
                    } 
                } 
            }
            else{
                obj.categoryProduct = 'Other';
                // console.log(obj);
                if(!categoryMass.includes('Other')){
                    categoryMass.push('Other');
                }
            }
            
            
        }
        
        // console.log(this.selector);
        this.categories = this.categoryMaker(categoryMass);
        // console.log(categoryMass);
        return this.categories;
    }

    //метод принимает массив категорий в типе string
    //создает экземпляры класса Category для каждого элемента массива
    //возвращает массив экземпляров Category 
    categoryMaker(categoriesMassStr){
        let massiveCategoryObj = [];
        // console.log(this.categories);
        // console.log(this.selector);
        // console.log(this.selector.children);
        this.render(this.selector, categoriesMassStr);
        for(let category of categoriesMassStr){
            category = new Category(category, this.categoryProductFilter(this.products, category), this.selector);
            massiveCategoryObj.push(category);
            // console.log(massiveCategoryObj);
        }
    //    console.log(massiveCategoryObj);
        return massiveCategoryObj;
    }
    // метод принимает массив Products и категорию
    //сравнивает свойство категории с переданной в метод категорией
    //возвращает массив Products котрый относится к переданной категории
    categoryProductFilter(productMass, category){
        // console.log(category);
        // console.log(categoryMass);
        let categoryMass = [];
        for(let product of productMass){
           if(product.categoryProduct == category){
                categoryMass.push(product);
                // console.log(categoryMass);
           }

        }
        return categoryMass;
    }
    render(selector, categories){
        if(selector != null){
            let str = "<select><option class='all-cate'>All Categories</option>";
            for(let category of categories){
                // console.log(category);
               str += `<optgroup class='cate-item-head' label='${category}'></optgroup>`;
               
            }
            str += "</select>";
            // console.log(str);
            return selector.innerHTML = str;
        }
        
    }
}