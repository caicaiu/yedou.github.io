---
title: ES6
tags: ES6
categories: 前端
cover: 'https://tva1.sinaimg.cn/large/0072Vf1pgy1foxkikik3zj31kw0w0tz7.jpg'
abbrlink: d73c0d37
date: 2022-12-28 07:42:39
---

# ES5

为什么使用:ES6 加入许多新的语法特性，编程实现更简单、高效

## let关键字

```js
 <script>
        /*let关键字特性*/
        //不允许重复声明
        //let b = 1;
        let b = 3;
        console.log(b)

        //2. 块级作用域
        function fn(){
            let a = "张三";
        }
        /*console.log(a)*/
        // 不存在变量提升 （先使用，后声明)
        /*console.log(c);*/
        let c = "100";
        //3. 不影响作用域链 当前找不到，网上找
        let d = "100";
        function fnc(){
            console.log(d)
        }
        fnc()
    </script>
```

## const关键字

```js
  <script>
    //1.声明必须初始化
    const cc  = "100";
    console.log(cc)
    //2. 标识符一般为大写
    const XIXI = "XIXI";

    //3.不允许重复声明
    const b  = "张三"
    // const b = "lisi"
    //4. 值不允许修改
    // b = "李四"

    //5. 块儿级作用域
    function fn(){
      const dd = "张三"
    }
    // console.log(dd)

    //对象属性修改和数组元素变化不会出发 const 错误
    const dd = ["张三","李四","王五"]
    dd.push("赵六")
    console.log(dd)
  </script>
```

## 结构

```js
  <script>
    let c = ['张三','李四','赵六']
    let [zhangsan,lisi,zhoaliu] = c;
    console.log(zhangsan,lisi,zhoaliu);
    // 对象结构
    let d = {
      name: "张三",
      age:15,
      move: function (){
        console.log('移动中')
      }
    }
    /*名字要一样*/
    let {name,age} = d;
    console.log(name,age)
  </script>
```

## 模板字符串

```js
 <script>
    //普通的换行要加好
    let cc = "<ul></ul>"
    //不用+ 换行
    let dd = `<ul>
                <li></li>
                <li></li>
                <li></li>
               </ul>`
    // 里面赋值变量
    let ff = "张三"
    console.log(`${ff}是李四老婆`)
  </script>
```

## 简化对象写法

```js
<script>
    let name = "张三"
    let age =29;
    let c = {
      /*正常写法 name:name*/
    //  简化写法
      name,
      age,
    //  方法简化
      moves(){
        console.log("移动中")
      }
    }
    console.log(c.name)
    console.log(c.moves())
  </script>
```

## 箭头函数

```js
<script>
  //1) 如果形参只有一个，则小括号可以省略
  let bb = c =>{
    console.log(c)
  }
  bb(100)
  // 2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的
  let cc =  c =>  c+100;
  let dd = cc(100);
  console.log(dd)

  // 3) 箭头函数 this 指向声明时所在作用域下 this 的值
  let ff = b => {
    /*Window 而不是调用者，相当于是上一层的*/
    console.log(this)
  };
  ff()
  // 4) 箭头函数不能作为构造函数实例化
  let ee = function (){
    name,
    age
  }
  // let eee = new ee();
  // 5) 不能使用 arguments
  let gg = ()=>{
    console.log(arguments)
  }
  // gg(1,2,3,4,5)
  //箭头函数不会更改 this 指向，用来指定回调函数会非常合适
</script>
```

## rest参数

```js
 <script>
     //参数必须放在最后一个
    let cc = function (...args){
      console.log(args)
    }
    cc(1,2,3,4,5)
  </script>
```

## spread 扩展运算符

```js
  <script>
    let bb = ["张三","lisi","王五"]
    let cc = function (...args){
      console.log(args);
    }
    let tt = function (cc){
      console.log(cc)
    }
    //摊开
    cc(...bb);

    let ff = {
      name: "张三",
      age:"李四"
    }
    /*摊开赋值，不能应用到方法上*/
   let gg = {...ff}
    console.log(gg)
  </script>
```

