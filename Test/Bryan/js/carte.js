const body =  document.querySelector('.body')
const choice = document.querySelector('.choice');
const imgList = document.querySelector('.carteImg');
const buttonArray = Array.from(document.querySelectorAll('.discover'));
const imgArray = Array.from(imgList.children);
console.log(buttonArray.length);

choice.addEventListener('click', e => 
{
    const button = e.target.closest('button');
    if(!button) return;
   

    const ImageIndex = buttonArray.findIndex(i => i == button );
    imgArray[ImageIndex].style.visibility ='visible';
    // Faut trouver l'index
    // Puis afficher l'image en mettant visibility à true
})

const resetImage = (element,index) => 
{
    if(element.style.visibility === 'visible')
    {
        element.style.visibility = 'hidden';
    }
} 


imgList.addEventListener('click', e=>
{ 
    console.log("Test");
    imgArray.forEach(resetImage); 

})