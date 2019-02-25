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
                item.classList.add('col-md-3');
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
