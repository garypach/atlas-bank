const menuIcon = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header')

header.addEventListener('click', () => {
    if (menuIcon.classList.contains('rotate-45')) {
        menuIcon.classList.remove('rotate-45')
    }
    else {
        menuIcon.classList.add('rotate-45')
    }

    header.classList.toggle('max-h-[56px]')
    header.classList.toggle('max-h-[580px]')
    header.classList.toggle('md:max-h-[540px]')


    menu.classList.toggle('opacity-0')
    menu.classList.toggle('opacity-100')

})
