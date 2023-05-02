#!/usr/bin/python3
from models import storage
from models.base_model import BaseModel

print("INICIO")
all_objs = storage.all()
print(all_objs)
print("-- Reloaded objects --")
for obj_id in all_objs.keys():
    print("SE INICIA EL FOR EN TEST RELOAD")
    print(obj_id)
    obj = all_objs[obj_id]
    print(obj)
    print("PRINT OJB EN TEST RELOAD")

print("-- Create a new object| SE INSTANCIA  BASEMODEL --")
my_model = BaseModel()
print("-----SE COMIENZA AGREGAR ATRIBUTOS AL BASEMODEL")
my_model.name = "My_First_Model"
my_model.my_number = 89
print("-----SE EJECUTA EL SAVE EN TEST----")
my_model.save()
