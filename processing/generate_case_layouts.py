# reads in csv and outputs layout file
# Requires the RWA spreadsheet be condensed into the columns which the application will use
# export the sheet as csv, and run through this script

# book ids are placed in arrays based on their location by [wall][column][shelf]
# arrays are sorted in order by id

import os
from pathlib import Path
import csv

catalogue_file = "catalogue.csv"
output_filename = "layout.js"
output_path = Path(__file__).parent.absolute() / 'production-files' / output_filename
catalogue = []
layout = {
    "South": {},
    "East": {},
    "West": {}
}

# populate catalogue dict from csv
with open(catalogue_file, "r", encoding="utf-8") as file:
    # formats csv data to dictionary
    file_reader = csv.DictReader(file)
    for row in file_reader:
        catalogue.append(row)

# arrange book in layout dict
for book in catalogue:
    id = book['id']
    case, temp = book['shelf'].split(":")
    column, shelf = temp.split(",")

    case = case.replace(" case", "")
    case = case.replace(" Case", "")

    # strip strings
    column = column.replace(" slip ", "s") if "slip" in column else column.replace(" column ", "")
    shelf = shelf.replace(" shelf ", "")

    # print("%s - %s - %s" % (case, column, shelf))
    if column not in layout[case]:
        layout[case][column] = {}
    
    if shelf not in layout[case][column]:
        layout[case][column][shelf] = []

    layout[case][column][shelf].append(int(id))


# iterate through layout and write to js file
with open(output_path, "w") as file:
    file.write("var LAYOUT = {")

    output = ""
    for case in layout:
        output += "\"" + case + "\":{"

        for column in layout[case]:
            output += "\"" + column + "\":{"

            for shelf in layout[case][column]:
                output += "\"" + shelf + "\":["
                
                arr = ",".join(map(str, layout[case][column][shelf]))
                output += arr

                output += "],"
        
            output += "},"

        output += "},"
    
    file.write(output)
    file.write("};")

print("Finished: production-files/layout.js")
