npm create-react-app ""

import react,{Conponent} from 'react'
创建函数式组件和类式组件 继承自Conponent
class Person extends Conponent{

}
函数直接书写
渲染组件
ReactDom.render(<zujian/>,document.querySelectorById("root"))

3.启动网页时，react会自动开启一个dev服务器，只需命令行输入npm start即可

4.通过jsx编译组件 书写jsx的html的时候用{书写js表达式}来书写js语句

5.组件的状态state中获取数据 将数据解析{name，age}=this.state出来 再写入标签中，子组件可通过回调函数的形式返回数据给父组件，然后更改state 从而更改数据（兄弟组件或是更复杂的数据通信需用到publish或是redux来进行）

8。事件绑定 
>采用jsx语法 有和原生事件一一对应的事件 写法为大写如 onClick={}，函数写在类中为onClick={this.function/箭头函数}（因为类式组件函数是写在类中作为实例的属性在用，所以事件触发时要写this进行调用），写在函数组件中则直接书写函数名



23.this.props.render()来对应vue的插槽技术