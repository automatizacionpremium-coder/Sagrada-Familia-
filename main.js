const b=document.querySelector('.menu-btn'),n=document.getElementById('menu');
const set=o=>{n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.textContent=o?'Cerrar':'Menú'};
b.addEventListener('click',()=>set(!n.classList.contains('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
n.addEventListener('click',e=>{if(e.target.tagName==='A')set(false)});
const pages=[...document.querySelectorAll('.page')];
let last=null;
function route(){
  const [p,sub]=(location.hash.slice(1)||'inicio').split('/');
  const cur=pages.find(x=>x.id===p)||pages[0];
  pages.forEach(x=>x.classList.toggle('on',x===cur));
  document.querySelectorAll('nav a').forEach(a=>a.toggleAttribute('aria-current',a.dataset.p===cur.id)&&a.setAttribute('aria-current','page'));
  document.querySelectorAll('nav a:not([aria-current])').forEach(a=>a.removeAttribute('aria-current'));
  const arts=[...cur.querySelectorAll('.art')];
  arts.forEach(a=>a.classList.toggle('on',a.id===sub));
  document.body.classList.toggle('art-open',arts.some(a=>a.id===sub));
  document.title=cur.dataset.title+' · Colegio Sagrada Familia';
  const t=sub&&document.getElementById(sub);
  if(t&&!t.classList.contains('art'))t.scrollIntoView();else if(cur.id!==last)scrollTo(0,0);
  last=cur.id;
}
addEventListener('hashchange',route);route();
const f=document.getElementById('contacto-form');
if(f)f.addEventListener('submit',e=>{e.preventDefault();document.getElementById('ok').hidden=false;f.reset()});
