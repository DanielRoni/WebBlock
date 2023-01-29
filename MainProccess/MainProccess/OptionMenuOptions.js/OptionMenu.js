const removeBtn = document.getElementById("contextMenu-removeBlock");
const scriptBtn = document.getElementById("contextMenu-addScript");
const optionBtn = document.getElementById("contextMenu-options");
document.onclick = hideMenu;
document.oncontextmenu = rightClick;
var currentId = null;
function hideMenu() {
    enableScroll(); 
    document.getElementById("contextMenu").style.display = "none"
}

function rightClick(e) {
    currentId = e.target.id;
    if (currentId == "BlockContainer"){
        
    }
    e.preventDefault();

    if (document.getElementById("contextMenu").style.display == "block")
        hideMenu();
    else{
        if ( currentId != "BlockContainer") {
            var menu = document.getElementById("contextMenu")
                  
            menu.style.display = 'block';
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
            menu.style.width = "400px";
            menu.style.hight = "800px";
    
            disableScroll();
    
        }
    }

    return currentId;
}
removeBtn.addEventListener("click", function(rm){
    removeBlock(currentId);
});
scriptBtn.addEventListener("click", function(sc){

});
optionBtn.addEventListener("click", function(op){

});
