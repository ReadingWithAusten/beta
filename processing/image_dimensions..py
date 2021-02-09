# This script checks the width of the spine images to infer the number of volumes it represents
# approx 70px is the width of 1 book

## Checks dimensions of images
import struct
import imghdr
import os
import csv
import math
from pathlib import Path

# Determines image dimensions of given file
def get_image_size(fname):
    '''Determine the image type of fhandle and return its size.
    from draco'''
    with open(fname, 'rb') as fhandle:
        head = fhandle.read(24)
        if len(head) != 24:
            return
        if imghdr.what(fname) == 'png':
            check = struct.unpack('>i', head[4:8])[0]
            if check != 0x0d0a1a0a:
                return
            width, height = struct.unpack('>ii', head[16:24])
        elif imghdr.what(fname) == 'gif':
            width, height = struct.unpack('<HH', head[6:10])
        elif imghdr.what(fname) == 'jpeg':
            try:
                fhandle.seek(0) # Read 0xff next
                size = 2
                ftype = 0
                while not 0xc0 <= ftype <= 0xcf:
                    fhandle.seek(size, 1)
                    byte = fhandle.read(1)
                    while ord(byte) == 0xff:
                        byte = fhandle.read(1)
                    ftype = ord(byte)
                    size = struct.unpack('>H', fhandle.read(2))[0] - 2
                # We are at a SOFn block
                fhandle.seek(1, 1)  # Skip `precision' byte.
                height, width = struct.unpack('>HH', fhandle.read(4))
            except Exception: #IGNORE:W0703
                return
        else:
            return
        return width, height

## Walk through directory and get spine image names
root_path = Path(__file__).parent.absolute() / 'New images' / 'spines' / 'web optmized'
num_books = 0
volumes_dict = {}

for root, dirs, files in os.walk(root_path):
    for file in files:
        if('png' in file):
            image_dimensions = get_image_size(root_path / file)
            width = image_dimensions[0]
            height = image_dimensions[1]
            volumes_dict[str(file)] = math.ceil(width/70)
            num_books += 1
            print("{}: {}".format(file, width/70))

print(num_books)

# Write results to file
with open('volumes_per_image.csv', mode='w') as file:
    writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    for book, no_volumes in volumes_dict.items():
        writer.writerow([book,no_volumes])