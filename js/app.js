new WOW().init();


let link  = document.querySelectorAll(".nav-link");
let section = document.querySelectorAll("section");

window.onscroll = ()=>{
   section.forEach(sec => {
      let  top  =  window.scrollY;
      let offset  = sec.offsetTop-150;
      let height  =  sec.offsetHeight;
      let id = sec.getAttribute("id");

      if(top >= offset && top < offset + height){
            link.forEach(links =>{
               links.classList.remove("active");
               document.querySelector("nav ul li  a[href*=" + id + "]").classList.add('active')
            })

      }
   })
}