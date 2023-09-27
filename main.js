

let photoDiv = document.getElementById('photos')

for(let x=0;x<3;x++){
    let catPic = document.createElement('img')
    catPic.src = 'catshark.jpg.webp'
    catPic.width = 300
    photoDiv.appendChild(catPic)
}