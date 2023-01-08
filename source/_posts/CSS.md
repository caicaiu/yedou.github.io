---
title: CSS
tags: CSS
categories: 前端
cover: https://atts.w3cschool.cn/attachments/cover/cover_css3.png?t=1579661388&imageView2/1/w/150/h/84
abbrlink: 6541
date: 2022-12-11 14:34:25
---

# 什么是css

用于美化html页面的

语法：

```
选择器{
	属性名:属性值
}
翻译：选择器（给谁改样式） 属性名（给他的什么改（名字，大小）） 属性值:改成什么样子
```

## 语法规范

```css
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <!--1. 写在head上
      2. 选择器和样式之间有个空格
      3. 建议不要使用紧凑式,
      4. 属性值的前面有个空格
      -->
  <style>
    p {
        /*紧凑式   color: red; font-size: 20px;*/
        color: red;
        font-size: 20px;
    }
  </style>
</head>
<body>
  <p>我是p</p>
</body>
```

# css选择器

选择器的作用，选择标签更改样式

## 标签选择器

标签选择器	（标签选择器、类选择器、id选择器和通配符选择器）

标签选择器（选择同一标签的所有样式）

```css
 <style>
    /*所有p标签改为绿色*/
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>标签选择器1</p>
  <p>标签选择器2</p>
  <p>标签选择器3</p>
  <p>标签选择器4</p>
</body>
```

## 类选择器

类选择器（可选一个或者多个标签指定样式）

```css
  <style>
        /*语法: 在选择器上指定选择器  . 类名{样式}
               在便签上选择类选择器  class = 类名
         多类名: 使用多类名  作用:简化css开发
               语法: 选择器上 .类名{样式}
                    标签上: class = 类名1 空格 类目2
               */
        .p1{
          color: red;
        }
        .p2{
            color: green;
        }
        .p3{
            font-size: 100px;
        }
    </style>
</head>
<body>
    <p class="p1">我是p1</p>
    <p class="p2">我是p2的1为</p>
    <p class="p2">我是p2的2为</p>
    <p class="p3">我是P3</p>
    <p class="p1 p3">我是p1和p3的集合体</p>
</body>
```

## id选择器

id选择器（只能使用一次）

```css
  <style>
    /*语法  选择器： #名字 {样式} 调用: id= 选择器名*/
    #div1{
      color: red;
    }
  </style>
</head>
<body>

<div id="div1">
  我是div1
</div>
<!--虽然可以用，但是不推荐-->
<div id="div1">
  我是div2
</div>
```

## 通配符选择器

通配符选择器（所有元素 标签）

```css
<style>
    *{
      color: red;
    }
  </style>
```

## 复合选择器

两个或者多个选择器组成的

常用的复合选择器包括：后代选择器、子选择器、并集选择器、伪类选择器等等

### 后代选择器

用于给他的儿子或者孙子指定属性

```css
 <style>
      /*后代1*/
      ul li{
        color: red;
      }
      /*孙子*/
      ul li a{
        color: blue;
      }

      /*使用类选择器*/
      ol .bb{
        color: green;
      }
      ol li{
        color: darkgoldenrod;
      }
  </style>
</head>

<body>
  <ul>
    <li>苹果</li>
    <li>例子</li>
    <li>励志</li>
    <li>付款</li>
    <li><a>哔哩哔哩</a></li>
  </ul>
  <ol >
    <li class="bb">苹果1</li>
    <li>苹果2</li>
    <li>苹果3</li>
  </ol>
</body>
```

后代选择器(给最近的儿子修改属性)

```css
 .aa>a{
      color: red;
    }
```

### 并集选择器

并集选择器（指定多个标签修改）

```css
  <style>
        /*语法: 选择器1"," 选择器2{样式}*/
        /*div,
        p{
            color: red;
        }
        */

        /*第二种，可以是后代选择器*/
        div,
        p,
        ol li{
            color: pink;
        }

    </style>
```

### 伪连接选择器

必须要按照这个格式顺序写，否则可能会失效

开发中常用的就是经过变换颜色就可以了

```css
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        /*没有被访问过的*/
        a:link{
            color: red;
        }
        /*已经被访问过的链接*/
        a:visited{
            color: pink;
        }
        /*鼠标经过的链接*/
        a:hover{
            color: darkgoldenrod;
        }
        /*按下后的链接*/
        a:active{
            color: aqua;
        }
    </style>

</head>
<body>
<!--样式必须是这样才行-->
    <a href="#">中国邮政</a>
	<a href="http://baidu.com"></a>
</body>
```

faous选择器

```CSS
 <style>
    /*用于区分input框获取焦点的时候更改样式*/
    input:focus{
      background: darkgoldenrod;
      color: red;
    }
  </style>
</head>
<body>
  <input type="text">
  <input type="text">
  <input type="text">
</body>
```





# 字体属性

字体属性

```css
<!--在body中指定字体
  可以设置多个，使用,进行分割,如果计算机有第一个元素就拿第一个，一直类推，如果都没有，使用浏览器默认的-->
  <style>
    p{
      font-family: "Microsoft YaHei UI";
    }
    div{
      font-family: '宋体';
    }
    /*使用多个*/
    span{
      font-family: "Microsoft YaHei UI",'宋体',"Arial";
    }
  </style>
```

字体大小

不同浏览器字体大小不一样，尽量指定 ，px是网页像素单位

```css
 <style>
    body{
      font-size: 10px;
    }
    div{
      font-size: 20px;
    }
  </style>
```

文字粗细

normal  默认值  (不加粗的)
bold    定义粗体  (加粗的)
100-900     400等同于normal,而700等同于bold注意这个数字后面不跟单位

