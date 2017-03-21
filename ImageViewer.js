
/*
  array of images
*/

let images = ['pictures/1.png','pictures/10.png','pictures/11.png',
'pictures/12.png','pictures/2.png','pictures/3.png',
'pictures/4.png','pictures/5.png','pictures/6.png',
'pictures/7.png','pictures/8.png','pictures/9.png'
];

/*
  variable which will bet set to our clicked
  image
*/
let dragged;

//loop thru images array and append to container
function renderImgs() {
  document.getElementById('mainDisplay').innerHTML = '';
  images.forEach((image) => {
    let currentImage = document.createElement('img');
    currentImage.src = image;
    currentImage.class = 'photo';
    document.getElementById('mainDisplay').append(currentImage);
  })
}

/*
  Handle Image insertion

*/
function insertImage() {
  let path = getLocalPath(event);
  let draggedPath = getLocalPath(dragged);
  let idx = images.indexOf(path);
  let draggedIdx = images.indexOf(draggedPath)
  images.splice(draggedIdx, 1);
  images.splice(idx, 0, draggedPath);

}

/*
parse path from click handler
into relative path
*/
function getLocalPath(event) {
  let path = event.target.src.split('ImageViewer/');
  let relPath = path[path.length - 1];
  return relPath;
}

/*
  Event Listeners

*/
document.addEventListener('dragstart',
  (event) => {
    dragged = event;
  });
/*
when we drag over an event prevent
default in order to allow a 'drop'
*/
document.addEventListener('dragover',
  (event) => {
    event.preventDefault();
  });

/*
  listen for drop event
  insert the image into the array
  rerender the list of images
*/
document.addEventListener('drop',
  (event) => {
    insertImage(event);
    renderImgs();
  });

/*on page load, load our images into our container
*/
(() => {
  renderImgs();
})()