# ES6

## 引入和暴露

暴露

```
export const school  = "学校";
export function xixi(){
    console.log('笑一下')
}
```

引入

```js
<script type="module">
        /*正常引入*/
        import * as m1 from "./js/m1.js";
        console.log(m1)
    </script>
```

暴露的三种方式

```
分别暴露
export const school  = "学校";
export function xixi(){
    console.log('笑一下')
}
对象暴露
const school = "李四"
function xixi(){
    console.log('嘻嘻')
}
/*对象暴露*/
export {
    school,
    xixi
}
/*默认暴露*/
const school = "学校"
function xixi(){
    console.log('你拿')
}
/*默认暴露为对象*/
export default {
    school,
    xixi
}


```

引入的三种方式

```js
    <script type="module">
        /*别名引入*/
        import * as m1 from "./js/m1.js";
        /*结构引入*/
        import {school,xixi as xiaoxiao} from "./js/m2.js"
        /*默认的引入方式*/
        import m3 from "./js/m3.js"
        console.log(school)
        xiaoxiao()
        console.log(m3)
    </script>
```

# ES8

# async和await是什么

async是异步的意思，用来声明一个函数是异步的。
await是等待的意思，用来等待某个动作的完成。

注：
(1) await不是用来调用async函数的，async函数的调用与普通函数调用没有区别。
(2)await只能写在async函数中

## async起什么作用

(1)我们来看一段代码

```js
async function fun1() {
    return "hello";
}
let result1 = fun1();        
console.log(result1);       //Promise {'hello'}

```


返回了一个Promise对象。 可以看作是 new Promise(resolve => resolve(x)) 的简写

(2)我们再看一段代码

```js
async function fun2() {
    
}
let result2 = fun2();       
console.log(result2);       //Promise {undefined}
```

async函数的执行返回一个Promise对象，其他的与普通函数没有什么差别。

## await起什么作用

一般来说，都认为 await 是在等待一个 async 函数完成。不过按语法说明，**await 等待的是一个表达式**，这个表达式的计算结果是 Promise 对象或者其它值（换句话说，就是没有特殊限定）。

因为 async 函数返回一个 Promise 对象，**所以 await 可以用于等待一个 async 函数的返回值—**—这也可以说是 await 在等 async 函数，但要清楚，它等的实际是一个返回值。注意到 await 不仅仅用于等 Promise 对象，它可以等任意表达式的结果，所以，await 后面实际是可以接普通函数调用或者直接量的。

```js
function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

test();		//something  hello  async
```

## await等待到了值然后呢

await 等到了它要等的东西，一个 Promise 对象，或者其它值，然后呢？我不得不先说，await 是个运算符，用于组成表达式，await 表达式的运算结果取决于它等的东西。

如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。并且阻塞await后面的代码，先执行async外的同步代码(在这之前先看看await中函数的同步代码，先把同步代码执行完)，等待同步代码执行完之后，再回到async内部继续执行。

如果它等到的是一个 Promise 对象，await 就忙起来了，await会阻塞下面代码(当前async代码块的代码)，会先执行async外的同步代码(在这之前先看看await中函数的同步代码，先把同步代码执行完)，等待同步代码执行完之后，再回到async内部等promise状态达到fulfill的时候再继续执行下面的代码。等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。

看个例子

```js
async function fun1() {
    console.log("It is fun1")
    let value1 = await fun2();
    let value2 = await fun3();
    console.log(value1,value2);
}
function fun2() {
    return "hello";
}
function fun3() {
    return Promise.resolve("guguji");
}
fun1();
console.log("outer1");
console.log("outer2");
console.log("outer3");
console.log("outer4");
console.log("outer5");
//It is fun1
//outer1
//outer2
//outer3
//outer4
//outer5
//hello guguji
```

## 总结

async是声明为一个异步的函数（异步(回调函数)封装到一个事件处理器中，等到时间后，进入任务队列，然后执行，与此同时，同步代码在运行着，两者互不干扰），返回是一个promise，await是跟async一起的，等待async的返回结果。
