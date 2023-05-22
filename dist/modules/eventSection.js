import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";
export var eventSection = function (bannerInfo, item) {
    var event = makeDOMwithProperties("div", {
        className: "event",
    });
    var sectionTitle = makeDOMwithProperties("h2", {
        className: "section-title",
    });
    var eventContainer = makeDOMwithProperties("div", {
        className: "event-container",
    });
    bannerInfo.forEach(function (e) {
        var eventImg = makeDOMwithProperties("img", {
            className: item,
            src: e.src,
            alt: e.name,
        });
        appendChildrenList(eventContainer, [eventImg]);
    });
    if (item == "slide-item") {
        //slide-event 영역은 슬라이더 기능에 필요한 클래스 및 태그 추가
        var slideEvent = makeDOMwithProperties("div", {
            className: "slide-event",
        });
        var eventBanner = makeDOMwithProperties("div", {
            className: "event-banner",
        });
        var prevBtn = makeDOMwithProperties("button", {
            className: "prev",
            innerHTML: "<i class=\"fa-solid fa-chevron-left\"></i>",
        });
        var nextBtn = makeDOMwithProperties("button", {
            className: "next",
            innerHTML: "<i class=\"fa-solid fa-chevron-right\"></i>",
        });
        appendChildrenList(slideEvent, [event]);
        appendChildrenList(event, [sectionTitle, eventBanner, prevBtn, nextBtn]);
        appendChildrenList(eventBanner, [eventContainer]);
        return slideEvent;
    }
    else {
        var customEvent = makeDOMwithProperties("div", {
            className: "custom-event",
        });
        appendChildrenList(customEvent, [event]);
        appendChildrenList(event, [sectionTitle, eventContainer]);
        return customEvent;
    }
};
