// Returns wall based on page title
function getWallFromTitle(){
    let PAGE_TITLE = document.title;
    let WALL = null;
    let CASE = null;

    if (PAGE_TITLE.indexOf('South') != -1) WALL = "South";
    if (PAGE_TITLE.indexOf('East') != -1) WALL = "East";
    if (PAGE_TITLE.indexOf('West') != -1) WALL = "West";
    
    if (PAGE_TITLE.indexOf('Left') != -1) CASE = "Left";
    if (PAGE_TITLE.indexOf('Centre') != -1) CASE = "Centre";
    if (PAGE_TITLE.indexOf('Right') != -1) CASE = "Right";
    
    return [WALL, CASE];
}

// Compile spine element and folder class
function processBookHelper(WALL, CASE, book, isCase){
    let folder_class = book.folder ? "has_folder" : "no_folder"

    // Adjust spine resolution to perspective of wall
    let default_width = 4;
    if(isCase){
        const default_case_widths = {
            "East":  {"Left": 22, "Centre": 25, "Right": 22},
            "South": {"Left": 17, "Centre": 15, "Right": 17},
            "West":  {"Left": 15, "Centre": 12, "Right": 13}
        }
        default_width = default_case_widths[WALL][CASE];
    }else{
        switch(WALL){
            case "South": default_width = 3.5; break; 
            case "West": default_width = 5; break; 
            case "East": default_width = 5; break; 
            default: break; 
        }
    }

    // Determine spine width; adjust spine width against volumes of book
    let spine_width = default_width * parseInt(book.volumes);   
    if(WALL === "South" && spine_width > 40) spine_width = 40;  // South wall has particular resolution/perspective
    if(!spine_width || spine_width == 0){
        folder_class += " no_volumes";
        spine_width = 4;
    }

    // Determine img.src, determine stock usage
    let spine_src = "images\\spines\\heylyn-theological-1749_spine-crop.png";    
    if(book.spine){
        spine_src = `images\\spines\\${book.folder}_spine-crop.png`;
    }else{ 
        let vols = parseInt(book.volumes);
        let num_volumes = vols <= 20 ? vols : 20;
        if(num_volumes === 0){
            console.log(num_volumes)
            console.log(book)
        }
        let stock = `stock-gray-${num_volumes}vol.png`;         // Stock spine naming convention
        spine_src = `images\\spines\\stock_spines\\${stock}`;
        folder_class += ` book__stock book__stock-${vols}`;   
    }

    let spine_image = `<img src='${spine_src}' class='book_spine'>`;

    return [spine_image, spine_width, folder_class]
}

// Populates wall with books
function populateWall(){
    let [WALL,CASE] = getWallFromTitle();

    // If page is library type page
    // TODO:: find better way of determining this, done by looking at document title
    if(WALL){
        let CURRENT_LAYOUT = LAYOUT[WALL];
        
        // In case view
        if(CASE){
            populateCase(WALL, CASE, true)
            
            // In wall view
        }else{
            // TODO:: isCase deserves better handling downstream...
            populateCase(WALL, "Left", false);
            populateCase(WALL, "Centre", false);
            populateCase(WALL, "Right", false);
        }
    }
}

// Describes the columns in each wall secion
const WALL_LAYOUTS = {
    "Left": [1,2],
    "Centre": ["s1",3,"s2"],    // slips
    "Right": [4,5]
}

// Foramat for HTML outpus
const FORMAT_ATTR_NAME = {
    "id": "Catalogue ID", 
    "author": "Author",
    "current_loc": "Current Location",
    "edition": "Edition",
    "format": "Format",
    "EEBO": "EEBO Bib Number",
    "ESTC": "ESTC Number",
    "Gale": "Gale Doc Number",
    "images": "Images",
    "in_1908": "In 1908 Catalogue",
    "in_1935": "In 1935 Catalogue",
    "link": "Internet Link",
    "missing": "Missing Volumes",
    "notes": "Notes",
    "permissions": "Permissions",
    "publisher": "Publisher",
    "pub_date": "Date Published",
    "pub_loc": "Place Published",
    "shelf": "Location",
    "title": "Title",
    "transcript": "Catalogue Transcript",
    "volumes": "Number of Volumes"
}

