let category_heading = document.querySelector(".category-heading");
let category_menu_list = document.querySelector(".category-menu-list");
// console.log(category_heading);
// console.log(category_menu_list);
category_heading.addEventListener("click", ()=>{
    category_menu_list.classList.toggle('active');
})
