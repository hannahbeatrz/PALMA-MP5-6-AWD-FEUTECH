document.addEventListener('DOMContentLoaded', function () {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const popupContainer = document.querySelector('.popup-container');
    const popupInfos = document.querySelectorAll('.item-info');
    const mainMenuButton = document.querySelector('.main-menu'); 

    learnMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            popupInfos[index].style.display = 'block';
            popupContainer.style.display = 'flex';
        });
    });

    mainMenuButton.addEventListener('click', function () {
        popupInfos.forEach(info => {
            info.style.display = 'none';
        });
        popupContainer.style.display = 'none'; 
    });
});
