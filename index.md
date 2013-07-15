---
layout: default
title: 快速实现轮播效果
---
快速实现轮播效果
-------------------

轮播效果，在网站开发中出现的频率非常高，尤其是在企业等展示型网站上，轮播图不仅能够让网站变得更动态，而且能够让用户产生审美上的好感。那么，对于一个前端新手或者非前端专业的人而言，如何能够快速的实现轮播效果呢？

这篇文章我们来讨论如何快速实现类似于京东网站首页的这种轮播效果。

![](/images/jd.png)

首先，我们需要多张用来切换的图片，其次，我们需要那些代表图片位置或者顺序的数字元素。

在HTML中，像这种“很多相似元素”排列在一起的元素，我们可以使用`ul`标签，它代表无序列表。写出来类似于：

    <ul>
        <li><a href=""><img src=""></a></li>
        <li><a href=""><img src=""></a></li>
        <li><a href=""><img src=""></a></li>
    </ul>

其中，li标签与ul标签是配套的，代表某一个列表元素。li标签内，img标签外嵌套了一层a标签，我们目的是希望图片本身能够被点击，就京东的例子而言，会跳转到一些商品或者活动的详情页面。基本的结构就是这样。

同样，那些数字也是一种列表，我们同样可以使用ul标签来布局：

    <ul>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
    </ul>

我们看京东网站的轮播效果，无论何时都只是显示一张图片，同时隐藏其它图片，就好比有一个窗口，透过这个窗口我们可以轮流查看到不同的图片。所以，我们还需要这样一个“窗口元素”。

    <div class="viewport">
        <ul class="imgs">
            <li><a href=""><img src=""></a></li>
            <li><a href=""><img src=""></a></li>
            <li><a href=""><img src=""></a></li>
        </ul>
        <ul class="number">
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
        </ul>
    </div>

这里ul外面的div即为窗口元素，并且赋予了其类为viewport,同时为了便于对两个列表赋予样式，我们分别给两个列表加了名为imgs和number的类。

接下来，我们需要写一些CSS来描述其样式。CSS是一种样式语言，如果说HTML是一幢房子的钢筋混凝土等的结构，那么CSS就是铺地板刷墙等的装修。

首先我们需要给“窗口”固定大小，并且将超出它可视范围的内容全部隐藏：
    
    .viewport {
        position: relative;
        width: 670px;
        height:240px;
        overflow: hidden;
    }

这里给它加了相对定位是为了等会给数字列表进行绝对定位。

然后来写图片部分:

    .imgs {
        overflow: hidden;
        zoom: 1;
    }
    .imgs li {
        float: left;
        width: 670px;
        height: 240px;
    }

imgs内的样式都是为了清除浮动，因为我们需要给li元素向左的浮动，因为默认li元素是竖向排列的。

接下来我们给那些数字赋予样式，并且让它定位到“窗口”的右下位置：

    .number {
        position: absolute;
        right: 10px;
        bottom: 10px;
        overflow: hidden;
        zoom: 1;
    }
    .number li {
        float: left;
        width: 22px;
        height:22px;
        margin:0 1px;
    }
    .number li a {
        display: inline-block;
        width:22px;
        height:22px;
        line-height:22px;
        text-align:center;
        background:#999;
        color: #fff;
        font-size:12px;
        border-radius:12px;
        -moz-border-radius:12px;
        -webkit-border-radius:12px;
    }
    .number li a.current {
        background:#E4393C;
    }

然后给上面的HTML填充示例图片，你应该看到的是这样的：

![](/images/example_1.png)

最后一个步骤，我们要让它“轮播”起来。

这里需要JavaScript脚本语言的支持，它可以让网页“动”起来，实现与用户互动等功能。因为我们需要快速实现这种轮播效果，至于轮播脚本的实现原理并不是我们所关心的内容，因此，这里我们采用一个我已经写好的脚本，我们所需要知道的只是如何去使用即可。

首先在网页中引用这个JS文件:
    
    <script src="koujiaoya.com/javascripts/slide.js"></script>

然后我们给viewport元素新加一个class为slide-element,这是一个空的类，目的只是为了选中需要展现轮播效果的元素。这个JS脚本会自动获取class为slide-element的元素，为它赋予轮播功能。

这个脚本是基于jQuery的，所以同时，我们还需要在引入上面那个脚本之前先引入jQuery文件。

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>

到此，我们已经实现了一个最简单的轮播图效果。

在线预览：http://koujiaoya.com/2012/10/20/js_example.html

源代码：https://github.com/Julyyq/blog/blob/gh-pages/_posts/2012-10-20-js_example.html

全文完