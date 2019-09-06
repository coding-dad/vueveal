export default class RHelper {
    static setTheme(theme) {
        const themeLink = document.getElementById('theme');
        themeLink.href = `css/theme/${theme}.css`;
    }

    static init(initObj = {}, configObj = {}) {
        window.Reveal.initialize(initObj);
        window.Reveal.configure(configObj);
    }
}
