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
var CURRENT_BOOK_LOCATION = {};     // Tracks book on shelf for next/prev actions

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
  if(!IS_MODAL_OPEN){
    BODY.classList.toggle('no-scroll');
    MODAL.classList.toggle('modal__hide');
    MODAL.classList.toggle('modal__display');
    IS_MODAL_OPEN = true;
  }
}

function closeModal(book) {
  if(IS_MODAL_OPEN){
    BODY.classList.toggle('no-scroll');
    MODAL.classList.toggle('modal__hide');
    MODAL.classList.toggle('modal__display');
    IS_MODAL_OPEN = false;
  }
}

function populateModalImages(book){
  // Check relation for images
  if(book.folder && BOOK_TO_FOLDER[book.folder]){ // book_to_folder_relation.js
    var folderImages = BOOK_TO_FOLDER[book.folder];
    var featuredImage = '<div id="modal_images__featured"><img src="images/books/' + book.folder + '/' + book.folder + folderImages[0] + '" alt="" onclick="openImageViewer(this)"></div>';
    var imagesList = "";
    var count = 1;
    // Displayed by array order
    for (var image = 1; image < folderImages.length; image++){
      imagesList += '<li><img src="images/books/' + book.folder + '/' + book.folder + folderImages[image] +'" alt="" data-image-id="' + count + '" onclick="openImageViewer(this)"/></li>';
      count++;
    }
    var imagesListContainer = '<ul id="modal_images__list">' + imagesList + '</ul>';
    
    return featuredImage + imagesListContainer;
  }else{
    return '<div id="modal_images__featured" class="modal_noImages"></div>';
  }
}

function populateModalContent(book){
  let content = ""
  Object.keys(book).forEach( function(attr){
    if(book[attr]){
      // Edit below for Nuanced bood data presentation
      if(attr === 'id'){
        if(book.folder && BOOK_TO_FOLDER[book.folder] && !book.permissions){
          content += "<p id='modal_content__" + attr + "'><span class='modal_content__header'>Permissions:</span> Courtesy of Chawton House</p>";
        }
        content += "<p id='modal_content__" + attr + "'><span class='modal_content__header'>Catalogue ID:</span>"+ book[attr] + "</p>";
      }else if(attr === 'link'){
        if(book[attr] !== 'n/a'){
          content += "<p class='modal_content__link' id='modal_content__" + attr + "'><span class='modal_content__header'>" + FORMAT_ATTR_NAME[attr] +":</span><a href='"+book[attr]+"' target='_blank'>"+ book[attr] + "</p></a>";
        } 
      }else{
        let book_attribute = book[attr] === true ? "Yes" : book[attr];
        content += "<p id='modal_content__" + attr + "'><span class='modal_content__header'>" + FORMAT_ATTR_NAME[attr] +":</span>"+ book_attribute + "</p>";
      }
    }
  });
  return content;
}

// DEBUG
function highlightInWall(bookID){
  if(!CURRENT_BOOK.id){
    CURRENT_BOOK = COMPLETE_DATA[bookID];
    CURRENT_BOOK.id = bookID;
  }
  // Has added benefit of stopping next/prev book against columns
  // function erros out when element isn't found...
  document.querySelector(`#bookID-${bookID}`).classList.add("inModal");
  document.querySelector(`#bookID-${CURRENT_BOOK.id}`).classList.remove("inModal");
}

// Fills modal with relevant information from element onclick
function populateModal(bookID) {
  console.log("Populating modal: "+bookID);

  // DEBUG
  highlightInWall(bookID);

  // Grab book data
  CURRENT_BOOK = COMPLETE_DATA[bookID];
  CURRENT_BOOK.id = parseInt(bookID);

  MODAL_IMAGES.innerHTML = populateModalImages(CURRENT_BOOK);
  MODAL_CONTENT.innerHTML = populateModalContent(CURRENT_BOOK);

  // Prepopulates image viewer
  updateImageViewer();
  
  openModal();
}

// TODO:: switch to/from slips
// Bug/Feature, next book buttom stops when end of column instead of going through whole catalogue
function changeBook(direction){
  let newBookID = CURRENT_BOOK.id;
  // get adjacent books on columns
  switch(direction){
    case "next":
      newBookID++;
      break;
    case "prev":
      newBookID--;
      break;
    default:
      break;
  }

  populateModal(newBookID);
}

/*
** @image viewer
 */
function updateImageViewer(){
  image_viewer_list = Array.from(document.getElementById('modal_images').getElementsByTagName('img'));
  var title = "<h2>" + cropString(CURRENT_BOOK.title,20) + "</h2>";
  var author = "<p></p>";
  if(CURRENT_BOOK.author) author = "<p>" + CURRENT_BOOK.author + "</p>";
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

/* Polyfills */
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };
    return function from(arrayLike) {
      var C = this;
      var items = Object(arrayLike);
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }
      var len = toLength(items.length);
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  }());
}