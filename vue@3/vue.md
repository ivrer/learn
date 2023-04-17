 创建最新的脚手架  npm init vue@latest /npm i -g vue-cli:安装命令行工具  然后vue create “”c创建脚手架

 通过import {create} from 'vue'            
 const app = createApp({                   
 el:'#root', //渲染到那个容器 
 })

 挂载应用  .mount
 app.mount('#root')

 
 3.启动网页时需要在当前目录下启动服务器需要下载serve库帮忙开启一个服务器或者自己使用npm run serve 自己打开浏览器

4.插值语法   {{里面书写js表达式（区别于语句if，函数，swich，）更多的是得到一个结果或是一个变量}}





5.数据存在{}中，数据绑定
从create（{}）中拿到数据，然后 v-bind和v-model来进行输入类标签的数据单向或是双向绑定(改变数据并进行数据传递)




6.object.defineProperty（object，ket，{
    ，
    ，
    ，
    get:函数返回值,
    set：函数返回值，

}） 属于vue的底层用到的原理，能够起到数据的可枚举，可读写，可删除性，以及数据劫持和数据代理

7.MVVM简要理解
>model代表数据层面 vm代表数据处理和虚拟dom处理  view代表页面展示或实际dom表现

8.事件绑定
  v-on:click简写@click="function" 可携带参数（parameter，$event）,只有event时可直接书写
  >事件修饰符，是vue为了更为简写代码的语句，
   >即event.stopPropgation=@click.stop 阻止事件冒泡
   >event.preventdefault=.prevent   阻止默认行为
   >event.              =.passive ：无需等待事件的回调函数执行，直接触发默认行为
                        =.once   ：事件只触发一次
                        =.capture : 使用事件的捕获模式
  >函数书写位置 在method：{}统一书写

  9.计算属性
  10.事件监听，
  11.绑定class
  12.渲染style
  
  13.条件渲染  v-if="n===1" 如果变量n===1 则渲染该节点，否则节点消失可以和v-eles-if搭配使用最后一个使用v-eles ； / v-show="true/false/n===1" 不同则节点display为hidden而不是删除


14.列表渲染

15.列表排序

16.vue数据监视原理以及添加数据方法vue.set(vm.studebt，"sexy",“男”)/同样也可作用于数组数据类型，和vue包装后的数据方法效果一致。set方法不能给vm或是vm的跟数据对象添加属性。

17.表单数据收集 通过input中value值双向绑定，没有value的需要自己书写 v-model有专有的修饰符。number 。lazy（失去焦点时收集数据。trim


18.vue提供的过滤器 filter：{

}使用在插值中或是v-bind：属性="xxx|过滤器名",实例中为局部作用，可以写全局filter 用vue.filter('name',function(){}) 


总结vue提供的指令（v-text v-html v-cloak v-once v-pre）
自定义指令 directives：{
  big（）{

  }
}//函数接受两个参数为一个为该元素的dom元素即该元素，一个


19.插件
 {
  定义插件 {
    install(Vue){
       
    }
  } :将方法定义在vue上从而vue,vm在组件中都可以直接使用
  应用插件 vue.use()  
 }

 20.style scoped 属于vue的样式应用范围相当于自定义属性表示该样式只应用局部

 21.自定义事件 v-on:key='fnc' $on $emit

 22.代理

 23.插槽手法   
 >默认插槽：组件外书写标签 ，组件内书写<slot></slot>接受
 >具名插槽：组件外写标签，标签内书写slot属性与组件内书写的name的值一致表示一一对应 
 也可写在<template v-slot:value>这里没有双引号
 >作用域插槽：  来解决数据不在同一组件中的问题
 如组件中先绑定数据，在应用的父组件中用<template scope="value"/slot-scope=“”>包裹的template用scope中的值来接收，以此达到传递数据




 ##vue实现动画效果
 需要transiton标签和name属性来表示要变化的标签类名
<transition name='sort'>
 <div class='sort'

 >.sort{
  //进入的开始状态
  .sort-enter{
    height：0px;
    //改变形状
    transform:rotate()//旋转;
  }
  //过渡动画结束时的状态
  .sort-enter-to{
    height:460px;
  }
  //定义动画时间，速率
  .sort-enter-active{
    transition: all .5s linear
  }
 }