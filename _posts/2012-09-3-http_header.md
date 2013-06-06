---
layout: default
title: Http header简单介绍
---
Http header简单介绍
-------------------
打开百度首页，调出调试工具，在Network一栏里面点击www.baidu.com，我们来了解一下，headers里面的这些参数都是什么意思。如图：

![](/images/http_header.jpg)

先将每个参数的概括含义标注如下,然后再详细解释：

    Request URL: 请求的url地址
    Request Method: 请求方法
    Status Code: 状态码
    Request Headers: 请求头
        Accept: 接受数据的格式
        Accept-Charset: 接受数据的编码
        Accept-Encoding: 支持的接受内容压缩类型
        Accept-Language: 接受的语言
        Cache-Control: 指定请求和响应遵循的缓存机制
        Connection: 表示是否需要持久连接
        Cookie: 存储在该域名下的cookie
        Host: 指定请求的服务器的域名和端口号
        Pragma: 用来包含实现特定的指令
        User-Agent: 发出请求的用户信息
    Response Headers:
        Cache-Control: 告诉所有的缓存机制是否可以缓存及哪种类型
        Connection: 表示是否需要持久连接
        Content-Encoding: web服务器支持的返回内容压缩编码类型
        Content-length: 响应体的长度
        Content-Type: 返回内容的MIME类型
        Date: 原始服务器消息发出的时间
        Expires: 响应过期的日期和时间
        Server: web服务器软件名称
        Set-Cookie: 设置Http Cookie

前三种很简单，不再赘述，我们来看Request Headers里面的第一个参数Accept。
1. Accept在这里值为：`text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`，说明可以接受3种类型的数据分别为：`text/html`/`application/xhtml+xml`/`application/xml`。那么后面的q是什么意思？q的全称为quality values，也就是权重，衡量参数重要程度的一个值，范围为0～1，允许小数点后最多3位，默认为1，当为0时，则表示此值将不会被接受。*号表示匹配任何值。
2. Accept-Encoding在这里有3个值，其实就是3种被包装过的压缩算法，我们都知道数据传输过程中是相对比较耗时的，所以当我们发出请求时，服务器会将我们请求的内容先进行打包压缩，然后传输到客户端，并且告诉客户端我是用哪个压缩算法压缩的，然后客户端再根据相应的压缩算法进行解压缩，这样可以极大的提高数据传输效率，就拿使用最广泛的gzip来说，如果是纯文本，可以压缩到原有体积的40%左右。这里我使用的是chrome浏览器，所以支持3种压缩方式，在firefox17.0版本下，只支持前两种，第三种方式sdch是谷歌开发的压缩算法。
3. Cache-Control可以设置网页是否缓存以及缓存的机制,这里的值为no-cache，表示网页不会被缓存。