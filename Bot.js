// ==UserScript==
// @name         BingBot1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot for bing
// @author       Rakova Tanya
// @match        https://www.bing.com/*
// @grant        none
// ==/UserScript==


let links = document.links;
let sb_form_go = document.getElementById("sb_form_go");
let keywords = ["вывод произвольных полей wordpress","10 самых популярных шрифтов от Google","Отключение редакций и ревизий в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];

if (sb_form_go !== undefined) {
  document.getElementById("sb_form_q").value = keyword;
  sb_form_go.click();
} else {

for (let i=0; i<links.length; i++) {
  if (links[i].href.indexOf("napli.ru") !== -1) {
    console.log("Нашел строку" + links[i]);
    let link = links[i];
    link.click();
    break;
  }
 }
}
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
