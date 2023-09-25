const dropDown = document.querySelector('.dropdown__value');
const menuList = document.querySelector('.dropdown__list');

dropDown.addEventListener('click',  () => {
    if(menuList.classList.contains('dropdown__list_active')){
        menuList.classList.remove('dropdown__list_active');
    } else{
        menuList.classList.add('dropdown__list_active');
    }
});
  
const menuArr = document.querySelectorAll('.dropdown__item');
menuArr.forEach(menuArr => {
     menuArr.addEventListener('click', (e) => { 
        let currentItem = e.currentTarget;
        dropDown.textContent = currentItem.textContent;
        e.preventDefault();
        menuList.classList.remove('dropdown__list_active');
});
});
       


