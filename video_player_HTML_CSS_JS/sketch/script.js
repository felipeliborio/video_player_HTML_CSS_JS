let video = document.getElementsByClassName("video-player")[0];

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
    video.playbackRate = 1;
}

function speed_up() {
    video.playbackRate += 0.1;
}

function speed_down() {
    video.playbackRate -= 0.1;
}

function back(secs) {
    video.currentTime -= secs;
}

function forward(secs) {
    video.currentTime += secs;
}
