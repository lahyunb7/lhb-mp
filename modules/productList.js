import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";
import { productCard } from "./productCard.js";

export const productList = (bookInfo, sectionInfo) => {
  //섹션 생성 - 공통
  // makeDOMwithProperties() --> 태그 생성 컴포넌트
  const sectionList = makeDOMwithProperties("div", {
    className: sectionInfo.classname,
    className: "section-list",
  });
  const sectionTitle = makeDOMwithProperties("h2", {
    className: "section-title",
    innerText: sectionInfo.title,
  });
  const bookComponent = makeDOMwithProperties("div", {
    className: "book-component",
  });

  // 섹션 생성 - '실시간랭킹' ol, 이외 ul
  let prodList;
  if (sectionInfo.classname === "rank") {
    prodList = makeDOMwithProperties("ol", {
      className: "prod-list",
      className: "ranking",
    });
  } else {
    prodList = makeDOMwithProperties("ul", {
      className: "prod-list",
    });
  }

  // 자식 요소로 작품 카드 넣기
  bookInfo[sectionInfo.classname].forEach((prodInfo, index) => {
    const prodCard = productCard(prodInfo, sectionInfo.classname, index);
    appendChildrenList(prodList, [prodCard]);
  });

  appendChildrenList(sectionList, [sectionTitle, bookComponent]);
  appendChildrenList(bookComponent, [prodList]);

  return sectionList;
};
