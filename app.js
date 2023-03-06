const toogle_Btn = document.querySelector(".nav-toggle__btn")
const navLinks = document.querySelectorAll(".nav__list .nav__item")
const nav = document.querySelector(".nav")
const header = document.querySelector('header')
theEnd = 0;
toogle_Btn.addEventListener('click',()=>{
    document.body.classList.toggle("nav-open")
    
   
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
           link.style.animation=''
           
        }else{
           link.style.animation = `nav__link--fade .5s ease forwards ${index/7 + .5}s `
        }
     })
})

navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
    document.body.classList.remove('nav-open')

    navLinks.forEach((link,index)=>{     
           link.style.animation=''
     })
    })
})

document.onclick = function closeNav(e){
    if(!toogle_Btn.contains(e.target) && !nav.contains(e.target )){
        document.body.classList.remove('nav-open')

       navLinks.forEach((link,)=>{
          link.style.animation=''
       })
    }
 }

 //fixing the header position on scroll
 window.addEventListener('scroll', ()=>{
   let scrollTop = window.pageXOffset || document.documentElement.scrollTop
   if(scrollTop > theEnd ){
      header.style.top = '-110px'
   }
   else{
      header.style.top = '0px'
   }
   theEnd = scrollTop
})