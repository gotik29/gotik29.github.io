(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let scrollpos = window.scrollY;
    const mainblock__subtitle = document.querySelector(".mainblock__subtitle");
    const mainblock__title = document.querySelector(".mainblock__title");
    const scrolChange = 110;
    const add_class_on_scroll_title = () => mainblock__title.classList.add("active-when-scroll-title");
    const remove_class_on_scroll_title = () => mainblock__title.classList.remove("active-when-scroll-title");
    const add_class_on_scroll_subtitle = () => mainblock__subtitle.classList.add("active-when-scroll-subtitle");
    const remove_class_on_scroll_subtitle = () => mainblock__subtitle.classList.remove("active-when-scroll-subtitle");
    window.addEventListener("scroll", (function() {
        scrollpos = window.scrollY;
        if (scrollpos >= scrolChange) add_class_on_scroll_title(); else remove_class_on_scroll_title();
        if (scrollpos >= scrolChange) add_class_on_scroll_subtitle(); else remove_class_on_scroll_subtitle();
    }));
    window["FLS"] = true;
    isWebp();
})();