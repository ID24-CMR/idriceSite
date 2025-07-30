document.addEventListener("DOMContentLoaded", function(){
    
        fetch('idrice24/footer.html').then(res => res.text()).then(data => {
            document.getElementById('footer').innerHTML = data;
        }).catch((error) => {
            console.error("Error loading footer:", error);
        });
})