```css
 <style>
    .ps{
      /*加粗*/
      font-weight: bold;
    }
    .ps2{
      /*正常*/
      font-weight: normal;
    }
    .p3{
      /*数字加粗*/
      font-weight: 400;
    }
  </style>
```

文字的风格（倾斜，不倾斜）

```css
  <style>
    p1{
      /*正常*/
      font-style: normal;
    }
    p2{
      /*倾斜*/
      font-style: italic;
    }
  </style>
```

复合属性写法

```css
 <style>
    /*语法: font  font-style (字体属性)  font-weight(字体粗细) font-size/line-height(字体大小)  font-family(字体) 字体风格*/
    .div1{
      font-style: italic;
      font-weight: 400;
      font-size: 19px;
      font-family: "Microsoft YaHei UI";
    }
    
    /*使用复合属性,不能颠倒顺序，可以省略其他，但是不能省略 字体大小和字体风格*/
    .div2{
      font: italic 400 19px "Microsoft YaHei UI";
    }
  </style>
```

文字颜色

```css
  p{
      /*color: red;*/
      /*color: #fff;*/
      color: rgb(200,0,0);
      
    }
```

文字对齐方式

```css
 h2{
        /*left  center right*/
      text-align: right;
    }
```

文本装饰方式（划线）

```css
      .p1 {
            /*下划线*/
            text-decoration: underline;
        }
        #p2{
            /*上划线*/
            text-decoration: overline;
        }
        #p3{
            /*中间线*/
            text-decoration: line-through;
        }

        #p4{
            /*没有线*/
            text-decoration: none;
        }

        a{
            text-decoration: none;
        }
```

文本缩进

```css
<style>
    /*文本缩进 单位 px 16px 默认是一个字  em 相当于16px*/
    #p1{
      text-indent: 32px;
    }
    .em{
      text-indent: 2em;
    }
  </style>
```

行间距:相当于行高  分为上间句，文字（16px），下间距

```css
<style>
    p{
      line-height: 25px;
    }
  </style>
```

去掉li的小圆点

```css
 li{
      list-style: none;
    }
```



# 引入方式

1. 行内样式表（行内式） 修改简单

	```css
	  <p style="color: red">我是行内样式</p>
	```

	

2. 内部样式表（嵌入式）

	```css
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	    <style>
	        /*这个就是内部，又称嵌入式*/
	    </style>
	</head>
	```

	

3. 外部样式表（链接式）常用 创建 css文件

	```
	p{
	    color: red;
	}
	
	```

	```css
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	  <link rel="stylesheet" href="sytel.css">
	</head>
	<body>
	  <p>
	    我是p表亲
	  </p>
	</body>
	</html>
	```



# 显示元素

分为块级元素（自己独占一行）和行级元素（一行可以有多个）

## 块级元素

常见的块元素有\<h1>~\<h6>、\<p>、\<div>、\<ul>、\<ol>、\<i>等，其中\<div>标签是最典型的块元素。

块级元素特点:

1. 自己独占一行
2. 可以设置样式（宽高等）
3. h1~h6 和p  里面不能放其他块级元素

```css
    <style>
        div{
            width: 200px;
            height: 200px;
            background: aqua;
        }
    </style>
</head>
<body>
    <div>我是会计元素</div>我自动换行哦
    <!--错误的，可以点击f12检查-->
    <p><div>我是p里面的</div></p>
</body>
```



## 行内元素

常见的行内元素有<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>等，其中

行内元素的特点：

+ 一行可以有多个
+ 宽高设置无效
+ 里面只能放文本和行内元素
+ a里面不能给放a特殊情况链接\<a>里面可以放块级元素，但是给<ā>转换一下块级模式最安全

行内块元素（一行放多个，可以设置高度）

特点：

1. 和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙。一行可以显示多个（行内元素特点）
2. 默认宽度就是它本身内容的宽度（行内元素特点）。
3. 高度，行高、外边距以及内边距都可以控制（块级元素特点）。

元素转换

```css
 a{
        width: 200px;
        height: 200px;
        background: red;
        /*设置为块级元素*/
        display: block;
      }
      /*块级转换为行级元素*/
      div{
        width: 200px;
        height: 200px;
        background: pink;
        display: inline;
      }

      /*转为行内块元素*/
      span{
        width: 200px;
        height: 200px;
        background: blue;
        display: inline-block;
      }
```

文字居中技巧

```
/*文字居中技巧 link-height = 行高*/
```

# CSS背景颜色

## 背景

背景颜色

```css
<style>
        div{
            width: 200px;
            height: 200px;
            /*默认是透明的*/
            background: pink;
        }
    </style>
```

添加背景图片

```css
  <style>
    div{
      width: 200px;
      height: 200px;
      /*放在同级目录下*/
      background-image: url(images/1.jpg);
    }
  </style>
```

设置图片方式

```css
  <style>
    div{
      width: 1000px;
      height: 1000px;
      /*放在同级目录下*/
      background-image: url(images/1.jpg);
      /*图片不平铺,盒子还是这么大*/
      /*background-repeat: no-repeat;*/
      /*图片横向平铺*/
      /*background-repeat: repeat-x;*/
      /*图片竖向平铺*/
      background-repeat: repeat-y;
      /*添加背景颜色*/
      background-color: pink;
    }
  </style>
```

## 背景位置

方位名词

```css
<style>
    div{
      width: 1000px;
      height: 1000px;
      background-image: url(images/1.jpg);
      background-repeat: no-repeat;
      /*默认放中间 left top center bottom*/
      /*background-position: right ;*/
      background-position: bottom;
      /*添加背景颜色*/
      background-color: pink;
    }
  </style>
```

