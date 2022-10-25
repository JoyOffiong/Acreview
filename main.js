const  menuBar=document.querySelector('.mobileheader__icons_navtoggle1');
const  closeBar=document.querySelector('.mobileNav__navtoggle2');
const  navBar=document.querySelector('.mobileNav');
const mainBody=document.getElementById('bodywrap')

    menuBar.addEventListener('click', () =>{
   menuBar.style.display ="none"
   closeBar.style.display='block'
   closeBar.style.zIndex= '5'
    navBar.style.display= 'block' 
    mainBody.style.overflowX='hidden'
 });

closeBar.addEventListener('click', () =>{
   menuBar.style.right = "-50px"
   menuBar.style.display='block'
   closeBar.style.display='none'
   navBar.style.display= 'none' 
})