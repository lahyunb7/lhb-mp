import { productList } from "./modules/productList.js";
import { fetchData } from "./modules/fetch.js";
import { productCard } from "./modules/productCard.js";
import { appendChildrenList } from "./utils/dom.js";
import { eventSlide } from "./modules/eventSlide.js";

const bookInfo = await fetchData();
const rank = {
  classname: "rank",
  title: "실시간 랭킹",
};
const realTime = {
  classname: "only",
  title: "MANGO 독점공개 !",
};
const best = {
  classname: "best",
  title: "이달의 베스트",
};
const free = {
  classname: "free",
  title: "오늘만 무료",
};
const rankDOM = productList(bookInfo, rank);
const realTimeDOM = productList(bookInfo, realTime);
const bestDOM = productList(bookInfo, best);
const freeDOM = productList(bookInfo, free);
eventSlide();
