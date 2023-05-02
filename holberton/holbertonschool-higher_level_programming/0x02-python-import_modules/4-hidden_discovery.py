#!/usr/bin/python3
if __name__ == "__main__":
    import hidden_4

    for text in dir(hidden_4):
        if ("__" not in text):
            print(text)
