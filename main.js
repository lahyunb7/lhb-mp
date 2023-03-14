import { productList } from "./modules/productList.js";
import { fetchData } from "./modules/fetch.js";
import { productCard } from "./modules/productCard.js";
import { appendChildrenList } from "./utils/dom.js";

const bookInfo = await fetchData();
const realTime = {
  classname: 'realTime',
  title: '실시간 인기작품'
}
const bestSeller = {
  classname: 'best',
  title: '이달의 베스트'
}
const realTimeDOM = productList(bookInfo,realTime);
const bestSellerDOM = productList(bookInfo,bestSeller);



