
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_top');
});

/* about us js */

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const apppearOnScroll = new IntersectionObserver(function(entries, observer)
{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader =>{
    apppearOnScroll.observe(fader);
});