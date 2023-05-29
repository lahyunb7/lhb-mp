import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";

export const eventSection = (bannerInfo, item) => {
  const event = makeDOMwithProperties("div", {
    className: "event",
  });
  const sectionTitle = makeDOMwithProperties("h2", {
    className: "section-title",
  });
  const eventContainer = makeDOMwithProperties("div", {
    className: "event-container",
  });
  bannerInfo.forEach((e) => {
    const eventImg = makeDOMwithProperties("img", {
      className: item,
      src: e.src,
      alt: e.name,
    });
    appendChildrenList(eventContainer, [eventImg]);
  });

  if (item == "slide-item") {
    //slide-event 영역은 슬라이더 기능에 필요한 클래스 및 태그 추가
    const slideEvent = makeDOMwithProperties("div", {
      className: "slide-event",
    });
    const eventBanner = makeDOMwithProperties("div", {
      className: "event-banner",
    });
    const prevBtn = makeDOMwithProperties("button", {
      className: "prev",
      innerHTML: `<i class="fa-solid fa-chevron-left"></i>`,
    });
    const nextBtn = makeDOMwithProperties("button", {
      className: "next",
      innerHTML: `<i class="fa-solid fa-chevron-right"></i>`,
    });

    appendChildrenList(slideEvent, [event]);
    appendChildrenList(event, [sectionTitle, eventBanner, prevBtn, nextBtn]);
    appendChildrenList(eventBanner, [eventContainer]);

    return slideEvent;
  } else {
    const customEvent = makeDOMwithProperties("div", {
      className: "custom-event",
    });

    appendChildrenList(customEvent, [event]);
    appendChildrenList(event, [sectionTitle, eventContainer]);

    return customEvent;
  }
};
