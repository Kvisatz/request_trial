
let support = [
    {
        data: "rus",
        title:["время работы","Бесплатная доставка","Взврат денег 100%","Тел.: 0123456789"],
        icon:["<i class='fa fa-clock-o'></i>","<i class='fa fa-truck'></i>","<i class='fa fa-money'></i>","<i class='fa fa-phone-square'></i>"],
        description:["Пн - Вс: 8.00 - 18.00","При заказе больше  ","В течении 30 дней после доставки","Заказ онлайн сейчас !"],
    },
    {
        data: "eng",
        title:["working time","Free shipping","Money back 100%","Phone: 0123456789"],
        icon:["<i class='fa fa-clock-o'></i>","<i class='fa fa-truck'></i>","<i class='fa fa-money'></i>","<i class='fa fa-phone-square'></i>"],
        description:["Mon- Sun: 8.00 - 18.00","On order over  ","Within 30 Days after delivery","Order Online Now !"],
    }
]

export class ClientSupport{
   support = [];
   changecurrency = 2;
   freeShippingPrice = 199;
   
   constructor(dataLeng , dataCurr , rate){
	   support.forEach((value)=>{
		   this.support.push(value);
	   });
	   document.querySelector("header .header-middle .container .support-client").innerHTML += "<div class='row'></div>"	
	   this.render(dataLeng , dataCurr , rate);
	   
   }

   render(dataLeng , dataCurr , rate){
		document.querySelector("header .header-middle .container .support-client .row").innerHTML = "";
		this.support.forEach((value)=>{
			if(dataLeng == value.data){
				for(let i = 0 ; i < value.title.length ; i++ ){
					document.querySelector("header .header-middle .container .support-client .row").innerHTML += `
						<div class="col-md-3 hidden-sm">
							<div class="single-support">
								<div class="support-content">
									${value.icon[i]}
									<div class="support-text">
										<h1 class="zero gfont-1">${value.title[i]}</h1>
										<p>${value.description[i]}</p>
									</div>
								</div>
							</div>
						</div>`
				}
			}
		})
		let list = document.querySelectorAll("header .header-middle .container .support-client .row .support-text p");
		list[this.changecurrency-1].classList.add("currency");
		let orderText = document.querySelector("header .header-middle .container .support-client .row .support-text .currency").innerHTML;
		let currency = document.querySelector("header .header-middle .container .support-client .row .support-text .currency");

		if(dataCurr == "rub"){
			currency.innerHTML = orderText;
			currency.innerHTML += "&#8381";
			currency.innerHTML += " "+this.freeShippingPrice/rate;
		}
		else if(dataCurr == "usd"){
			currency.innerHTML = orderText;
			currency.innerHTML += "&#36";
			currency.innerHTML += " "+this.freeShippingPrice;
		}
   }
}