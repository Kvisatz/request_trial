import Supcategory from "./Supcategory.js"
export default class Category{
    name = "";
    products = [];
    supCategory = [];
    selector = "";
   //upCategory = "";
    constructor(name, products, selector){
        // console.log(products);
        if(name != undefined && typeof name == 'string'){
            this.name = name;
            // console.log(this.name);
        }
        if(products != undefined){
            this.products = products;
        }
        // console.log(selector);
        if(selector != null){
            
            selector = selector.querySelectorAll('.cate-item-head');
            // console.log(this.name);
            for(let select of selector){
                if(select.getAttribute('label') == this.name){
                    
                    this.selector = select;
                    console.log(this.selector);
                }
            }
            // console.log(this.selector);
        }
        this.supcategoryListMaker(this.products);
        this.render(this.supCategory, this.selector);
        // console.log(this.supCategory);
    }
    supcategoryListMaker(massProducts){
        for(let product of massProducts){
            
            if(product.supCategoryProduct != undefined){
                // console.log(product.supCategoryProduct);
                if(!this.supCategory.includes(product.supCategoryProduct)){
                    this.supCategory.push(product.supCategoryProduct);
                }
                
            }
            else{
                product.supCategoryProduct = 'Other';
                // console.log(obj);
                if(!this.supCategory.includes('Other')){
                    this.supCategory.push('Other');
                }
            }
        }
        this.supCategory = this.supCategoryMaker(this.supCategory);
        // console.log(this.supCategory);
    }

    supCategoryMaker(supCategoryMass){
        let supCategoryMassStr = [];
        for(let supCategory of supCategoryMass){
            supCategory = new Supcategory(supCategory, this.supCategoryProductFilter(this.products, supCategory));
            supCategoryMassStr.push(supCategory);
        }
        return supCategoryMassStr;
    }
    supCategoryProductFilter(productMass, supCategory){
        let supcategoryMass = [];
        for(let product of productMass){
           if(product.supCategoryProduct == supCategory){
                supcategoryMass.push(product);
                // console.log(categoryMass);
           }

        }
        return supcategoryMass;
    }

    render(supcategories, selector){
        
        console.log(selector);
        if(supcategories.length > 0){
            // console.log(supcategories[0].name);
            let str = `<option class='cate-item-title'>${supcategories[0].name}</option>`;
            
            for(let supcategory of supcategories){
                if(supcategory.name != supcategories[0].name){
                    str += `<option class='c-item'>${supcategory.name}</option>`;
                }
               
            }
            selector.innerHTML = str;
            // console.log(selector);
            // return  selector.innerHTML = str;
        }
        
    }

}

