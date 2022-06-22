let messageList = [
    {
        data: "eng",
        message: "Welcome to the shop!"
    },
    {
        data: "rus",
        message: "Добро пожаловать в магазин!"
    }     
]

export class WelcomeMess{
    messages=[];

    constructor(dataLang){
        messageList.forEach((value)=>{
            this.messages.push(value);
        })
        document.querySelector("header .top-menu").innerHTML += "<p class='welcome-msg'></p>";
        this.render(dataLang);
    }
    render(dataLang){
        this.messages.forEach((value)=>{
            if(value.data == dataLang){
                document.querySelector(".welcome-msg").innerHTML = "";
                document.querySelector(".welcome-msg").innerHTML = value.message;
            }
        })
    }
}