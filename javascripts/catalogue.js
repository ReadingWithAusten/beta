  let QUERY_INPUT_PLACEHOLDERS = [
      "Austen, Jane", "Shakespeare, William", "Homer", "Voltaire", "Swift, Jonathan", "Pope, Alexander"
  ];

let RESULTS_CONTAINER = document.getElementById('query__output');
 let RESULTS = document.getElementById('query__results');
 let NUMBER_RESULTS = document.getElementById('query__number-results_container');
 let snap = Defiant.getSnapshot(COMPLETE_DATA);
 let number_displayed_results = 20;
 let category = "";
 let query = "";

 function queryCatalogue() {
     RESULTS.innerHTML = "";
     category = document.getElementsByName('category')[0].value;
     query = document.getElementsByName('query')[0].value;
     let path = "";

     if (category == 'all') {
         path = "//*[contains(text(), '" + query + "')]/..";
     } else {
         path = "//*[contains(" + category + ",'" + query + "')]";
     }

     let result = JSON.search(snap, path);
     renderQuery(result, query);
 }

 // Output results of query to DOM
 function renderQuery(result, query) {
     RESULTS_CONTAINER.classList.add('query_hide-output');
     setTimeout(function() {
         if (result.length == 0) {
             NUMBER_RESULTS.innerHTML = "<p>The query returned no books.</p>";
             return;
         }
         NUMBER_RESULTS.innerHTML = "<p>Found <span id='query__number-results'>" + result.length + "</span> Books</p>";
         if (number_displayed_results > result.length) {
             number_displayed_results = result.length;
         } else {
             number_displayed_results = 20;
         }
         for (let i = 0; i < number_displayed_results; i++) {
             let bk = result[i];
             let bookInfo = "";
             Object.keys(bk).forEach(attr => {
                 if (bk[attr]) {
                     if (category == "all" || category == attr) {
                         bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + attr.replace("_", " ") + "</span>: " + highlightQuery(bk[attr], query) + "</p>";
                     } else {
                         bookInfo += "<p class='query_result__" + attr + "'><span class='query_result__category'>" + attr.replace("_", " ") + "</span>: " + bk[attr] + "</p>";
                     }
                 }
             });

             let link = makeBookViewInLibraryAnchor(bk);
             let output = "<li class='query__result_item'>" + bookInfo + "</li>";
             let wall_link = "<a href='" + link + "#bookID-"+bk.book_id+"'>" + output + "</a>";
             RESULTS.innerHTML += wall_link;
         }
     }, 300);
     setTimeout(function() {
         RESULTS_CONTAINER.classList.remove('query_hide-output');
     }, 600);
 }

 function highlightQuery(string, query) {
     return string.toString().replace(query, '<span class="query__highlight">' + query + '</span>');
 }
 document.addEventListener('keypress', (event) => {
     event.key == "Enter" ? queryCatalogue() : "";
 });