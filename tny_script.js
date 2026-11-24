"use strict";

document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

var currentDay = new Date("November 23, 2026 19:02:42");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;




