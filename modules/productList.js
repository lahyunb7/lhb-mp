import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js";
import { productCard } from "./productCard.js";

export const productList = (bookInfo, sectionInfo) => {
  {/* <div class="section-title best-seller">
          <h2 class="sec-title">신규or실시간 인기작</h2>
          <div class="book-component">
            <ul class="prod-list">
              <li class="prod-card">
                <div class="book-poster">
                  <img src="/img/myfirstmemory.jpg" alt="myfirstmemory">
                </div>
                <div class="book-info">
                  <h3 class="book-name">My first memory</h3>
                  <div class="price"> 1화 n원 </div>
                  <span>작가명</span>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
const sectionTitle = makeDOMwithProperties('div', {
  className: sectionInfo.classname,
  className: 'section-title'
})
const secTitle = makeDOMwithProperties('h2', {
  className: 'sec-title',
  innerText: sectionInfo.title
})
const bookComponent = makeDOMwithProperties('div', {
  className: 'book-component'
})
const prodList = makeDOMwithProperties('ul', {
  className: 'prod-list'
});


// const prodCard = productCard(bookInfo.best[0]);
// console.log(prodCard)
bookInfo.info.classname.forEach((prodInfo) => {
  const prodCard = productCard(prodInfo);
  appendChildrenList(prodList,[prodCard]);
});

appendChildrenList(bookComponent,[prodList]);
appendChildrenList(sectionTitle,[secTitle, bookComponent]);

const container = document.getElementsByClassName('container')[0];
appendChildrenList(container, [sectionTitle]);

}
