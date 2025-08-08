const audio = document.getElementById('audio');
const playPause = document.getElementById('play-pause');
const volume = document.getElementById('volume');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

function updateIcons() {
    if (audio.paused) {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    }
}

playPause.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    updateIcons();
});

audio.addEventListener('play', updateIcons);
audio.addEventListener('pause', updateIcons);

volume.addEventListener('input', () => {
    audio.volume = volume.value;
});

updateIcons();