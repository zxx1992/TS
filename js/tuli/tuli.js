"use strict";
function getArrayObj(arrayObj) {
    // return arrayObj;
    var parent = document.getElementById("box");
    // title 
    var title = document.createElement("div");
    title.className = "title";
    title.innerHTML = "<span>" + 'dz' + "</span>";
    parent && parent.appendChild(title);
    // content 
    var content = document.createElement("div");
    content.className = 'content';
    for (var i = 0; i < arrayObj.length; i++) {
        var item = "<div class=\"item\"><span class=\"width\" style='background-color: " + arrayObj[i].bgColor + "'></span><span>" + arrayObj[i].val + "</span></div>";
        content.innerHTML += item;
    }
    parent && parent.appendChild(content);
}
