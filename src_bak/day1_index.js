import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "./04style.css";
import App from "./App";
import { Divider } from "antd";
import "./Tab.css";

console.log("HELLOWORLD");

//1.----------------------------JSX的语法---------------------------

// let app = <App />;
// let root = document.getElementById("root");

// //元素 是 组件的最小单位
// let h1 = (
//   <h1>
//     hello potaxie<span>这是副标题</span>
//   </h1>
// );

// ReactDOM.render(app, root);

//2.----------------------------实现页面时钟的显示---------------------------

// function clock() {
//   let time = new Date().toLocaleTimeString();
//   let element = (
//     <div>
//       <h1>现在的时间是{time}</h1>
//     </div>
//   );

//   //渲染,到根节点
//   let root = document.querySelector("#root");
//   ReactDOM.render(element, root);
// }

// clock();

// setInterval(clock, 1000);

//3.----------------------------react函数式组件----------------------------

// function Clock(props) {
//   return (
//     <div>
//       <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
//       <h2>函数式组件开发</h2>
//     </div>
//   );
// }

// function run() {
//   ReactDOM.render(
//     //这是一个对象
//     <Clock date={new Date()} />,
//     document.querySelector("#root")
//   );
// }

// setInterval(run, 1000);

//4.----------------------------react styletag样式----------------------------

// let exampleStyle = {
//   background: "skyblue",
//   borderBottom: "5px solid red",
// };

// let element = (
//   <div>
//     <h1 style="height:200px;" style={exampleStyle}>
//       helloworld
//     </h1>
//   </div>
// );

// let classStr = ["abc2", "redBg2"].join(" ");

// console.log(classStr);
// let element2 = (
//   <div>
//     {/*这里写注释*/}
//     <h1 className={classStr}>helloworld</h1>
//   </div>
// );

// ReactDOM.render(element2, document.querySelector("#root"));

//5.----------------------------react 组件----------------------------

// 函数组件

// function Childcom(props) {
//   let title = <h2>我是副标题</h2>;

//   let wheather = props.wheather;

//   //条件判断
//   let isGo = wheather == "下雨" ? "不出门" : "出门";
//   return (
//     <div>
//       <h1> 函数式组件helloworld</h1>
//       {title}
//       <div>
//         是否出门?
//         <span>{isGo}</span>
//       </div>
//     </div>
//   );
// }

// //类组件

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>类组件定义helloworld</h1>
//         <h1>hello:{this.props.name}</h1>

//         {/*嵌套组件*/}
//         <Childcom weather={this.props.weather} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Childcom wheather="出太阳" />,
//   document.querySelector("#root")
// );

// ReactDOM.render(
//   <HelloWorld name="potaxie" weather="下雨" />,
//   document.querySelector("#root")
// );

//6.----------------------------react 状态----------------------------

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     //状态（数据） --》 view
//     //构造函数初始化数据，将需要改变的数据初始化到state中
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//     };
//     console.log(this.state.time);
//   }

//   render() {
//     console.log("这是渲染函数");
//     // this.state.time = new Date().toLocaleTimeString();

//     return (
//       <div>
//         <h1>当前时间：{this.state.time}</h1>
//       </div>
//     );
//   }

//   //生命周期函数,组件渲染完成时的函数
//   componentDidMount() {
//     setInterval(() => {
//       console.log(this.state.time);
//       //错误的方式
//       // this.state.time = new Date().toLocaleTimeString();
//       //ReactDOM.render(<Clock />, document.querySelector("#root"));

//       //切勿直接修改state数据
//       //直接state重新渲染内容，需要使用setState
//       //这个函数内容所有设置状态改变后，统一对比虚拟DOM对象，然后在统一修改，提升性能
//       //小程序也是借鉴这一点
//       this.setState({
//         time: new Date().toLocaleTimeString(),
//       });
//     }, 1000);
//     console.log(this.state.time);
//   }
// }

// ReactDOM.render(<Clock />, document.querySelector("#root"));

// setInterval(() => {
//   ReactDOM.render(<Clock />, document.querySelector("#root"));
// }, 1000);

//----------------------------Tab切换显示----------------------------
class Tab extends React.Component {
  constructor(props) {
    super(props);

    //设置状态、数据
    this.state = {
      c1: "content active",
      c2: "content",
    };

    //事件，是都需要绑定的
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    console.log("clickEvent");
    console.log(e.target.dataset.index);
    let index = e.target.dataset.index;
    console.log(this);
    console.log("index:" + index);

    if (index == "1") {
      this.setState({
        c1: "content active",
      });
      this.setState({
        c2: "content",
      });
    } else {
      this.setState({
        c1: "content",
        c2: "content active",
      });
    }
  }

  render() {
    return (
      <div>
        <button data-index="1" onClick={this.clickEvent}>
          内容一
        </button>
        <button data-index="2" onClick={this.clickEvent}>
          内容二
        </button>
        <div className={this.state.c1}>
          <h1>内容1</h1>
        </div>
        <div className={this.state.c2}>
          <h1>内容2</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Tab />, document.querySelector("#root"));
