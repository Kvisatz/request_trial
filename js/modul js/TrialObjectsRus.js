'use strict'
let obj0 = {
    nameRus: "Андрей",
    categoryRus: "Камеры и Фотоаппараты",
    supcategoryRus: "Сумки"
}
let obj1 = {
    nameRus: "Маша",
    categoryRus: "Компьютеры и Лэптопы",
    supcategoryRus: "Apple"
}
let obj2 = {
    nameRus: "Вася", 
    categoryRus: "Компьютеры и Лэптопы",
    supcategoryRus: "Dell"
}
let obj3 = {
    nameRus: "Коля",
    supcategoryRus: "HP"
    
}
let obj4 = {
    nameRus: "Вита",
    categoryRus: "Компьютеры и Лэптопы",
    supcategoryRus: "Sony"
}
let obj5 = {
    nameRus: "Галактион",
    categoryRus: "Электроника",
    supcategoryRus: "Смартфоны"
}
let obj6 = {
    nameRus: "Зефирка",
    categoryRus: "Электроника",
    supcategoryRus: "Колонки"
}
let obj7 = {
    nameRus: "Бабун",
    supcategoryRus: "HP"
    
}
// let mass = [obj0, obj1];
// let mass2 = [obj2, obj3];
// let mass3 = [obj4, obj5];
// let mass4 = [obj6];
let mass = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7];
//let mass = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7];
let massRus = JSON.stringify(mass);
// console.log(mass5);
export default massRus;