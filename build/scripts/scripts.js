let menuBar = document.querySelector('#hamb-menu');
let details =  document.querySelector('#navLinks');

menuBar.addEventListener('click', ()=> {
    menuBar.classList.toggle("change");
    if(details.style.display === 'block'){
        details.style.display = 'none';
    }else{
        details.style.display = 'block';
    };
})

$("Document").ready(function () {
    let images = ['..images/dribble4.jpeg', '..images/unspash3x.jpg', '..images/iphonex.jpg'];
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
document.addEventListener('DOMContentLoaded', () => {
let list = document.querySelector(".list");

    async function getUsers() {
        const resp = await fetch('https://randomuser.me/api?result=6');
        const data = await resp.json();
        console.log(data);
        return data.result;
    }

    getUsers()
        .then(data => {
            data.forEach(element => {
                let item = document.createElement("li");
                item.classList.add('col-sm-2');
                item.classList.add('card');
                item.classList.add('text-center');
                

                item.innerHTML = element.name;
                list.appendChild(item);

                let images = document.createElement("img");
                images.setAttribute('src', element.img);
                item.appendChild(images);
            })
        })
        console.log(element);
        

})
