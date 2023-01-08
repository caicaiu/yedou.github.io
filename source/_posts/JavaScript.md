---
title: JavaScript
tags: JavaScript
categories: 前端
cover: 'https://www.toopic.cn/public/uploads/small/165804573748165804573697.png'
abbrlink: 18006
date: 2022-12-14 09:56:23
---

# DOM

通过id获取元素

```js
<script>
  var timer = document.getElementById('cc');
  console.log(timer); //元素对象
  console.log(typeof timer) //Object
  console.dir(timer);
</script>
```

获取多个标签

```js
  <script>
    var elementsByTagName = document.getElementsByTagName('li');
    console.log(elementsByTagName)
    /*里面装的是伪元素*/
    for (let i = 0; i < elementsByTagName.length; i++) {
      console.log(elementsByTagName[i])
    }
    /*指定父元素获取子元素*/
    var ol = document.getElementById('ol');
    console.log(ol)
    var olList = ol.getElementsByTagName('li');
    console.log(olList)
  </script>
```

3种获取标签的新方式，类名获取，html5新方法获取

```js
<script>
  /*通过类名获取*/
  var box1 = document.getElementsByClassName('box1');
  console.log(box1)
  /*通过选择器获取*/
  var element = document.querySelector('#nav');
  console.log(element)
  var element1 = document.querySelector('.box2');
  console.log(element1)
  /*获取全部标签*/
  var nodeListOf = document.querySelectorAll('div');
  console.log(nodeListOf)
</script>
```

获取body和html

```js
 <script>
    var body = document.body;
    console.log(body)
    var documentElement = document.documentElement;
    console.log(documentElement)
  </script>
```

事件三要素

事件源（谁） 事件类型（触发什么） 事件处理（如何处理）

```js
  <button  id="btn">按钮</button>
  <script>
    var btn = document.getElementById('btn');
    /*时间处理方式， 事件处理过程*/
    btn.onclick = function (){
      console.log('我被触发了')
    }
  </script>
```

![image-20221214103236004](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221214103236004.png)

更换元素字体

```js
<body>
  <button id="btn">点我更换</button>
  <span id="span">嘻嘻</span>
  <span id="span2"> 打发</span>
  <script>
    var element = document.getElementById('btn');
    var span = document.getElementById('span');

    /*事件触发*/
    element.onclick = function (){
      span.innerText = "我是span"
    }

    /*刷新界面就进行更换*/
    var k = document.querySelector('#span2');
    k.innerText = "就放假了肯德基法律思考"
  </script>
```

html和text的区别

```js
 <script>
    /*区别1 : heml识别html标签 text不识别*/
    var qu = document.querySelector('#p1');
    var qu2 = document.getElementById('p2');
    qu.innerHTML ="<strong>我是</strong>小明              "
    qu2.innerText = "<strong>我是</strong>小明            "
    /*一个保留空格和换行，一个不保留*/
    console.log(qu.innerText)
    console.log(qu.innerText)
  </script>
```

修改属性值

```js
<body>
  <button id="zxy">张学友</button>
  <button id="ldh">刘德华</button>
  <img src="img/2.jpg" id="img">
<script>
    var zxy = document.getElementById('zxy');
    var ldh = document.getElementById('ldh');
    var img = document.getElementById('img');

    zxy.onclick = function (){
        img.src = 'img/1.jpg'
        img.title = '张学友'
    }
    ldh.onclick = function (){
        img.src = 'img/2.jpg'
        img.title="刘德华"
    }
</script>
```

修改表单元素

```js
<script>
  var btn = document.getElementById('btn');
  var input = document.getElementById('input');
  btn.onclick = function (){
  //  修改表单里的元素
    input.value = "我被点击了"
    /*this是调用元素本身， btn*/
    this.disabled = true
  }
</script>
```

修改样式

```js
<div id="box">
  </div>
  <script>
    var div = document.getElementById('box');
    div.onclick = function (){
      this.style.background = 'red';
      this.style.width = '400px'
    }

  </script>
```

循环精灵图

```html
  <style>
    .box{
      width: 250px;
      height: 200px;
    }
    li{
      float: left;
      width: 24px;
      height: 24px;
      list-style: none;
      background-image: url("img/sprite.png");
      margin: 14px;
    }
  </style>
</head>
<body>
<div class="box">
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>

<script>
  var listOf = document.querySelectorAll('li');
  for (let i = 0; i < listOf.length; i++) {
    var index = i *44 ;
    listOf[i].style.backgroundPosition = '0 -'+index+ 'px';
  }
</script>
```

