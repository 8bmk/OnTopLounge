// Change juste le nom du fichier ici pour tout mettre à jour d'un coup
const VIDEO_PATH = "purple-sky.3840x2160.mp4";

document.addEventListener("DOMContentLoaded", () => {
    const bgVideo = document.querySelector("#bg-video source");
    if (bgVideo) {
        bgVideo.src = VIDEO_PATH;
        bgVideo.parentElement.load(); // Recharge la vidéo avec la nouvelle source
    }
});
