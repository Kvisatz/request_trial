let linksList = [
    {
        data:"rus",
        item: ["Мой акаунт","Нравится(0)","Регистрация","Войти"],
        logo: ["<i class='fa fa-user'></i>","<i class='fa fa-heart'></i>","<i class='fa fa-share'></i>","<i class='fa fa-unlock-alt'></i>"],
        link: ["my-account.html","wishlist.html","checkout.html","account.html"]
    },
    {
        data:"eng",
        item: ["My Account","Wish List(0)","Checkout","Login"],
        logo: ["<i class='fa fa-user'></i>","<i class='fa fa-heart'></i>","<i class='fa fa-share'></i>","<i class='fa fa-unlock-alt'></i>"],
        link: ["my-account.html","wishlist.html","checkout.html","account.html"]
    }
];

export class Links{
    linksList = [];
    constructor(dataLang){
        linksList.forEach((value)=>{
            this.linksList.push(value);
        });
        document.querySelector("header .upper_line_header").innerHTML += "<div class='top-link'><ul class='link'></ul></div>";
        this.render(dataLang);
    }

    render(dataLang){
        this.linksList.forEach((value)=>{
            if(value.data == dataLang){
                document.querySelector("header .top-link .link").innerHTML = "";
                for(let i = 0 ; i < value.item.length; i++){
                    document.querySelector("header .top-link .link").innerHTML += `<li><a href=${value.link[i]}>${value.logo[i]}${value.item[i]}</a></li>`;
                }
            }
        })  
    }

}

/* <div class="top-link">
								<ul class="link">
									<li><a href="my-account.html"><i class="fa fa-user"></i> My Account</a></li>
									<li><a href="wishlist.html"><i class="fa fa-heart"></i> Wish List (0)</a></li>
									<li><a href="checkout.html"><i class="fa fa-share"></i> Checkout</a></li>
									<li><a href="account.html"><i class="fa fa-unlock-alt"></i> Login</a></li>
								</ul>
							</div> */