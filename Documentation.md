# Reading With Austen Documentation

## Changelog
***September 23, 2020***
- creation of documentation
- update of all spines from png to webp format
- added new columns
  - updated functions to support them
- updated keys to columns in data/complete-data.js and case layouts
- added hyperlinks to cataloge result cards
- rearranged display of new categories on category cards
- added scripts to process:
  - moveing spines to own folder
  - getting book/folder relation table
  - converting defined csv files to complete-date.js 
  - cataloguing new spines
  - approx missing volumes
- shelves order books in ascending order (left to right)

***October 12, 2020***
- refactoring wall/case html files
- refactoring functions.js
  - makeWall() => populateWall()
  - support for new COMPLETE_DATA data structure
  - optimized various helpers
  - support for function in all wall layouts
  - support for case layouts
- scripts to process layout
- refactored layout files
  - single layout file
  - removal of book description redundancy
- adjusted tooltip adjustment on wall view

TODO::
- Fix mobile views
- next/prev in modal can't move to/from slips
- modal featured should be title page, currently first index in book-relation-array
- turn spines/images to webp
- remove/improve debug

#  1. Images
## Spines
- should have .png extension to to maintain image quality and transparency
- book should cropped around edges as close as possible, try to keep edges as straight as possible
- backgrounds of spine should be removed and transparent
- each individual book width should be ~70px, that is, each book is scaled to 70w x *h with height being variable
- spines with multiple volumes should have widths as multiples of 70 based on how many spines per image
    - ie. image has 4 spines: width of cropped spine image should 280px (4 books * 70px)
- all spines are placed in *images/spines*
- referenced by the inline scripts within the wall view pages (library, west wall, ect.)
  - makeWall()
  - looks at number of volumns and if a spine exists
  - otherwise grabs stock spine of appropriate width
- webp
  - conversion of all png spines to webp format
  - https://nsspot.herokuapp.com/imagetowebp/ frontend conversion app
  - 72% reduction in file size, quality is maintained

## Images
Images are in jpg format for its good image compression.
The folder structure is images > books > <author-keyword-year> aka. `folder_name`. All of the images of the book which will be displayed
are placed here and will follow the *strict* filename convention.

**<author-keyword-year>_<image-name>.JPG**

Image name could be any sort of descriptor (plate, title02, ect.) however the `folder_name` is required to prefix this discriptor by an
underscore. This naming structure is required as the scripts will navigate these folders and collect the contents to create the file
*book-folder-relation*. It will ignore files without the `folder_name` prefix.

Dimension wise, the images should be optimized to 800px width and variable height to maintain the original aspect ratio.
Try to also compress the images. Would be useful to try to get all images under the 100kb threshold, they vary from 20kb to 300kb.

**NOTE**
- rousseau-oeuvres-1774 has two entries but both entries share the same image folder. This means manually writing in folder, file names etc.
- butler-genuine-1759 images are corrupted, folder field removed from complete_data.js

## WebP optimizations
Tests were run seeing how chanigng the format of the images to webp performed. Webp is a new image format which supports transparency and aims to replace .PNG.
Indeed early tests showed an average of 72% reduction in filesize with a maintained image quality. Current optimizations have dropped a 500mb image folder down to 200 however webp seems to have the ability to have better than current image quality with a folder size of ~125mb. This is great for bandwidth and performance overall. 

The transition is simple as it only requires batch processing (finding tools is difficult) and the support isn't 100% (safari). It's definitely something to look into for the future or even an implementation with the current standard as a fallback though this is marginally heavier on the server.

*https://css-tricks.com/using-webp-images/*

# 2. Scripts
## Library
- each page in the library runs a function *makeWall(LAYOUT, ELEMENT)* which populates the wall with books given by the layout
- the layout derives from the *data* variable which is set inside each walls' respective *__case.js* file
  - this means each wall has it's own *"database"*
- the population of the books on the wall is based on the data objects organization
    - each layout has keys for *Column* and *Slip* and books are populated as they're read from top down in the file
    - note: books visually presented bottom up (bottom left < top right)

**Notes**
- csv file is 200kb smaller
    - run script instead to create JS objects from csv
    - less data to send but more processing and maybe overhead client side

## Book Folder Relation
- books with images have this catalogued in *javascripts/data/book_folder_relation.js*
- the file is a js object with keys being the catalogue folder name and values being an array of images
- this is referenced in the modal and images are populated based on its contents
- the book/folder relation file is only checked if a folder name attribute exists in the book object

