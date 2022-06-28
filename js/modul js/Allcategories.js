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
// import Category from "./Category.js";
// import Product from "./Product.js";
export default class Allcategories{
    selector = '';
    //поле класса принимающее входящий массив обьектов с бэка
    mass = [];
    //поле класса используется для создания массива экземпляров класса Category
    categories = [];
    //поле класса используется для создания массива экземпляров класса Product
    products = [];
    categoryLang = 'rus';
    categoryName = '';
    arrayCategoriesLangs = arrayCategoriesLangs[0];

    supCategories = [];
    //конструктор принимает массив обьектов с бэыка как параметр
    constructor(selector, lang){  
        // console.log(this.arrayCategoriesLang);
        if(lang != undefined){
            //console.log(lang);
            this.categoryLang = lang;
            console.log(this.categoryLang);
            this.categoryName = 'name_'+lang;
            console.log(this.categoryName);
            this.languageArrayData(this.categoryLang);
            //console.log(this.arrayCategoriesLangs);
        }
        if(selector != null){
                this.selector = selector;
                this.categoryRequest(this.categoryLang, this.selector);
                //this.search(this.selector);
        }
    }

    categoryRequest(lang, selector){
        let backObjMass = [];
        let request = new XMLHttpRequest();
        request.open('POST', `http://localhost/request_trial/php/obr.php?all_category=0&lang=${this.categoryLang}`);
        //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log(request);
        console.log(lang);
        request.responseType = 'json';
        request.addEventListener('load', ()=>{
            if(request.status == 200 && request.response != 'error'){
                if(request.response != null){
                    this.categories = request.response;
                    this.render(this.selector, this.categories);
                    this.search(this.selector);
                }
            }
            else{
                console.log("error");
                selector.innerHTML += "<p>Категории не найдены</p>";
            }
        });
        request.send();
        // this.categories = backObj;
    }
    languageArrayData(lang){
        for(let arrayCategoriesLang of arrayCategoriesLangs){
            if(arrayCategoriesLang.data == this.categoryLang){
                this.arrayCategoriesLangs = arrayCategoriesLang;
            }
        }
    }


    renderBigCategory(categories){
        let str = '';
         for(let category of categories.big_category){
            //console.log(category);
            str += `<optgroup class='cate-item-head' label='${category[this.categoryName]}' id='${category.id}'></optgroup>`;
            str += this.renderSupCategory(this.categories, category.id);
        }
        return str;
    }

    renderSupCategory(categories, id){

        let str = '';
         for(let supcategory of categories.sup_category){
            if(supcategory.big_categ_id == id){
                //console.log(supcategory);
                str += `<option class='c-item' value='${supcategory.id}'>${supcategory[this.categoryName]}</option>`;
            }
        }
        return str;
    }

    render(selector, categories){
        console.log(selector);
        console.log(categories);
        console.log(this.arrayCategoriesLangs);
        if(selector != null){
            let str = `<div class="col-md-9 col-sm-12">
                            <div class="quick-access">
                                <div class="search-by-category">
                                    <div class="search-container">
                                        <select>
                                            <option class='all-cate' value = '0'>`;
                                                str+=this.arrayCategoriesLangs.allcategories;
                                            str += `</option>`;
                                            str += this.renderBigCategory(this.categories);
                                // for(let category of categories){
                                //     console.log(category);
                                //     str += `<optgroup class='cate-item-head' label='${category[this.categoryName]}' id='${category.id}'></optgroup>`;
                                
                                // }
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
            console.log(formEl);
            formEl.addEventListener('submit', (evt)=>{
                evt.preventDefault();
                let inputEl = formEl.querySelector('input');
                console.log(inputEl.value);
                //this.categorySelect();
                location.href = `http://localhost/request_trial/shop-list.html?category_id=${this.categorySelect()}&search=${inputEl.value}`;
                //location.href = `http://localhost/trial/shop-list.html?category=${this.categorySelect()}&search=${inputEl.value}`;
                //document.querySelector('#result').scrollIntoView({block: "center", behavior: "smooth"});
                inputEl.value = "";
                
                
            })
        }
    }
}


//`http://localhost/trial/shop-list.html?category=${this.categorySelect()}&search=${inputEl.value}`;