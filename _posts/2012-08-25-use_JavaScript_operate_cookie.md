---
layout: default
title: JavaScript操作cookie
---
JavaScript操作cookie
-------------------
### 1. cookie是什么？
指某些网站为了辨别用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。<http://zh.wikipedia.org/wiki/Cookie>
```
function setCookie(name, value, expires) {
  var expiresDate = new Date().getDate() + expires;
  document.cookie = name + "=" + value + ";expires=" + expiresDate;
}
function getCookie(name) {
  var arr = document.cookie.split(";"),i;
  for(i=0;i<arr.length;i++) {
    var arr2=arr[i].split("=");
    if(arr2[0]===name) return arr2[1];
  }
  return "";
}
function removeCookie(name) {
  setCookie(name, "", -1);
}
```
未完成