/*
Requires
- book_folder_relations.js: lists what images are available per folder_name
- modal.css for stylings
- (east)case_data.js to reference available books for that shelf
- the images are being populated correctly
- added css class that defines no images
- next and previous don't work properly
  - how are we defining next and previous books
  - by book id? by place in the data array?
 */

let MODAL = document.getElementById('modal');
let MODAL_NAV = document.getElementById('modal_nav_container');
let MODAL_CONTAINER = document.getElementById('modal_content_container')
let MODAL_IMAGES = document.getElementById('modal_images');
let MODAL_CONTENT = document.getElementById('modal_content');
let MODAL_NAV_PREV = document.getElementById('modal_nav_prev');
let MODAL_NAV_NEXT = document.getElementById('modal_nav_next');
let IMAGE_VIEWER = document.getElementById('modal_imgViewer');
let CURRENT_BOOK = new Object();
let CURRENT_BOOK_LOCATION = {};

function openModal(book) {
  document.getElementsByTagName('body')[0].classList.toggle('no-scroll');
  MODAL.classList.toggle('modal__hide');
  MODAL.classList.toggle('modal__display');
}

function closeModal(book) {
  document.getElementsByTagName('body')[0].classList.toggle('no-scroll');
  MODAL.classList.toggle('modal__display');
  MODAL.classList.toggle('modal__hide');
}

function populateModalImages(book){
  // Do images exist for this book?
  if(book.folder_name && BOOK_TO_FOLDER[book.folder_name]){
    let folderImages = BOOK_TO_FOLDER[book.folder_name];
    let featuredImage = '<div id="modal_images__featured"><img src="images/books/' + book.folder_name + '/' + folderImages[0] + '" alt="" onclick="openImageViewer(this)"></div>';
    let imagesList = "";
    let count = 1;
    for (let image = 1; image < folderImages.length; image++){
      imagesList += '<li><img src="images/books/' + book.folder_name + '/' + folderImages[image] +'" alt="" data-image-id="' + count + '" onclick="openImageViewer(this)"/></li>';
      count++;
    }
    let imagesListContainer = '<ul id="modal_images__list">' + imagesList + '</ul>';
    
    return featuredImage + imagesListContainer;
  }else{
    return '<div id="modal_images__featured" class="modal_noImages"></div>';
  }
  
}

function populateModalContent(book){
  let content = ""
  Object.keys(CURRENT_BOOK).forEach( attr =>{
    if(CURRENT_BOOK[attr]){
      if(attr == "internet_link"){
        content += '<a href="' + CURRENT_BOOK.internet_link + '" target="_break"><p id="modal_content__link">' + CURRENT_BOOK.internet_link + '</p></a>';
      }else{
        content += "<p id='modal_content__" + attr + "'><span class='modal_content__header'>" + attr.replace("_"," ") +":</span>"+ CURRENT_BOOK[attr] + "</p>";
      }
    }
  });
  return content;
}

/* For walking through -CASE_LAYOUT.js*/
function walkCaseLayout(bookID){
  Object.keys(data).forEach( column =>{
    Object.keys(data[column]).forEach( shelf =>{
      Object.keys(data[column][shelf]).forEach( book =>{
        if(data[column][shelf][book].id == bookID){
          CURRENT_BOOK = data[column][shelf][book];
          CURRENT_BOOK_LOCATION[0] = column;
          CURRENT_BOOK_LOCATION[1] = shelf;
          CURRENT_BOOK_LOCATION[2] = book;
          return;
        };
      });
    });
  });
}

// Fills modal with relevant information from element onclick
function populateModal(bookID) {
  console.log("populating modal");

  // Grab book data
  walkCaseLayout(bookID);

  /* For walking through -case_data.js
  CURRENT_BOOK = data.filter( book =>{
    if(book.id == bookID) return book;
  });
  
  // use first element of filtered array
  CURRENT_BOOK = CURRENT_BOOK[0];
  
  */

  MODAL_IMAGES.innerHTML = populateModalImages(CURRENT_BOOK);
  MODAL_CONTENT.innerHTML = populateModalContent(CURRENT_BOOK);
  openModal();
}

// To switch featured image with one on list - not being used
function changeImage(img) {
  let featured_container = document.getElementById('modal_images__featured');
  let images_list_location = img.parentElement;
  let featured_image = featured_container.getElementsByTagName('img')[0];

  //reregister new events
  featured_image.setAttribute("onclick", "changeImage(this)");
  img.setAttribute("onclick", "openImageViewer(this)");

  //fade not working
  images_list_location.classList.add('fade_image_out');
  featured_container.classList.add('fade_image_out');
  
  // Allow fade-in-out of imgs
  setTimeout(() => {
    images_list_location.innerHTML = featured_image.outerHTML;
    featured_container.innerHTML = img.outerHTML;
    images_list_location.classList.remove('fade_image_out');
    featured_container.classList.remove('fade_image_out');
  }, 300);
}

// To show zoomed-in featured image
function openImageViewer(image) {
  let imgViewer_text = document.getElementById('modal_imgViewer__text');
  let imgViewer_image = image.outerHTML;
  let title = "<h2>" + cropString(CURRENT_BOOK.title) + "</h2>";
  let author = "<p>" + CURRENT_BOOK.author + "</p>";
  
  imgViewer_text.innerHTML = title + author;
  
  document.getElementById('modal_imgViewer__content').innerHTML = imgViewer_image + imgViewer_text.outerHTML;

  //Hide other modal content
  MODAL_CONTAINER.classList.toggle('modal__hide');
  MODAL_CONTAINER.classList.toggle('modal__display');
  MODAL_NAV.classList.toggle('modal__hide');
  MODAL_CONTAINER.classList.toggle('modal__display');

  IMAGE_VIEWER.classList.toggle('modal__hide');
  IMAGE_VIEWER.classList.toggle('modal__display');
}

