import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";
import { productCard } from "./productCard.js";

export const productList = (bookInfo, sectionInfo) => {
  {/* <div class="best-seller">
          <h2 class="sec-title">신규or실시간 인기작</h2>
          <div class="book-component">
            <ul>
              <li class="">
                <div class="book-poster">
                  <img src="/img/myfirstmemory.jpg" alt="myfirstmemory">
                </div>
                <div class="book-info">
                  <h3 class="book-name">My first memory</h3>
                  <span>작가명</span>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
const sectionTitle = makeDOMwithProperties('div', {
  className: sectionInfo.classname
})
const secTitle = makeDOMwithProperties('h2', {
  className: 'sec-title',
  innerText: `${sectionInfo.title}`
})
const bookComponent = makeDOMwithProperties('div', {
  className: 'book-component'
})
const prodList = makeDOMwithProperties('ul', {
  className: '22'
});
bookInfo.best.forEach((bestInfo) => {
  const prodCard = productCard(bestInfo);
  appendChildrenList(prodList,[prodCard]);
});

// appendChildrenList(prodList,[prodCard]);
appendChildrenList(bookComponent,[prodList]);
appendChildrenList(secTitle,[secTitle,bookComponent]);



}
