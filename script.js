function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const htmlProgressBar = document.querySelector('.progress-html .progress__fill');
const cssProgressBar = document.querySelector('.progress-css .progress__fill');
const javascriptProgressBar = document.querySelector('.progress-javascript .progress__fill');

// Update the progress bars as needed
htmlProgressBar.style.width = '75%';
cssProgressBar.style.width = '90%';
javascriptProgressBar.style.width = '60%';
