
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const mb=document.querySelector('.mb'),ov=document.querySelector('.ov');mb.onclick=()=>{const o=ov.classList.toggle('on');mb.setAttribute('aria-expanded',o);mb.textContent=o?'CLOSE':'MENU'};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2});document.querySelectorAll('.rv,.row').forEach(x=>io.observe(x));
const sc=document.querySelector('.scr'),hs=document.querySelector('.hs');
function f(){if(rm)return;if(sc){const r=sc.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));const s=sc.querySelector('.stk');s.style.setProperty('--z',1.35-.35*p);s.style.setProperty('--g',.6-.6*p);s.style.setProperty('--f',(p*Math.min(innerWidth,innerHeight)*.05)+'px');}
if(hs){const r=hs.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));const st=hs.querySelector('.strip');st.style.transform=`translateX(${-p*(st.scrollWidth-innerWidth)}px)`}}
addEventListener('scroll',f,{passive:true});addEventListener('resize',f);f();
