# Create book to folder relation.js
# books folder should be organized via the author-word-year format
# the files within each folder should contain the production files
# file: author-word-year_description.jpg

import os
from pathlib import Path

books_path = Path(__file__).parent.absolute() / 'new-images' / 'books'
output_filename = 'book_folder_relation.js'
output_path = Path(__file__).parent.absolute() / 'production-files' / output_filename

num_images = 0
num_books =  0

folder_dict = {}

# walk folder and add file names to dictionary
for root, directory, files in os.walk(books_path): 
    for dir in directory:
        folder_dict[dir] = []
    for file in files:
        directory_name = os.path.basename(root)
        folder_dict[directory_name].append(file)


# Write results to file
with open(output_path, mode='w') as file:
    file.write("var BOOK_TO_FOLDER = {")

    # write dict contents to fie
    for key in folder_dict:
        file.write("\"" + key + "\":[")
        array = folder_dict[key]
        for index, file_name in enumerate(array):
            truncated_name = file_name.replace(key,'')
            file.write("\"" + truncated_name)  
            if index + 1 is not len(array):
                file.write("\",")
            else:
                file.write("\"")
        file.write("],")

    file.write("};")

print("Finished: production-files/book_folder_relation.js")