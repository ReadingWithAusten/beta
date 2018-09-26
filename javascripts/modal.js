// DOM Objects 
var BODY = document.getElementsByTagName('body')[0];
var MODAL = document.getElementById('modal');
var MODAL_NAV = document.getElementById('modal_nav_container');
var MODAL_CONTAINER = document.getElementById('modal_content_container')
var MODAL_IMAGES = document.getElementById('modal_images');
var MODAL_CONTENT = document.getElementById('modal_content');
var MODAL_NAV_PREV = document.getElementById('modal_nav_prev');
var MODAL_NAV_NEXT = document.getElementById('modal_nav_next');
var IMAGE_VIEWER = document.getElementById('modal_imgViewer');
var IMAGE_VIEWER_TEXT = document.getElementById('modal_imgViewer__text');

// Check values
var IS_MODAL_OPEN = false;
var IS_IMAGE_VIEWER_OPEN = false;

// Book object
var CURRENT_BOOK = new Object();
var CURRENT_BOOK_LOCATION = {};

// variables
var image_viewer_list = [];
var image_viewer_current = 0;


/* Keyboard Events */
document.addEventListener('keypress', function(event){
    var k = event.key;
    if(k == ',' || k == 'ArrowLeft'){
      if(IS_IMAGE_VIEWER_OPEN){ changeImageViewerImage('prev'); }
      else if(IS_MODAL_OPEN){ changeBook('prev'); }
    }
    if(k == '.' || k == 'ArrowRight'){
      if(IS_IMAGE_VIEWER_OPEN){ changeImageViewerImage('next'); }
      else if(IS_MODAL_OPEN){ changeBook('next'); }
    }
    if(k == 'x'){
      if(IS_IMAGE_VIEWER_OPEN){ closeImageViewer(); }
      else if(IS_MODAL_OPEN){ closeModal(); } 
    }
    if(k == ' ' && image_viewer_list.length > 0){
      if(!IS_IMAGE_VIEWER_OPEN){ 
        var image = document.getElementById('modal_images__featured').getElementsByTagName('img')[0];
        openImageViewer(image); 
      }
      else if(IS_IMAGE_VIEWER_OPEN){ 
        closeImageViewer(); 
      }
    }
});

/*
** @MODAL FUNCTIONS 
*/
function openModal(book) {
  BODY.classList.toggle('no-scroll');
  MODAL.classList.toggle('modal__hide');
  MODAL.classList.toggle('modal__display');
  IS_MODAL_OPEN = true;
}

function closeModal(book) {
  BODY.classList.toggle('no-scroll');
  MODAL.classList.toggle('modal__hide');
  MODAL.classList.toggle('modal__display');
  IS_MODAL_OPEN = false;
}

function populateModalImages(book){
  // Check relation for images
  if(book.folder_name && BOOK_TO_FOLDER[book.folder_name]){ // book_to_folder_relation.js
    var folderImages = BOOK_TO_FOLDER[book.folder_name];
    var featuredImage = '<div id="modal_images__featured"><img src="images/books/' + book.folder_name + '/' + folderImages[0] + '" alt="" onclick="openImageViewer(this)"></div>';
    var imagesList = "";
    var count = 1;
    // Displayed by array order
    for (var image = 1; image < folderImages.length; image++){
      imagesList += '<li><img src="images/books/' + book.folder_name + '/' + folderImages[image] +'" alt="" data-image-id="' + count + '" onclick="openImageViewer(this)"/></li>';
      count++;
    }
    var imagesListContainer = '<ul id="modal_images__list">' + imagesList + '</ul>';
    
    return featuredImage + imagesListContainer;
  }else{
    return '<div id="modal_images__featured" class="modal_noImages"></div>';
  }
}

function populateModalContent(book){
  var content = ""
  Object.keys(book).forEach( function(attr){
    if(book[attr]){
      // Edit below for Nuanced bood data presentation
      if(attr == 'book_id'){
        if(book.folder_name && BOOK_TO_FOLDER[book.folder_name] && !book.permissions){
          content += "<p id='modal_content__" + attr + "'><span class='modal_content__header'>Permissions:</span> Courtesy of Chawton House</p>";
        }
        content += "<p id='modal_content__" + attr + "'><span class='modal_content__header'>Catalogue ID:</span>"+ book[attr] + "</p>";
      }else if(attr == 'internet_link' || attr == 'facsimile_link'){
        if(book[attr] != 'n/a'){
          content += "<p class='modal_content__link' id='modal_content__" + attr + "'><span class='modal_content__header'>" + attr.replace("_"," ") +":</span><a href='"+book[attr]+"' target='_blank'>"+ book[attr] + "</p></a>";
        } 
      }else{
        content += "<p id='modal_content__" + attr + "'><span class='modal_content__header'>" + attr.replace("_"," ") +":</span>"+ book[attr] + "</p>";
      }
    }
  });
  return content;
}

