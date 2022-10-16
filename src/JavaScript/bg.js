"use strict";
fetch('./src/html/bg.html')
    .then(function (res) { return res.text(); })
    .then(function (text) {
    var _a;
    var oldelem = document.querySelector("script#replace_with_bg");
    var newelem = document.createElement("div");
    newelem.innerHTML = text;
    (_a = oldelem.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newelem, oldelem);
});
