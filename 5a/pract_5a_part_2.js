const clickLeft = () => {
 const imageNodes = document.getElementsByClassName('slider-item');

 let prevIndex = null;

 for (let i = 0; i < imageNodes.length; i += 1) {
  if (imageNodes[i].classList.contains('selected')) {
   prevIndex = i - 1;
   if (prevIndex === -1) {
    prevIndex = imageNodes.length - 1;
   }
  }
 }

 const [selectedNode] = document.getElementsByClassName('selected');
 
 selectedNode.classList.toggle('selected');

 imageNodes[prevIndex].classList.toggle('selected');
};

document.getElementById('left').addEventListener('click', clickLeft);

const clickRight = () => {
    const imageNodes = document.getElementsByClassName('slider-item');
    let nextIndex = null;
  
    for (let i = 0; i < imageNodes.length; i += 1) {
      if (imageNodes[i].classList.contains('selected')) {
        nextIndex = i + 1;
        if (nextIndex === imageNodes.length) {
          nextIndex = 0;
        }
      }
    }
  
    const [selectedNode] = document.getElementsByClassName('selected');
    selectedNode.classList.toggle('selected');
  
    imageNodes[nextIndex].classList.toggle('selected');
  };
  
  document.getElementById('right').addEventListener('click', clickRight);
  