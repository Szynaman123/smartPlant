from typing import Collection
from pymongo import MongoClient
import gridfs
import sys
import os

connection = MongoClient("localhost", 27017)

database = connection['smartPlant_database']

fs = gridfs.GridFS(database, collection="plants_images")


for filename in os.listdir(sys.argv[1]):
    with open(os.path.join(sys.argv[1], filename), 'rb') as image: 
        contents = image.read()
        fs.put(contents, filename=filename)


# skrypt odpala się w taki sposób: python3 insert-plant-images.py DIR
# DIR to ścieżka folderu, w którym znajdują się zdjęcia
# w tym przypadku nazwa lokalnej bazy danych do 'smartPlant_database'
# jeśli ktoś ma inną nazwę to trzeba podmienić
# wymagane są dwie paczki pymongo i gridfs
# pip3 install pymongo