精确定位

```css
<style>
    div{
      width: 1000px;
      height: 1000px;
      background-image: url("images/1.jpg");
      /*精确定位  第一个x轴 第二个 y轴*/
      background-repeat: no-repeat;
      background-color: pink;
      background-position: 20px 30px;
      /*如果没有指定两个，那么就是垂直居中*/
    }
  </style>
```

混合单位

```css
ackground-position: 20px center;
```

背景图像滚动

```css
background-attachment: fixed;
```

背景复合性写法

background:背景颜色 背景图片地址   背景平铺  背景图像滚动  背景图片位置

```css
/*可以去掉pink*/
      background: pink url("images/back.jpg") no-repeat fixed top center ;
```

背景色半透明

```css
  div{
        height: 200px;
        width: 200px;
        /*background: rgba(0,0,0,50%);*/
        /*background: rgba(0,0,0,0.5);*/
        background: rgba(0,0,0,.5);
      }
```

# CSS的3大特性

## 层叠性

层叠性: 样式相同，离结构近的生效，样式不相同，同时生效

```css
 <style>
    div{
      color: red;
      /*同样添加*/
      font-size: 20px;
    }
    /*优先最近*/
    div{
      color: pink;
    }
  </style>
```

## 继承性

继承性：继承父类的样式，但是只会继承一部分 比如 text,font-,Iine-这些元素开头的可以继承，以及color属性)

```css
  <style>


    div{
      color: red;
      font-size: 20px;
      height: 200px;
      width: 200px;
    }

    /*如果有指定则不会覆盖*/
    p{
      color: pink;
    }

  </style>
```

行高的继承：父类指定数字大小和行高，子类也会继承，如果父类的行高写的没有带单位，那么子类的行高=文字大小\*行高   子元素没有写字体大小，默认继承父类的字体大小

```css
  <style>
    body{
      color: red;
      font: 16px/2 "Microsoft YaHei UI";
    }
    div{
      /*div的行高是 20*2  */
      font-size: 20px;
    }
    p{
      /*没有指定 p的行高是 16*2 */
    }
  </style>
</head>
<body>
  <div>
    我是div
  </div>
  <p>我是p</p>
</body>
```

## 优先级

选择器的优先级

> 根据权重来进行区分,上面是权重低的

![image-20221204083546138](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221204083546138.png)

```css
  <style>
    /**{
      color: red;
    }*/
    /*倒数第二*/
    div{
      color: pink;
    }
    /*倒数第三*/
    .sss{
      color: blue;
    }
    /*倒数第四*/
    #ppp{
      color: darkgoldenrod;
    }
    /*重要的*/
    *{
      color: red !important;
    }
  </style>
</head>
<body>
<!--行内第二-->
  <div class="sss" id="ppp" style="color: aquamarine">我师父</div>
  <p>我徒弟</p>
</body>
```

a链接的是浏览器给的继承属性，他是蓝色的

权重叠加

```css
  <style>
    /*权重为  0，0,0,1*/
    li{
      color: blue;
    }
    /*权重相加 为 0.0.0.1+0.0.0.1=0.0.0.2*/
    ol li {
      color: darkgoldenrod;
    }
    /*权重永远不会进位*/
    /*权重为: 0.0.1.0+0.0.0.1+0.0.0.1 = 0.0.1.2*/
    .nav ol li{
      color: pink;
    }
  </style>
```

加重权重

```css
  <style>
    .div li{
      color: red;
    }
    /*把第一个变为粉色*/
    .div #first {
      color: pink;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <ol class="div">
    <li id="first">群众</li>
    <li>群众2</li>
    <li>群众3</li>
    <li>群众4</li>
  </ol>
</body>
```

# 盒子模型

看透网页布局

1. 先准备好相关的网页元素，网页元素基本都是盒子B0X。
2. 利用CSS设置好盒子样式，然后摆放到相应位置
3. 往盒子里面装内容
4. 网页布局的核心本质：就是利用CSS摆盒子。

盒子模型

> context 是内容
>
> border是边框
>
> paddig是内边距
>
> margin 是外边距

![image-20221204085754865](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221204085754865.png)

## 边框和位置

```css
  <style>
    div{
      width: 200px;
      height: 200px;
      /*边框的粗细*/
      border-width: 20px;
      /*边框的样式*/
      border-style: solid;
      /*边框的颜色*/
      border-color: pink;
    }
  </style>
```

边框复合性写法

```css
  <style>
    div{
      width: 200px;
      height: 200px;
      /*复合写法没有顺序*/
      border: 12px solid pink;
      /*只写底部*/
      border-bottom: 30px blue dashed;
    }
  </style>
```

border-collapse:collapse;表示相邻边框合并在起(因为两个表格并行在一起时加粗的)

```css
table,th,td{
      border: 1px pink solid;
      /*合并相邻的边框*/
      border-collapse: collapse;
    }
```

边框会影响盒子的大小（边框重新生成的大小）

```css
  <style>
    div{
      width: 200px;
      height: 200px;
      border: 10px pink solid;
    }
  </style>
```

## 内边距

内边距（盒子和内容的边距）

```css
  <style>
    div{
      width: 200px;
      height: 200px;
      background: pink ;
      padding-left: 20px;
      padding-top: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
    }
  </style>
```

内边距的复合写法

![image-20221204093202163](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221204093202163.png)

