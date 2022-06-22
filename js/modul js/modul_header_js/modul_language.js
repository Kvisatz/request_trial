let arrayLangs = [
    {
        data: "rus",
        flag: "img/flags/Rus.png",
        title: "Русский"
    },
    {
        data: "eng",
        flag: "img/flags/gb.png",
        title: "English"
    }
]

export class Language{
    arrayLangs = [];
    listLangs = "";
    listItem;
    langueges;
    constructor(){
        arrayLangs.forEach( (value)=>{
            this.arrayLangs.push(value);
        })
        this.render();
    }
    render(){
        this.listLangs = `<ul class='language'>
                            <li>
                                <a href="#" data-languageselect = ${this.arrayLangs[0].data}>
                                    <img class="right-5" src= ${this.arrayLangs[0].flag} alt="#">
                                    ${this.arrayLangs[0].title}
                                    <i class="fa fa-caret-down left-5"></i>
                                </a>
                                <ul>`;
        this.arrayLangs.forEach((value)=>{
            this.listLangs += `<li>
                                    <a href="#" data-languageselect = ${value.data}>
                                        <img class="right-5" data-languageselect = ${value.data} src=${value.flag} alt="#">
                                        ${value.title}
                                    </a>
                                </li>`;
        })
        this.listLangs += "</ul></li></ul>";
    }
}