获取焦点和失去焦点

```js
  <script>
    var input = document.getElementById('input');
    /*获取焦点*/
    input.onfocus = function (){
      if(input.value == '手机'){
          input.value = ''
          input.style.color='black'
      }
    }
    input.onblur = function (){
      if(input.value==''){
          input.value= '手机'
          input.style.color= 'gray'
      }
    }

  </script>
```

排他思想 （点到谁谁响应）

```js
<script>
  /*为所有按钮绑定单机事件*/
  var buts = document.getElementsByTagName('button');
  for (let i = 0; i < buts.length; i++) {
    buts[i].onclick = function (){
      //点击的时候只能自己显示， 排他思想
      for (let j = 0; j < buts.length; j++) {
        console.log('1')
        buts[j].style.backgroundColor= '';
      }
      buts[i].style.backgroundColor = 'pink';
    }
  }
</script>
```

鼠标经过事件

```js
  <script>
        var nodeListOf = document.querySelector("tbody").querySelectorAll('tr');
        for (let i = 0; i < nodeListOf.length; i++) {
            //鼠标经过事件
            nodeListOf[i].onmouseover = function (){
                this.className = 'pass';
            }
            //鼠标离开事件
            nodeListOf[i].onmouseleave = function (){
                this.className=' '
            }
        }
    </script>
```

表单全选案例

```js
<script>
   //全选按钮 
    var father = document.getElementById('j_cbAll');
	//所有子按钮
	var input = document.getElementById('j_tb').querySelectorAll('input');
    //点击父的话就修改
	father.onclick = function (){
      for (let i = 0; i < input.length; i++) {
        input[i].checked = this.checked
      }
    }
    //为其他的input添加点击事件，只要有一个不选，其他的都不选
    for (let i = 0; i < input.length; i++) {
      input[i].onclick = function (){
          //每次点击都检查4个是否都选中了
        for (let j = 0; j < input.length; j++) {
          var flag = true;
          if(!input[j].checked){
            flag = false;
            father.checked = flag;
            break
          }
          father.checked = flag;
        }
          //都选中为true
      }
    }
  </script>
```

元素获取属性值

```js
<div id="demo" index = "1">
<script>
  var div = document.querySelector('#demo');
  //获取自身属性
  console.log(div.id)
  //获取自己自定义的属性
  console.log(div.getAttribute("index"))
  /*设置属性值*/
  div.id = "text"
  div.setAttribute("index",2)
  console.log(div.id)
  console.log(div.getAttribute("index"))
  /*移除自定义和原本属性值*/
  div.removeAttribute("index")
  div.removeAttribute("id")
</script>
```

tab栏切换

```js
<script>
    /*获取头部元素*/
    var tab_list = document.querySelector('.tab_list');
	//头部4个元素
    var liList = tab_list.querySelectorAll('li');
	//获取里面的值
	var tabItem = document.querySelector('.tab_con').querySelectorAll('div');
    console.log(tabItem)

    //点击绑定事件
    for (let i = 0; i < liList.length; i++) {
        /*设置属性值，记录元素下标*/
        liList[i].setAttribute("index", i);
        liList[i].onclick = function () {
            //排序他人，保留自己
            for (let j = 0; j < liList.length; j++) {
                liList[j].className = '';
            }
            liList[i].className = 'current'
            //其余的文字不显示，自己显示
            var index = liList[i].getAttribute("index");
            for (let j = 0; j < tabItem.length; j++) {
                tabItem[j].style.display = 'none';
            }
            tabItem[index].style.display = 'block'
        }
    }
</script>
```

html5获取新元素

```js
<script>
    var element = document.querySelector('.bb');
    console.log(element)
    /*自定义属性需要指定 get 一般规范是 自定义属性前面加data-  data-getTime*/
    element.getAttribute("getTime");
    element.setAttribute("data-index","航安");
    console.log(element.getAttribute("data-index"))
    /*html获取的新方法*/
    console.log("获取新元素"+element.dataset.index);
    console.log("获取新元素"+element.dataset['index']);
    console.log(element.dataset)
    /*如果有多个*/
    element.setAttribute("data-bb-aa","张三")
    /*可以这样检查 element.dataset属性名*/
    console.log(element.dataset.bbAa);
    console.log(element.dataset['bbAa'])
</script>
```