```css
  <style>
    div {
      height: 200px;
      width: 200px;
      background: pink;
      /*上下左右 20px*/
      /*padding: 20px;*/
      /*上下20，左右10px*/
      padding: 20px 10px;
      /*上5 ,左右10，下15px*/
      /*padding: 5px 10px 15px;*/
      /*上右下左*/
      padding: 5px 10px 15px 20px;
    }
  </style>
```

内边距也会影响盒子的大小，如果没有指定宽和高度，就不会撑开

## 外边距

外边距（盒子和盒子之间的距离）

```css
<style>
    div{
      height: 200px;
      width: 200px;
      background: pink;
    }
    .one{
      margin-bottom: 20px;
    }
    .two{
      margin-left: 30px ;
    }
  </style>
```

盒子居中

![image-20221204095302114](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221204095302114.png)

```css
<style>
    div{
      width: 800px;
      height: 200px;
      background: pink;
      margin: 0 auto;
    }
  </style>
```

行内块和行内元素居中

```css
  <style>
    div{
      height: 200px;
      width: 500px;
      background: pink;
      /*父类元素指定行内元素居中*/
      text-align: center;
    }
    body{
      text-align: center;
    }
  </style>
```

对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值，也就是大的覆盖小的，然后父元素进行移动

解决办法

```css
 <style>
    .father{
      height: 200px;
      width: 300px;
      background: pink;
      margin: 30px 0;
      /*border: 1px solid transparent;*/
      /*padding: 1px;*/
      overflow: hidden;
    }
    /*第一中解决办法:1. 父元素指定边框  2.父元素指定内边距 3.在指定样式 overflow: hidden;*/
    .son{
      height: 30px;
      width: 100px;
      background: red;
      margin: 30px 0;
    }
  </style>
```

网页元素很多都带有默认的内外边距，而且不同浏览器默认的也不致。

解决

```css
 <style>
    *{
      padding: 0;
      margin: 0;
      /*建议行内元素只指定左右边距，不要设置上下边距*/
    }
  </style>
```

圆角边框

原理（和圆相交，再切）

```css
<style>
    div{
      height: 200px;
      width: 200px;
      background: pink;
      border-radius: 12px;
    }
  </style>
```

![image-20221205074649413](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221205074649413.png)

圆角的使用

```css
    <style>
      .zhengfang{
        width: 200px;
        height: 200px;
        background: pink;
        /*变为原形，高度的宽度的一半 100px */
        border-radius: 50%;
      }
      .changfang{
        width: 200px;
        height: 100px;
        background: pink;
        /*左右变圆，高度的一半*/
        border-radius: 100px;
      }
      /*可以指定上下左右的值*/
      .radius{
        width: 200px;
        height: 200px;
        background: pink;
        /*从左到右依次*/
        border-radius: 10px 20px 30px 40px;
      }
     /*两个值，对角*/
      .radius2{
        width: 200px;
        height: 200px;
        background: pink;
        border-radius: 10px 30px;
      }
      /*三个值*/
      .radius3{
        width: 200px;
        height: 200px;
        background: pink;
        /*左 右上和左下  右下*/
        border-radius: 10px 20px 30px;
      }
    </style>
```

## 阴影

盒子阴影

> h-showdow  影子左右移动
>
> v-shadow 影子上下移动
>
> blur 影子的模糊程度
>
> spread 影子的大小
>
> color  影子的颜色
>
> inset 影子的位置

![image-20221205080852941](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221205080852941.png)

```css
<style>
        div{
            height: 200px;
            width: 200px;
            background: pink;
        }
        /*经过时显示*/
        div:hover{
            box-shadow: 10px 10px 3px rgba(0,0,0,0.5);
        }
    </style>
```

文字阴影

```css
 <style>
    h3{
      font-size: 200px;
      color: red;
      text-shadow: 10px  10px rgba(0,0,0,0.3) ;
    }
  </style>
```

# 浮动

网页布局的3种方式

+ 标准流（也就是按标签进行摆放）
+ 浮动
+ 定位

在一个页面中，常常使用3种布局方式

**为什么需要浮动**

块级元素无法在一行上排列多个，就算转成行级元素也要难以掌控

而浮动可以让块级元素在一行上排好

行级找标准流，一行多个块级元素找浮动

## 浮动基本语法

f1oāt属性用于创建浮动框，将其移动到一边，直到左边缘或右边缘及包含块或另一个浮动的边缘。

```css
  <style>
    .left ,.right{
      height: 200px;
      width: 200px;
      background: pink;
      float: left;
    }
    .right{
      float: right;
    }
  </style>
```

## 浮动的特性

1. 脱离标准普通流的控制（浮）移动到指定位置（动），（俗称脱标）
2. 浮动的盒子不再保留原先的位置（其他标准流会覆盖掉）

```css
  <style>
    .float,.pe{
      float: left;
      width: 200px;
      height: 200px;
      background: pink;
    }
    .pe{
      width: 300px;
      height: 300px;
    }
  </style>
```

如果多个盒子都设置了浮动，则它们会按照属性值一行内显示并且顶端对济排列。如果浏览器大小装不下，则会直接压缩到下一行上

```css
  <style>
    div{
      width: 200px;
      height: 200px;
      float: left;
    }
    .one{
      background: pink;
    }
    .two{
      background: red;
    }
    .three{
      background: blue;
    }
    .four{
      background: forestgreen;
    }
  </style>
```

不管任何元素，只要加了浮动，他都会变为行内块元素

如果块级盒子没有设置宽度，默认宽度和父级一样宽，但是添加浮动后，它的大小根据内容来决
浮动的盒子中间是没有缝隙的，是紧着一起的

