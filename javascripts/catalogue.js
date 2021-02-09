const QUERY_INPUT_PLACEHOLDERS = [
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

function pushBookToResults(book, id){
    book["id"] = id;        // If found, add ID as param to book object
    query_result.push(book);  
}

// Return first instance found
function checkBookAttributes(book, id) {
    var keys = Object.keys(book);
    keys.forEach(function(key){
      if(category == "pub_date"){
        for(var i = 0; i < query_tokens.length; i++){
          if(queryDatePublished(book, query_tokens[i])){
            pushBookToResults(book, id);
          } 
        }
      }else if (book[key]) {
        var bk_value = book[key].toString().toLowerCase();
        for(var i = 0; i < query_tokens.length; i++){
          // For each value, check if token exists within it
          if (bk_value.indexOf(query_tokens[i].toLowerCase()) > -1) {
            pushBookToResults(book, id);
          }
        }
      }
    });
}

// Turns inputs into tokens and normalizes them
// TODO:: refactor to accept query and return array of tokens
function tokenizeQuery(){
  if(query[0] == "\"" && query[query.length -1] == "\""){
      query_tokens.push(query.replace(new RegExp("\"",'g'),""));  //remove quotes
    }else{
      query_tokens = query.split(' ');        
      query_tokens.push(query);
      for(var i = 0; i < query_tokens.length; i++){
        query_tokens[i] = query_tokens[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\\]/g,"");   // remove special characters
        query_tokens[i] = query_tokens[i].replace(/\s{2,}/g," "); // ?
      }
    }
}

// TODO:: redo and optimize
function queryCatalogue() {
    RESULTS_LIST.innerHTML = "";
    category = document.getElementsByName('category')[0].value;
    query = document.getElementsByName('query')[0].value;
    query_tokens = [];
    tokenizeQuery();
    filter_images = document.getElementById('query__check_filterImages').checked;
    query_result = [];
    
    if (category == "all") {
        Object.keys(COMPLETE_DATA).forEach(function(id){
            checkBookAttributes(COMPLETE_DATA[id], id);
        });
    } else {
        // Specific Category Selected
        // TODO:: place this into checkBookAttributes, this is repeated
        if(category === "id"){
          query_tokens.forEach(token =>{
            if(COMPLETE_DATA[token]) pushBookToResults(COMPLETE_DATA[token], token)
          })
        }else{
          Object.keys(COMPLETE_DATA).forEach( id => {
              let book = COMPLETE_DATA[id];
              Object.keys(book).forEach( key =>{
                  if (key.toString() == category) {
                      if(category == "pub_date"){
                        for(var i = 0; i < query_tokens.length; i++){
                          if(queryDatePublished(book, query_tokens[i])) pushBookToResults(book, id);
                        }
                      }
                      else{
                          var bk_value = book[key].toString().toLowerCase();
                          for(var i = 0; i < query_tokens.length; i++){
                            if (bk_value.indexOf(query_tokens[i].toLowerCase()) > -1) {
                              pushBookToResults(book, id);                           
                              break;
                            }
                          }
                      }
                  }
              });
          });
        }
    }
    
    // remove duplicate entries
    // note: duplicate entries b/c book is added for every instance found per attribute
    // TODO:: return book once instance found, parse book during printout
    var flags = [], output = [];
    for(var i = 0; i < query_result.length; i++) {
      if( flags[query_result[i].id]) continue;
      flags[query_result[i].id] = true;
      output.push(query_result[i]);
    }
    query_result = output;
    
    //sort by book id
    query_result.sort(function(a,b){
        return a.id - b.id;
    });
    if(filter_images){ getFilterImages(); }
    else{ renderQuery()}; 
}

// Output results of query to DOM
function renderQuery() {
  RESULTS_CONTAINER.classList.add('query_hide-output');
  setTimeout(function() {
      document.getElementById('query__show-more').classList.remove('query_hide-output');
      if (query_result.length == 0 || query == "") {
          console.log('Query returned no results');
          NUMBER_RESULTS.innerHTML = "<p>The query returned no books.</p>";
          document.getElementById('query__results-shown').innerHTML ="";
          document.getElementById('query__show-more').classList.add('query_hide-output');
          return;
      }
      NUMBER_RESULTS.innerHTML = "<p>Found <span id='query__number-results'>" + query_result.length + "</span> Books</p>";
      total_results_shown = 0;
      number_displayed_results = 18;
      if (number_displayed_results > query_result.length) {
          number_displayed_results = query_result.length;
      }
      for (var i = 0; i < number_displayed_results; i++) {
          total_results_shown++;
          var bk = query_result[i];
          var bookInfo = "";

          // Highlights query in selected category
          Object.keys(bk).forEach(function(attr){
              if (bk[attr] && attr != "folder") {
                  if (category == "all") {
                      if(attr == "link"){
                        let external_link = `<a class="query_result__link-text" href="${bk[attr]}" target="_blank">${highlightQuery(bk[attr])}</a>`
                        bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " +external_link + "</p>";
                      }else{
                        bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " + highlightQuery(bk[attr]) + "</p>";
                      }
                  } else if (category == attr) {
                      bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category query__highlight-category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " + highlightQuery(bk[attr]) + "</p>";
                  } else if(attr == "link"){
                      let external_link = `<a class="query_result__link-text" href="${bk[attr]}" target="_blank">${bk[attr]}</a>`
                      bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " + external_link + "</p>";
                  } else {
                      let temp = (bk[attr] === true || bk[attr] == "yes") ? "Yes" : bk[attr];
                      bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " + temp + "</p>";
                  }
              }
          });

          var link = makeBookViewInLibraryAnchor(bk);
          var output = "<li class='query__result_item'>" + bookInfo + "</li>";
          var wall_link = "<a href='" + link + "#bookID-" + bk.id + "'>" + output + "</a>";
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
                if (attr != "folder" && bk[attr]) {
                  if (category == "all") {
                    bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " + highlightQuery(bk[attr]) + "</p>";
                  } else if (category == attr) {
                    bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category query__highlight-category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " + highlightQuery(bk[attr]) + "</p>";
                  } else if(attr == "link"){
                    let external_link = `<a class="query_result__link-text" href="${bk[attr]}" target="_blank">${bk[attr]}</a>`
                    bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " + external_link + "</p>";
                  } else {
                    var temp = (bk[attr] === true || bk[attr] == "yes") ? "Yes" : bk[attr];
                    bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + FORMAT_ATTR_NAME[attr] + "</span>: " + temp + "</p>";
                  }
                }
            });

            var link = makeBookViewInLibraryAnchor(bk);
            var output = "<li class='query__result_item'>" + bookInfo + "</li>";
            var wall_link = "<a href='" + link + "#bookID-" + bk.id + "'>" + output + "</a>";
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
  var parsed_date = findDateRange(bk.pub_date);
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