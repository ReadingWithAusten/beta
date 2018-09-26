  var stock_spines = {
      1: "stock-gray-1vol.png",
      2: "stock-gray-2vol.png",
      3: "stock-gray-3vol.png",
      4: "stock-gray-4vol.png",
      5: "stock-gray-5vol.png",
      6: "stock-gray-6vol.png",
      7: "stock-gray-7vol.png",
      8: "stock-gray-7vol.png",
      9: "stock-gray-9vol.png",
      10: "stock-gray-10vol.png",
      11: "stock-gray-11vol.png",
      14: "stock-gray-14vol.png",
      16: "stock-gray-16vol.png",
      19: "stock-gray-20vol.png",
      20: "stock-gray-20vol.png",
      25: "stock-gray-25vol.png",
  };  

  // Create link to section, opens book modal
  function makeBookViewInLibraryAnchor(bk) {
      var wall = bk["location"].toLowerCase().substring(0, bk["location"].toLowerCase().search(" case:")).replace(" ", "-");
      var section = bk["location"].substring(bk["location"].search(",") - 1, bk["location"].search(","));
      if (bk["location"].toLowerCase().search('slip') > -1) {
          section = 2;
      } else if (bk["location"].toLowerCase().search('column') > -1) {
          if (section == 1 || section == 2) section = 'left';
          if (section == 3) section = 'centre';
          if (section == 4 || section == 5) section = 'right';
      }
      return wall + "-wall-" + section + ".html?book-id=" + bk["book_id"];
  }

  // Reduce size of string
  function cropString(_string, length) {
      if (!_string) return "Unavailable";
      var new_string = _string.split(' ');
      var max_length = length;
      if (new_string.length > max_length) {
          new_string = new_string.slice(0, max_length).join(" ") + "...";
      } else {
          new_string = new_string.slice(0, _string.length).join(" ");
      }
      return new_string;
  }

  function removeSpinner(){
    document.getElementById('spinner').style.opacity = '0';
    setTimeout(function(){ 
      document.getElementById('spinner').style.display = 'none';  
    }, 800);
  }

  // Fade-in content areas
  window.addEventListener('load', function(event) {
      document.getElementById('content_body').classList.toggle('show-body');
      var nav_secondary = document.getElementById('nav_secondary__container');
      var nav_tertiary = document.getElementById('nav_tertiary__container');
      if(nav_secondary){
        nav_secondary.classList.toggle('show-body');
        nav_tertiary.classList.toggle('show-body');
      }
      var column_container = document.getElementById('column_container');
      if (column_container) {
          column_container.classList.toggle('show-body');
      }
      var URL_BOOK_ID = getParameterByName('book-id');
      if (URL_BOOK_ID) {
          populateModal(URL_BOOK_ID);
          document.getElementById('bookID-' + URL_BOOK_ID).classList.toggle('url_queried_book');
      }
      removeSpinner();
  });

  // Checks for url queries
  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Turns off Animations
  function toggleAnimation() {
      document.getElementsByTagName('body')[0].classList.toggle('transitions-off');
      document.getElementById('nav_accessability__pause').classList.toggle('nav_acccessability__hide');
      document.getElementById('nav_accessability__play').classList.toggle('nav_acccessability__hide');
  }