```css
 <style>
    span,h2,div,p{
      height: 200px;
      width: 200px;
      float: left;
      background: pink;
    }
  </style>
```

先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置.符合网页布局第一准侧

```css
 <style>
    .father{
      width: 500px;
      height: 200px;
      background: pink;
    }
    .son{
      width: 200px;
      height: 100px;
      background: red;
      float: left;
    }
  </style>
```

为什么需要清除浮动

因为现实中，浮动有很多，父标签不容易给高度，只靠浮动撑开，但是父标签不给高度的时候，父标签的高度就会为0，浮动只在盒子的宽度，但是因为父标签的高度为0，下个标签的高度就会顶替他的位置

```css
  <style>
    .box{
      width: 400px;
      background: pink;
    }
    .box .one{
      height: 200px;
      float: left;
      width: 100px;
      background: black;
    }
    .box .two{
      height: 200px;
      width: 100px;
      float: left;
      background: blue;
    }
    .tst{
      width: 500px;
      height: 300px;
      background: red;
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="one"></div>
    <div class="two"></div>
  </div>
  <div class="tst">

  </div>
```

1. 清除浮动本质是？
	清除浮动的本质是清除浮动元素脱离标准流造成的影响
2. 清除浮动策略是？
	闭合浮动.只让浮动在父盒子内部响，不影响父盒子外面的其他盒子
3. 额外标签法？
	隔墙法，就是在最后一个浮动的子元素后面添加一个额外标签添加清除浮动样式
	实际工作可能会遇到，但是不常用

```css
  <style>
    .box{
      width: 400px;
      background: pink;
      border: blanchedalmond solid;
    }
    .box .one{
      height: 200px;
      float: left;
      width: 100px;
      background: black;
    }
    .box .two{
      height: 200px;
      width: 100px;
      float: left;
      background: blue;
    }
    .tst{
      width: 500px;
      height: 300px;
      background: red;
    }
    .sss{
      clear: both;
    }
  </style>
</head>
<body>
<div class="box">
  <div class="one"></div>
  <div class="two"></div>
  <!--第一种,额外标签，但是只能是块级元素-->
  <div class="sss"></div>

</div>
<div class="tst">

</div>
```

父级元素清除浮动

```css
 .box{
      width: 400px;
      background: pink;
      border: black solid;
      /*父级清除浮动*/
      overflow: hidden;
    }
```

伪元素清除浮动（用css在后面添加一个元素）

```css
  <style>
    .clearfix:after{
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .clearfix{
      *zoom: 1;
    }
    .box{
      width: 400px;
      background: pink;
    }
    .box .one{
      height: 200px;
      float: left;
      width: 100px;
      background: black;
    }
    .box .two{
      height: 200px;
      width: 100px;
      float: left;
      background: blue;
    }
    .tst{
      width: 500px;
      height: 300px;
      background: red;
    }
  </style>
</head>
<body>
<div class="box clearfix">
  <div class="one"></div>
  <div class="two"></div>
</div>
<div class="tst">
```

双伪元素清除浮动

```css
.clearfix:before,.clearfix:after{
            content: "";
            display: table;
        }
        .clearfix:after{
            clear:both;
        }
        .clearfix{
            *zoom: 1;
        }
```

# 学成在线案例

css书写规范

![image-20221206092856023](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221206092856023.png)

![image-20221206092913530](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221206092913530.png)

网页布局思路

1. 必须确定页面的版心（可视区），我们测量可得知。（页面的大小）
2. 分析页面中的行模块，以及每个行模块中的列模块。其实页面布局第一准则
3. 一行中的列模块经常浮动布局，先确定每个列的大小，之后确定列的位置.页面布局第二准则
4. 制作HTML结构。我们还是遵循，先有结构，后有样式的原则。结构永远最重要
5. 所以，先理清楚布局结构，再写代码尤为重要这需要我们多写多积累

导航栏注意
实际开发中，我们不会直接用链接a而是用Iⅰ包含链接(i+a)的做法。

# 定位

为什么使用

让盒子自由的在某个盒子内移动位置或者固定屏幕中的某个位置，可以压住其他盒子

## 定位组成

定位=定位模式+边偏移

定位模式（定位是固定的还是其他的） position

## 静态定位 

   无定位

## 相对定位

相对定位    根据自我坐标移动位置 原来位置继续占有，其他元素看做标准流

```css
<style>
    .one{
      /*相对定位*/
      position: relative;
      top: 20px;
      left: 20px;
      height: 200px;
      width: 200px;
      background: #1c0b70;
    }
    .two{
      height: 200px;
      width: 200px;
      background: pink;
    }
  </style>
```

边偏移 元素的位置  top bottom

## 绝对定位

+ 父元素没有定位 默认以浏览器为定位

	```css
	  <style>
	    .father{
	      width: 200px;
	      height: 200px;
	      background: pink;
	    }
	    .son{
	      width: 100px;
	      height: 100px;
	      background: #7cb0d1;
	      position: absolute;
	      top: 20px;
	      left: 200px;
	    }
	  </style>
	```

+ 父元素有定位，优先最近的为定位

	```css
	 <style>
	    .father{
	      width: 200px;
	      height: 200px;
	      background: pink;
	    }
	    .son{
	
	      width: 100px;
	      height: 100px;
	      background: #7cb0d1;
	      position: absolute;
	      top: 50px;
	      left: 200px;
	    }
	    .yeye{
	      position: relative;
	      width: 500px;
	      height: 500px;
	      background: black;
	    }
	  </style>
	```

	绝对定位不保留之前的位置

	父用相对定位（保留位置），子用绝对定位

