
document.addEventListener("DOMContentLoaded", function(){
    
        fetch('idrice24/footer.html').then(res => res.text()).then(data => {
            document.getElementById('footer').innerHTML = data;
        }).catch((error) => {
            console.error("Error loading footer:", error);
        });
})

document.addEventListener("DOMContentLoaded", function(){
    
        fetch('idrice24/header.html').then(res => res.text()).then(data => {
            document.getElementById('header').innerHTML = data;
        }).catch((error) => {
            console.error("Error loading footer:", error);
        });
})


/* Script to trigger translation on dropdown change*/

document.getElementById('language-select').addEventListener('change', function() {
    var lang = this.value;
    if(!lang) return; // do nothing if no language selected

    var iframe = document.querySelector('iframe.google-te-banner-frame');
    if(!iframe){
        alert('Google Translate not loaded yet. please try again.');
        return;
    }

    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var select = innerDoc.querySelector('select.goog-te-combo');
    if(select){
        select.value = lang;
        select.dispatchEvent(new Event('change'));
    }
});
