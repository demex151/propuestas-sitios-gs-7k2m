(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav=$('.nav');const sc=()=>nav.classList.toggle('solid',scrollY>40);addEventListener('scroll',sc,{passive:true});sc();
const bg=$('.burger'),menu=$('#menu');bg.onclick=()=>{const o=bg.getAttribute('aria-expanded')!=='true';bg.setAttribute('aria-expanded',o);menu.classList.toggle('open',o)};
$$('.split').forEach(h=>{h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="w" style="transition-delay:${i*70}ms">${w}</span>`).join(' ');requestAnimationFrame(()=>setTimeout(()=>h.classList.add('in'),80))});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));
if(!rm){const art=$('.hero-art');addEventListener('scroll',()=>{if(art)art.style.transform=`translateY(${scrollY*.35}px) scale(${1+scrollY/4000})`},{passive:true});
addEventListener('pointermove',e=>{if(art)art.style.translate=`${(e.clientX/innerWidth-.5)*-20}px ${(e.clientY/innerHeight-.5)*-20}px`})}
$$('.filters').forEach(f=>{const scope=f.parentElement;f.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('button',f).forEach(x=>x.classList.toggle('on',x===b));
$$('[data-cat]',scope).forEach(it=>it.classList.toggle('hide',b.dataset.f!=='all'&&it.dataset.cat!==b.dataset.f))})});
const items=$$('.g-item');if(items.length){const lb=document.createElement('div');lb.className='lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Image viewer');
lb.innerHTML='<div></div><button class="x" aria-label="Close">✕</button><button class="pv" aria-label="Previous">←</button><button class="nx" aria-label="Next">→</button>';document.body.append(lb);let i=0,last;
const vis=()=>items.filter(x=>!x.classList.contains('hide'));const show=n=>{const v=vis();i=(n+v.length)%v.length;$('div',lb).innerHTML=v[i].innerHTML};
const close=()=>{lb.hidden=true;last&&last.focus()};items.forEach(it=>{const op=()=>{last=it;show(vis().indexOf(it));lb.hidden=false;$('.x',lb).focus()};it.onclick=op;it.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();op()}}});
$('.x',lb).onclick=close;$('.pv',lb).onclick=()=>show(i-1);$('.nx',lb).onclick=()=>show(i+1);lb.onclick=e=>{if(e.target===lb)close()};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)})}
$$('.carousel').forEach(c=>{const t=$('.track',c),n=t.children.length,d=$('.dots',c);let k=0;d.innerHTML='<i></i>'.repeat(n);const go=x=>{k=(x+n)%n;t.style.transform=`translateX(-${k*100}%)`;$$('i',d).forEach((e,j)=>e.classList.toggle('on',j===k))};
$('.prev',c).onclick=()=>go(k-1);$('.next',c).onclick=()=>go(k+1);go(0);let tm;const auto=()=>{if(!rm)tm=setInterval(()=>go(k+1),6000)};auto();c.onmouseenter=()=>clearInterval(tm);c.onmouseleave=auto});
const H=JSON.parse(document.body.dataset.hours||'{}');const now=new Date();const di=(now.getDay()+6)%7;const h=now.getHours()+now.getMinutes()/60;
$$('.hours li').forEach((li,j)=>li.classList.toggle('today',j===di));
const st=$$('.status');if(Object.keys(H).length){const r=H[di];const open=r&&h>=r[0]&&h<r[1];st.forEach(s=>{s.textContent=open?'Open now':'Closed now';s.classList.add(open?'open':'closed')})}else st.forEach(s=>s.textContent='Hours: call to confirm');
$$('[data-count]').forEach(el=>{const tgt=parseFloat(el.dataset.count),dec=el.dataset.count.includes('.')?1:0;if(rm)return;const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();let s=null;const f=t=>{s??=t;const p=Math.min((t-s)/1400,1);el.textContent=(tgt*(1-Math.pow(1-p,3))).toFixed(dec);if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});o.observe(el)});
$$('.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();let bad=[];$$('input,textarea',f).forEach(x=>{const ok=x.checkValidity();x.classList.toggle('bad',!ok);x.setAttribute('aria-invalid',!ok);if(!ok)bad.push(x)});
$('.err',f).textContent=bad.length?'Please complete the highlighted fields.':'';if(bad.length){bad[0].focus();return}$('.ok',f).hidden=false;$('button[type=submit]',f).disabled=true}));
})();