function populateCase(WALL, CASE, isCase){
    let CONTAINER = document.querySelector("#column_container");
    // Generically describes each case/page view
    
    // Process layout and add to DOM
    WALL_LAYOUTS[CASE].forEach(col=>{
        let column_id = (typeof col == "string") ? `Slip-${col.slice(-1)}` : `Column-${col}`
        let column_output = "";

        // Process shelves
        for (const [index, shelf] of Object.entries(LAYOUT[WALL][col])) {
            let shelf_format = COMPLETE_DATA[shelf[0]].format;     // format of first book defines shelf size/format
            let wall_section = isCase ? 'wall-section__' : '' ;
            let shelf_output = `<ul class='shelf format_${wall_section + shelf_format}' id='shelf-${index}'>`;
            
            // Process shelf books
            shelf.forEach( book_id =>{
                let book = COMPLETE_DATA[book_id];
                let title = book.title ? cropString(book.title, 10) : "Title Unavailable";
                let author = book.author ? cropString(book.author, 5) : "Author Unavailable";
                
                let [spine_image, spine_width, folder_class] = processBookHelper(WALL, CASE, book, isCase);

                let link = `${WALL.toLowerCase()}-wall-${CASE.toLowerCase()}.html?book-id=${book_id}#bookID-${book_id}`;
                
                let align_case = isCase ? `style='left:${spine_width + 30}px;` : '';
                let tool_tip = 
                `<div class='toolTip' ${align_case}>
                    <p class='toolTip_title'>${title}</p>
                    <p class='toolTip_author'>${author}</p>
                    <p class='toolTip_date'>Published: ${book.pub_date}</p>
                    <i>Catalogue ID: ${book_id}</i>
                </div>`;

                // DEBUG - remove from outputs
                let extraClasses = () =>{return ""};
                // let extraClasses = () => {
                //     let newClass = "";
                //     book.spine ? newClass += " hasSpine" : "";
                //     book.images ? newClass += " hasImages" : "";
                //     book.folder && BOOK_TO_FOLDER[book.folder] ? newClass += " hasFolder" : "";
                //     return newClass;
                // }

                if(isCase){
                    shelf_output += 
                    `<li 
                        onclick='populateModal(${book_id});' 
                        class='book ${folder_class + extraClasses()}' 
                        id='bookID-${book_id}' 
                        data-id='${book_id}' 
                        style='width:${spine_width}px'>
                        ${spine_image + tool_tip}
                    </li>`;
                }else{
                    shelf_output += 
                    `<a href='${link}' class='book ${folder_class + extraClasses()}'>
                        <li id='bookID-${book_id}' data-id='${book_id}' style='width:${spine_width}px'>
                            ${spine_image + tool_tip}
                        </li>
                    </a>`;
                }
            })

            shelf_output += "</ul>";
            column_output = shelf_output + column_output;
        }
        let capstone = (!isCase) ? `<a class='column_capstone' href='${WALL.toLowerCase()}-wall-${CASE.toLowerCase()}.html' id='column_capstone-${column_id}'></a>`: '';

        // #column_container is <ul>
        CONTAINER.innerHTML += `<li class='column' id='${column_id}'>${capstone + column_output}</li>`;
    })
}

// TODO:: Autorun every page?
populateWall();

// Create link to section, opens book modal
// TODO:: refactor catalogue.js to no longer require this
function makeBookViewInLibraryAnchor(bk) {
    var wall = bk["shelf"].toLowerCase().substring(0, bk["shelf"].toLowerCase().search(" case:")).replace(" ", "-");
    var section = bk["shelf"].substring(bk["shelf"].search(",") - 1, bk["shelf"].search(","));
    if (bk["shelf"].toLowerCase().search('slip') > -1) {
        section = "centre";
    } else if (bk["shelf"].toLowerCase().search('column') > -1) {
        if (section == 1 || section == 2) section = 'left';
        if (section == 3) section = 'centre';
        if (section == 4 || section == 5) section = 'right';
    }
    return wall + "-wall-" + section + ".html?book-id=" + bk["id"];
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

// Library - Checks for url queries
// has modal already popped up
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