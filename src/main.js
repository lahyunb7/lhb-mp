import { bookDataFetch, eventDataFetch } from "./modules/Fetch.js";
import { productList } from "./modules/productList.js";
import { eventSlide } from "./modules/eventSlide.js";
import { eventSection } from "./modules/eventSection.js";
import { appendChildrenList } from "./utils/dom.js";

async function main() {
  const bookInfo = await bookDataFetch();
  const eventInfo = await eventDataFetch();

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

  const container = document.getElementsByClassName("container")[0];

  appendChildrenList(container, [
    eventSection(eventInfo.slideItem, "slide-item"),
    productList(bookInfo.best, best),
    productList(bookInfo.rank, rank),
    productList(bookInfo.only, only),
    productList(bookInfo.free, free),
    eventSection(eventInfo.eventItem, "event-item"),
  ]);

  eventSlide();
}

main();
