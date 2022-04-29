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
        console.log(scrollpos);
        if (scrollpos >= scrolChange) add_class_on_scroll_title(); else remove_class_on_scroll_title();
        if (scrollpos >= scrolChange) add_class_on_scroll_subtitle(); else remove_class_on_scroll_subtitle();
    }));
    let scrollpos1 = window.scrollY;
    const marker = document.querySelector(".dots__marker");
    const scrolChange1 = 450;
    const add_class_on_scroll_marker = () => marker.classList.add("active-when-scroll-marker");
    const remove_class_on_scroll_marker = () => marker.classList.remove("active-when-scroll-marker");
    window.addEventListener("scroll", (function() {
        scrollpos1 = window.scrollY;
        console.log(scrollpos1);
        if (scrollpos1 >= scrolChange1) add_class_on_scroll_marker(); else remove_class_on_scroll_marker();
    }));
    let scrollpos2 = window.scrollY;
    const marker1 = document.querySelector(".dots__marker1");
    const scrolChange2 = 800;
    const add_class_on_scroll_marker1 = () => marker1.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker1 = () => marker1.classList.remove("active-when-scroll-marker1");
    window.addEventListener("scroll", (function() {
        scrollpos2 = window.scrollY;
        console.log(scrollpos2);
        if (scrollpos2 >= scrolChange2) add_class_on_scroll_marker1(); else remove_class_on_scroll_marker1();
    }));
    window["FLS"] = true;
    isWebp();
})();