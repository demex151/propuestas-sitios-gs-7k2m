
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const sl=[...document.querySelectorAll('.hero .sl')];let k=0;
if(sl.length>1&&!rm)setInterval(()=>{sl[k].classList.remove('on');k=(k+1)%sl.length;const n=sl[k];const im=n.querySelector('img');im.style.animation='none';im.offsetHeight;im.style.animation='';n.classList.add('on')},5200);
const tb=document.querySelector('.top');addEventListener('scroll',()=>tb.classList.toggle('s',scrollY>60),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rev').forEach(x=>io.observe(x));
const tr=document.querySelector('.truck img');if(tr&&!rm)addEventListener('scroll',()=>{const r=tr.parentNode.getBoundingClientRect();tr.style.transform=`translateY(${r.top*-.12}px)`},{passive:true});
const q=document.querySelector('.tick blockquote');if(q){const d=JSON.parse(q.dataset.q);let i=0;setInterval(()=>{q.classList.add('out');setTimeout(()=>{i=(i+1)%d.length;q.firstChild.textContent=d[i];q.classList.remove('out')},600)},5000)}
const lb=document.querySelector('.lb');document.querySelectorAll('.mos button').forEach(b=>b.onclick=()=>{lb.querySelector('img').src=b.dataset.src;lb.classList.add('on')});
if(lb){lb.onclick=e=>{if(e.target!==lb.querySelector('img'))lb.classList.remove('on')};addEventListener('keydown',e=>e.key=='Escape'&&lb.classList.remove('on'))}
