// 태그 생성
const makeDOMwithProperties = (domType, propertyMap) => {
  if (domType === "img") {
    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
      dom[key] = propertyMap[key];
    });
    return dom;
  } else {
    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
      dom[key] = propertyMap[key];
    });
    return dom;
  }
};

// 하위 태그로 삽입
const appendChildrenList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};

export { makeDOMwithProperties, appendChildrenList };