利用节点获取元素

节点至少拥有nodeType(节点类型)、nodeName(节点名称)和nodeValue(节点值)这三个基本属性。

元素节点nodeType为1
属性节点nodeType为2
文本节点nodeType为3（文本节点包含文字、空格、换行等）

![image-20221215143347486](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221215143347486.png)

```js
<script>
    var erweima = document.querySelector('.erweima');
    /*获取父节点*/
    console.log(erweima.parentNode);
    /*获取子节点*/
    var ul = document.querySelector('ul');
    /*获取所有的子节点，文本，元素节点*/
    console.log(ul.childNodes)
    /*获取ul下的子节点*/
    console.log(ul.children)
    /*获取第一个和最后一个元素 获取到所有的*/
    console.log(ul.firstChild);
    console.log(ul.lastChild)
    //获取元素的 但是有兼容性
    console.log(ul.firstElementChild)
    console.log(ul.lastElementChild)
    //开发常用
    console.log(ul.children[0])
    console.log(ul.children[ul.children.length-1])
</script>
```

下拉菜单

```js
<script>
  var liList = document.querySelector('.nav');
  console.log(liList)
  var children = liList.children;
  console.log(children)
  /*绑定鼠标经过事件*/
  for (let i = 0; i < children.length; i++) {
    /*经过显示*/
    children[i].onmouseover = function(){
      console.log('1')
      this.children[1].style.display = 'block';
    }
    children[i].onmouseout = function(){
      this.children[1].style.display = 'none'
    }
  }

</script>
```

兄弟节点操作

```js
<script>
  var div = document.querySelector('.bb');
  console.log(div)
  console.log(div.children)
  /*下个兄弟节点*/
  console.log(div.children[0].nextSibling)
  /*上一个兄弟节点*/
  console.log(div.children[1].previousSibling)

  /*直接获取元素*/
  console.log(div.children[0].nextElementSibling)
  console.log(div.children[1].previousElementSibling)
</script>
```

创建节点

```js
<script>
    /*1. 创建节点*/
    var li = document.createElement('li');
    /*添加节点*/
    var ul = document.querySelector('ul');
    /*最后添加*/
    ul.appendChild(li);
    /*前面添加*/
    var li2 = document.createElement('li');
    ul.insertBefore(li,ul.children[0]);
</script>
```

留言案例

```js
<script>
  var text = document.querySelector('.text');
  var but = document.querySelector('button');
  var ul = document.querySelector('ul');
  console.log(text,but,ul)
  but.onclick = function(){
    if(text.value==''){
      alert("不能为看懂多功能");
      return false;
    }else{
      //创建新元素
      var li = document.createElement('li');
      //指定元素位置
      li.innerText = text.value;
      /*ul.append(li);*/
      ul.insertBefore(li,ul.children[0]);
    }
  }
</script>
```

删除节点

```js
  <script>
    var but = document.querySelector('button');
    var ul = document.querySelector('ul');
    but.onclick = function (){
      if(ul.children.length==0){
        alert("已经删完了")
      }else{
        ul.removeChild(ul.children[0])
      }
    }
  </script>
```

删除留言案例

```js
<script>
  var text = document.querySelector('.text');
  var but = document.querySelector('button');
  var ul = document.querySelector('ul');
  console.log(text,but,ul)
  but.onclick = function(){
    if(text.value==''){
      alert("不能为看懂多功能");
      return false;
    }else{
      //创建新元素
      var li = document.createElement('li');
      //javaScript:; 是禁止跳转
      li.innerHTML = text.value+"  <a href='javaScript:;'>删除</a> ";
      /*ul.append(li);*/
      ul.insertBefore(li,ul.children[0]);
      /*为所有的链接绑定点击事件*/
      var aList = document.querySelectorAll('a');
        for (let i = 0; i < aList.length; i++) {
            aList[i].onclick = function (){
                ul.removeChild(this.parentNode)
            }
        }

    }
  }
</script>
```

拷贝结点

```js
<script>
  var ul = document.querySelector('ul');
  /*浅拷贝，只赋值标签，不复制里面的内容*/
  var lili = ul.children[0].cloneNode();
  console.log(lili)
  ul.append(lili)
  /*深拷贝，复制里面的内容*/
  var liliDeepCopy = ul.children[1].cloneNode(true);
  ul.append(liliDeepCopy)
</script>
```



