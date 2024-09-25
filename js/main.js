let videoInit = (selector) => {

    let videos = document.querySelectorAll(selector);

    if (videos.length > 0) {
        videos.forEach(video => {
            videoGenerate(video);
        });
    }
}

let videoGenerate = (video) => {
    let btn = video.querySelector('.reviews-video__button');
    let videoID = btn.dataset.video;
    let conteiner = video.querySelector('.reviews-video__movie');

    btn.addEventListener('click', () => {
        let iframe = iframeGenerate(videoID);
        conteiner.innerHTML = '';
        conteiner.appendChild(iframe);
    });
}

let iframeGenerate = (videoID) => {

    let iframe = document.createElement('iframe');

    let src = `https://www.youtube.com/embed/${videoID}?rel=0&showinfo=0&autoplay=1`;

    iframe.setAttribute('src', src);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay');
    iframe.classList.add('reviews-video__picture');

    return iframe;
};

videoInit('.reviews-video__item');

// для сторінки project_mini

let fullImg = document.querySelector('.house-mini__big-img > img');
let smallImgs = document.querySelectorAll('.house-mini__small-img > img');

smallImgs.forEach( function(smallImg) {
    smallImg.addEventListener('click', function() {
        fullImg.src = smallImg.src;
    });
});



document.querySelector('.navbar__btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.navbar__list').classList.toggle('open');
    document.querySelector('.header__section').classList.toggle('active');
})

const linkPopups = document.querySelectorAll(".linkPopup");
const popup = document.querySelector("#popup");
const cross = document.querySelector("#cross");
const linkPopupArray = Array.from(linkPopups);

linkPopupArray.forEach(function(linkPopup) {
    linkPopup.addEventListener('click', function() {
        popup.style.display = "block";
    });
});

cross.addEventListener('click', function() {
    popup.style.display = "none";
});