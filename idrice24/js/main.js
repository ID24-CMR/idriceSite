
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

/* product script */



    const container = document.getElementById("itemContainer");
    const btn = document.getElementById("toggleBtn");
    const icon = document.getElementById("toggleIcon");

    let cards = [];

    // function to load items from JSON
    function loadItems() {
        fetch('users.json').then(res => res.json()).then(data => {
            container.innerHTML = '';
            data.forEach(item => {
                const card = document.createElement('div');
            })
        })
    }
document.addEventListener('DOMContentLoaded', () => {

    btn.addEventListener('click', () => {
        container.classList.toggle("list-view");

    // Change icon based on view
    if(container.classList.contains("list-view")) {
        icon.classList.remove("fa-list");
        icon.classList.add("fa-th-large");
    }else{
        icon.classList.remove("fa-th-large");
        icon.classList.add("fa-list");
    }
});
    
});



/* end script for product */