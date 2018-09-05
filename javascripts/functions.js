  /*
  let stock_spines = {
      1: "stock-colour-1vol.png",
      2: "stock-colour-2vol.png",
      3: "stock-colour-3vol.png",
      4: "stock-colour-4vol.png",
      5: "stock-colour-5vol.png",
      6: "stock-colour-6vol.png",
      7: "stock-colour-7vol.png",
      8: "stock-colour-8vol.png",
      9: "stock-colour-9vol.png",
      10: "stock-colour-10vol.png",
      11: "stock-colour-11vol.png",
      14: "stock-colour-14vol.png",
      16: "stock-colour-16vol.png",
      20: "stock-colour-20vol.png",
      25: "stock-colour-25vol.png",
  };
  */
  let stock_spines = {
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
      let wall = bk["location"].toLowerCase().substring(0, bk["location"].toLowerCase().search(" case:")).replace(" ", "-");
      let number = bk["location"].substring(bk["location"].search(",") - 1, bk["location"].search(","));
      if (bk["location"].toLowerCase().search('slip') > -1) {
          number = 2;
      } else if (bk["location"].toLowerCase().search('column') > -1) {
          if (number == 1 || number == 2) number = 1;
          if (number == 3) number = 2;
          if (number == 4 || number == 5) number = 3;
      }
      return wall + "-section-" + number + ".html?book-id=" + bk["book_id"];
  }

  //Changes font on Header Title Click
  const font = document.getElementById('nav_primary__container');
  let fonts = ["font__lusitana","font__baskerville","font__times","font__serif"];
  let current_font = 0;
  document.getElementById('content_body').classList.toggle(fonts[current_font]);
  font.addEventListener('click', event =>{
    console.log(fonts[current_font])
    document.getElementById('content_body').classList.toggle(fonts[current_font]);
    current_font++;
    current_font == fonts.length ? current_font = 0 : "";    
    document.getElementById('content_body').classList.toggle(fonts[current_font]);
  });

  // Reduce size of string
  function cropString(_string = "", length = 25) {
      if (!_string) return "Unavailable";
      let new_string = _string.split(' ');
      let max_length = length;
      if (new_string.length > max_length) {
          new_string = new_string.slice(0, max_length).join(" ") + "...";
      } else {
          new_string = new_string.slice(0, _string.length).join(" ");
      }
      return new_string;
  }

  // Fade-in content areas
  window.addEventListener('load', function(event) {
      document.getElementById('content_body').classList.toggle('show-body');
      document.getElementById('nav_secondary__container').classList.toggle('show-body');
      document.getElementById('nav_tertiary__container').classList.toggle('show-body');
      let column_container = document.getElementById('column_container');
      if (column_container) {
          column_container.classList.toggle('show-body');
      }
      let URL_BOOK_ID = getParameterByName('book-id');
      if (URL_BOOK_ID) {
          populateModal(URL_BOOK_ID);
          document.getElementById('bookID-' + URL_BOOK_ID).classList.toggle('url_queried_book');
      }
      let QUERY_TEXTBOX = document.getElementById('query__input_text');
      if (QUERY_TEXTBOX) {
          let placeholder = QUERY_INPUT_PLACEHOLDERS[Math.floor(Math.random() * QUERY_INPUT_PLACEHOLDERS.length)];
          QUERY_TEXTBOX.value = placeholder;
          QUERY_TEXTBOX.placeholder = placeholder;
      }
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