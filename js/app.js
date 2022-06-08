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
    const mainblock__subtitle = document.querySelector(".inscription__subtitle");
    const mainblock__title = document.querySelector(".inscription__title");
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
    const marker = document.querySelector(".dots__dot-0");
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
    const scrolChange2 = 700;
    const add_class_on_scroll_marker1 = () => marker1.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker1 = () => marker1.classList.remove("active-when-scroll-marker1");
    window.addEventListener("scroll", (function() {
        scrollpos2 = window.scrollY;
        console.log(scrollpos2);
        if (scrollpos2 >= scrolChange2) add_class_on_scroll_marker1(); else remove_class_on_scroll_marker1();
    }));
    let scrollpos3 = window.scrollY;
    const marker2 = document.querySelector(".dots__marker2");
    const marker3 = document.querySelector(".dots__marker3");
    const scrolChange3 = 850;
    const add_class_on_scroll_marker2 = () => marker2.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker2 = () => marker2.classList.remove("active-when-scroll-marker1");
    const add_class_on_scroll_marker3 = () => marker3.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker3 = () => marker3.classList.remove("active-when-scroll-marker1");
    window.addEventListener("scroll", (function() {
        scrollpos3 = window.scrollY;
        console.log(scrollpos3);
        if (scrollpos3 >= scrolChange3) add_class_on_scroll_marker2(); else remove_class_on_scroll_marker2();
        if (scrollpos3 >= scrolChange3) add_class_on_scroll_marker3(); else remove_class_on_scroll_marker3();
    }));
    let scrollpos4 = window.scrollY;
    const marker4 = document.querySelector(".dots__marker4");
    const marker5 = document.querySelector(".dots__marker5");
    const scrolChange4 = 1200;
    const add_class_on_scroll_marker4 = () => marker4.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker4 = () => marker4.classList.remove("active-when-scroll-marker1");
    const add_class_on_scroll_marker5 = () => marker5.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker5 = () => marker5.classList.remove("active-when-scroll-marker1");
    window.addEventListener("scroll", (function() {
        scrollpos4 = window.scrollY;
        console.log(scrollpos4);
        if (scrollpos4 >= scrolChange4) add_class_on_scroll_marker4(); else remove_class_on_scroll_marker4();
        if (scrollpos4 >= scrolChange4) add_class_on_scroll_marker5(); else remove_class_on_scroll_marker5();
    }));
    let scrollpos5 = window.scrollY;
    const marker6 = document.querySelector(".dots__marker6");
    const marker7 = document.querySelector(".dots__marker7");
    const scrolChange5 = 1400;
    const add_class_on_scroll_marker6 = () => marker6.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker6 = () => marker6.classList.remove("active-when-scroll-marker1");
    const add_class_on_scroll_marker7 = () => marker7.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker7 = () => marker7.classList.remove("active-when-scroll-marker1");
    window.addEventListener("scroll", (function() {
        scrollpos5 = window.scrollY;
        console.log(scrollpos5);
        if (scrollpos5 >= scrolChange5) add_class_on_scroll_marker6(); else remove_class_on_scroll_marker6();
        if (scrollpos5 >= scrolChange5) add_class_on_scroll_marker7(); else remove_class_on_scroll_marker7();
    }));
    let scrollpos6 = window.scrollY;
    const marker8 = document.querySelector(".dots__marker8");
    const marker9 = document.querySelector(".dots__marker9");
    let scrolChange6 = 1600;
    const add_class_on_scroll_marker8 = () => marker8.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker8 = () => marker8.classList.remove("active-when-scroll-marker1");
    const add_class_on_scroll_marker9 = () => marker9.classList.add("active-when-scroll-marker1");
    const remove_class_on_scroll_marker9 = () => marker9.classList.remove("active-when-scroll-marker1");
    window.addEventListener("scroll", (function() {
        scrollpos6 = window.scrollY;
        console.log(scrollpos6);
        if (scrollpos6 >= scrolChange6) add_class_on_scroll_marker8(); else remove_class_on_scroll_marker8();
        if (scrollpos6 >= scrolChange6) add_class_on_scroll_marker9(); else remove_class_on_scroll_marker9();
    }));
    function progressBar() {
        let scroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = scroll / height * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    }
    window.addEventListener("scroll", progressBar);
    window["FLS"] = true;
    isWebp();
})();