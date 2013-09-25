---
layout: default
title: 判断是否回文数的Javascript实现
---
判断是否回文数的Javascript实现
===============

回文数，简而言之就是正着读和倒着读一样的数字。具体可以参考维基百科<http://en.wikipedia.org/wiki/Palindromic_number>。

    var palindrome = function(num) {
      if(typeof num !== "number") throw Error("参数必须为数字！")
      var compare = num.toString(),
           length = compare.length;
      if(length%2 == 0) return false;
      var loop = (length+1)/2;
      for(var i=0;i<loop;i++) {
        if(compare.charAt(i) !== compare.charAt(length-1-i)) {
          return false;
        }
      }
      return true;
    }

这里主要用到了charAt方法，这是字符串的一个方法，而且数字是没有length属性的，所以一开始将数字转换成了字符串，以方便进行检测。

全文完