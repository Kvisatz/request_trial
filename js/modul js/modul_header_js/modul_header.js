import {Language} from './modul_language.js';
import {Currency} from './modul_currency.js';
import {WelcomeMess} from './modul_welcome_mess.js';
import {Links} from './modul_links.js';
import {ClientSupport} from './modul_client_support.js';
// import mass5 from "../TrialBackObjects.js";
// import massRus from "../TrialObjectsRus.js";
import Allcategories from "../Allcategories.js";


export class Header{
    selector;
    rate;

    dataLangCode;
    dataCurrencyCode;

    language;
    currency;
    welcomeMess;
    links;
    clientSupport;

    categ;

    constructor(selector , rate){
        this.rate = rate;
        this.selector = selector;
        this.language = new Language();
        this.currency = new Currency();
        this.dataLangCode = this.language.arrayLangs[0].data;
        
        this.dataCurrencyCode = this.currency.arrayCurrency[0].data;
        this.renderTop();
        this.renderMidle();
        this.welcomeMess = new WelcomeMess(this.dataLangCode);
        this.links = new Links(this.dataLangCode);
        this.clientSupport = new ClientSupport(this.dataLangCode , this.dataCurrencyCode , this.rate);
        this.renderCat(this.selector, this.dataLangCode);
        //console.log(this.changeLanguage());
        this.changeLanguage();
        this.changeCurrency();
        
        
    }
    renderCat(selector, lang){
        // console.log(lang);
        selector = selector.querySelectorAll(".header-middle .container .row");
        for(let select of selector){
            if(!select.parentElement.classList.contains("support-client")){
               selector = select;
            }
        }
        //console.log(massRus);
        new Allcategories(selector, lang);
    }
    renderTop(){
        this.selector.innerHTML += `<div class="header-top hidden-xs">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 upper_line_header">
                                                    <div class="top-menu">
                                                        ${this.language.listLangs + this.currency.listCurrency}`;
        this.selector.innerHTML += "</div></div></div></div></div>";
    }
    renderMidle(){
        this.selector.innerHTML += `<div class="header-middle">
                                        <div class="container">
                                            <div class='support-client hidden-xs'></div> 
                                            <div class="row"></div>
                                            
                                        </div>
                                    </div>`
    }
    changeLanguage(){
        let header = this;
        //console.log(header);
        this.language.listItem = document.querySelector(".header-area .top-menu .language> li a");
        this.language.langueges = document.querySelectorAll(".header-area .top-menu .language ul li");
        //console.log(this.language.langueges);

        this.language.langueges.forEach((element)=>{
            element.addEventListener('click' , (event)=>{
                this.language.arrayLangs.forEach((value)=>{
                    if(event.target.getAttribute("data-languageselect") == value.data){
                        header.language.listItem.innerHTML = `<a href="#" data-languageselect = ${value.data}>
                                                <img class="right-5" src= ${value.flag} alt="#">
                                                ${value.title}
                                                <i class="fa fa-caret-down left-5"></i>
                                             </a>`;
                        header.dataLangCode = value.data;
                        header.welcomeMess.render(header.dataLangCode);
                        header.links.render(header.dataLangCode);
                        header.clientSupport.render(header.dataLangCode , header.dataCurrencyCode , this.rate);
                        header.renderCat(header.selector, header.dataLangCode)
                    }
                })
            });
        });
    }
    changeCurrency(){
        let header = this;
        this.currency.listItem = document.querySelector(".header-area .top-menu .currency> li a");
        this.currency.curren = document.querySelectorAll(".header-area .top-menu .currency ul li");
        this.currency.curren.forEach((element)=>{
            element.addEventListener('click' , (event)=>{
                this.currency.arrayCurrency.forEach((value)=>{
                    if(event.target.getAttribute("data-currencyselect") == value.data){
                        this.currency.listItem.innerHTML = `<a href="#" data-currencyselect = ${value.data}>
                                                    <span style = "font-weight: bold">${value.curr}</span>
                                                    ${value.title}
                                                    <i class="fa fa-caret-down left-5"></i>
                                                </a>`;
                        header.dataCurrencyCode = value.data;
                        header.clientSupport.render(header.dataLangCode , header.dataCurrencyCode , this.rate)
                    }
                })
            });
        });
    }

}