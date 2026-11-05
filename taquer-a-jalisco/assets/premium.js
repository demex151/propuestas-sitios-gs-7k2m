(()=>{const rm=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const pb=document.createElement('div');pb.className='progress';pb.setAttribute('aria-hidden','true');document.body.prepend(pb);
const up=()=>{const h=document.documentElement.scrollHeight-innerHeight;pb.style.transform=`scaleX(${h>0?scrollY/h:0})`};addEventListener('scroll',up,{passive:true});up();
if(!rm){document.body.classList.add('pg-in');
 if(!('onpagereveal' in window)){$$('a[href$=".html"]').forEach(a=>a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||a.target)return;e.preventDefault();document.body.classList.add('pg-out');setTimeout(()=>location.href=a.href,260)}));addEventListener('pageshow',()=>document.body.classList.remove('pg-out'))}
 const lay=$$('[data-depth]');if(lay.length){let t=0;const f=()=>{t=0;const y=scrollY;lay.forEach(l=>l.style.transform=`translate3d(0,${y*parseFloat(l.dataset.depth)}px,0)`)};addEventListener('scroll',()=>{if(!t)t=requestAnimationFrame(f)},{passive:true});f()}
 if(fine){const g=document.createElement('div');g.className='cursor-glow';g.setAttribute('aria-hidden','true');document.body.append(g);addEventListener('pointermove',e=>{g.style.transform=`translate(${e.clientX}px,${e.clientY}px)`},{passive:true});
  $$('.magnetic').forEach(m=>{m.addEventListener('pointermove',e=>{const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});m.addEventListener('pointerleave',()=>m.style.transform='')});
  $$('.tilt').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`});c.addEventListener('pointerleave',()=>c.style.transform='')})}
}})();
