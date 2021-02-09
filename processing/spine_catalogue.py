### checking if all spines in 'cropped-spines' are used in 'spines'
import os
from pathlib import Path


# Walk through directory and get spine image names
cropped_path = Path(__file__).parent.absolute() / 'new images' / 'cropped-spines'
used_spine_path = Path(__file__).parent.absolute() / 'new images' / 'spines' / 'web optmized'

crop_spines = []
used_spines = []

def populateArr (arr, path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if('png' in file):
                arr.append(str(file))
                #print(file)

populateArr(crop_spines, cropped_path)
populateArr(used_spines, used_spine_path)

count = 0

for sp in used_spines:
    if sp not in crop_spines:
        count += 1
        print(sp)

print(count)