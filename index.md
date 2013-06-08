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
1. Accept在这里值为：`text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`，说明可以接受3种类型的数据，分别为：`text/html`/`application/xhtml+xml`/`application/xml`。那么后面的q是什么意思？q的全称为quality values，也就是权重，衡量参数重要程度的一个值，范围为0～1，允许小数点后最多3位，默认为1，当为0时，则表示此值将不会被接受。*号表示匹配任何值。

2. Accept-Encoding在这里有3个值，其实就是3种被包装过的压缩算法，我们都知道数据传输过程中是相对比较耗时的，所以当我们发出请求时，服务器会将我们请求的内容先进行打包压缩，然后传输到客户端，并且告诉客户端我是用哪个压缩算法压缩的，然后客户端再根据相应的压缩算法进行解压缩，这样可以极大的提高数据传输效率，就拿使用最广泛的gzip来说，如果是纯文本，可以压缩到原有体积的40%左右。这里我使用的是chrome浏览器，所以支持3种压缩方式，在firefox17.0版本下，只支持前两种，第三种方式sdch是谷歌开发的压缩算法。

3. Cache-Control可以设置网页是否缓存以及缓存的机制,这里的值为no-cache，表示网页不会被缓存。在Request header中，可能的值还有：

        no-store: 用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。
        max-age: 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。
        max-stale: 指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。
        min-fresh: 指示客户机可以接收响应时间小于当前时间加上指定时间的响应。
        no-transform: 中间缓存或者代理将不会修改制定的header参数。
        only-if-cached: 在网络链接极端不好的情况下，只返回已经缓存的内容，而不是重新加载和验证与服务器的响应。
        cache-extension: 可设置自定义扩展的参数。

4. Connection指定客户端和服务器之间用于传输HTTP数据的TCP连接是否关闭。keep-alive表示当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接。close代表一个Request完成后，客户端和服务器之间用于传输HTTP数据的TCP连接会关闭，当客户端再次发送Request，需要重新建立TCP连接。

5. pragma：兼容http1.0协议的缓存设置，http1.1中应由Cache-Control替代。

6. P3P: 全称为:Platform for Privacy Preferences Project。大多数浏览器对这个参数没有很好的支持,这个参数用来表达网站自己的隐私惯例。具体可以参考：

    + <http://www.w3.org/P3P>
    + <https://support.google.com/accounts/answer/151657>

全文完