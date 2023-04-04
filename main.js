import { bookDataFetch } from "./modules/bookDataFetch.js";
import { eventDataFetch } from "./modules/eventDataFetch.js";
import { productList } from "./modules/productList.js";
import { eventSlide } from "./modules/eventSlide.js";
import { eventSection } from "./modules/eventSection.js";
import { appendChildrenList } from "./utils/dom.js";
import { prodInfo } from "./modules/prodInfo.js";

const bookInfo = await bookDataFetch();
const rank = {
  classname: "rank",
  title: "실시간 랭킹",
};
const only = {
  classname: "only",
  title: "MANGO 독점공개",
};
const best = {
  classname: "best",
  title: "이달의 베스트",
};
const free = {
  classname: "free",
  title: "오늘만 무료",
};

const eventInfo = await eventDataFetch();

// html 구현
const container = document.getElementsByClassName("container")[0];

appendChildrenList(container, [
  eventSection(eventInfo.slideItem, "slide-item"),
  productList(bookInfo, best), // 베스트 카테고리
  productList(bookInfo, rank), // 랭킹 카테고리
  productList(bookInfo, only), // 독점 카테고리
  productList(bookInfo, free), // 무료 카테고리
  eventSection(eventInfo.eventItem, "event-item"),
]);

eventSlide();
prodInfo();
