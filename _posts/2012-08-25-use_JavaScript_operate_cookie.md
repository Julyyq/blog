---
layout: default
title: JavaScript操作cookie
---
JavaScript操作cookie
-------------------
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