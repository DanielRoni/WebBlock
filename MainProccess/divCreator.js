var blockLoadAmount =0;


var firstdata = JSON.parse(window.localStorage.getItem('block'));
blockLoadAmount = appendData(firstdata);

function fetchData(exe){
    var data2 = JSON.parse(window.localStorage.getItem('block'));
    var result = appendDataAfterLoading(data2, blockLoadAmount, exe);

    return result;
    
}



//function isOverlapping(el1, el2) {
//    // get the bounding rectangles for each element
//    const rect1 = el1.getBoundingClientRect();
//    const rect2 = el2.getBoundingClientRect();
//  
//    // check if the rectangles are overlapping
//    return !(
//      (rect1.bottom < rect2.top) || (rect1.top > rect2.bottom) ||
//      (rect1.right < rect2.left) || (rect1.left > rect2.right)
//    );
//}

function checkZ(data, a){

}


function guid(){
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


function appendDataAfterLoading(data, a, exe) {


    
    const mainContainer = document.getElementById("BlockContainer");
    for (let i = a; i < data.length; i++) {

            const div = document.createElement("div");
            const longId = guid();
            div.style.position = "absolute";
            div.style.left =  (data[i].x1) + "px";
            div.style.top = (data[i].y1) + "px";
            div.style.height = (data[i].y2 - data[i].y1) + "px";
            div.style.width = (data[i].x2 - data[i].x1) +"px";
            div.style.backgroundColor = "#333c4a";
            div.classList.add("BlockStyle");
            div.id = longId;
            div.zIndex = 1;
            mainContainer.appendChild(div);
            
            data[i].blockId = longId;
            exe = data;
            console.log("&&&&&&&&&&&&" + checkZ(data, a));


            window.localStorage.setItem('block', JSON.stringify(exe)); 
            blockLoadAmount = blockLoadAmount + 1;
    }


    console.log(window.localStorage.getItem('block'));
    return exe;


    
}
    




function appendData(data) {
    console.log(data.length);
    const mainContainer = document.getElementById("BlockContainer");
    for (let i = 1; i < data.length; i++) {
        const div = document.createElement("div");

        div.style.position = "absolute";
        div.style.left =  (data[i].x1) + "px";
        div.style.top = (data[i].y1) + "px";
        div.style.height = (data[i].y2 - data[i].y1) + "px";
        div.style.width = (data[i].x2 - data[i].x1) +"px";
        div.id = data[i].blockId;
        div.style.backgroundColor = "#333c4a";
        div.classList.add("BlockStyle");

        mainContainer.appendChild(div);
    }
    return (data.length);
    
}
