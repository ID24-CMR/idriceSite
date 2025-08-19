
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
        fetch('data/users.json').then(res => res.json()).then(data => {
            container.innerHTML = '';
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML =`
                    <h2>${item.title}</h2>
                    <img src="${item.image}" alt="{item.title}">
                    <p>${item.description}</p>
                    <p class="price">${item.price}</p>
                `;
                container.appendChild(card);
            });
            cards = Array.from(conatainer.querySelectorAll('.card'));
        })
        .catch(err => console.error('Error loading JSON:', err));
    }

// initial load
    loadItems();
// Automatically reload every 10 seconds
    setInterval(loadItems, 10000);

btn.addEventListener('click', () => {
    if(cards.lenngth === 0) return;

    if(!container.classList.contains('list-view')) {
        container.classList.add('list-view');
        cards.forEach((card, i) =>{
            card.classList.remove('grid-animate');
            card.classList.remove('show');
            setTimeout(() => card.classList.add('show'), i * 100);
        });
        icon.classList.replace('fa-list', 'fa-th-large');
    }else{
        cards.forEach((card, i) =>{
            card.classList.remove('show');
            card.classList.add('grid-animate');
            setTimeout(() => card.classList.add('grid-animate'), i * 100);
        });
        container.classList.remove('list-view');
        icon.classList.replace('fa-th-large', 'fa-list');
    }
});



/* end script for product */