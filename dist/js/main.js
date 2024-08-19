document.addEventListener('DOMContentLoaded',()=>{

    const menuBtn = document.querySelector('.menu-btn');
    const hamBurger = document.querySelector('.menu-btn_burger');
    const nav = document.querySelector('.nav');
    const menuNav = document.querySelector('.menu-nav');
    const navitems = document.querySelectorAll('.menu-nav_item');

    let showMenu = false;
     
    menuBtn.addEventListener('click',toggleMenu);

    function toggleMenu(){
        if(!showMenu){
            hamBurger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open');
            navitems.forEach(item => item.classList.add('open'));

            showMenu = true;
        }
        else{
            hamBurger.classList.remove('open');
            nav.classList.remove('open');
            menuNav.classList.remove('open');
            navitems.forEach(item => item.classList.remove('open'));

            showMenu = false;
        }
    }
})