## 固定定位

固定定位（以浏览器的可视窗口移动元素）不占有原先的位置

```css
    <style>
        .nav{
            position: fixed;
            top: 30px;
            left: 30px;
        }
    </style>
```

固定定位小技巧:固定在版心右侧位置

1. 让固定定位的盒子1eft:50%.走到浏览器可视区（也可以看做版心)的一半位置。
2. 让固定定位的盒子margin-left版心宽度的一半距离。多走版心宽度的一半位置

```css
  <style>
    .bb{
      height: 3000px;
      width: 300px;
      background: pink;
      margin: 0 auto;
    }
    .fixed{
      height: 100px;
      width: 100px;
      top: 50px;
      position: fixed;
      /*浏览器的一半*/
      left: 50%;
      background: palegreen;
      /*版心的一半*/
      margin-left: 156px;
    }
  </style>
```

## 粘性定位

粘性定位 浏览器作为参照，占有原先位置

```css
 <style>
    .hehe{
      position: sticky;
      height: 30px;
      width: 200px;
      background: pink;
      /*需要指定其中一个元素即可*/
      top: 20px;
    }
    body{
      height: 3000px;
    }
  </style>
```

## 定位叠放顺序

用于控制定位盒子的前后顺序，如果没有指定，默认最近的标签，标签越大，越往上

```css
  <style>
    .da,.er,.qiang{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 200px;
      height: 300px;
    }
    .da{
      background: pink;
      z-index: 3;
    }
    .er{
      background: red;
      z-index: 4;
    }
    .qiang{
      background: black;
    }
  </style>
```

绝对定位盒子居中

1)左上移动 50%
2)margin-left,top :-100px:让盒子向左移动自身宽度的半。

```css
 <style>
    .nav{
      height: 200px;
      /*绝对定位*/
      position: absolute;
      top: 50%;
      left: 50%;
      /*左边移动一半*/
      margin-left: -100px;
      /*上边向上移动一半*/
      margin-top: -100px;
      width: 200px;
      background: pink;
    }
  </style>
```

## 定位特性

+ 行级元素设置可直接设置宽高

+ 块级不设置，默认是内容大小

	```css
	 <style>
	        span{
	            bottom: 0px;
	            position: absolute;
	            height: 200px;
	            width: 200px;
	            background: pink;
	        }
	        div{
	            /*不给宽高，字体大小*/
	            position: absolute;
	            background: skyblue;
	        }
	    </style>
	```

+ 浮动不会压住标准流的文字，而定位会

	```css
	  <style>
	    .bb{
	      /*不会压住文字*/
	      /*float: left;*/
	      position: absolute;
	      height: 200px;
	      width: 200px;
	      background: skyblue;
	    }
	  </style>
	```

# 元素的显示和隐藏

display 隐藏元素  不占有原先的位置

```css
  <style>
    .bb,.cc{
      height: 200px;
      width: 200px;
    }
    .bb{
      display: none;
      background: pink;
    }
    .cc{
      background: red;
    }
  </style>
```

visibility 隐藏元素，占有原来的位置

```css
  <style>
    .bb,.cc{
      height: 200px;
      width: 200px;
    }
    .bb{
      /*隐藏*/
      /*visibility: hidden;*/
      /*可视*/
      visibility: visible;
      background: pink;
    }
    .cc{
      background: red;
    }
  </style>
```

文字溢出和隐藏

```css
  <style>
    div{
      /*超出部分隐藏*/
      /*overflow: hidden;*/
      /*部分显示*/
      /*overflow: visible;*/
      /*根据文字自动添加滚动条*/
      /*overflow: auto;*/
      /*滚动条*/
      overflow: scroll;
      height: 100px;
      width: 100px;
      border: 3px black solid;
    }
  </style>
```

# 精灵图

为什么需要精灵图： 因为每次获取图片都要去发送请求获取，服务器压力大

为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度

精灵图的使用

拷贝多张图片，某个图标的位置移动到指定的盒子上

```css
 <style>
    .box{
      width: 60px;
      height: 60px;
      /*负数向左移动*/
      background: url("images/sprites.png") -180px 0;
    }
    .box2{
      position: absolute;
      left: 20px;
      bottom: 30px;
      width: 27px;
      height: 25px;
      background: url("images/sprites.png") -155px -106px;
    }
  </style>
```

# 字体图标

简单用字体，复杂用精灵图

