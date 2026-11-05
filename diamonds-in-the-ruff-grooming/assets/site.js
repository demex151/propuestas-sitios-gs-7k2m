
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fab=document.querySelector('.fab'),sh=document.querySelector('.sheet');fab.onclick=()=>{const o=sh.classList.toggle('on');fab.setAttribute('aria-expanded',o);fab.textContent=o?'Close':'Menu'};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.25});document.querySelectorAll('.rv,.bub,.wk').forEach(x=>io.observe(x));
const tl=document.querySelector('.tl');if(tl)addEventListener('scroll',()=>{const r=tl.getBoundingClientRect();tl.querySelector('.fill').style.setProperty('--p',Math.min(100,Math.max(0,(innerHeight*.6-r.top)/r.height*100))+'%')},{passive:true});
const dk=document.querySelector('.deck');if(dk){let cs=[...dk.children];
function lay(){cs.forEach((c,i)=>{c.style.zIndex=cs.length-i;c.style.transform=`translateY(${i*8}px) rotate(${[-3,2,-1,3][i%4]*(i?1:0)}deg) scale(${1-i*.04})`;c.style.opacity=i<4?1:0})}lay();
function next(d=1){const c=cs.shift();c.style.transform=`translateX(${d*130}%) rotate(${d*20}deg)`;c.style.opacity=0;setTimeout(()=>{cs.push(c);lay()},350)}
let x0=null;dk.addEventListener('pointerdown',e=>{x0=e.clientX;cs[0].setPointerCapture(e.pointerId)});dk.addEventListener('pointermove',e=>{if(x0===null)return;const dx=e.clientX-x0;cs[0].style.transition='none';cs[0].style.transform=`translateX(${dx}px) rotate(${dx/12}deg)`});
dk.addEventListener('pointerup',e=>{const dx=e.clientX-x0;x0=null;cs[0].style.transition='';if(Math.abs(dx)>70)next(Math.sign(dx));else lay()});
document.querySelector('.nx').onclick=()=>next(1);document.querySelector('.pv').onclick=()=>{cs.unshift(cs.pop());lay()};
if(!rm){let t=setInterval(()=>next(1),3800);dk.addEventListener('pointerdown',()=>clearInterval(t),{once:true})}}
