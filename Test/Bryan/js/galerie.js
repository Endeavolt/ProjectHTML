const archive = document.querySelector('.oldPhoto');
const arc = archive.querySelector('.archive');
const photo = arc.querySelector('.photos');
const buttonClass = arc.querySelector('.buttonDis');
const discoverButton = buttonClass.querySelector('.discover');
const closeButton = archive.querySelector('.buttonClose');

discoverButton.addEventListener('click',e =>
{
    photo.classList.remove('is-hidden');
    arc.classList.remove('resume');
    closeButton.classList.remove('is-hidden');
    buttonClass.classList.add('is-hidden');
})

closeButton.addEventListener('click',e => 
{
    photo.classList.add('is-hidden');
    arc.classList.add('resume');
    closeButton.classList.add('is-hidden');
    buttonClass.classList.remove('is-hidden');
})
