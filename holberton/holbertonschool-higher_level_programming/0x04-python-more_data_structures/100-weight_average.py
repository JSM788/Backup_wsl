#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:
        return 0
    else:
        result = 0
        val_sum = 0
        for i in my_list:
            result = result + i[0] * i[1]
            val_sum = val_sum + i[1]
        return result / val_sum
