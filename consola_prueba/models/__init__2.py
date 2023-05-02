#!/usr/bin/python3
from models.engine.file_storage import FileStorage

print("----INSTANCIA FILE STORAGE----")
storage = FileStorage()
print("---------RELOAD EN __INIT__-----")
storage.reload()
