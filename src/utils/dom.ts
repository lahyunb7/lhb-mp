import { type } from "os";

// 태그 생성
const makeDOMwithProperties = (domType:string, propertyMap: { className?: string; src?: string; alt?: string; innerHTML?: string; innerText?: any; }) => {
  type ImgType = "className" | "src" | "alt" | "innerHTML" | "innerText";
  type DOMType = "className" | "innerHTML" | "innerText";

  if(domType === "img") {
    const dom:HTMLImageElement = document.createElement(domType);
    Object.keys(propertyMap).forEach((key:ImgType) => {
      dom[key] = propertyMap[key];
    });
    return dom;
  } else {
    const dom:HTMLElement = document.createElement(domType);
    Object.keys(propertyMap).forEach((key:DOMType) => {
      dom[key] = propertyMap[key];
    });
    return dom;
  }

};

// 하위 태그로 삽입
const appendChildrenList = (target: Element, childrenList:Element[]) => {
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};

type Data =  {
  name: string,
  scope: string,
  img: string,
  review: string,
  author: string
}

type EventData = {
  name: string,
  src: string
}

export {makeDOMwithProperties, appendChildrenList, Data, EventData}
