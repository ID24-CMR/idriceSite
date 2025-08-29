
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
/*    setInterval(loadItems, 10000);*/

toggleBtn.addEventListener('click', () => {
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

/* start script for login here */
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault(); // prevent form submission 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("rememberMe").checked;
    const error = document.getElementById("error");

    if(username === "" || password === "" ) {
        error.textContent = "Please fill in all fields.";
        error.style.color = "red";
        return;
    }

    if(username === "admin" && password === "4321") {
        error.style.color = "lightgreen";
        error.textContent = "Login successful";
        if (remember) {
        localStorage.setItem("savedUser", username);
    }else{
        localStorage.removeItem("savedUser");
    }

    setTimeout(() => {
        window.location.href = "dashbaord.html"; // redirect
    }, 1000);
    }else{
        error.style.color = "red";
        error.textContent = "Invalid username or password";
    }
});

// Show/Hide password
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    togglePassword.textContent = type === "password" ? "." : " ";
});

// Auto-fill saved username if remember Me was checked.
window.onload = () => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
        document.getElementById("username").value = savedUser;
        document.getElementById("rememberMe").checked = true;
    }
}

/*** end script for login here **/


/** dashboard script start **/
//simple navigation system

function loadContent(page) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(page).classList.add('active');

    document.getElementById('page-title').textContent = page.charAt(0).toUpperCase() + page.slice(1);
}

const salesData = [12000, 10000, 18000, 14000];
const labels = ["Jan", "Feb", "Mar", "Apr", "May"];
const chartContainer = document.getElementById("sales-chart");

const max = Math.max(salesData);

salesData.forEach((value, i) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = (value / 100 ) + "%"; //scale heiht
    bar.setAttribute("data-label", labels[i]);
    chartContainer.appendChild(bar);
});


/** dashboard script end **/

/** main page script start here */
document.addEventListener('DOMContentLoader', () => {

let testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;


const showTestimonial = index => {
    testimonials.forEach((t, i) => t.classList.remove('active'));
    testimonials[index].classList.add('active');
};

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = ( currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
})

setInterval(() => {
    currentIndex = ( currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 5000);

});

document.addEventListener("DOMContentLoader", () => {

            const chatBtn = document.getElementById("chatBtn");
            const chatWindow = document.getElementById("chatWindow");
            const closeChat = document.getElementById("closeChat");
            const sendBtn = document.getElementById("sendBtn");
            const chatInput = document.getElementById("chatInput");
            const chatBody = document.getElementById("chatBody");

            chatBtn.onclick = () => {
               alert("OK");
            };


            //  function test(){
            //      if(chatWindow.style.display === "none") {
            //         chatWindow.style.display = "flex";
            //     }else {
            //         chatWindow.style.display = "none";
            //     }
                
            // };

            closeChat.onclick = () => chatWindow.style.display = "nome";
            sendBtn.onclick = () => {
                let msg = chatInput.value.trim();
                if(msg) {
                    chatBody.innerHTML += `<p><b>You</b> ${msg}</p>`;
                    chatInput.value = "";
                    chatBody.scrollTop = chatBody.scrollHeight;
                    setTimeout(() => {
                        chatBody.innerHTML += `<p><b>Assistant:<b> I will get back to you son "${msg}".</p>`;
                        chatBody.scrollTop = chatBody.scrollHeight;
                    }, 1000);
                }
            };
});

/** main page script end here */