创建元素比较

1. document.write是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
2. innerHTML是将内容写入某个DoM节点，不会导致页面全部重绘
3. innerHTML创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂

```js
    <script>
        
      var but = document.querySelector('button');
      but.onclick = function (){
      /*会导致文档重复，只保留234，其余全部清除*/
       document.write("<div>234</div>")
        /*拼接*/
        var element = document.querySelector('.inner');
        var create = document.querySelector(".create");
        var arr = document.querySelector('.arrayA');
        for(var i = 0; i < 100;i++){
            element.innerHTML += "<a href='#'>百度</a>"
        }
        /*创建元素添加*/
        for(var i = 0;i<100;i++){
            var bb = document.createElement("a");
            create.appendChild(bb)
        }
        /*数组进行过拼接*/
        var array = [];
        for(var i = 0; i < 100;i++){
            array.push("<a href='#'>百度</a>")
        }
        //转换为字符串
        var join = array.join('');
        arr.innerHTML = join;
    </script>
```

事件监听的两种方式

```js
  <script>
    var but = document.querySelectorAll('button');
    console.log(but)
    /*唯一性*/
    but[0].onclick  = function(){
      alert(1)
    }
    but[0].onclick = function(){
      alert("fjal1")
    }
    /*多样性， 相当于叠加 参数 1. 触发的事件  2.处理程序*/
    but[1].addEventListener('click', function(){
      alert("2")
    })

    but[1].addEventListener('click',function (){
      alert("3")
    })

    /*ie9以前的版本*/
    but[1].attachEvent('onclick',function (){
      alert("我是ie9之前的")
    })

  </script>
```

移除监听事件

```js
<script>
  var divs = document.querySelectorAll('div');
  divs[0].onclick = function (){
    alert("div");
    /*解除绑定*/
    divs[0].onclick = null;
  }
  divs[1].addEventListener('click',fn);
  function  fn() {
    alert("div[1]")
    /*移除监听事件*/
    divs[1].removeEventListener('click',fn)
  }
</script>
```

DOM事件流

每一个事件都有一个传播事件流，从捕获（绑定）的时候是上倒下，冒泡（显示）是从下到是哪个

![image-20221216092932301](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221216092932301.png)

```js
<script>
    var son = document.querySelector('.son');
    var father = document.querySelector('.father');
    /*捕获阶段  true  代表捕获阶段*/
    son.addEventListener('click', function(){
        alert("son")
    },true)
    father.addEventListener('click', function(){
        alert("father")
    },true)
    /*冒泡阶段*/
    father.addEventListener('click', function(){
        alert("father")
    },false)
    son.addEventListener('click', function(){
        alert("son")
    },false)

    document.addEventListener('click', function(){
        alert('document')
    },false)
</script>
```

事件对象

事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象
event,它有很多属性和方法.

```js
  <script>
        var buts = document.querySelectorAll('button');
        buts[0].onclick =function (event){
            console.log(event);
        }
        buts[1].addEventListener('click',function (event){
            console.log(event)
            /*ie678之前的写法*/
            console.log(window.event)
        })

    </script>
```

e.target和this的区别

```js
  <script>
    var div = document.querySelector('div');
    div.addEventListener('click',function(e){
      /*e.target 是点击的事件对像*/
      console.log(e.target)
      /*this是绑定的点击事件的对象*/
      console.log(this)
    })
    var ul = document.querySelector('ul');
    ul.addEventListener('click',function(e){
      console.log(e.target) /*点击Li  显示li*/
      console.log(this) /*ul*/
    })
    
  </script>
```

获取事件类型和阻止默认行为

```js
<script>
  var div = document.querySelector('div');
  div.addEventListener('click',function (e){
    /*点击的事件类型*/
    console.log(e.type)
  })

  div.addEventListener('mousemove',function (e){
    console.log(e.type)
  })
  /*阻止默认行为（跳转链接）*/
  var aList = document.querySelector('a');
  aList.addEventListener('click',function (e){
    /*第一种*/
    e.preventDefault();
    /*第二种*/
    /*return false;*/
  })
</script>
```

阻止冒泡

