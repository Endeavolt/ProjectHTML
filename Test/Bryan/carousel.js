const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;



// Arrange the slide next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide,targetSlide) => 
{
    track.style.transform =  'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    
}

const updateDots =(currentDot, targetDot)=> {

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
} 


const hideShowArrow = (slides, prevButton, nextButton, targetIndex) =>
{
    if(targetIndex === 0)
    {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } 
    else if(targetIndex === slides.length-1)
    {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else
    {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// When I click  left, move slides to the left
prevButton.addEventListener('click',e =>
{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot =  currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide == prevSlide);
   moveToSlide(track,currentSlide,prevSlide);
   updateDots(currentDot,prevDot);
   hideShowArrow(slides,prevButton,nextButton,prevIndex);

})

// When I click right, move slides to the right
nextButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot =  currentDot.nextElementSibling;

    const nextIndex = slides.findIndex(slide => slide == nextSlide);

    moveToSlide(track,currentSlide,nextSlide);
    updateDots(currentDot,nextDot);
    hideShowArrow(slides,prevButton,nextButton,nextIndex);


})



// When I click the nav indicator, move to that slide
dotsNav.addEventListener('click', e =>
{
    // What indicator was clicked on ? 
    const targetDot =e.target.closest('button');
    
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);
    hideShowArrow(slides,prevButton,nextButton,targetIndex);
  
});