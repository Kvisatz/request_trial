let arrayCategoriesLangs = [
    {
        data: "rus",
        allcategories: "Все категории",
        placeholder: "Поиск",
        other: "Другое"
    },
    {
        data: "eng",
        allcategories: "All categories",
        placeholder: "Search",
        other: "Other"
    }
];
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
    categoryLang = 'rus';
    arrayCategoriesLangs = arrayCategoriesLangs[0];

    bigCategories = [];
    //конструктор принимает массив обьектов с бэыка как параметр
    constructor(mass, selector, lang){  
        // console.log(this.arrayCategoriesLang);
        if(lang != undefined){
            // console.log(lang);
            this.categoryLang = lang;
            //this.languageArrayData(this.categoryLang);
            //console.log(this.arrayCategoriesLangs);
        }
        if(selector != null){
                this.selector = selector;
                
                this.categoryRequest();
                this.render();
                // console.log(this.selector);
                //вызов метода который создает из принятого с бэка массива обьектов экземпляры класса Product
                //this.productMassiveMaker(this.mass);
                //вызов метода который перебирает массив Product и по свойству каждого элемента массива создает массив неповторяющихся экземпляров класса Category 
                //this.categoryList(this.products, this.categories);
                // console.log(this.products);
                // console.log(this.categories);
                // this.render(this.selector, this.categories);
                // console.log(this.selector);
                //this.search(this.selector);
        }
        if(mass.length > 0){
            //console.log(JSON.parse(mass));
            //this.mass = JSON.parse(mass);
            // console.log(this.mass);
             
            
        }
        // if(selector != undefined && typeof(selector) == 'string'){
        //     if(document.querySelector(selector) != null){
        //         this.selector = document.querySelector(selector);
        //         console.log(this.categories);
        //         this.render(this.selector, this.categories);
        //     }   
        // }  
    }

    categoryRequest(){
        let request = new XMLHttpRequest();
        request.open('POST', `http://localhost/web11-teamwork-js/php/obr.php?all_category=0&lang=${this.categoryLang}`);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log(request);
        //request.responseType = 'json';
        request.addEventListener('load', ()=>{
            if(request.status == 200 && request.response != 'error'){
                console.log(typeof(request.response));
                let obj = JSON.parse(request.response);
                console.log(obj);
                
                obj.forEach((el)=>{
                    let name = 'name_'+this.categoryLang;
                    // let categSet = new Set();
                    // categSet.add(el[name]);
                    // console.log(categSet);
                    
                    document.querySelector("header").innerHTML += "<p>" + el.name_rus + "<br>" + "</p>";
                });
            }
            else{
                console.log("error");
                document.querySelector("header").innerHTML += "<p>По вашему запросу категории не найдены</p>";
            }
        });
       
        request.send();
    }
    // languageArrayData(lang){
    //     for(let arrayCategoriesLang of arrayCategoriesLangs){
    //         if(arrayCategoriesLang.data == this.categoryLang){
    //             this.arrayCategoriesLangs = arrayCategoriesLang;
    //         }
    //     }
    // }

    // //метод который создает из принятого с бэка массива обьектов экземпляры класса Product
    // productMassiveMaker(mass){
    //     for(let mas of mass){
    //         // console.log(this.categoryLang);
    //         //console.log(mas);
    //         for(let objectLang in mas){
    //         //    console.log(mas[objectLang]);
    //             if(objectLang == this.categoryLang){
    //                 // console.log(objectLang);
    //                 // console.log(this.categoryLang);
    //                 // console.log(objectLang.category);
    //                 let product = new Product(mas[objectLang].category, mas[objectLang].supcategory);
    //                 // console.log(product);
    //                 this.products.push(product);
    //             }
                
    //         }
    //         //console.log(mas.this.categoryLang);
    //         // if(mas != null){
    //         //     let product = new Product(mas.category, mas.supcategory);
    //         //     this.products.push(product);
    //         // }
    //     }
    //     return this.products;
    // }
    // //метод создания уникальных экземпляров класса Category принимает 
    // //на входе 2 массива: 1)массив продуктов
    // //2) массив категорий
    // //перебирает массив продуктов, проверяет на наличие свойства категории
    // //если свойство категории обьекта Product задано 
    // // то проверяет есть ли в массиве категорий соответствующая категория
    // // если в массиве категорий такой категории нет то она добавляется в массив Other
    // categoryList(massObj, categoryMass){
    //     for(let obj of massObj){ 
    //         if(obj.categoryProduct != undefined){
    //             // console.log(obj);
    //             if(categoryMass != undefined){
    //                 // console.log(obj.categoryProduct);
    //                 if(!categoryMass.includes(obj.categoryProduct)){
    //                     categoryMass.push(obj.categoryProduct);    
    //                 } 
    //             } 
    //         }
    //         else{
    //                 //console.log(this.categoryLang);
    //                 obj.categoryProduct = this.arrayCategoriesLangs.other;
    //                 if(!categoryMass.includes(this.arrayCategoriesLangs.other)){
    //                     categoryMass.push(this.arrayCategoriesLangs.other);
    //                 }  
    //         }   
    //     }
    //     // console.log(this.selector);
    //     this.categories = this.categoryMaker(categoryMass);
    //     // console.log(categoryMass);
    //     //return this.categories;
    // }

    // //метод принимает массив категорий в типе string
    // //создает экземпляры класса Category для каждого элемента массива
    // //возвращает массив экземпляров Category 
    // categoryMaker(categoriesMassStr){
    //     let massiveCategoryObj = [];
    //     // console.log(this.categories);
    //     // console.log(this.selector);
    //     // console.log(this.selector.children);
    //     this.render(this.selector, categoriesMassStr);

    //     for(let category of categoriesMassStr){
    //         category = new Category(category, this.categoryProductFilter(this.products, category), this.selector);
    //         massiveCategoryObj.push(category);
    //         // console.log(massiveCategoryObj);
    //     }
    // //    console.log(massiveCategoryObj);
    //     return massiveCategoryObj;
    // }
    // // метод принимает массив Products и категорию
    // //сравнивает свойство категории с переданной в метод категорией
    // //возвращает массив Products котрый относится к переданной категории
    // categoryProductFilter(productMass, category){
    //     // console.log(category);
    //     // console.log(categoryMass);
    //     let categoryMass = [];
    //     for(let product of productMass){
    //        if(product.categoryProduct == category){
    //             categoryMass.push(product);
    //             // console.log(categoryMass);
    //        }

    //     }
    //     return categoryMass;
    // }
    renderBigCategories(selector, categories){
        
    }
    render(selector, categories){
        // console.log(selector);
        if(selector != null){
            let str = `<div class="col-md-9 col-sm-12">
                            <div class="quick-access">
                                <div class="search-by-category">
                                    <div class="search-container">
                                        <select>
                                            <option class='all-cate' value = '0'>`;
                                                str+=this.arrayCategoriesLangs.allcategories;
                                            str += `</option>`;
                                for(let category of categories){
                                    // console.log(category);
                                    str += `<optgroup class='cate-item-head' label='${category}'></optgroup>`;
                                
                                }
                                str += `</select>
                                    </div>
                                    <div class="header-search">
                                        <form action="#">
                                            <input type="text" placeholder="`;
                                                str+=this.arrayCategoriesLangs.placeholder;
                                            str+=`">
                                            <button type="submit"><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div> 
                            </div>
                        </div>`;
                                // console.log(str);
                                return selector.innerHTML = str;
        }
        
    }
    categorySelect(){
        let selectEl = document.querySelector(".row .search-container select");
        let str = selectEl.value;
        str = str.replace(/\s/g, "1");
        return str;
    }

    search(selector){
        console.log(selector);
        if(selector != null){
            let formEl = selector.querySelector('.header-search form');
           
            formEl.addEventListener('submit', (evt)=>{
                evt.preventDefault();
                let inputEl = formEl.querySelector('input');
                console.log(inputEl.value);
                //this.categorySelect();
                location.href = `http://localhost/web11-teamwork-js/shop-list.html?category=${this.categorySelect()}&search=${inputEl.value}`;
                //location.href = `http://localhost/trial/shop-list.html?category=${this.categorySelect()}&search=${inputEl.value}`;
                //document.querySelector('#result').scrollIntoView({block: "center", behavior: "smooth"});
                inputEl.value = "";
                
                
            })
        }
    }
}


//`http://localhost/trial/shop-list.html?category=${this.categorySelect()}&search=${inputEl.value}`;