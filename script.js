const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const menuInner = document.getElementById('mobile-menu__inner');
const html = document.querySelector('html')
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

// function getScrollbarWidth() {
//     return window.innerWidth - document.documentElement.clientWidth;
// }

// const scrollbarWidth = getScrollbarWidth();



btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('show-menu');
    document.body.classList.toggle('stop-scrolling');
    html.classList.toggle('start-scrolling');
    html.classList.toggle('stop-scrolling');

}

function scrollPage() {
    const scrollPos = window.scrollY;
    
    if(scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            //get count target
            const target = +counter.getAttribute('data-target');
            //get current value
            const c = +counter.innerText;

            const increment = target / 10;

            if(c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 150)
            }

            
        }

        updateCounter();
    })
}
