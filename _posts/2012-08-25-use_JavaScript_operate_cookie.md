---
layout: default
title: JavaScript操作cookie
---
JavaScript操作cookie
============================
## 1. cookie是什么？

>Cookie（复数形态Cookies），中文名称为小型文本文件或小甜饼，指某些网站为了辨别用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。<http://zh.wikipedia.org/wiki/Cookie>

那么cookie有什么用途呢？
http本身是无状态的，也就是说，每个页面都是“独立”存在的，可实际应用中我们往往需要知道“网页当前的状态”，比如用户在这个网页上登录了，那么在其它网页里肯定不能让用户再进行登录的操作，也就是需要将用户“已经登录的状态”保存起来，然后共享给网站的所有网页。那么这个状态保存在哪里呢？在这样的需求下，cookie应运而生。

## 2. cookie真面目
我们打开京东官网，然后调出调试工具，在控制台里面输入`document.cookie`，结果看到以下内容：

![京东网站首页cookie](/images/cookie.jpg)

原来cookie竟然就是字符串！

仔细观察不难发现，这个字符串里都是形如"key=value"这样的东西，并且之间都以分号分割，没错，cookie就是以分号分割的形如key=value的字符串。

## 3. 如果操作cookie
在JS中，以如下的方法设置cookie：
    
    document.cookie = "key=value;expires=expiresDate;";

其中，expires为此cookie过期的时间。

那么如果获取cookie呢？cookie本身就是字符串，所以想要获取cookie，其实就是需要对字符串进行处理，以获取我们想要的特定的值。

JS中对cookie就行相关操作的代码如下，代码最后包括了删除cookie的方法，原理就是让它马上过期。

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

全文完