图标下载[IcoMoon App - Icon Font, SVG, PDF & PNG Generator](https://icomoon.io/app/#/select/font)

[使用](https://www.jianshu.com/p/80cfcdbbc959) 注意：webstrom是无法复制图标的[]的，可以用文本复制再粘贴

追加字体图标 -> importicons->选择select .json

# css创建三角形

```css
 <style>
    .box{
      height: 0;
      width: 0;
      border-left: 10px solid pink;
      border-right: 10px solid black;
      border-bottom: 10px red solid;
      border-top: 10px blue solid;
    }
    .box2{
      height: 0;
      width: 0;
      border: 10px solid transparent;
      border-left: 10px solid red;
    }
  </style>
```

京东案例

```css
  <style>
    .box{
      position: relative;
      height: 200px;
      width: 200px;
      background: pink;
      margin: 100px auto ;
    }
    .box2{
      position: absolute;
      right: 0;
      top: -10px;
      height: 0;
      width: 0;
      border: 5px solid transparent;
      border-bottom: 5px solid red;
    }
  </style>
```

# 用户界面

鼠标样式

![image-20221211102513577](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221211102513577.png)

```css
 <style>
    .p1{
      cursor: default;
    }
    .p2{
      /*销售*/
      cursor: pointer;
    }
    /*移动*/
    .p3{
      cursor: move;
    }
    /*文本*/
    .p4{cursor: text}
    /*禁止*/
    .p5{
      cursor: not-allowed;
    }
  </style>
```

表单项

```css
  <style>
    /*取消边框*/
    input{
      outline: none;
    }
    textarea{
        resize: none;
    }
  </style>
</head>
<body>
  <input type="text">
<!--文本域不可以托大-->
    <textarea rows="3"></textarea>
```

行内快和文字对齐
![image-20221211103701965](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221211103701965.png)

```css
   <style>
        img{
            /*底部对齐*/
            /*vertical-align: bottom;*/
            /*中间对齐*/
            /*vertical-align: middle;*/
            /*上面对齐*/
            vertical-align: top;
        }
    </style>
```

消除图片空白空隙

```css
<style>
    div{
      border: 2px solid red;
      /**/
    }
    /*消除空白*/
    img{
      vertical-align: bottom;
    }
  </style>
```

单行文字省略号

```css
 <style>
    div{
      width: 100px;
      height: 100px;
      background: pink;
      /*超出的文字不自动换行，强制一行*/
      white-space: nowrap;
      /*超出的文字隐藏*/
      overflow: hidden;
      /*超出的文字用省略号*/
      text-overflow: ellipsis;
    }
  </style>
```

多行文字省略号，超出的设置高度

```css
  <style>
    div{
      height: 64px;
      width: 100px;
      background: pink;
      overflow: hidden;
      /*添加省略号*/
      text-overflow: ellipsis;
      display: -webkit-box;
      /*行数*/
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  </style>
```

# 布局技巧

```css
<style>
/*覆盖左边盒子的边框*/
    li{
      float: left;
      height: 100px;
      width: 100px;
      border: red 1px solid;
      list-style: none;
      margin-left: -1px;
    }
  </style>
```

```css
  <style>
    ul li{
      /*如果父有定位*/
      position: relative;
      float: left;
      height: 150px;
      width: 100px;
      border: red 1px solid;
      list-style: none;
      margin-left: -0.8px;
    }
   /* li:hover{
      !*天极爱相对定位，变成蓝色*!
      position: relative;
      border: blue 1px solid;
    }*/
    /*父有定位*/
    li:hover{
      z-index: 1;
      border: blue 1px solid;
    }
  </style>
```

文字环绕浮动

```css
  <style>
    .box{
      height: 70px;
      width: 300px;
      background: pink;
    }
    .img{
      float: left;
      height: 70px;
      width: 60px;
    }
    .img img{
      height: 100%;
      width: 100%;
    }
  </style>
```

行内块元素居中

```css
  <style>
    .box a{
      display: inline-block;
      height: 30px;
      width: 30px;
      background: white;
      border: 1px solid #ccc;
      text-decoration: none;
      text-align: center;
      color: black;
      line-height: 30px;
    }
    .box{
      text-align: center;
    }
    .box .pre,.box .next{
      width: 80px;
    }
    input{
      width: 30px;
      height: 30px;
      outline: none;
    }
    button{
      width: 50px;
      height: 30px;
    }
  </style>
```

直角三角形

```css
  <style>
      .box{
        height: 0;
        width: 0;
        border-bottom: red solid 0px;
        border-top: black solid 50px;
        border-left: skyblue solid 0px;
        border-right: green solid 30px;
      }
      /*简写*/
      .box2{
        height: 0;
        width: 0;
        border-color: transparent green transparent transparent;
        border-style: solid;
        border-width: 50px 30px 0 0;
      }
    </style>
```

直角三角形的应用

```css
 <style>
    .price{
      position: relative;
      line-height: 24px;
      height: 24px;
      width: 160px;
      border: black 1px solid;
      margin: 0px auto;
    }
    .price .left {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 90px;
        background: red;
        height: 100%;
        color: white;
    }
    .price .right{
        text-align: center;
        color: gray;

        width: 60px;
        height: 100%;
        display: inline-block;
    }
    .left i {
        right: 0;
        top: 0;
        position: absolute;
        height: 0;
        width: 0;
        border-color: transparent #fefefe transparent transparent;
        border-style: solid;
        border-width: 24px 33px 0 0;
    }
  </style>
```

页面初始化

```css
/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0
}
/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}
/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}
/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
```

# Html新特性

这种语义化标准主要是针对搜索引擎的
这些新标签页面中可以使用多次
在IE9中，需要把这些元素转换为块级元素
其实，我们移动端更喜欢使用这些标签

```css
    <style>
        header {
            height: 100px;
            background: #95caea;
        }

        nav {
            height: 200px;
            background: pink;
            display: block;
        }

        article {
            height: 200px;
            width: 100px;
            background: skyblue;
        }

        section {
            height: 30px;
            width: 30px;
            background: red;
        }

        footer {
            height: 200px;
            width: 200px;
            background: bisque;
        }
    </style>
</head>
<body>
<header>头部标签</header>
<nav>导航栏</nav>
<article>左边导航栏大的div
    <section>小的盒子</section>
</article>
<footer>底部</footer>
```

视频标签

```html
 <video src="video/pian.mp4" autoplay="autoplay" controls="controls"  loop="loop"></video>
```

![image-20221214073320922](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221214073320922.png)

音频

```html
 <audio src="audio/mailang.mp3" autoplay="autoplay" controls="controls" loop="loop"></audio>
```

新表单

```html
  搜索:<input type="search"><br>
  邮箱:<input type="email"><br>
  搜索:<input type="search"><br>
  url类型:<input type="url"><br>
  日期类型:<input type="date"><br>
  月类型:<input type="month"><br>
  周类型:<input type="week"><br>
  数字类型:<input type="number"><br>
  手机号码:<input type="tel"><br>
  颜色框:<input type="color"><br>
```

新增表单属性

```html
<form>
    <input type="text" required="required"><!--必填项--><br>
    <!--提示文本-->
    <input type="text" placeholder="pink"><br>
    <!--自动聚焦-->
    <input type="text" autofocus="autofocus"><br>
    <!--提交显示历史-->
    <input type="text" autocomplete="on"><br>
    <!--多文件提交    -->
    <input type="file" multiple="multiple"><br>
    <input type="submit" value="提交"><br>
</form>
```

# Css3的新特性

属性选择器 

他们的权重都是10

```css
  <style>
    /**/
    input[value]{
      color: pink;
    }
    /*有text属性的修改*/
    input[type=text]{
      color: pink;
    }
    /*以某个符号开头的*/
    div[class^=icon]{
      color: red;
    }
    /*以某个符号结尾的  */
   section[class$=data]{
     color: pink;
   }
  /*包含某个符号的*/
  section[class*=icop]{
    color: forestgreen;
}
  </style>
</head>
<body>
<!--  <input type="text" value="用户名">-->
  <input type="text" value="">
  <input type="password">

<div class="icon1">小图标1</div>
<div class="icon2">小图标2</div>
<div class="icon3">小图标3</div>
<div class="icon4">小图标4</div>
<div>我是打酱油的</div>
<!--4.属性选择器可以选择属性值结尾的某些元素-->
<section class="icon1-data">安其拉</section>
<section class="icon2-data">我是哥斯拉</section>
<section class="icon3-icop">哪我是谁</section>
</body>
</html>
```

![image-20221214080313625](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221214080313625.png)

结构伪类选择器

```css

   

```

![image-20221214081251412](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221214081251412.png)

```css
  <style>
 /*第一个孩子*/
    ul li:first-child{
      color: pink;
    }
    ul li:last-child{
      color: red;
    }
    ul li:nth-child(2){
      color: green;
    }
    /*奇数*/
    ul li:nth-child(odd){
      color: pink;
    }
    /*偶数*/
    ul li:nth-child(even){
      color: red;
    }
    /*公式， 从上往下遍历 从0开始算法 里面必须是n*/
/*    ol li:nth-child(n){
      color: green;
    }*/
    /*偶数*/
    ol li:nth-child(2n){
      color: green;
    }
  /*  奇数*/
    ol li:nth-child(2n+1){
      color: red;
    }
  /*  以5为步数*/
    ol li:nth-child(5n){
      color: green;
    }
    
  /*  第5个到最后*/
    ol li:nth-child(n+5){
      color: green;
    }
    
  /*  第五个前面 包含5*/
    ol li:nth-child(-n+5){
      color: green;
    }

    /*先排序，然后进行查找，再进行元素匹配，匹配不了泽失效*/
    section div:nth-child(1){
      color: red;
    }
    /*先按div进行排序，然后再查找1*/
    section div:nth-of-type(1){
      color: green;
    }
  </style>
```

伪元素选择器（使用css创建标签）

before和ater创建一个元素，但是属于行内元素

```
语法：element:before
```

before和after必须有content属性
before在父元素内容的前面创建元素，after在父元素内容的后面插入元素
权重为1

![image-20221214084316789](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221214084316789.png)

```css
<style>
  div{
    height: 100px;
    width: 200px;
    background: pink;
  }
  div::before{
    content: '我';
  }
  div::after{
    content: '小猪';
  }
</style>
```

清除浮动

![image-20221214090541360](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221214090541360.png)

![image-20221214090608881](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221214090608881.png)

![image-20221214090615607](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221214090615607.png)

盒子模型

不会成撑大盒子

1. box-sizing:content-box盒子大小为width+padding+border(以前默认的)
2. box-sizing:border-box盒子大小为width

```css
 <style>
    /*不会撑大盒子*/
    div{
      width: 200px;
      height: 200px;
      border: 10px solid red;
      padding: 15px;
      box-sizing: border-box;
    }
    /*会撑大盒子*/
    p{
      width: 200px;
      height: 200px;
      border: 10px solid green;
      padding: 15px;
      box-sizing: content-box;
    }
  </style>
```

图像模糊处理

```css
 <style>
        img{
            filter: blur(30px);
        }
        img:hover{
            filter: blur(0px);
        }
    </style>
```

计算盒子的宽度

```css
<style>
    .a{
      height: 200px;
      width: 200px;
      background: pink;
    }
    .b{
      height: 30px;
      width: calc(100%-30px);
      background: skyblue;
    }
  </style>
```

过渡效果

谁做过渡给谁加

属性：想要变化的C5s属性，宽度高度背景颜色内外边距都可以。如果想要所有的属性都变化过渡，写一个al就可以。
花费时间：单位是秒（必须写单位）比如0.5s
运动曲线：默认是ease(可以省略)
何时开始：单位是秒（必须写单位）可以设置延迟触发时间默认是0s(可以省略)

```css
<style>
    div{
      width: 200px;
      height: 35px;
      background: pink;
      /*过渡*/
      transition: width 1s ease  ;
    }
    div:hover{
      width: 400px;
    }
    div{
      width: 200px;
      height: 35px;
      background: pink;
      /*过渡*/
      /*transition: width 1s ease,height 1s ease ;*/
      transition: all 1s ease;
    }
    div:hover{
      width: 400px;
      height: 200px;
    }
  </style>
```