**Notes**
- can rename images or value just represents number of images in folder (saves space on book_folder_relation file size)
  - the space saving on using bookID vs folder name is ~20kb this will take a little more work to suss out the bookID
- truncating the foldername from the file reduces 50% file size, this can be done client side to make the image call

## Database files
The general format of the data is json however the data is already placed into js objects to be used at runtime. In the future it would be useful to JSONify the raw string data of the JSON which could help the file be smaller. 

### Columns and Book object attributes
These are the attributes available to books. These will be used to render or help the processing of the books for the app. The working spreadsheet will have many more columns which to draw from. This then requires removing the unnecessary columns in the spreadsheet to have a *clean* version of the one the app uses.

|||||||
---|---|---|---|---|---
 id | title | author | pub_date | publisher | pub_loc 
 edition | shelf | transcript | format | volumes | missing 
 current_loc | in_1908 | in_1935 | notes | ESTC | EEBO 
 Gale | link | images | permissions | folder | spine 
 

### `data/complete-data.js`
Contains the raw data for the books. Each book will have its own set of attributes which are just spewed out in order during the rendering. That way if a book has a unique or missing attributes they can be handled correctly. This file is generated through the python script `csv-to-json` which grabs the csv version of the spreadsheet and processes it into `complete-data.js`. Also note that there will probably be a difference in the names of the columns in the spreadsheet and the names of the attributes in `complete-data.js` check that these are aligned and it's simpler to change the column names in the speadsheet than in the rest of the files.

``` JSON
var COMPLETE_DATA = {
  "1":{
    "title":"Of the Advancement and Proficience ...",
    "author":"Bacon, Francis (1561-1626); Watts, Gilbert [translator] (d. 1657)",
    "pub_date":"1640",
    "publisher":"Printed by Leon Lichfield, Printer to the University, for Rob. Young, & Ed. Forrest.",
    "pub_loc":"Oxford",
    "edition":"1st ed.",
    "shelf":"East Case: column 1, shelf 1",
    "transcript":"Bacon's Advancement of Learning 1 1 Oxford 1640",
    "format":"4to",
    "volumes":"1",
    "current_loc":"Sold at Sotheby's auction to possible buyer 'Halliday', 9 July 1935",
    "in_1908":true,
    "in_1935":true,
    "notes":"There is also a second edition folio printed in the same year (1640).",
    "link":"https://archive.org/details/ofadvancementp00baco"},
  "2": {
    // Next book attributes...
  },
```

The book id is also distinguished by its key in that way books can be referenced via `COMPLETE_DATA[12]`. This is useful for linking books to catalogue searches or creating the anchor links. You can also iterate through the books via `Object.keys()` or some other method, this also revents the accidental duplication of book ids.

### `data/layout.js`
This file describes the book layout in each wall and all walls/shelves will read this file. What distinguishes walls/shelves is the name of the html file in the url. If a column name is present, then that subsection is grabbed from `layout.js`. All cases follow the format of *left* having columns 1 and 2, *centre* having slip 1/2 and column 3, finally *right* having columns 4 and 5. This is reflected in `functions.js`. Each column is rendered from an array of book ids.

### `data/book_folder_relation.js`
This file contains information on the book and its images. Images are arraged by books which are identified by their author, year, and identifying word, eg. `butler-genuine-1765`. In this case *genuine* is the first non-stop word in the books title. This format was originally used while cataloguing the images. When required, a check is made to see if a book has images `if (book.images || book.folder)` if so the file names of the images are grabbed from `book_folder_relation.js` and eventually rendered.

This file is generated through `book_folder_script.py`. To properly work the script requires the latest collection of images and folders. For the most part, the updated/new folders should be provided and dropped into a copy of the existing folder replacing older versions. This new `images/book` folder should be the one which the script traverses.

In the future it may save some text space to replace the folder name by its book id instead.

### `catalogue.js`
This runs the simple querying of the catalogue. It's main function acts by generating tokens from the inputs and searching for those tokens through the various attributes of each book. At the moment the script will run through the entire catalogue for each token, even if a book was already flagged to have the token in it. All inputs and attribute values are normalized to increases hit rates. Unfortuneately it does not support strings of words and support for numbered elements/dates/ranges is limited.

### `functions.js`
This file is the meat of the programming. It's main role is to detect the current wall and populate the wall. It does much of the heavy lifting in terms of containing static data and dynamically generating the html. Currently the file will try to populate a wall on every page. If there is a wall to populate, it will do it. 

The file also contains helper functions and assists with the animations/loading behaviour.

It would be useful in the future to separate some of it's functionality as well as stop unrequired functions from running.

