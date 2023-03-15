import { productList } from "./modules/productList.js";
import { fetchData } from "./modules/fetch.js";
import { productCard } from "./modules/productCard.js";
import { appendChildrenList } from "./utils/dom.js";

const bookInfo = await fetchData();
const realTime = {
  classname: 'realTime',
  title: '실시간 인기작'
}
const best = {
  classname: 'best',
  title: '이달의 베스트'
}
const free = {
  classname: 'free',
  title: '오늘만 무료'
}

const realTimeDOM = productList(bookInfo,realTime);
const bestDOM = productList(bookInfo,best);
const freeDOM = productList(bookInfo,free);



