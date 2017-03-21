
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

let dragged;
//listen for start of drag event on DOM event
 document.addEventListener('dragstart',
    (event) => {
      dragged = event.target;
      console.log(event.target);
    });

//when we drag over an event prevent
//default to allow a 'drop'
document.addEventListener('dragover',
    (event) => {
      event.preventDefault();
    });


//listen for drop event
 document.addEventListener('drop',
    (event) => {
      console.log('37 dragged ', dragged);
      console.log('38 event.target: ', event.target);
      let path = event.target.src.split('ImageViewer/')
      //console.log(path[path.length -1]);


    });
