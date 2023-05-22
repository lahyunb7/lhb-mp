// 태그 생성
var makeDOMwithProperties = function (domType, propertyMap) {
    if (domType === "img") {
        var dom_1 = document.createElement(domType);
        Object.keys(propertyMap).forEach(function (key) {
            dom_1[key] = propertyMap[key];
        });
        return dom_1;
    }
    else {
        var dom_2 = document.createElement(domType);
        Object.keys(propertyMap).forEach(function (key) {
            dom_2[key] = propertyMap[key];
        });
        return dom_2;
    }
};
// 하위 태그로 삽입
var appendChildrenList = function (target, childrenList) {
    if (!Array.isArray(childrenList))
        return;
    childrenList.forEach(function (children) {
        target.appendChild(children);
    });
};
export { makeDOMwithProperties, appendChildrenList };
