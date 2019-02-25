const menuBar = document.querySelector('#hamb-menu');
const details =  document.querySelector('#navLinks');

menuBar.addEventListener('click', ()=> {
    menuBar.classList.toggle("change");
    if(details.style.display === 'block'){
        details.style.display = 'none';
    }else{
        details.style.display = 'block';
    };
})

$("Document").ready(function () {
    let images = ['images/dribble4.jpeg', 'images/unspash3x.jpg', 'images/unspash3x.jpg'];
    const mySlide = $(".float-icons");
    let currentIndex = 0;

    setInterval(slider, 1000);

    function slider(){
        let imagesLength = images.length;
        if (currentIndex < imagesLength -1) {
            currentIndex++;
            mySlide.attr('src', images[currentIndex]);
        }
        else {
            currentIndex === imagesLength -1;
            currentIndex = 0;
            mySlide.attr('src', images[currentIndex]);
        }
    }
});