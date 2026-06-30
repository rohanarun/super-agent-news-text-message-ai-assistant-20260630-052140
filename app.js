(function(){
  try {
    if (!window.gsap) return;
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero h1', { y: 22, opacity: 0, duration: 0.9, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 22, opacity: 0, duration: 0.9, delay: 0.1, ease: 'power3.out' });
    gsap.from('.hero-actions', { y: 22, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });
    gsap.from('.media-frame', { y: 30, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
    gsap.utils.toArray('.bento-item, .compare-card').forEach(function(el){
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        y: 24, opacity: 0, duration: 0.7, ease: 'power3.out'
      });
    });
  } catch(e) {}
})();