function closeImageViewer() {
  IMAGE_VIEWER.classList.toggle('modal__hide');
  IMAGE_VIEWER.classList.toggle('modal__display');

  //Display regular content
  MODAL_CONTAINER.classList.toggle('modal__hide');
  MODAL_CONTAINER.classList.toggle('modal__display');
  MODAL_NAV.classList.toggle('modal__hide');
  MODAL_CONTAINER.classList.toggle('modal__display');
}

function changeImageViewerImage(direction) {
  // grab list of images
  let images_list = Array.from(document.getElementById('modal_images__list').getElementsByTagName('img'));
  let current_image = document.getElementById('modal_imgViewer__content').getElementsByTagName('img')[0];
  let imgViewer_text = document.getElementById('modal_imgViewer__text');
  //current_image.setAttribute('onclick','changeImage(this)'); 
  
  switch (direction) {
    case 'prev':{
        images_list.unshift(current_image);
        let new_image = images_list.pop();
        new_image.setAttribute('onclick','openImageViewer(this)');
        let featured_container = document.getElementById('modal_images__featured');
        featured_container.innerHTML = new_image.outerHTML;  
        document.getElementById('modal_imgViewer__content').innerHTML = new_image.outerHTML + imgViewer_text.outerHTML;
        break;
      }
    case 'next':{
        images_list.push(current_image);
        let new_image = images_list.shift();
        new_image.setAttribute('onclick','openImageViewer(this)');
        let featured_container = document.getElementById('modal_images__featured');        
        featured_container.innerHTML = new_image.outerHTML;
        document.getElementById('modal_imgViewer__content').innerHTML = new_image.outerHTML + imgViewer_text.outerHTML;
        break;
      }
  }
  
  //Empty images list and repopulate
  /* Turned off switching of image position
  document.getElementById('modal_images__list').innerHTML = "";
  images_list.forEach(img => {
    document.getElementById('modal_images__list').innerHTML += "<li>" + img.outerHTML + "</li>";
  });
  */
}

function nextBook() {
  let col = CURRENT_BOOK_LOCATION[0];
  let sh = CURRENT_BOOK_LOCATION[1];
  let bk = CURRENT_BOOK_LOCATION[2];

  let column_index = Object.keys(data).indexOf(col);
  let shelf_index = Object.keys(data[col]).indexOf(sh);
  let book_index = Object.keys(data[col][sh]).indexOf(bk);
  
  let column_length = Object.keys(data).length;
  let shelf_length = Object.keys(data[col]).length;
  let book_length = Object.keys(data[col][sh]).length;

  // Defines index of next book, checks if overflows to next shelf - hurts my brain
  if((book_index + 1) < book_length){
    book_index++;
  }else{
    book_index = 0;
    if((shelf_index + 1) < shelf_length){
      shelf_index++;
    }else{
      shelf_index = 0;
      if((column_index + 1) < column_length){
        column_index++;
      }else{
        column_index = column_length - 1;
        shelf_index = shelf_length - 1;
        book_index = book_length - 1;
      }
    }
  }

  col = Object.keys(data)[column_index];
  sh = Object.keys(data[col])[shelf_index];
  bk = Object.keys(data[col][sh])[book_index];
  
  CURRENT_BOOK_LOCATION[0] = col;
  CURRENT_BOOK_LOCATION[1] = sh;
  CURRENT_BOOK_LOCATION[2] = bk;

  CURRENT_BOOK = data[col][sh][bk];
  
  MODAL_IMAGES.innerHTML = populateModalImages(CURRENT_BOOK);
  MODAL_CONTENT.innerHTML = populateModalContent(CURRENT_BOOK);
}

function previousBook() {
  let col = CURRENT_BOOK_LOCATION[0];
  let sh = CURRENT_BOOK_LOCATION[1];
  let bk = CURRENT_BOOK_LOCATION[2];

  let column_index = Object.keys(data).indexOf(col);
  let shelf_index = Object.keys(data[col]).indexOf(sh);
  let book_index = Object.keys(data[col][sh]).indexOf(bk);
  
  let column_length = Object.keys(data).length;
  let shelf_length = Object.keys(data[col]).length;

  // Defines index of next book, checks if overflows to next shelf - hurts my brain
  if(book_index - 1 >= 0){
    book_index--;
  }else{ 
    if(shelf_index - 1 >= 0){
      shelf_index--;
      book_index = Object.keys(data[col])[shelf_index].length - 1;
    }else{
      if(column_index - 1 >= 0){
        column_index--;
        shelf_index = Object.keys(data)[column_index].length - 1;
        book_index = Object.keys(data[col])[shelf_index].length - 1;
      }else{
        column_index = 0;
        shelf_index = 0;
        book_index = 0; 
      }
    }
  }

  col = Object.keys(data)[column_index];
  sh = Object.keys(data[col])[shelf_index];
  bk = Object.keys(data[col][sh])[book_index];
  
  CURRENT_BOOK_LOCATION[0] = col;
  CURRENT_BOOK_LOCATION[1] = sh;
  CURRENT_BOOK_LOCATION[2] = bk;

  CURRENT_BOOK = data[col][sh][bk];
  
  MODAL_IMAGES.innerHTML = populateModalImages(CURRENT_BOOK);
  MODAL_CONTENT.innerHTML = populateModalContent(CURRENT_BOOK);
}