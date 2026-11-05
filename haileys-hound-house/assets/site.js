(()=>{const b=document.querySelector('.burger'),m=document.getElementById('menu');b&&b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const io='IntersectionObserver'in window?new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1}):null;document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));
let H={};try{H=JSON.parse(document.body.dataset.hours||'{}')}catch(e){}
if(Object.keys(H).length){const n=new Date(),d=(n.getDay()+6)%7,t=n.getHours()+n.getMinutes()/60,v=H[d];const open=v&&t>=v[0]&&t<v[1];document.querySelectorAll('.status').forEach(s=>s.textContent=open?'Open now':'Closed now · local time')}
document.querySelectorAll('.ba input').forEach(r=>r.addEventListener('input',()=>r.parentElement.style.setProperty('--p',r.value+'%')));})();
