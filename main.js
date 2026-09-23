const b=document.querySelector('.menu-btn'),n=document.getElementById('menu');
const set=o=>{n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.textContent=o?'Cerrar':'Menú'};
b.addEventListener('click',()=>set(!n.classList.contains('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
n.addEventListener('click',e=>{if(e.target.tagName==='A')set(false)});
const f=document.getElementById('contacto-form');
if(f)f.addEventListener('submit',e=>{e.preventDefault();document.getElementById('ok').hidden=false;f.reset()});
