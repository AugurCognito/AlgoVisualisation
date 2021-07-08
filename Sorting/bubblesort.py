import time
from termcolor import cprint
import os
os.system('color')

class BubbleSort:
    def __init__(self,array,time_int=0.5) -> None:
        self.name="Bubble Sort"
        self.array=array
        self.TIMECOMPLEXITY="ON^2"
        self.time_int=time_int
    
    def visualize(self)->None:
        for iter_num in range(len(self.array)-1,0,-1):
            for index in range(iter_num):
                print("",end="\n-->")
                # items on left side of where sorting algorithm is, are shown in cyan color
                for num in self.array[:index]: cprint(num,"cyan",end=",")

                if self.array[index]>self.array[index+1]:
                    temp=self.array[index]
                    self.array[index]=self.array[index+1]
                    self.array[index+1]=temp
                    # if items are replaced with each other then they are shown in yellow color
                    cprint(str(self.array[index])+"<->"+str(self.array[index+1]),'yellow',end="")
                    
                else:
                    # if items are already sorted then they are shown in magenta
                    cprint(str(self.array[index])+"---"+str(self.array[index+1]),'magenta',end="")
                
                # items on the right before sorted array is shown in cyan color
                for num in self.array[index+2:iter_num+1]:cprint(num ,'cyan',end=",")
                # already sorted array items are shown in blue color
                for num in self.array[iter_num+1:]:cprint(num,'blue',end=" ")
                time.sleep(self.time_int)
        print("Sorted array:")
        for item in self.array:cprint(item,"blue",end=" ")

    def sort(self)->None:
        pass

        

if __name__ == "__main__":
    import random
    lst=[random.randint(1,1000) for i in range(0,15)]
    print("List to be sorted is:",lst)
    a=BubbleSort(lst)
    a.visualize()
    
    