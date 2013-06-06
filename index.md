---
layout: default
title: JavaScript循环中的引用
---
# Case 1

假如有如下一段html：

    <ul>
      <li><a href="">item1</a></li>
      <li><a href="">item2</a></li>
      <li><a href="">item3</a></li>
      <li><a href="">item4</a></li>
      <li><a href="">item5</a></li>
    </ul>

现在我们需要给每一个li里面的绑定一个click事件，根据它的位置(1,2,3...)来进行一些操作,最直接的办法可能会想到这样做：

    var a = document.getElementsByTagName("a");

    a[0].onclick = function() {
      console.log(0);
    }
    a[1].onclick = function() {
      console.log(1);
    }
    a[2].onclick = function() {
      console.log(2);
    }
    a[3].onclick = function() {
      console.log(3);
    }
    a[4].onclick = function() {
      console.log(4;
    }

这样做感觉比较蠢是吧？然后想到这不是非常符合用for循环吗？OK，我们来试试。

    var a = document.getElementsByTagName("a"),i;

    for(i=0;i<a.length;i++) {
      a[i].onclick = function() {
        console.log(i);
      }
    }

在浏览器中的测试结果如下：

![](/images/js_s_1.jpg)

竟然无论点哪个都会输出5！究竟是哪里错了？

我们来理一理思路。首先我们获取到了所有的a元素，将它保存在a数组里面，然后对a进行循环，当其为i的时候，给第i个a元素绑定click事件，并输出i。恩，这样分析下来，整个过程好像也没什么错误。然后让我们来想想当点击某个a元素的时候，计算机是如何运行这个程序的。比如我点了第3个a元素，此时，计算机执行`console.log(i)`，然而这里的i出问题了，因为不论点击哪个a元素，i都是5，这是为什么呢？可能你到这里已经看出来点端倪了，我们犯了个很基础的错误，这个错误就是：

> 我们给每个a绑定click事件的时候，只是保存了`console.log(i)`这个执行语句，而没有保存i，只是对i进行了引用，只有当click事件触发，程序需要输出i的时候，计算机才会找i到底等于多少，此时，for循环已经执行完毕，所以i等于5。

知道了原因，那么该如何解决呢？主要有两种办法，原理都是每次循环的时候，对i进行copy，把i的值存在一个不会被循环改变的变量里面。

    方法1：
    var a = document.getElementsByTagName("a"),i;

    for(i=0;i<a.length;i++) {
      a[i].onclick = (function(n) {
        return function() {
          console.log(n+1);
        }
      })(i);
    }

    方法2：
    var a = document.getElementsByTagName("a"),i;

    for(i=0;i<a.length;i++) {
      (function(n) {
        a[n].onclick = function() {
          console.log(n+1);
        }
      })(i);
    }

两个方法的相同之处是，通过一个匿名函数传递i变量，然后在其内部创建备份。
不同之处是，方法1在匿名函数内部又返回了一个函数，这种方式会将一些“变量或者操作”隐藏在内部，不被外部所访问到，在自己开发组件的时候，非常有帮助。

OK，似乎这个问题已经解释清楚了，可是我还想再多讨论一个问题。面对这种需求，往往我们会用jQuery来处理，因为jQuery用的人实在是太多了，即便像百度这样的公司，虽然有自己的JS开发库，但一些部门还是直接使用jQuery，毕竟它真的很好用。来看jQuery如何处理：

    $("a").each(function(i,el) {
      $(this).click(function() {
        console.log(i+1); 
      });
    });

当然用jQuery处理这种问题，不止这一种写法，以上只是一个比较中规中矩的写法。
可以看到，使用jQuery，这样的坑已经不存在了，因为jQuery已经替我们填好了坑，那么jQuery是怎么处理的呢？以下是[jQuery1.10.1](http://code.jquery.com/jquery-1.10.1.js)中each方法的核心代码：
    
![](/images/jquery_each.jpg)
    
我们只需要看这一段：

    for ( ; i < length; i++ ) {
      value = callback.call( obj[ i ], i, obj[ i ] );

      if ( value === false ) {
        break;
      }
    }

看到这句`callback.call( obj[ i ], i, obj[ i ] )`，于是也可以将上面的方法稍微改动一下：

    var a = document.getElementsByTagName("a"),i;

    for(i=0;i<a.length;i++) {
      a[i].onclick = (function(n) {
        return function() {
          console.log(n+1);  
        }
      }).call(this,i);
    }

可以看到与方法1和2大同小异，多了个call方法传递参数而已，同样也可以改为apply方法，但核心原理都是一样的：即为在每一次循环的时候，备份i。

全文完