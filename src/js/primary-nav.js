export default class PrimaryNav {
    constructor() {
        this.init();
    }

    init() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1000) {
            const primaryNav = document.querySelector('.primary-nav');
            const primaryNavBtnTop = document.querySelector('.primary-nav_buttons_top');
            const primaryNavBtnBottom = document.querySelector('.primary-nav_buttons_bottom');
            const isHeaderBtnTop = document.querySelector('.header .buttons');
            const primaryNavList = primaryNav.querySelector('.primary-nav__list');
            const burger = document.querySelector('.burger');

            let burgerClicked = false;

            // burger.addEventListener('click', function(e){
            //     console.log(e.target);
            //     if(e.target.classList.contains('close') || e.target.parentElement.classList.contains('close')) {
            //         popupConsultation.classList.remove('popup_consultation__active');
            //     }
            // });

            if (isHeaderBtnTop && primaryNavBtnTop) {
                const cloneHeaderBtnTop = isHeaderBtnTop.cloneNode(true);
                primaryNav.prepend(cloneHeaderBtnTop);
            }

            if (isHeaderBtnTop && primaryNavBtnBottom) {
                const cloneHeaderBtnBottom = isHeaderBtnTop.cloneNode(true);
                cloneHeaderBtnBottom.classList.add('buttons_bottom');
                primaryNav.append(cloneHeaderBtnBottom);
                console.log(primaryNav.length);
            }

            burger.addEventListener('click', function () {
                this.classList.toggle('burger_active');
                primaryNav.classList.toggle('primary-nav_showed');
                document.querySelector('body').classList.toggle('no-scroll');

                if (!burgerClicked) {
                    burgerClicked = true;

                    const subMenus = primaryNav.querySelectorAll('.sub-menu');
                    subMenus.forEach((subMenu) => {
                        const backItem = document.createElement('span'); // Create back button
                        backItem.classList.add('back-item');
                        backItem.innerHTML = 'Back';
                        subMenu.prepend(backItem);
                    });
                }
            });

            if (primaryNav) {
                let tempItems = {
                    lastItems: [],
                    lastScrollTop: 0,
                    counter: 0
                };
                primaryNav.addEventListener('click', function (e) {
                    const currentItem = e.target;
                    if (currentItem.classList.contains('menu-item-has-children')) {
                        /* Save last scroll top */
                        tempItems.lastScrollTop = primaryNav.scrollTop;
                        primaryNav.scrollTop = 0;
                        tempItems.counter++;
                        /* --- */

                        tempItems.lastItems.push(primaryNavList.innerHTML); // Save current menu

                        /* Show submenu */
                        const subMenu = currentItem.querySelector('.sub-menu');
                        primaryNavList.innerHTML = subMenu.innerHTML;
                        /* --- */
                    }

                    if (currentItem.classList.contains('back-item')) {
                        tempItems.counter--;
                        primaryNav.scrollTop = tempItems.lastScrollTop;

                        primaryNavList.innerHTML = tempItems.lastItems[tempItems.counter];
                    }

                    if (tempItems.counter === 0) {
                        tempItems.lastItems = [];
                    }
                });
            }
        }
    }
}
