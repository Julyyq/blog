---
layout: default
title: stylus教程3
---
stylus教程3
===============

运算符
---------------
stylus支持的操作符让你觉得stylus就是一种高级编程语言！

### 操作符优先级

操作符优先级从高到低：
    
    []
    ! ~ + -
    is defined
    ** * / %
    + -
    ... ..
    <= >= < >
    in
    == is != is not isnt
    is a
    && and || or
    ?:
    = := ?= += -= *= /= %=
    not
    if unless

### 单元操作符

单元操作符有：`!`、`not`、`-`、`+`、`~`。

    !0
    // => true

    !!0
    // => false

    !1
    // => false

    !!5px
    // => true

    -5px
    // => -5px

    --5px
    // => 5px

    not true
    // => false

    not not true
    // => true

逻辑操作符`not`的优先级比较低，所以下面的例子可以使用not重写：

    a = 0
    b = 1

    !a and !b
    // => false
    // pased as: (!a) and (!b)

    //重写：
    not a or b
    // => false
    // parsed as: not (a or b)

### 二元操作符

#### 下标[]

下标操作符允许在表达式中通过索引来获取值。使用圆括号包裹的表达式可以是一个元组(比如`(15px 15px)`，`(1 2 3)`)。

下面是一个使用下标来控制错误的例子：

    add(a, b)
     if a is a 'unit' and b is a 'unit'
       a + b
     else
       (error 'a and b must be units!')

    body
     padding add(1,'5')
     // => padding: error "a and b must be units";
     
     padding add(1,'5')[0]
     // => padding: error;
     
     padding add(1,'5')[0] == error
     // => padding: true;

     padding add(1,'5')[1]
     // => padding: "a and b must be units";

下面是一个稍微复杂点的例子，调用了内置的error()函数，无论何时都会输出第一个error信息。

    if (val = add(1,'5'))[0] == error
      error(val[1])

### range .. ...

    1..5
    // => 1 2 3 4 5

    1...5
    // => 1 2 3 4

### 加减

stylus中的加减操作符，可以判断单位，进行类型上的转换。

    15px - 5px
    // => 10px

    5 - 2
    // => 3

    5in - 50mm
    // => 3.031in

    5s - 1000ms
    // => 4s

    20mm + 4in
    // => 121.6mm

    "foo " + "bar"
    // => "foo bar"

    "num " + 15
    // => "num 15"

### 倍增的 / * %

    2000ms + (1s * 2)
    // => 4000ms

    5s / 2
    // => 2.5s

    4 % 2
    // => 0

在属性中使用`/`操作符的时候，必须用圆括号包起来，否则`/`号将被当做字面量来解释。

### 指数 \*\*

    2 ** 8
    // => 256

### 大于小于和等于 == != >= <= > <

相等操作符可以被用来比较单位，颜色，字符串，甚至标识符。这非常强大，甚至一个随意的标识符(比如`wahoo`)。

    5 == 5
    // => true

    10 > 5
    // => true

    #fff == #fff
    // => true

    true == false
    // => false

    wahoo == yay
    // => false

    wahoo == wahoo
    // => true

    "test" == "test"
    // => true

    true is true
    // => true

    'hey' is not 'bye'
    // => true

    'hey' isnt 'bye'
    // => true

    (foo bar) == (foo bar)
    // => true

    (1 2 3) == (1 2 3)
    // => true

    (1 2 3) == (1 1 3)
    // => false

`==`不但将字面量考虑在内，还考虑了类型。所以`0 == false`和`null == false`都将返回false。

### Truthfulness

任何长度大于1的表达式都会被认为是true。

    0% 
    0px
    1px 
    -1
    -1px
    hey
    'hey'
    (0 0 0)
    ('' '')

下面这些会被认为是false：

    0 
    null
    false
    ''

### 逻辑操作符 && || and or

%%和and是一样的，||和or是一样的。

### 存在操作符 in

in操作符用来检查in左边的操作数是否存在于in右边的操作数中。

    nums = 1 2 3
    1 in nums
    // => true

    5 in nums
    // => false

### conditional assignment ?= :=

`?=`和`:=`是等价的。

    color := white
    color ?= white
    color = color is defined ? color : white

### instance check: is a

stylus提供了一个二元操作符`is a`去执行类型检查。

    15 is a 'unit'
    // => true

    #fff is a 'rgba'
    // => true

    15 is a 'rgba'
    // => false

同样，你也可以使用`type()`函数来执行同样的操作：

    type(#fff) == 'rgba'
    // => true      

### 变量定义: is defined

这是一个伪二元操作符，不接受又操作数，并且不会计算左操作数。

    foo is defined
    // => false

    foo = 15px
    foo is defined
    // => true

    #fff is defined
    // => 'invalid "is defined" check on non-variable #fff'

### 三元操作符

三元操作符和其它编程语言中是一样的。

    num = 15
    num ? unit(num, 'px') : 20px
    // => 15px

### casting

使用unit内置函数可以加单位后缀。

    body
    n = 5
    foo: (n)em
    foo: (n)%
    foo: (n + 5)%
    foo: (n * 5)px
    foo: unit(n + 5, '%')
    foo: unit(5 + 180 / 2, deg)

### 颜色操作符

stylus中对颜色的操作又是甩了less和sass好几条街，你只需要这么做：

    #0e0 + #0e0
    // => #0f0

如果你想加深或者减淡颜色，操作没什么不同：

    #888 + 50%
    // => #c3c3c3

    #888 - 50%
    // => #444

### sprintf

格式化字符串在stylus中也非常简单，内部实现是通过内置的`s()`函数来实现。

    'X::Microsoft::Crap(%s)' % #fc0
    // => X::Microsoft::Crap(#fc0)

如果有多个参数，那么可以这么写：

    '-webkit-gradient(%s, %s, %s)' % (linear (0 0) (0 100%))
    // => -webkit-gradient(linear, 0 0, 0 100%)

以上就是stylus中有关操作符的主要部分，通过了解我们发现stylus简直就跟一门全新的编程语言一样，是的，没错。

全文完