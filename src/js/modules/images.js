const images = () => {
    const imgPopup = document.createElement('div')
    const workSection = document.querySelector('.works')
    const bigImage = document.createElement('img')

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);


    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage)
    workSection.addEventListener('click', function (event) {
        event.preventDefault()



        if (event.target && event.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';

            const path = event.target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        if (event.target && event.target.matches('div.popup')) {
            imgPopup.style.display = 'none'


        }
    })

}
export default images


