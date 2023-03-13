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
const price = makeDOMwithProperties('div', {
  innerText: `1화 ${info.price}원`
})
const author = makeDOMwithProperties('span', {
  innerText: "작가명"
})

appendChildrenList(bookInfo,[bookName, price, author]);

const prodCard = makeDOMwithProperties('li',{});
appendChildrenList(prodCard,[bookPoster, bookInfo]);
}