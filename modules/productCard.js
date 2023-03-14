import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js"

export const productCard = (info) => {
  //     <div class="book-poster">
  //       <img src="/img/myfirstmemory.jpg" alt="myfirstmemory">
  //     </div>
  //     <div class="book-info">
  //       <h3 class="book-name">My first memory</h3>
  //       <span>작가명</span>
  //     </div>

const bookPoster = makeDOMwithProperties('div', {
  className: "book-poster"
})
const prosterImg = makeDOMwithProperties('img', {
  src: info.img,
  alt: info.name
})
appendChildrenList(bookPoster, [prosterImg]);

const bookInfo = makeDOMwithProperties('div', {
  className: "book-info"
})
const bookName = makeDOMwithProperties('h3', {
  className: "book-name",
  innerText: info.name
})
const author = makeDOMwithProperties('div', {
  className: 'author',
  innerText: `${info.author}`
})
const scope = makeDOMwithProperties('span', {
  className: 'price',
  innerText: `${info.scope}`
})
const scopeImg = makeDOMwithProperties('i',{
  className: "fa-solid fa-star"
})
const review = makeDOMwithProperties('span', {
  className: "review",
  innerText: ` (${info.review})`
})

appendChildrenList(bookInfo,[bookName,author,scopeImg, scope, review]);

const prodCard = makeDOMwithProperties('li',{});
appendChildrenList(prodCard,[bookPoster, bookInfo]);

return prodCard;
}

