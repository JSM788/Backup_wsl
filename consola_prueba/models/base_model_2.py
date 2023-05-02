#!/usr/bin/python3
import models
from uuid import uuid4
from datetime import datetime

class BaseModel():
    
    def __init__(self, *args, **kwargs):
        self.id = str(uuid4())
        self.created_at = datetime.now()
        self.updated_at = datetime.now()
        print(self.__dict__)
        print("-----INIT KWARGS Y COMPROBACION----")
        if kwargs:
            print("----KWARGS-----")
            date = "%Y-%m-%dT%H:%M:%S.%f"
            for k, v in kwargs.items():
                if k == "created_at" or k == "updated_at":
                    print("----IF---")
                    self.__dict__[k] = datetime.strptime(v, date)
                    print(self.__dict__)
                elif k != "__class__":
                    print("----ELSE----")
                    self.__dict__[k] = v
                    print(self.__dict__)
        else:
            print("----SE EJECUTA EL NEW EN BASEMODEL--------")
            print(self.__dict__)
            models.storage.new(self)
        
    print("LA NADA")
    def __str__(self):
        print("----STR EN BASEMODEL-----")
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"

    def save(self):
        print(self.__dict__)
        print("-----------------------+++---------------------------------")
        self.updated_at = datetime.now()
        print(self.__dict__)
        print("---SAVE_BASE_MODEL----")
        models.storage.save()

    def to_dict(self):
        print("-------------------TO DICT EN BASE MODEL------------------")
        new_dict = self.__dict__.copy()
        print(new_dict)
        print("----------------------------------------------------------")
        new_dict['__class__'] = self.__class__.__name__
        new_dict["created_at"] = self.created_at.isoformat()
        new_dict["updated_at"] = self.updated_at.isoformat()
        print(new_dict)
        return new_dict

