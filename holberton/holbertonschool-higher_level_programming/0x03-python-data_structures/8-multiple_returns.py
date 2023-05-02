#!/usr/bin/python3i

def multiple_returns(sentence):
    lens = len(sentence)
    if lens == 0:
        return(0, None)
    else:
        return(lens, sentence[0])
