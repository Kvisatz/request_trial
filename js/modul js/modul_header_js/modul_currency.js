let arrayCurrency = [
    {
        title: "RUB",
        curr: "&#8381",
        data: "rub"
    },
     {
        title: "USD",
        curr: "&#36",
        data: "usd"
    }
]

export class Currency{
    arrayCurrency = [];
    listCurrency = "";
    listItem;
    curren;
    constructor(){
        arrayCurrency.forEach( (value)=>{
            this.arrayCurrency.push(value);
        })
        this.render();
    }
    render(){
        this.listCurrency += `<ul class='currency'>
                            <li>
                                <a href="#" data-currencyselect = ${this.arrayCurrency[0].data}>
                                <span style = "font-weight: bold">${this.arrayCurrency[0].curr}</span> 
                                ${this.arrayCurrency[0].title}
                                <i class="fa fa-caret-down left-5"></i>
                                </a>
                                <ul>`;
        this.arrayCurrency.forEach((value)=>{
            this.listCurrency += `<li>
                                    <a href="#" data-currencyselect = ${value.data}>
                                        <span style = "font-weight: bold" data-currencyselect = ${value.data}>${value.curr}</span>
                                        ${value.title}
                                    </a>
                                </li>`;
        })
        this.listCurrency += "</ul></li></ul>";
    }
}