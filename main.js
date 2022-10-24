let menuBar=document.querySelector('.header__button_navtoggle1'),
    closeBar=document.querySelector('.header__button_navtoggle2'),
    navBar=document.querySelector('.mobileNav');
    // mainBody=document.getElementById('bodywrap')

    menuBar.addEventListener('click', () =>{
 if( menuBar.style.display ='none'){
    navBar.style.display='block'
    closeBar.style.display='block'
 }
   menuBar.style.display='block'
   closeBar.style.display='none'
   navBar.style.display='block'
}
    )