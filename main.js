let menuBar=document.querySelector('.header__icons_nav-toggle1'),
    closeBar=document.querySelector('.header__icons_nav-toggle2'),
    navBar=document.querySelector('.header__mobileNav');
    // mainBody=document.getElementById('bodywrap')

    menuBar.addEventListener('click', () =>{
 if( menuBar.style.display=='none'){

    navBar.style.display='block'
    closeBar.style.display='block'
 }
            menuBar.style.display='block'
            closeBar.style.display='none'
            navBar.style.display='block'
}
    )