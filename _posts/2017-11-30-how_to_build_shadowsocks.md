---
layout: default
title: 如何自己搭建shadowsocks
keyword: "VPN,shadowsocks,v2ray,vmess,brook,shadowrocket,影梭,翻墙,梯子,科学上网,防火墙,gfw"
description: "如何自己搭建shadowsocks?"
---
如何自己搭建shadowsocks?
===============

Shadowsocks是一种基于Socks5代理方式的加密传输协议，支持安卓、iOS、Windows和苹果macOS操作系统, 甚至支持OpenWRT（路由器翻墙解决方案），可以说是现在市面上支持平台最全面的协议了。

从2017年开始，翻墙越来越难，很多付费服务也不能使用了，所以有时候，自己搭建一个梯子，也是一种不错的选择。这种做法的优点就是比较稳定，缺点一是贵，因为要自己独立买台VPS，还要考虑到速度不能太差，流量不能太少，所以价格自然很难便宜。二是可能需要自己一直维护，有时候会比较耗费精力。

其实自己搭建shadowsocks非常简单，比如你的系统是ubuntu，那么首先更新软件包源：

    sudo apt-get update

接着，下载python的包管理工具pip:

    apt-get install python-pip

然后使用pip来一键安装shadowsocks:

    pip install shadowsocks

到此为止，你的shadowsocks其实就已经安装好了，就是这也么简单。

接下来，需要在服务器启动shadowsocks服务：

    sudo ssserver -p 端口号 -k 密码 -m 加密方式 --user nobody -d start

比如你的端口号是443，密码是12345678，加密方式是aes-256-cfb，那么启动命令就是：

    sudo ssserver -p 443 -k 12345678 -m aes-256-cfb --user nobody -d start

现在，你的服务器已经开始运行shadowsocks了，你只需要安装客户端，就可以连接你的服务器，从而可以上google、facebook、youtube等网站了。

常用的客户端如下：

iOS: [Shadowrocket](https://itunes.apple.com/us/app/shadowrocket/id932747118?mt=8)

安卓: [Shadowsocks](https://play.google.com/store/apps/details?id=com.github.shadowsocks)

Windows: [Shadowsocks-Windows](https://github.com/shadowsocks/shadowsocks-windows/releases/download/4.0.9/Shadowsocks-4.0.9.zip)

Mac OS X: [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG/releases/download/v1.7.1/ShadowsocksX-NG.1.7.1.zip)

## 其它一些小众的翻墙服务

如果不能翻墙会影响到你的工作或者生活，也就是说翻墙对于你是必须的，那么可以建议自己搭建一台，然后再买个小众点儿的翻墙服务，为什么要小众？因为小众，所以才稳定。

介绍几个自己用了挺久的非常小众的服务：

[rixcloud](https://www.rixcloud.com/) :

比较低调，速度快的一个云服务，流量价格皆可以选择，可以看Netflix和YoutubeTV等。

[babydriver](http://babydriver.me/) :

很潮的一个网站，不但支持VPN和shadowsocks，还支持最新的V2ray，V2ray的VIP套餐支持NetFlix和YoutubeTV等。

[vpnso](https://vpnso.com/main.php) :

vpnso支持普通VPN和shadowsocks，最开始用的时候才50块钱一年，现在最便宜的要200一年，足足涨了4倍（后悔当时没多买几年）。有多条线路可以选择，当然一般选择亚洲的节点，比如日本。


全文完