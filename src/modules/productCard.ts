import { appendChildrenList, makeDOMwithProperties, Data } from "../utils/dom.js";


export const productCard = (info:Data, sectionTitle:string, index:number) => {
  const bookPoster = makeDOMwithProperties("div", {
    className: "book-poster",
  });
  const prosterImg = makeDOMwithProperties("img", {
    src: info.img,
    alt: info.name,
  });
  appendChildrenList(bookPoster, [prosterImg]);

  const bookInfo = makeDOMwithProperties("div", {
    className: "book-info",
  });
  const bookName = makeDOMwithProperties("h3", {
    className: "book-name",
    innerText: info.name,
  });
  const author = makeDOMwithProperties("div", {
    className: "author",
    innerText: `${info.author}`,
  });
  const scope = makeDOMwithProperties("span", {
    className: "scope",
    innerText: `${info.scope}`,
  });
  const scopeImg = makeDOMwithProperties("i", {
    className: "fa-solid fa-star",
  });
  const review = makeDOMwithProperties("span", {
    className: "review",
    innerText: ` (${info.review})`,
  });

  appendChildrenList(bookInfo, [bookName, author, scopeImg, scope, review]);

  const prodCard = makeDOMwithProperties("li", {
    className: "prod-card",
  });

  if (sectionTitle === "rank") {
    const rank = makeDOMwithProperties("p", {
      className: "rank",
      innerText: `${index + 1}`,
    });
    appendChildrenList(prodCard, [rank, bookPoster, bookInfo]);
  } else appendChildrenList(prodCard, [bookPoster, bookInfo]);

  return prodCard;
};
