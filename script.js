const audio = document.getElementById('custom-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const volumeSlider = document.getElementById('volume-slider');


function updatePlayPauseIcon() {
    if (audio.paused) {
        playIcon.style.display = '';
        pauseIcon.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = '';
    }
}

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    updatePlayPauseIcon();
});

audio.addEventListener('play', updatePlayPauseIcon);
audio.addEventListener('pause', updatePlayPauseIcon);

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// Inicializa icono y volumen
updatePlayPauseIcon();
audio.volume = volumeSlider.value;