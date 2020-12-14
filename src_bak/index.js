import React from "react";
import ReactDOM from "react-dom";
import "./01props.css";

//1.-------------------------在父元素中使用state去控制子元素props的从而达到父元素数据传递给子元素-------------------------

// class ParentCom extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActive: true,
//     };
//     this.changeShow = this.changeShow.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.changeShow}>控制子元素显示</button>
//         <ChildCom isActive={this.state.isActive} />
//       </div>
//     );
//   }

//   changeShow() {
//     this.setState({
//       isActive: !this.state.isActive,
//     });
//   }
// }

// class ChildCom extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let strClass = null;
//     if (this.props.isActive) {
//       strClass = " active";
//     } else {
//       strClass = "";
//     }
//     strClass = this.props.isActive ? " active" : "";

//     return (
//       <div className={"content" + strClass}>
//         <h1>我是子元素</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ParentCom />, document.querySelector("#root"));

//2.-------------------------子传父-------------------------

// class ParentCom extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       childData: null,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>子元素传递给父元素的数据：{this.state.childData}</h1>
//         <ChildCom setChildData={this.setChildData} />
//       </div>
//     );
//   }

//   setChildData = (data) => {
//     this.setState({
//       childData: data,
//     });
//   };
// }
// class ChildCom extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: "helloworld",
//     };
//   }
//   render() {
//     return (
//       <div>
//
//         <button onClick={this.sendData}>传递helloworld给父元素</button>
//
//         <button
//           onClick={() => {
//             this.props.setChildData("直接调用props的函数");
//           }}
//         >
//           传递helloworld给父元素
//         </button>
//
//       </div>
//     );
//   }
//   sendData = () => {
//     //console.log(this.state.msg)
//     //将子元素传递给到父元素，实际就是调用父元素传递进来的父元素函数
//     this.props.setChildData(this.state.msg);
//   };
// }

// ReactDOM.render(<ParentCom />, document.querySelector("#root"));

//3.-------------------------事件-------------------------

// class ParentCom extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <form action="http://www.baidu.com">
//           <div className="child">
//             <h1>helloworld</h1>
//             <button onClick={this.parentEvent}>提交</button>
//           </div>
//         </form>

//         {/* 使用ES6箭头函数传递多个参数 */}
//         <button
//           onClick={(e) => {
//             this.parentEvent1("msg:helloworld", e);
//           }}
//         >
//           提交
//         </button>
//         {/* //不使用ES6箭头函数传递多个参数的方式 */}
//         <button
//           onClick={function (e) {
//             this.parentEvent1("不使用es6,msg:helloworld", e);
//           }.bind(this)}
//         >
//           提交
//         </button>
//       </div>
//     );
//   }
//   parentEvent = (e) => {
//     console.log(e.preventDefault);
//     e.preventDefault();
//     //e.preventDefault()
//     //return false;
//   };
//   parentEvent1 = (msg, e) => {
//     console.log(msg);
//     console.log(e);
//   };
// }

// ReactDOM.render(<ParentCom></ParentCom>, document.querySelector("#root"));

//4.-------------------------条件渲染-------------------------
