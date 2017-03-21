
let images = ['pictures/1.png','pictures/10.png','pictures/11.png',
'pictures/12.png','pictures/2.png','pictures/3.png',
'pictures/4.png','pictures/5.png','pictures/6.png',
'pictures/7.png','pictures/8.png','pictures/9.png'
];

(() => {
  console.log('9');

  images.forEach((image) => {
    let currentImage = document.createElement('img');
    currentImage.src = image;
    currentImage.class = 'photo';
    document.getElementById('mainDisplay').append(currentImage);
  })

})()

//listen for a drag event on DOM event
 document.addEventListener('dragstart',
    (event) => {
      console.log(event.target);
    });

 document.addEventListener('dragenter',
    (event) => {

      console.log(event.target);
    });
