'use strict'
let obj0 = {
    rus:{
        name: "Андрей",
        category: "Камеры и Фотоаппараты",
        supcategory: "Сумки"  
    },
    eng:{
        name: "Andre",
        category: "Cameras and Photography",
        supcategory: "Handbags" 
    }
    
}
let obj1 = {
    rus:{
        name: "Маша",
        category: "Компьютеры и Лэптопы",
        supcategory: "Apple" 
    },
    eng:{
        name: "Masha",
        category: "Laptop and Computer",
        supcategory: "Apple"
    }

}
let obj2 = {
    rus:{
        name: "Вася",
        category: "Компьютеры и Лэптопы",
        supcategory: "Dell" 
    },
    eng:{
        name: "Vasja",
        category: "Laptop and Computer",
        supcategory: "Dell"
    }
    
}
let obj3 = {
    rus:{
        name: "Коля",
        supcategory: "HP" 
    },
    eng:{
        name: "Kolja",
        supcategory: "HP"
    }    
}
let obj4 = {
    rus:{
        name: "Вита",
        category: "Компьютеры и Лэптопы",
        supcategory: "Sony" 
    },
    eng:{
        name: "Vita",
        category: "Laptop and Computer",
        supcategory: "Sony"
    }  
}
let obj5 = {
    rus:{
        name: "Галактион",
        category: "Электроника",
        supcategory: "Смартфоны" 
    },
    eng:{
        name: "Galaktion",
        category: "Electronic",
        supcategory: "Mobile"
    }   
}
let obj6 = {
    rus:{
        name: "Зефирка",
        category: "Электроника",
        supcategory: "Колонки" 
    },
    eng:{
        name: "Marshmellow",
        category: "Electronic",
        supcategory: "Speaker"
    }  
}
let obj7 = {
    rus:{
        name: "Бабун",
        supcategory: "HP" 
    },
    eng:{
        name: "Babun",
        supcategory: "HP"
    }      
}
// let mass = [obj0, obj1];
// let mass2 = [obj2, obj3];
// let mass3 = [obj4, obj5];
// let mass4 = [obj6];
let mass = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7];
//let mass = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7];
let mass5 = JSON.stringify(mass);
// console.log(mass5);
export default mass5;