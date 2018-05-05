---
layout: default
title: 使用JavaScript对数组去重
---
使用JavaScript对数组去重
===============

这是一个非常经典的问题，我们平时可能遇到一些需要对数组进行去重的操作时，直接就使用underscore的unique方法了，当然，underscore的unique函数还提供了一些例如resort的额外功能，我们平时可能很少去关心去重的核心原理是怎样的。

经典的问题，往往会产生出经典的方法，它就是这么的简短：

    var unique = function(arr) {
      if(toString.call(arr) !== '[object Array]') {
        throw Error("参数必须为数组！")
      }
      else {
        for(var i=0;i<arr.length;i++) {
          for (var j=i+1;j<arr.length;j++) {
            if(arr[i]===arr[j]) {
              arr.splice(j,1)
              j--;
            }
          }
        }
        return arr;
      }
    }

附加了一个类型判断，这个去重函数就完美了。

这里需要注意的是`j--`，它的作用就是在找到第一个重复的元素之后，让j的值“保持不变”，以便继续查找后面还有没有可能重复多次的元素。

这个方法从始至终都只通过splice方法对原始的arr进行操作，而不需要额外定义其它暂存数组，并且保持了原数组中元素的初始顺序。

全文完