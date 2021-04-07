document.addEventListener("DOMContentLoaded", function(){
    fetchIMG();
    fetchBreed();
    deleteNotMatching();
});

function fetchIMG() {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgURL)
    .then(resp => resp.json())
    //.then(json => console.log(json))
    .then(json => renderIMG(json))
}

function renderIMG(imgs) {

    imgs.message.forEach(img  => {
        let the_img = document.createElement('img');
        the_img.src = img;
        document.getElementById("dog-image-container").appendChild(the_img)
    })
}

function fetchBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
    fetch(breedUrl)
    .then(resp => resp.json())
    //.then(json => console.log(json))

    .then(json => renderBreed(json))

}

function renderBreed(breeds) {
    Object.keys(breeds.message).forEach(breed  => {
        let the_breed = document.createElement('li');
        the_breed.innerText = breed;
        the_breed.addEventListener('click', function(e) { 
            the_breed.style.color = 'red'
        })
        document.getElementById("dog-breeds").appendChild(the_breed)
    })
    //let lis = document.getElementsByTagName('li');
    //for (i = 0; i < lis.length; i++){
    //    if (lis.item(i).innerHTML[0] != document.getElementById('breed-dropdown').value) {
    //        lis.item(i).style.display = 'none'
    //    } else {
    //        delete lis.item(i).style.display 
    //    }
    //}
    breed_dropdown = document.getElementById('breed-dropdown')
    breed_dropdown.addEventListener('change', function() {
        let lis = document.getElementsByTagName('li');
        for (i = 0; i < lis.length; i++){
            if (lis.item(i).innerHTML[0] != document.getElementById('breed-dropdown').value) {
                lis.item(i).style.display = 'none'
            } else {
                lis.item(i).style.display = 'list-item'
            }
        }
    })
}


function deleteNotMatching () {
    let breed_drop = document.getElementById('breed-dropdown');
    let lis = document.getElementsByTagName('li');
}