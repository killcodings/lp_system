export default class TopButton {
    constructor() {
        this.init();
    }

    init() {
        const topButton = document.querySelectorAll('.top-button');

        window.addEventListener('scroll', function () {
            [...topButton].forEach((elem) => {
                if (this.scrollY >= 500) {
                    elem.classList.add('top-button_active');
                } else {
                    elem.classList.remove('top-button_active');
                }
            })
        });

        if (topButton) {
            [...topButton].forEach((elem) => {
                elem.addEventListener('click', function () {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                });
            });
        }
    }
}