### Updates: steps from spreadsheet to processed data
1. Place all new resources in the processessing folder and update the paths in the scripts to properly traverse them
2. Have updated spreadsheet file
3. Remove unnecessary columns
   - names of the columns need to match the names in the `csv-to-json` file. 
3. export as `.csv` file
   - double check encoding is utf-8 if issues arise in creation of files
4. run `generate_complete_data.py` to get `complete-data.js` representing the spreadsheet
5. run `generate_case_layouts.py` to generate `layout.js`, the case layout file
6. run `generate_book_to_folder.py` to generate `book_folder_relation.js`, which lists the filenames of the book images
   - make sure the updated `images/books` path is updated for script
7. Check App
   - There may still be instances where there may be manual modification of images, names, entries in any of the data files
   - See checklist* 

The processing folder should be the development playground. Copies of `images/books`, catalogue, etc. any other files should exist here to be traversed and processed by the scripts. The outputs of these scripts as well as all resources should replace the ones in their respective production folders.

For simplicity: 
- Given an updated version of the images/books folder is placed in processing and the paths are updated in the script files
- Given an updated and *clean* csv file is in the processing folder and it's columns match the expected attributes
- run `main.py`
- replace the newly generated production files and the updated images/books folder with the production ones

**The current repo Spreadsheet and catalogue.csv are used in production but can be viewed as sample versions for future updates**

**Checklist**
- are **all spines accounted for** and no broken images?
  - `book.spine === true` won't render a generic spine and if missing, the image will be broken
- are modal images present?
  - using the `>` and `<` keys in modal view can quickly move through the books and see if **images are present**
  - don't forget about the image orientation
  - missing images will not be displayed, it's quite noticable
- is book meta data correct?
  - subtle and requires close inspection of data
  - can quickly check book data through visual modal inspection
- are the correct files present?
  - updated images and meta data is accounted for and visible in the app

## modal.js
All the functions relating to populating the modal. `populateCase()` will attach a onclick handler to the books on the shelf which opens the modal. The script keeps track of many DOM elements which it populates when opened. The function which drives the movement of the next/prev book iterates by id thus it's possible that the flow of books jumps across different shelves (due to bug)


**Keyboard events are also supported:**
command|function
---|---
`,`<br/>`ArrowLeft`|previous book (by id) or previous image (in image viewer)
`.`<br/>`ArrowRight`|next book (by id) or next image (in image viewer)
`x`|close image viewer or modal
` `|open/close image viewer

``` HTML
// Modal html syntax
<modal id="modal" class="modal__hide">
  <nav id="modal_nav_container">
    <ul>
      <li id="modal_nav_prev" class="modal_nav__button" onclick="changeBook('prev')">Previous</li>
      <li id="modal_nav_close" class="modal_nav__button" onclick="closeModal('close')">x</li>
      <li id="modal_nav_next" class="modal_nav__button" onclick="changeBook('next')">Next</li>
    </ul>
  </nav>
  <div id="modal_content_container">
    <div id="modal_images">
      <div id="modal_images__featured"></div>
      <ul id="modal_images__list"></ul>
    </div>
    <div id="modal_content">
      <h2 id="modal_content__title"></h2>
      <ul id="modal_content__list"></ul>
    </div>
  </div>
  <div id="modal_imgViewer" class="modal__hide">
    <div id="modal_imgViewer__content">
      <img src="" alt="">
      <div id="modal_imgViewer__text"></div>
    </div>
    <ul id="modal_imgViewer_nav">
      <li onclick='changeImageViewerImage("prev")'>
        <</li>
          <li onclick='closeImageViewer()'>x</li>
          <li onclick='changeImageViewerImage("next")'>></li>
    </ul>
  </div>
</modal>
```

**Structure**
- modal
  - navigation
    - next,prev,close
  - content
    - printout of book object data
    - image spread
  - image viewer
    - zoom-in of book icture


# 3. Style Sheets
This describes the pop-out effect of the books. Primarily this is done through a hover and transform over the book.

# 4. Deployment
The project is currently living as a client side application on Github Pages:


Simply, Github will host the app for free if it doesn't require anything serverside (ie. static site). There are bandwidth limits they would impose if it ever comes to that. Which has the potential if the site gets a lot more traction especially with the image fetches.

Alternatives could be a deployment on a SaaS platform as a node app. Or using node as an entryway. This could also benefit from storing/updating the data in a serverside database but would require a bunch of work to accomplish.

Finally, if you want to test the deployment you can use tools like: [Surge.sh](https://surge.sh/)
Surge is a CL tool that will upload the project like a git repo and deploy as a static site.

