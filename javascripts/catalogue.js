  let QUERY_INPUT_PLACEHOLDERS = [
      "Austen, Jane", "Shakespeare, William", "Homer", "Voltaire", "Swift, Jonathan", "Pope, Alexander"
  ];

  let RESULTS_CONTAINER = document.getElementById('query__output');
  let RESULTS_LIST = document.getElementById('query__results');
  let NUMBER_RESULTS = document.getElementById('query__number-results_container');
  //let snap = Defiant.getSnapshot(COMPLETE_DATA);
  let boolean_search = false;
  let filter_images = false;
  let total_results_shown = 0;
  let number_displayed_results = 18;
  let category = "";
  let query = "";
  let query_result = [];

  function setQueryToBoolean() {
    boolean_search = document.getElementById('query__check_boolean').checked;
    document.getElementById('query__input_text').value = "";
  }
  function getFilterImages(){
    filter_images = document.getElementById('query__check_filterImages').checked;
    if(filter_images && query_result.length > 0){
      let resultWithImages = query_result.filter( bk =>{
        return (bk.images && (bk.images == "yes"));
      });
      renderQuery(resultWithImages, query);
    }else if(!filter_images && query_result.length > 0){
      renderQuery(query_result,query);
    }
  }

  // Return first instance found
  function checkBookAttributes(book, r) {
      let keys = Object.keys(COMPLETE_DATA[book]);
      for (let i = 0; i < keys.length; i++) {
          if (COMPLETE_DATA[book][keys[i]]) {
              if(keys[i] == "date_published"){
                return queryDatePublished(COMPLETE_DATA[book], query);
              }else if (COMPLETE_DATA[book][keys[i]].toString().toLowerCase().indexOf(query.toLowerCase()) > -1) {
                  //console.log('Found: ' + book + " " + keys[i]);
                  return true;
              }
          }
      }
  }

  function queryCatalogue() {
      RESULTS_LIST.innerHTML = "";
      category = document.getElementsByName('category')[0].value;
      query = document.getElementsByName('query')[0].value;
      console.log(category + " " + query);
      query_result = [];
      if (category == "all") {
          Object.keys(COMPLETE_DATA).forEach(book => {
              checkBookAttributes(book) ? query_result.push(COMPLETE_DATA[book]) : "";
          });
      } else {
          Object.keys(COMPLETE_DATA).forEach(book => {
              Object.keys(COMPLETE_DATA[book]).forEach(key => {
                  if (key.toString() == category) {
                      if(category == "date_published"){
                        queryDatePublished(COMPLETE_DATA[book], query) ? query_result.push(COMPLETE_DATA[book]) : "";
                      }else if (COMPLETE_DATA[book][key]) {
                          if (COMPLETE_DATA[book][key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1) {
                              //console.log(COMPLETE_DATA[book]);
                              query_result.push(COMPLETE_DATA[book]);
                          }
                      }
                  }
              });
          });
      }
      //console.log(query_result);
      
      // removes duplicates
      query_result = query_result.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.book_id === thing.book_id
        ))
      );

      //sort by book id
      query_result.sort((a,b)=>{
        return a.book_id - b.book_id;
      });

      getFilterImages()
      filter_images? getFilterImages() :renderQuery(unique, query);

      /*
        RESULTS.innerHTML = "";
        category = document.getElementsByName('category')[0].value;
        query = document.getElementsByName('query')[0].vlue;
        let path = "";

        if(IS_BOOLEAN_SEARCH){

        }else{
          if (category == 'all') {
              path = "//*[contains(text(), '" + query + "')]/..";
          }else{
              path = "//*[contains(" + category + ",'" + query + "')]";
          }
        }
          
        let result = JSON.search(snap, path);
        renderQuery(result, query);
        */
  }

  // Output results of query to DOM
  function renderQuery(result, query) {
      RESULTS_CONTAINER.classList.add('query_hide-output');
      setTimeout(function() {
          document.getElementById('query__show-more').classList.remove('query_hide-output');
          if (result.length == 0) {
              NUMBER_RESULTS.innerHTML = "<p>The query returned no books.</p>";
              document.getElementById('query__results-shown').innerHTML ="";
              document.getElementById('query__show-more').classList.add('query_hide-output');
              return;
          }
          NUMBER_RESULTS.innerHTML = "<p>Found <span id='query__number-results'>" + result.length + "</span> Books</p>";
          total_results_shown = 0;
          number_displayed_results = result.length;
          if (number_displayed_results > result.length) {
              number_displayed_results = result.length;
          }
          for (let i = 0; i < number_displayed_results; i++) {
              total_results_shown++;
              let bk = result[i];
              let bookInfo = "";
              Object.keys(bk).forEach(attr => {
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

              let link = makeBookViewInLibraryAnchor(bk);
              let output = "<li class='query__result_item'>" + bookInfo + "</li>";
              let wall_link = "<a href='" + link + "#bookID-" + bk.book_id + "'>" + output + "</a>";
              RESULTS_LIST.innerHTML += wall_link;
          }
          if (total_results_shown < result.length) {
            document.getElementById('query__results-shown').innerHTML = total_results_shown + " / " + query_result.length;
          }else if(total_results_shown == result.length){
            document.getElementById('query__results-shown').innerHTML = total_results_shown + " / " + query_result.length;
            document.getElementById('query__show-more').classList.add('query_hide-output');
          }
          console.log(total_results_shown+" first query")
      }, 300);
      setTimeout(function() {
          RESULTS_CONTAINER.classList.remove('query_hide-output');
      }, 600);
  }

  function highlightQuery(string, query) {
      let regex = new RegExp(query, "gi");
      return string.toString().replace(regex, '<span class="query__highlight">' + query + '</span>');
  }
  document.addEventListener('keypress', (event) => {
      event.key == "Enter" ? queryCatalogue() : "";
  });

  function showMoreResults() {
      let count = total_results_shown + number_displayed_results;
      if (count > query_result.length) {
          count = query_result.length;
      }
      console.log("Total: " + total_results_shown + " Displayed: " + number_displayed_results + " Query Length: " + query_result.length + " count: " + count);
      RESULTS_CONTAINER.classList.add('query_hide-output');
      setTimeout(function() {
          for (let i = total_results_shown; i < count; i++) {
              total_results_shown++;
              let bk = query_result[i];
              let bookInfo = "";
              Object.keys(bk).forEach(attr => {
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

              let link = makeBookViewInLibraryAnchor(bk);
              let output = "<li class='query__result_item'>" + bookInfo + "</li>";
              let wall_link = "<a href='" + link + "#bookID-" + bk.book_id + "'>" + output + "</a>";
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
        //console.log("Orig: "+date_string);
        //console.log("Is ranged: "+date_string.split('-'));
        return {
          type : "ranged",
          dates : date_string.split('-') 
        };
      }else if(date_string.indexOf(',') > -1){
        //console.log("Orig: "+date_string);
        //console.log("Has mult:" + date_string.split(','));
        return {
          type :"multipleDates",
          dates : date_string
        };
      }else{
        let regex = /\d+/g;
        //console.log( "\t\tParsed: "+parseInt(date_string.substring(date_string.search(regex))) );
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
    let parsed_date = findDateRange(bk.date_published);
    //console.log(parsed_date.type+": "+parsed_date.dates);  
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
        console.log("\tdefault: "+parsed_date.dates);
        return false;
        break; 
    }
  }
  /*
  let dateQuery = 1794;
  Object.keys(COMPLETE_DATA).forEach(bk=>{
    //console.log("\t"+bk+" || "+COMPLETE_DATA[bk].book_id+" || "+COMPLETE_DATA[bk].location);
    if(queryDatePublished(COMPLETE_DATA[bk], dateQuery)){
      console.log("True: "+COMPLETE_DATA[bk].date_published+" Query:"+dateQuery);
    }
  })
  */