function removeBlock(currentId){
    var div = document.getElementById(currentId);
    
    div.parentNode.removeChild(div);

    var data = JSON.parse(window.localStorage.getItem('block'));
    var i = 1;
    while (currentId != data[i].blockId){
        i++;
    }
    data.splice(i,1);
    console.log(data);
    window.localStorage.setItem('block', JSON.stringify(data));

}