import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";
export var productCard = function (info, sectionTitle, index) {
    var bookPoster = makeDOMwithProperties("div", {
        className: "book-poster",
    });
    var prosterImg = makeDOMwithProperties("img", {
        src: info.img,
        alt: info.name,
    });
    appendChildrenList(bookPoster, [prosterImg]);
    var bookInfo = makeDOMwithProperties("div", {
        className: "book-info",
    });
    var bookName = makeDOMwithProperties("h3", {
        className: "book-name",
        innerText: info.name,
    });
    var author = makeDOMwithProperties("div", {
        className: "author",
        innerText: "".concat(info.author),
    });
    var scope = makeDOMwithProperties("span", {
        className: "scope",
        innerText: "".concat(info.scope),
    });
    var scopeImg = makeDOMwithProperties("i", {
        className: "fa-solid fa-star",
    });
    var review = makeDOMwithProperties("span", {
        className: "review",
        innerText: " (".concat(info.review, ")"),
    });
    appendChildrenList(bookInfo, [bookName, author, scopeImg, scope, review]);
    var prodCard = makeDOMwithProperties("li", {
        className: "prod-card",
    });
    if (sectionTitle === "rank") {
        var rank = makeDOMwithProperties("p", {
            className: "rank",
            innerText: "".concat(index + 1),
        });
        appendChildrenList(prodCard, [rank, bookPoster, bookInfo]);
    }
    else
        appendChildrenList(prodCard, [bookPoster, bookInfo]);
    return prodCard;
};
