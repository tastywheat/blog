
window._state = JSON.parse(localStorage.getItem('blog_state')) || {};

window.onbeforeunload = function () {
    localStorage.setItem('blog_state', JSON.stringify(window._state));
};

const storage = {
    getState () {
        return window._state;
    },
    setState (state) {
        window._state = state;
    },
};


export default storage;
