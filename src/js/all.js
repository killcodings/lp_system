export default class All {
    constructor() {
        this.init();
    }

    init() {
        const header = document.querySelector('.header');
        const primaryNavShowed = document.querySelector('.header__primary-nav');

        if (header) {
            const main = document.querySelector('main');
            let h = header.offsetHeight;
            let primaryNavShowedHeight = primaryNavShowed.offsetHeight;
            primaryNavShowed.style.top = h + 'px';
            console.log(h + ' ' + header.offsetHeight)
            primaryNavShowed.style.height = primaryNavShowedHeight - h + 'px';


        }
    }
}
