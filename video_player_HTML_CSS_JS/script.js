let videoContainers = document.getElementsByClassName("vid-container");

for (let vc of videoContainers) {
    let src = vc.dataset.src;
    let video = document.createElement("video");
    video.className = "video";
    video.src = src;

    vc.appendChild(video);

    let controls = document.createElement("div");
    controls.className = "control";

    controls.appendChild(createBtn("./assets/btns/play.png", play, video));
    controls.appendChild(createBtn("./assets/btns/stop.png", stop, video));
    controls.appendChild(createBtn("./assets/btns/speed_down.png", speed_down, video));
    controls.appendChild(createBtn("./assets/btns/speed_up.png", speed_up, video));
    controls.appendChild(createBtn("./assets/btns/back.png", back, video));
    controls.appendChild(createBtn("./assets/btns/forward.png", forward, video));
    
    vc.appendChild(controls);

    vc.addEventListener("mouseenter", showControl);
    vc.addEventListener("mouseleave", hideControl);
}

function showControl(e) {
    let container = e.target;
    let children = container.children;
    let control = children[children.length -1];
    control.style.display = "block";
}

function hideControl(e) {
    let container = e.target;
    let children = container.children;
    let control = children[children.length -1];
    control.style.display = "none";
}

function createBtn(imgSrc, f, video) {
    let btn = document.createElement("img");
    btn.className = "btn";
    btn.src = imgSrc;
    btn.addEventListener("click", f.bind(video));
    return btn;
}

function play(e) {
    if (this.paused) {
        e.target.src = "./assets/btns/pause.png";
        this.play();
    } else {
        this.pause();
        e.target.src = "./assets/btns/play.png";
    }
}

function stop() {
    this.pause();
    this.currentTime = 0;
    this.playbackRate = 1;
}

function speed_up() {
    this.playbackRate += 0.1;
}

function speed_down() {
    this.playbackRate -= 0.1;
}

function back() {
    this.currentTime -= 10;
}

function forward() {
    this.currentTime += 10;
}
