# See Documentation: "Steps from spreadsheet to processed data"
# script will create production files based on importing other scripts

print("Generating: production-files/complete-data.js")
import generate_complete_data

print("Generating: production-files/layout.js")
import generate_case_layouts

print("Generating: production-files/book_folder_relation.js")
import generate_book_to_folder 
