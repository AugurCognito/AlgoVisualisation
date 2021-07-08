import time
from termcolor import cprint
import os
os.system('color')

class Linear_Search():
    def __init__(self,array,find,time_int=0.5) -> None:
        self.array=array
        self.find=find
        self.time_int=time_int

    def visualize(self):
        for idx in range(len(self.array)):
            for item in self.array[:idx]: cprint(item,"cyan",end=",")
            if self.array[idx]==self.find:
                cprint(self.array[idx],'green',end=" ")
                for item in self.array[idx+1:]:cprint(item,"blue",end=",")
                return None
            cprint(self.array[idx],"red",end=" ")
            for item in self.array[idx+1:]:cprint(item,"cyan",end=",")
            print()
            time.sleep(self.time_int)

if __name__ == "__main__":
    import random
    lst=[random.randint(1,1000) for i in range(0,15)]
    print("List to be sorted is:",lst)
    a=Linear_Search(lst,random.choice(lst))
    a.visualize()