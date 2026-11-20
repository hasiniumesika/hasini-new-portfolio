const themeToggle=document.getElementById("themeToggle");
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
const backTop=document.getElementById("backTop");

themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  const dark=document.body.classList.contains("dark");
  themeToggle.textContent=dark?"☀":"☾";
  themeToggle.setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");
});
menuToggle.addEventListener("click",()=>{
  nav.classList.toggle("open");
  menuToggle.textContent=nav.classList.contains("open")?"×":"☰";
});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  nav.classList.remove("open");menuToggle.textContent="☰";
}));
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
window.addEventListener("scroll",()=>backTop.classList.toggle("show",window.scrollY>450));
backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
