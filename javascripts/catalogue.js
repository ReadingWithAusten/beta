  var QUERY_INPUT_PLACEHOLDERS = [
      "Austen, Jane", "Shakespeare, William", "Homer", "Voltaire", "Swift, Jonathan", "Pope, Alexander"
  ];
  // Randomize text field placeholder
  document.getElementById('query__input_text').placeholder = QUERY_INPUT_PLACEHOLDERS[Math.floor(Math.random()*QUERY_INPUT_PLACEHOLDERS.length)];

  var RESULTS_CONTAINER = document.getElementById('query__output');
  var RESULTS_LIST = document.getElementById('query__results');
  var NUMBER_RESULTS = document.getElementById('query__number-results_container');
  var filter_images = false;
  var total_results_shown = 0;
  var number_displayed_results = 18;
  var category = "";
  var query = "";
  var query_tokens = [];
  var query_result = [];

  document.addEventListener('keypress', function(event){
      if(event.key == "Enter"){ queryCatalogue(); } 
  });

  function getFilterImages(){
    if(filter_images && query_result.length > 0){
      var resultWithImages = query_result.filter(function(bk){
        return (bk.images && (bk.images == "yes"));
      });
      renderQuery(resultWithImages, query);
    }else if(!filter_images && query_result.length > 0){
      renderQuery(query_result,query);
    }else{
      renderQuery(query_result,query);
    }
  }

  // Return first instance found
  function checkBookAttributes(book) {
      var keys = Object.keys(COMPLETE_DATA[book]);
      var result = false;
      keys.forEach(function(key){
        if(category == "date_published"){
          for(var i = 0; i < query_tokens.length; i++){
            if(queryDatePublished(COMPLETE_DATA[book], query_tokens[i])) query_result.push(COMPLETE_DATA[book]);
          }
        }else if (COMPLETE_DATA[book][key]) {
          var bk_value = COMPLETE_DATA[book][key].toString().toLowerCase();
          for(var i = 0; i < query_tokens.length; i++){
            if (bk_value.indexOf(query_tokens[i].toLowerCase()) > -1) {
              query_result.push(COMPLETE_DATA[book]);
            }
          }
        }
      });
      return result;
  }

  function tokenizeQuery(){
    if(query[0] == "\"" && query[query.length -1] == "\""){
        query_tokens.push(query.replace(new RegExp("\"",'g'),""));
      }else{
        query_tokens = query.split(' ');        
        query_tokens.push(query);
        for(var i = 0; i < query_tokens.length; i++){
          query_tokens[i] = query_tokens[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\\]/g,"");
          query_tokens[i] = query_tokens[i].replace(/\s{2,}/g," ");
        }
      }
  }

  function queryCatalogue() {
      RESULTS_LIST.innerHTML = "";
      category = document.getElementsByName('category')[0].value;
      query = document.getElementsByName('query')[0].value;
      query_tokens = [];
      tokenizeQuery();
      filter_images = document.getElementById('query__check_filterImages').checked;
      query_result = [];
      
      if (category == "all") {
          Object.keys(COMPLETE_DATA).forEach(function(book){
              if(checkBookAttributes(book)) query_result.push(COMPLETE_DATA[book]);
          });
      } else {
          // Specific Category Selected
          Object.keys(COMPLETE_DATA).forEach(function(book){
              Object.keys(COMPLETE_DATA[book]).forEach(function(key){
                  if (key.toString() == category) {
                      if(category == "date_published"){
                        for(var i = 0; i < query_tokens.length; i++){
                          if(queryDatePublished(COMPLETE_DATA[book], query_tokens[i])) query_result.push(COMPLETE_DATA[book]);
                        }
                      }else if (COMPLETE_DATA[book][key]) {
                          var bk_value = COMPLETE_DATA[book][key].toString().toLowerCase();
                          for(var i = 0; i < query_tokens.length; i++){
                            if (bk_value.indexOf(query_tokens[i].toLowerCase()) > -1) {
                              query_result.push(COMPLETE_DATA[book]);
                            }
                          }
                      }
                  }
              });
          });
      }
      
      // remove duplicate entries
      var flags = [], output = [];
      for(var i = 0; i < query_result.length; i++) {
        if( flags[query_result[i].book_id]) continue;
        flags[query_result[i].book_id] = true;
        output.push(query_result[i]);
      }
      query_result = output;
      
      //sort by book id
      query_result.sort(function(a,b){
          return a.book_id - b.book_id;
      });

      if(filter_images){ getFilterImages(); }
      else{ renderQuery(query_result, query)}; 
  }

  // Output results of query to DOM
  function renderQuery(result, query) {
      RESULTS_CONTAINER.classList.add('query_hide-output');
      setTimeout(function() {
          document.getElementById('query__show-more').classList.remove('query_hide-output');
          if (result.length == 0 || query == "") {
              console.log('Query returned no results');
              NUMBER_RESULTS.innerHTML = "<p>The query returned no books.</p>";
              document.getElementById('query__results-shown').innerHTML ="";
              document.getElementById('query__show-more').classList.add('query_hide-output');
              return;
          }
          NUMBER_RESULTS.innerHTML = "<p>Found <span id='query__number-results'>" + result.length + "</span> Books</p>";
          total_results_shown = 0;
          number_displayed_results = 18;
          if (number_displayed_results > result.length) {
              number_displayed_results = result.length;
          }
          for (var i = 0; i < number_displayed_results; i++) {
              total_results_shown++;
              var bk = result[i];
              var bookInfo = "";
              Object.keys(bk).forEach(function(attr){
                  if (bk[attr]) {
                      if (category == "all") {
                          bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + attr.replace("_", " ") + "</span>: " + highlightQuery(bk[attr]) + "</p>";
                      } else if (category == attr) {
                          if(category == 'book_id'){
                            bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category query__highlight-category'>Catalogue ID</span>: " + highlightQuery(bk[attr]) + "</p>";
                          }else{
                            bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category query__highlight-category'>" + attr.replace("_", " ") + "</span>: " + highlightQuery(bk[attr]) + "</p>";
                          }
                      } else {
                          bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + attr.replace("_", " ") + "</span>: " + bk[attr] + "</p>";
                      }
                  }
              });

              var link = makeBookViewInLibraryAnchor(bk);
              var output = "<li class='query__result_item'>" + bookInfo + "</li>";
              var wall_link = "<a href='" + link + "#bookID-" + bk.book_id + "'>" + output + "</a>";
              RESULTS_LIST.innerHTML += wall_link;
          }
          if (total_results_shown < result.length) {
            document.getElementById('query__results-shown').innerHTML = total_results_shown + " / " + result.length;
          }else if(total_results_shown == result.length){
            document.getElementById('query__results-shown').innerHTML = total_results_shown + " / " + result.length;
            document.getElementById('query__show-more').classList.add('query_hide-output');
          }
      }, 300);
      setTimeout(function() {
          RESULTS_CONTAINER.classList.remove('query_hide-output');
      }, 600);
  }

  function highlightQuery(string) {
      var output = string;
      for(var i = 0; i < query_tokens.length; i++){
        var regex = new RegExp(query_tokens[i], "gi");
        output = output.toString().replace(regex, '<span class="query__highlight">' + query_tokens[i] + '</span>');
      }      
      return output;
  }
  function showMoreResults() {
      var count = total_results_shown + number_displayed_results;
      if (count > query_result.length) {
          count = query_result.length;
      }
      console.log("Total: " + total_results_shown + " ||Displayed: " + number_displayed_results + " ||Query Length: " + query_result.length + " ||count: " + count);
      RESULTS_CONTAINER.classList.add('query_hide-output');
      setTimeout(function() {
          for (var i = total_results_shown; i < count; i++) {
              total_results_shown++;
              var bk = query_result[i];
              var bookInfo = "";
              Object.keys(bk).forEach(function(attr){
                  if (bk[attr]) {
                      if (category == "all") {
                          bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + attr.replace("_", " ") + "</span>: " + highlightQuery(bk[attr], query) + "</p>";
                      } else if (category == attr) {
                          bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category query__highlight-category'>" + attr.replace("_", " ") + "</span>: " + highlightQuery(bk[attr], query) + "</p>";
                      } else {
                          bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + attr.replace("_", " ") + "</span>: " + bk[attr] + "</p>";
                      }
                  }
              });

              var link = makeBookViewInLibraryAnchor(bk);
              var output = "<li class='query__result_item'>" + bookInfo + "</li>";
              var wall_link = "<a href='" + link + "#bookID-" + bk.book_id + "'>" + output + "</a>";
              RESULTS_LIST.innerHTML += wall_link;
          }
          if (total_results_shown < query_result.length) {
            document.getElementById('query__results-shown').innerHTML = total_results_shown + " / " + query_result.length;
          }else if(total_results_shown == query_result.length){
            document.getElementById('query__results-shown').innerHTML = total_results_shown + " / " + query_result.length;
            document.getElementById('query__show-more').classList.add('query_hide-output');
          }
      }, 300);
      setTimeout(function() {
          RESULTS_CONTAINER.classList.remove('query_hide-output');
      }, 600);
  }

  // Parses date_published string into INT
  function findDateRange(date_string){
    if(date_string){
      if(date_string.indexOf('-') > -1){
        return {
          type : "ranged",
          dates : date_string.split('-') 
        };
      }else if(date_string.indexOf(',') > -1){
        return {
          type :"multipleDates",
          dates : date_string
        };
      }else{
        var regex = /\d+/g;
        return {
          type : "normal",
          dates : parseInt(date_string.substring(date_string.search(regex)))
        };
      }
    }else{
      return{
        type: "null",
        dates: "no dates"
      };
    }
  }

  function queryDatePublished(bk,dateQuery){
    var parsed_date = findDateRange(bk.date_published);
    switch(parsed_date.type){
      case "ranged": 
        if(dateQuery >= parsed_date.dates[0] && dateQuery <= parsed_date.dates[1]) return true;
        break;
      case "multipleDates": 
        if(parsed_date.dates.indexOf(dateQuery) > -1) return true;
        break;
      case "normal": 
        if(parsed_date.dates == dateQuery) return true;
        break;
      default:
        return false;
    }
  }