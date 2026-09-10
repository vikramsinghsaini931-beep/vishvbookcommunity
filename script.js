
document.addEventListener("DOMContentLoaded",()=>{
  const items=[...document.querySelectorAll(".reveal-section,.reveal-card")];
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})
  },{threshold:.12});
  items.forEach(el=>observer.observe(el));

  document.querySelectorAll(".faq-list details").forEach(detail=>{
    detail.addEventListener("toggle",()=>{
      if(detail.open) detail.scrollIntoView({behavior:"smooth",block:"nearest"});
    });
  });

  const card=document.querySelector(".hero-image-card");
  if(card && window.matchMedia("(pointer:fine)").matches){
    document.addEventListener("mousemove",e=>{
      const x=(e.clientX/window.innerWidth-.5)*8;
      const y=(e.clientY/window.innerHeight-.5)*8;
      card.style.transform=`perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    document.addEventListener("mouseleave",()=>card.style.transform="");
  }
});