// Discover current book and discover location on wall
function walkCaseLayout(bookID){
  Object.keys(data).forEach( function(column){
    Object.keys(data[column]).forEach( function(shelf){
      Object.keys(data[column][shelf]).forEach( function(book){
        if(data[column][shelf][book].book_id == bookID){
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
  console.log("Populating modal: "+bookID);

  // Grab book data
  walkCaseLayout(bookID);

  MODAL_IMAGES.innerHTML = populateModalImages(CURRENT_BOOK);
  MODAL_CONTENT.innerHTML = populateModalContent(CURRENT_BOOK);

  // Prepopulates image viewer
  updateImageViewer();
  
  openModal();
}

function changeBook(direction){
  // Current book location
  var col = CURRENT_BOOK_LOCATION[0];
  var sh = CURRENT_BOOK_LOCATION[1];
  var bk = CURRENT_BOOK_LOCATION[2];

  // Index of current book in data
  var column_index = Object.keys(data).indexOf(col);
  var shelf_index = Object.keys(data[col]).indexOf(sh);
  var book_index = Object.keys(data[col][sh]).indexOf(bk);
  
  // Items in of column/shelf
  var column_length = Object.keys(data).length;
  var shelf_length = Object.keys(data[col]).length;
  var book_length = Object.keys(data[col][sh]).length;

  switch(direction){
    case 'next':{
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
            column_index = column_length;
            shelf_index = shelf_length;
            book_index = book_length;
          }
        }
      }
      break;
    };
    case 'prev':{
      if((book_index - 1) >= 0){
        book_index--;
      }else{
        if((shelf_index - 1) >= 0){
          shelf_index--;
          var c = Object.keys(data)[column_index];
          var s = Object.keys(data[c])[shelf_index];
          book_index = Object.keys(data[c][s]).length - 1;
        }else{
          if((column_index - 1) >= 0){
            column_index--;
            var c = Object.keys(data)[column_index];
            shelf_index = Object.keys(data[c]).length - 1;

            var s = Object.keys(data[c])[shelf_index];
            book_index = Object.keys(data[c][s]).length - 1;
          }
          else{
            // First book
            book_index = shelf_index = column_index = 0;
          }
        }
      }
      break;
    };
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
  updateImageViewer();
}

/*
** @image viewer
 */
function updateImageViewer(){
  image_viewer_list = Array.from(document.getElementById('modal_images').getElementsByTagName('img'));
  var title = "<h2>" + cropString(CURRENT_BOOK.title,20) + "</h2>";
  var author = "<p>" + CURRENT_BOOK.author + "</p>";
  IMAGE_VIEWER_TEXT.innerHTML = title + author;
}

function openImageViewer(image) {  
  image_viewer_current = image_viewer_list.indexOf(image);
  var image_viewer_image = "<img src='" + image_viewer_list[image_viewer_current].src + "'>";

  document.getElementById('modal_imgViewer__content').innerHTML = image_viewer_image + IMAGE_VIEWER_TEXT.outerHTML;

  //Hide other modal content
  MODAL_CONTAINER.classList.toggle('modal__hide');
  MODAL_CONTAINER.classList.toggle('modal__display');
  MODAL_NAV.classList.toggle('modal__hide');
  MODAL_CONTAINER.classList.toggle('modal__display');

  IMAGE_VIEWER.classList.toggle('modal__hide');
  IMAGE_VIEWER.classList.toggle('modal__display');

  IS_IMAGE_VIEWER_OPEN = true;
}

function closeImageViewer() {
  IMAGE_VIEWER.classList.toggle('modal__hide');
  IMAGE_VIEWER.classList.toggle('modal__display');

  //Display regular content
  MODAL_CONTAINER.classList.toggle('modal__hide');
  MODAL_CONTAINER.classList.toggle('modal__display');
  MODAL_NAV.classList.toggle('modal__hide');
  MODAL_CONTAINER.classList.toggle('modal__display');

  IS_IMAGE_VIEWER_OPEN = false;
}

function changeImageViewerImage(direction) {
  if(IS_IMAGE_VIEWER_OPEN){
    switch (direction) {
      case 'prev':{
          image_viewer_current--;
          if(image_viewer_current <= 0) image_viewer_current = image_viewer_list.length;
          break;
        };
      case 'next':{
          image_viewer_current++;
          if(image_viewer_current >= image_viewer_list.length) image_viewer_current = 0;
          break;
        };
    }
    var text = IMAGE_VIEWER_TEXT.outerHTML;
    var DOMelement = document.getElementById('modal_imgViewer__content')
    DOMelement.innerHTML = "<img src='" + image_viewer_list[image_viewer_current].src + "'>" + text;
  }
}
