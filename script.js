
window.addEventListener("load",()=>{
  const loader=document.getElementById("loader");
  if(loader){
    loader.style.transition="opacity .6s";
    loader.style.opacity="0";
    setTimeout(()=>loader.remove(),650);
  }
});

if(typeof Typed!=="undefined"){
  new Typed(".typing",{
    strings:["Cloud Enthusiast","MCA Student","AI Learner","Graphic Designer","Web Developer"],
    typeSpeed:70,
    backSpeed:40,
    loop:true
  });
}

if(typeof particlesJS!=="undefined"){
particlesJS("particles-js",{
 particles:{
  number:{value:60},
  color:{value:"#00e5ff"},
  links:{enable:true,color:"#8a2be2"},
  move:{enable:true,speed:2},
  size:{value:3}
 },
 interactivity:{
  events:{
   onhover:{enable:true,mode:"repulse"},
   onclick:{enable:true,mode:"push"}
  }
 }
});
}

const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
 if(cursor){
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
 }
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.addEventListener("click",e=>{
  const t=document.querySelector(a.getAttribute("href"));
  if(t){
   e.preventDefault();
   t.scrollIntoView({behavior:"smooth"});
  }
 });
});

const obs=new IntersectionObserver(entries=>{
 entries.forEach(en=>{
  if(en.isIntersecting){
   en.target.style.opacity="1";
   en.target.style.transform="translateY(0)";
  }
 });
},{threshold:0.15});

document.querySelectorAll(".about-card,.skill,.project-card,form,.section-title").forEach(el=>{
 el.style.opacity="0";
 el.style.transform="translateY(50px)";
 el.style.transition=".8s";
 obs.observe(el);
});

const theme=document.querySelector(".theme");
let dark=true;
theme?.addEventListener("click",()=>{
 dark=!dark;
 document.documentElement.style.setProperty("--text",dark?"#fff":"#111");
 document.documentElement.style.setProperty("--muted",dark?"#cfd3dc":"#444");
 theme.innerHTML=dark?'<i class="fa-solid fa-moon"></i>':'<i class="fa-solid fa-sun"></i>';
});
