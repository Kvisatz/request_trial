'use strict';
//импортирует класс поиска продукта по базе данных через AJAX запрос
// класс в качестве аргументов принимает параметры search страницы
import SearchRequest from "./modul js/SearchRequest.js";
let params = window.location.search;
let search = new SearchRequest(params);