```js
<script>
  var son = document.querySelector('.son');
  var father = document.querySelector('.father');
  /*捕获阶段  true  代表捕获阶段*/
  /*冒泡阶段*/
  father.addEventListener('click', function(e){
    alert("father")

  },false)
  son.addEventListener('click', function(e){
    alert("son")
    /*阻止冒泡*/
    e.stopPropagation()
  },false)

  document.addEventListener('click', function(){
    alert('document')
  },false)
</script>
```

事件委托

不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。

```js
  <script>
    var ul = document.querySelector('ul');
    /*点击里面的li就ul就会触发，相当于是ul代理了li*/
    ul.onclick =function (ev){
      alert("哒哒")
    }

  </script>
```

禁止鼠标右键和选中文字

```js
  <script>
    var div = document.querySelector('div');
    /*不能打开右键*/
    div.addEventListener('contextmenu',function (e){
      //阻止默认行为
      e.preventDefault();
    })
    /*不能选中文字*/
    div.addEventListener('selectstart',function (e){
      e.preventDefault()
    })

  </script>
```

获取鼠标的坐标

```js
<script>
    document.onclick  = function (e){
      /*可视窗口的坐标*/
      console.log(e.clientX)
      console.log(e.clientY)

      /*整个页面的坐标*/
      console.log(e.pageX)
      console.log(e.pageY)
    }
  </script>
```

天使跟踪鼠标

```js
  <script>
    var img = document.querySelector('img');
    document.addEventListener('mousemove',function (e){
      console.log(e.pageX+" "+e.pageY);
      img.style.top = e.pageY-78+'px';
      img.style.left = e.pageX-58+'px';
    })
  </script>
```

按键事件

```js
  <script>
    /*事件按下的时候触发*/
    document.addEventListener('keydown',function (){
      console.log(1)
    })
    /*事件弹起的时候触发*/
    document.addEventListener('keyup',function (){
      console.log('2')
    })
    /*按下时触发，不识别功能键 ctr shift */
    document.addEventListener('keypress',function (){
      console.log('press')
    })
    /*执行顺序  keydown ->keypress ->keyup*/
  </script>
```

事件监听对象

```js
    <script>
        document.addEventListener('keydown',function (e){
            /*ASICC 码*/
            console.log(e.keyCode)
            /*字母*/
            console.log(e.key)
        })
    </script>
```

京东按钮案例

```js
  <script>
    var input = document.querySelector('input');
    document.addEventListener('keyup',function (e){
      if(e.key=='e'){
        /*获取焦点*/
        input.focus()
      }
    })
  </script>
```

# BOM

他是一个浏览器对象（DOM是可视界面），他可以跟浏览器直接进行交互，他的顶级对象是window，window包含了document对象，还有其他的属性比如  alert()之类的

页面加载事件

```js
    <!--可以把js放在任何地方-->
    <script>
       /*页面加载完毕后才进行绑定，传统方法只能绑定一次，而监听方法可以绑定多次*/
   /*     window.onload = function (){
           alert(11)
        }
        /!*多个执行最后一个*!/
        window.onload =function (){
            alert(111)
        }*/
        /*s*/
       window.addEventListener('load',function (){
           alert(22)
       })
       window.addEventListener('load',function (){
           alert(33)
       })
       /*document，DOM加载完毕后执行*/
       window.addEventListener('DOMContentLoaded',function (){
           alert("DOM")
       })
    </script>
```

窗口大小

```js
<script>
  window.addEventListener('load',function (){
    var div = document.querySelector('.aa');
    console.log(div)

    /*事件窗口大小监听事件*/
    window.addEventListener('resize',function (){
      /*获取浏览器宽度*/
      console.log(window.innerWidth)
      if(window.innerWidth<400){
        console.log('a')
        div.style.display = 'none';
      }else{
        console.log('b')
        div.style.display = 'block';
      }
    })

  })
</script>
```

定时器

```js
 <script>
    window.addEventListener('load',function (){
      /*3秒执行 毫秒为单位*/
      setTimeout(function (){
        console.log('爆赞l')
      },3000)
    })
    /*3秒执行*/
    setTimeout(callback,3000)
    function callback(){
      console.log('回调1')
    }
    /*不推荐*/
    var ti = setTimeout(callback(),3000);
  </script>
```

清除定时器

```js
  <script>
    var bit = document.querySelector('button');
    var time = setTimeout(function (){
      console.log('爆炸了')
    },5000)
    /*清除定时器*/
    bit.addEventListener('click',function (){
      clearTimeout(time)
    })

  </script>
```

