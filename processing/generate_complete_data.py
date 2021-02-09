# reads in csv and outputs the complete-data
# Requires the RWA spreadsheet be condensed into the columns which the application will use
# export the sheet as csv, and run through this script
# make sure the encoding on the CSV is utf-8 on export!

# TODO:: put into an array and iterate through them
# Columns:
# id_modified,format-catalogue,transcript,location_shelf,public_notes,1935_catalogue,title,author,date_published,no_of_vols,place_published,publisher,internet_link,Gale_Document_Number,ESTC,EEBO_BibNo,edition,1908_catalogue,folder_name,images,locationOfBook,permissions,missingvolnumber,spine

import os
import csv
from pathlib import Path

catalogue_file = "catalogue.csv"
output_filename = "complete-data.js"
output_path = Path(__file__).parent.absolute() / 'production-files' / output_filename

catalogue_arr = []

with open(catalogue_file, "r", encoding="utf-8") as file:
    # format csv data to dictionary
    file_reader = csv.DictReader(file)
    for row in file_reader:
        catalogue_arr.append(row)

def getBoolFromProperty(prop):
    affirmative = ['y', 'yes']
    return "true" if prop.lower() in affirmative else False

def createCompleteDataJSfromArr(arr, id_as_key = False):
    with open(output_path, mode="w", encoding="utf-8") as file:
        
        js_variable = "var COMPLETE_DATA ="
        
        # makes ID key of json
        if id_as_key:
            js_variable += "{"
        else:
            js_variable += "["
        
        file.write(js_variable)
        
        # compile book str to write to file
        for bk in arr:
            if(id_as_key):
                # use bookId as key, values are book attributes
                book = "\"" + str(bk["id"]) + "\":"
                book += "{"
            else:
                book = "[{"
                if bk["id"]: book += "\"id\":\"{}\",".format(bk["id"])

            if bk["title"]: book += "\"title\":\"{}\",".format(bk["title"])
            if bk["author"]: book += "\"author\":\"{}\",".format(bk["author"])
            if bk["pub_date"]: book += "\"pub_date\":\"{}\",".format(bk["pub_date"])
            if bk["publisher"]: book += "\"publisher\":\"{}\",".format(bk["publisher"])
            if bk["pub_loc"]: book += "\"pub_loc\":\"{}\",".format(bk["pub_loc"])
            if bk["edition"]: book += "\"edition\":\"{}\",".format(bk["edition"])
            if bk["shelf"]: book += "\"shelf\":\"{}\",".format(bk["shelf"])
            if bk["transcript"]: book += "\"transcript\":\"{}\",".format(bk["transcript"])
            if bk["format"]: book += "\"format\":\"{}\",".format(bk["format"])
            if bk["volumes"]: book += "\"volumes\":\"{}\",".format(bk["volumes"])
            if bk["missing"]: book += "\"missing\":\"{}\",".format(bk["missing"])
            if bk["current_loc"]: book += "\"current_loc\":\"{}\",".format(bk["current_loc"])

            #if bk["in_1908"]: book += "\"in_1908\":\"{}\",".format(bk["in_1908"])
            if bk["in_1908"]: 
                temp = getBoolFromProperty(bk["in_1908"])
                if temp:
                    book += "\"in_1908\":{},".format(temp)

            #if bk["in_1935"]: book += "\"in_1935\":\"{}\",".format(bk["in_1935"])
            if bk["in_1935"]: 
                temp = getBoolFromProperty(bk["in_1935"])
                if temp:
                    book += "\"in_1935\":{},".format(temp)
            
            if bk["notes"]: book += "\"notes\":\"{}\",".format(bk["notes"])
            if bk["ESTC"]: book += "\"ESTC\":\"{}\",".format(bk["ESTC"])
            if bk["EEBO"]: book += "\"EEBO\":\"{}\",".format(bk["EEBO"])
            if bk["Gale"]: book += "\"Gale\":\"{}\",".format(bk["Gale"])
            if bk["link"]: book += "\"link\":\"{}\",".format(bk["link"])
            if bk["images"]: book += "\"images\":\"{}\",".format(bk["images"])           
            if bk["permissions"]: book += "\"permissions\":\"{}\",".format(bk["permissions"])

            if bk["folder"]: book += "\"folder\":\"{}\",".format(bk["folder"])
            if bk["spine"]:
                temp = getBoolFromProperty(bk["spine"])
                if temp: 
                    book += "\"spine\":\"{}\",".format(temp)              
            
            # remove extra comma
            book = book[:-1]    

            book += "},"

            file.write(book)

        if(id_as_key):
            file.write("};")
        else:
            file.write("];")


# write arr to file
createCompleteDataJSfromArr(catalogue_arr, True)
print("Finished: production-files/complete-data.js")