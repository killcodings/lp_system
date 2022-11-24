export default class Widget {
    constructor() {
        this.init();
    }

    init() {
        const widget = document.querySelector('.widget');

        let widgetOpen = document.querySelector('.widget-icon');
        let widgetSubMenu = document.querySelector('.wpml-ls-sub-menu');

        widgetOpen.addEventListener('click', (evt) => {
            widgetOpen.classList.toggle('widget-icon-open');
            widgetSubMenu.classList.toggle('wpml-ls-sub-menu-active');
        })
    }
}
