#!/usr/bin/python3
from models.base_model import BaseModel
import json

class FileStorage():

    __file_path = "file.json"
    __objects = {}
    
    
    def all(self):
        print("-----ALL EN FILESTORAGE-----")
        return FileStorage.__objects

    def new(self, obj):
        print("-----SE EJECUTA EL NEW EN FILESTORAGE-----")
        print(obj)
        obj_name = obj.__class__.__name__
        print(obj_name)
        print(self.__objects)
        print("***------------------------------------------")
        FileStorage.__objects[f"{obj_name}.{obj.id}"] = obj
        print(self.__objects)

    def save(self):
        print("-----SE EJECUTA EL SAVE EN FILESTORAGE-----")
        dic_to_json = {}
        print(self.__objects)
        print(self.__dict__)
        print("----------INICIA EL FOR EN FILESTORAGE*-------")
        for key in FileStorage.__objects.keys():
            print(key)
            dic_to_json[key] = FileStorage.__objects[key].to_dict()
            print("------------------DICT_TO_JSON----------------")
            print(dic_to_json)
        with open(FileStorage.__file_path, mode='w', encoding='utf-8') as f:
            json.dump(dic_to_json, f)

    def reload(self):
        """
        Deserialize the JSON file __file_path to __objects
        """
        json_file = FileStorage.__file_path
        print("-----------JSON_FILE------------")
        print(json_file)
        dic = {}
        print("----RELOAD---")
        try:
            with open(json_file, mode='r', encoding='utf-8') as f:
                json_to_dic = json.load(f)
                print("----------JSON TO DICT-----------")
                print(json_to_dic)
                print("---------INICIA FOR EN RELOAD--FILESTORAGE--------")
            for k, v in json_to_dic.items():
                print(v)
                class_name = v['__class__']
                del v['__class__']
                print("------------------------------------------------")
                print(v)
                print(k)
                print(eval(class_name))
                dic.update({k: eval(class_name)(**v)})
                print(FileStorage.__objects)
                FileStorage.__objects = dic
                print("*------------------------------------------------")
                print(FileStorage.__objects)
        except FileNotFoundError:
            return
