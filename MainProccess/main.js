var mouseIsDown = false;
var mouseCheck = false;
var idTimeout;

var mouFXpos=0;
var mouFYpos=0;
var mouSYpos=0;
var mouSXpos=0;

excBlockContainer  = JSON.parse(window.localStorage.getItem('block'));
const Container = document.getElementById("BlockContainer");



Container.addEventListener('mousedown', function(e){


  switch (e.button){
    case 0:
      mouFXpos=e.x;
      mouFYpos=e.y;

      mouseIsDown = true
      idTimeout = setTimeout(function(){
      if (mouseIsDown){
        mouFXpos=e.x;
        mouFYpos=e.y;
        mouseCheck = true;
      


      }

      }, 300);
    break;


    case 2:


    break;

  }


});


function blockCreator(_x1,_y1,_x2,_y2){
  const tempBlock = new Int32Array(5);
  if(_x1>_x2){
    if(_y1>_y2){
      tempBlock[0] = _x2;
      tempBlock[1] = _x1;
      tempBlock[2] = _y2;
      tempBlock[3] = _y1;
      tempBlock[4] = null;
    }
    else{
      tempBlock[0] = _x2;
      tempBlock[1] = _x1;
      tempBlock[2] = _y1;
      tempBlock[3] = _y2;
      tempBlock[4] = null;

    }
  }
  if(_x1<_x2){
    if(_y1<_y2){
      tempBlock[0] = _x1;
      tempBlock[1] = _x2;
      tempBlock[2] = _y1;
      tempBlock[3] = _y2;
      tempBlock[4] = null;

    }
    else{
      tempBlock[0] = _x1;
      tempBlock[1] = _x2;
      tempBlock[2] = _y2;
      tempBlock[3] = _y1;
      tempBlock[4] = null;

    }
  }



  var exe = saveBlock(tempBlock);  
  excBlockContainer = fetchData(exe);
  console.log(tempBlock);
  

}

Container.addEventListener('mouseup', function(t){
    
  switch (t.button){
    case 0:
      clearTimeout(idTimeout);


      if(mouseCheck){
        mouseCheck = false;
        mouseIsDown = false;
        mouSXpos=t.x;
        
        mouSYpos=t.y;


        
        blockCreator(mouFXpos, mouFYpos, mouSXpos, mouSYpos);


      }

    break;


    case 2:
      break;

  }
  

});


function saveBlock(tempBlock){
    const excBlock = {
        x1: tempBlock[0],
        x2: tempBlock[1],
        y1: tempBlock[2],
        y2: tempBlock[3],
        blockId: tempBlock[4]
    
      }
      excBlockContainer.push(excBlock);
    
      const JSONblock = JSON.stringify(excBlockContainer, null, 2);
      window.localStorage.setItem('block', JSONblock);
      return excBlockContainer;
      
}