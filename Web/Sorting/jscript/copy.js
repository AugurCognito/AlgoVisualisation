document.getElementById("copy").addEventListener("click",function(){
    var copytext = document.getElementById('toCopy');
    
    copytext.select();
    copytext.setSelectionRange(0, 99999)

    document.execCommand("copy");
})