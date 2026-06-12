const startDate = new Date('2026-04-12T00:00:00');
const daysEl = document.querySelector('#daysTogether');
const song = document.querySelector('#loveSong');
const playBtn = document.querySelector('#playBtn');
const shareBtn = document.querySelector('#shareBtn');
const surpriseBtn = document.querySelector('#surpriseBtn');
const surpriseText = document.querySelector('#surpriseText');

function updateDays(){
  const today = new Date();
  const diff = Math.max(0, Math.floor((today - startDate) / (1000 * 60 * 60 * 24)));
  daysEl.textContent = diff;
}
updateDays();

playBtn.addEventListener('click', async () => {
  try {
    if(song.paused){
      await song.play();
      playBtn.textContent = '⏸ Pausar nossa música';
    } else {
      song.pause();
      playBtn.textContent = '▶ Tocar nossa música';
    }
  } catch(e){
    alert('O navegador bloqueou a música. Tenta tocar de novo, igual insistência de casal apaixonado.');
  }
});

shareBtn.addEventListener('click', async () => {
  const data = {title:'Fernando + Ester', text:'Um site feito com amor, bobeira e cupuaçu 💙❤️', url: location.href};
  if(navigator.share){ await navigator.share(data); }
  else { await navigator.clipboard.writeText(location.href); alert('Link copiado! Agora é só mandar pra Ester 💙'); }
});

surpriseBtn.addEventListener('click', () => {
  surpriseText.hidden = !surpriseText.hidden;
  for(let i=0;i<18;i++) createHeart();
});

function createHeart(){
  const heart = document.createElement('span');
  heart.textContent = Math.random() > .5 ? '💙' : '❤️';
  heart.style.position = 'fixed';
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.bottom = '-30px';
  heart.style.fontSize = (20 + Math.random()*24) + 'px';
  heart.style.zIndex = 10;
  heart.style.pointerEvents = 'none';
  heart.style.transition = '2.5s ease';
  document.body.appendChild(heart);
  requestAnimationFrame(()=>{heart.style.transform = `translateY(-${80+Math.random()*40}vh) rotate(${Math.random()*360}deg)`; heart.style.opacity = 0;});
  setTimeout(()=>heart.remove(),2600);
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightboxImg');
document.querySelectorAll('.gallery-item img').forEach(img=>{
  img.addEventListener('click',()=>{ lightbox.hidden=false; lightboxImg.src=img.src; lightboxImg.alt=img.alt; });
});
document.querySelector('#closeLightbox').addEventListener('click',()=> lightbox.hidden=true);
lightbox.addEventListener('click',(e)=>{ if(e.target===lightbox) lightbox.hidden=true; });
