function createList(){
    //First old elements(if present) needs to be cleared
    document.querySelector('.algoList').innerHTML=""

    array=eval('['+document.querySelector('.array').innerHTML+']');
    console.log(`array = ${array}`);

    for (let i = 0; i < array.length; i++) { 
        var lsdiv = document.createElement("div");
        lsdiv.className="elem"
        lsdiv.innerHTML = array[i]
        lsdiv.id=`id${i}`
        lsdiv.style.order=i
        document.querySelector('.algoList').appendChild(lsdiv);
    }
}

async function Visualsort() {
    array=eval('['+document.querySelector('.array').innerHTML+']');
    
    for(var i = 0; i < array.length; i++){
     
        // Last i elements are already in place  
        for(var j = 0; j < ( array.length - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration
            await new Promise(r => setTimeout(r, 1000));  
          if(array[j] > array[j+1]){
            elemj=document.querySelector(`#id${j}`)
            elemjp=document.querySelector(`#id${j+1}`)
            // If the condition is true then swap them
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
              
            elemj.style.order=j+1
            elemj.id=`id${j+1}`
            
            elemjp.style.order=j
            elemjp.id=`id${j}`
          }
        }
        
    }
    console.log(`--> ${array}`);
}
async function sort() {
  createList()
}
createList()
Visualsort()

runbutton=document.getElementById('runbtn')
console.log(runbutton.innerHTML);
runbutton.addEventListener("click", function(){
  createList()
  Visualsort()
}); 