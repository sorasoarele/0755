// ==UserScript==
// @name         BingBot1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot for bing
// @author       Rakova Tanya
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @grant        none
// ==/UserScript==


let links = document.links;
let sb_form_go = document.getElementById("sb_form_go");
let keywords = ["Взаимодействие PHP и MySQL", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Плагины VS Code"];
let keyword = keywords[getRandom(0, keywords.length)];
let bingInput = document.getElementById("sb_form_q");

if (sb_form_go !== undefined) {
  let i=0;

  let timerId = setInterval(()=>{
    bingInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      setTimeout(()=>{
        sb_form_go.click();
      }, getRandom(1000, 2500));

    }
  }, 500);

} else if (location.hostname == "napli.ru"){
  console.log("Мы на целевом сайте!");

  setInterval(()=>{
    let index = getRandom(0, links.length);

    if (getRandom (0, 101) > 70) {
      location.href = "https://www.bing.com/";
    }

    if (links[index].href.indexOf("napli.ru") !== -1) {
    links[index].click();
  }

}, getRandom(4000, 5000));


} else {
  let nextBingPage = true;

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      console.log("Нашел строку "+links[i]);
      let link = links[i];
      nextBingPage = false;
      setTimeout(()=>{
        link.click();
      }, getRandom(3500,4500))
      break;
    }
  }

  if (document.querySelector(".sb_pagN").innerText == "4"){
    nextBingPage = false;
    location.href = "https://www.bing.com/";
  }

  if(nextBingPage){
    setTimeout(()=>{
      document.getElementsByClassName("sb_pagN")[0].click();
    }, getRandom(3000,5000));
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
