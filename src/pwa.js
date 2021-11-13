export function registerPWA() {
    window.addEventListener("load", () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("service-worker.js");
        }
    });

    // a2hs = Add to Home Screen
    const a2hsLink = document.getElementById('a2hs');
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        a2hsLink.style.display = 'inline';
      
        a2hsLink.addEventListener('click', (e) => {
            a2hsLink.style.display = 'none';
            deferredPrompt.prompt();
        });
    });
}