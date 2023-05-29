import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";
import { productCard } from "./productCard.js";

export const productList = (bookInfo, sectionInfo) => {
  //섹션 생성 - 공통
  // makeDOMwithProperties() --> 태그 생성 컴포넌트
  const { classname, title } = sectionInfo;

  const sectionList = makeDOMwithProperties("div", {
    className: `${classname} section-list`,
  });
  const sectionTitle = makeDOMwithProperties("h2", {
    className: "section-title",
    innerText: title,
  });
  const bookComponent = makeDOMwithProperties("div", {
    className: "book-component",
  });

  // 섹션 생성 - '실시간랭킹' ol, 이외 ul
  let prodList;
  if (classname === "rank") {
    prodList = makeDOMwithProperties("ol", {
      className: "prod-list ranking",
    });
  } else {
    prodList = makeDOMwithProperties("ul", {
      className: "prod-list",
    });
  }

  // 자식 요소로 작품 카드 넣기
  bookInfo.forEach((prodInfo, index) => {
    const prodCard = productCard(prodInfo, classname, index);
    appendChildrenList(prodList, [prodCard]);
  });

  appendChildrenList(sectionList, [sectionTitle, bookComponent]);
  appendChildrenList(bookComponent, [prodList]);

  return sectionList;
};
