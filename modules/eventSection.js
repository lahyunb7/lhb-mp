import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";

{
  /* 
<div class="event">
  <div class="event-banner">
    <div class="event-container">
      <img class="slide-item" src="./img/event/top/까마귀는 반짝이는 것을 좋아해.jpg" alt="까마귀는 반짝이는 것을 좋아해.">
      <img class="slide-item" src="./img/event/늑대지만 해치지 않아요.jpg" alt="늑대지만 해치지 않아요.">
      <img class="slide-item" src="./img/event/우리 같이 살아요.jpg" alt="우리 같이 살아요.">
      <img class="slide-item" src="./img/event/호랑이님의 딸이 되었습니다.jpg" alt="호랑이님의 딸이 되었습니다.">
      <img class="slide-item" src="./img/event/로맨스는 없다.jpg" alt="로맨스는 없다.">
      <img class="slide-item" src="./img/event/괴물 저택의 도련님을 지키는 방법.jpg" alt="괴물 저택의 도련님을 지키는 방법.">
    </div>
  </div>
  <button class="prev"><i class="fa-solid fa-chevron-left"></i></button>
  <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
</div> 
*/
}
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
