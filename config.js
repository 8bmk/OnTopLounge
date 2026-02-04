const VIDEO_PATH = "purple-sky.3840x2160.mp4"; // Vérifie bien l'orthographe !

function loadVideo() {
    const video = document.getElementById('bg-video');
    const source = video.querySelector('source');
    
    source.src = VIDEO_PATH;
    video.load(); // Force le rechargement
    video.play().catch(e => console.log("Lecture auto bloquée ou erreur:", e));
}

// On lance dès que le script est chargé
loadVideo();
