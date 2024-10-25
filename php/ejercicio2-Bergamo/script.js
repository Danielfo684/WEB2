let videos = [
    { //vídeo 0
        url: 'https://www.youtube.com/embed/PSV63X-dGS4?si=gdpevf7wv17jZvsS',
        text_one: '¿Música tranquila?',
        text_two: '¿Solo de guitarra?',
        target_one: 1, //vídeo 1
        target_two: 2 //vídeo 2
    },
    { //vídeo 1
        url: 'https://www.youtube.com/embed/WN89dOx_KVo?si=p9U1tcIJsj4uFY1u',
        text_one: 'Option 1 video 1',
        text_two: 'Option 2 video 1',
        target_one: 0, //fin
        target_two: 0 //fin
    },
    { //vídeo 2
        url: 'https://www.youtube.com/embed/i8A849ZvOAE?si=vLOUeS8jVffAyvCO',
        text_one: 'Option 1 video 2',
        text_two: 'Option 2 video 2',
        target_one: 3, //vídeo 3
        target_two: 0 //fin
    },
    { //vídeo 3
        url: 'https://www.youtube.com/embed/dmSbahgZZ2U?si=Ui40vMnqQWuqRF7B',
        text_one: 'Option 1 video 3',
        text_two: 'Option 2 video 3',
        target_one: 0, //fin
        target_two: 0 //fin
    },
];

let assignedVideo = 0;
let nowVideo = videos[assignedVideo];

function showVideo() {
    nowVideo = videos[assignedVideo];
    document.getElementById('video').src = videos[assignedVideo].url;
    document.getElementById('opt1-btn').textContent = nowVideo.text_one;
    document.getElementById('opt2-btn').textContent = nowVideo.text_two;
}

// buttons
document.getElementById('opt1-btn').addEventListener('click', () => {
    assignedVideo = videos[assignedVideo].target_one;
    if (assignedVideo === 0) {
        document.getElementById('button-restart').style.display = 'block';
        document.getElementById('opt1-btn').style.display = 'none';
        document.getElementById('opt2-btn').style.display = 'none';
    }
    else { showVideo(); }
});

document.getElementById('opt2-btn').addEventListener('click', () => {
    assignedVideo = videos[assignedVideo].target_two;
    showVideo();
});

document.getElementById('button-restart').addEventListener('click', () => {
    assignedVideo = 0;
    showVideo();
}
);

window.onload = showVideo;