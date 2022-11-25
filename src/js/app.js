import '../scss/app.scss';

import All from "./all";
// import PrimaryNav from "./primary-nav";
// import TopButton from "./top-button";
import Widget from "./widget";

document.addEventListener('DOMContentLoaded', async () => {
    window.refs = {
        all: {
            init: () => new All()
        },
        widget: {
            init: () => new Widget()
        },
        // primaryNav: {
        //     init: () => new PrimaryNav
        // },
        // topButton: {
        //     init: () => new TopButton
        // }
    }

    Object.keys(window.refs).forEach((ref) => {
        if (window.refs[ref].hasOwnProperty('init')) {
            window.refs[ref].class = window.refs[ref].init();
        }
    });
});