每隔时间调用

```js
  <script>
    setTimeout(function (){
      console.log('只调用一次')
    },1000)
    setInterval(function (){
      console.log('继续调用')
    },1000)
  </script>
```

倒计时效果

```js
  <script>
    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var inputTime = +new Date('2019-5-1 18:00:00'); // 返回的是用户输入时间总的毫秒数
    /*防止首次调用时延迟*/
    countDown()
    setInterval(countDown,1000);
    function countDown() {
      var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
      var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数
      var h = parseInt(times / 60 / 60 % 24); //时
      h = h < 10 ? '0' + h : h;
      hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
      var m = parseInt(times / 60 % 60); // 分
      m = m < 10 ? '0' + m : m;
      minute.innerHTML = m;
      var s = parseInt(times % 60); // 当前的秒
      s = s < 10 ? '0' + s : s;
      second.innerHTML = s;
    }
  </script>
```

停止定时器

```js
  <script>
    var begin = document.querySelector('.begin');
    var stop = document.querySelector('.stop');
    var time = null;
    begin.addEventListener('click',function (){
      time = setInterval(function (){
        console.log('1')
      },1000)
    })
    /*停止定时器*/
    stop.addEventListener('click',function (){
      clearInterval(time)
    })
  </script>
```

this指向问题

```js
<script>
  /*默认时*/
  //window
  console.log("默认"+this)

  //window
  function s(){
    console.log("默认方法"+this)
  }
  window.s();
  //window
  setTimeout(function (){
    console.log("定时器"+this)
  },0)

  /*调用者*/
  var but = document.querySelector('.a');
  but.onclick  = function (){
    console.log("绑定对象"+this)
  }
  var bb = {
     SaiHaiL:function (){
       console.log("对象"+this)
     }
  }
  bb.SaiHaiL();

  /*构造方法*/
  function Fun(){
    console.log("构造方法"+this)
  }

  var fun = new Fun();
</script>
```

js同步和异步

js是同步机制的，但是因为某个方法执行过慢，而导致所有的资源没有得到结果，所以js提出了异步机制

同步: 从上往下执行，有阻塞等待

异步: 从上往下执行，有阻塞不等待，执行其他任务

> js先处理完主程序栈，然后再执行异步栈
>
> 回调函数是异步任务，每有一个回调就会放到异步进程处理器中，如果没有点击就不写入异步处理，如果点击了就写入异步处理，然后执行该函数，事件循环，主线程每次去找消息队列是否有任务执行，有就执行，没有不执行（事件循环）

![image-20221218093551148](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221218093551148.png)

localtion对象

获取url的可以设置页面的跳转

常用属性

![image-20221218094010860](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221218094010860.png)

常见方法

```
<script>
  var but = document.querySelector('button');
  but.onclick = function (){
    /*记录历史*/
    /*location.assign('list.html')*/

    /*刷新页面*/
/*    location.reload()*/
    /*不记录历史*/
    location.replace('list.html')
  }

</script>
```

navigato对象

获取浏览器本机的地址，通过他我们可以指定跳转的是移动端还是pc端

history对象

浏览器url的前进和后退

![image-20221218100455507](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20221218100455507.png)

```

```

offset属性

```js
<script>
  var div = document.querySelector('.bb');
  /*返回带有父级元素的定位，父没有定位，返回body*/
  console.log(div.offsetParent)
  /*离有定位父级顶部的距离*/
  console.log(div.offsetTop)
  /*离有定位父级左边的距离*/
  console.log(div.offsetLeft)
  /*返回自身高度，包括padding ,边框，内容的宽度*/
  console.log(div.offsetWidth)
  /*返回自身高度，包括padding ,边框，内容的宽度 不带单位*/
  console.log(div.offsetHeight)
</script>
```

offset和styled的区别

```js
<script>
  /*获取元素大小位置用offset 改属性用style*/
  var div = document.querySelector('.aa');
  /*包含padding border +wider*/
  console.log(div.offsetWidth);
  /*为空，只能获取行内样式,而且是带单位的， 只包含宽度*/
  console.log(div.style.width)
  /*只读不能赋值*/
  div.offsetWidth = 3000
  /*可以赋值*/
  div.style.width =3000 +'px'
</script>
```

