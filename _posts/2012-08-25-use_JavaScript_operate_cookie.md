---
layout: default
title: JavaScript操作cookie
---
JavaScript操作cookie
-------------------
### 1. cookie是什么？

>Cookie（复数形态Cookies），中文名称为小型文本文件或小甜饼，指某些网站为了辨别用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。<http://zh.wikipedia.org/wiki/Cookie>

那么cookie有什么用途呢？
http本身是无状态的，也就是说，每个页面都是“独立”存在的，可实际应用中我们往往需要知道“网页当前的状态”，比如用户在这个网页上登录了，那么在其它网页里肯定不能让用户再进行登录的操作，也就是需要将用户“已经登录的状态”保存起来，然后共享给网站的所有网页。那么这个状态保存在哪里呢？在这样的需求下，cookie应运而生。

### 2. cookie真面目
我们打开京东官网，然后调出调试工具，在控制台里面输入document.cookie，结果看到以下内容：
![京东网站首页cookie](/images/cookie_of_jd.PNG)

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