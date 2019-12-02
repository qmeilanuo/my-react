import React, { Component } from 'react'
import Contexts from '../../utiles/Context2'

export default class contextSon extends Component {
    render() {
        return (
            <div>
               <div className="header-text">这是孙组件位置</div>
               <Contexts.Consumer>
                   {
                       (value)=>{
                           return (
                            <div className="header-text" style={{color:'red',fontSize:20}}>{value}</div>
                           )
                       }
                   }
               </Contexts.Consumer>
              <div className="header-text">这里是为了实现在非Redux的情况下的非父子传值。</div>
              <div className="header-text">一、创建一个变量为Context的createContext函数</div>
              <div className="header-text">二、创建一个Context.Provider的组件。里面需要包含要被传值的组件或组件中的组件。</div>
              <div className="header-text">三、在要接收被传值的组件创建一个Contexts.Consumer的组件。里面传一个箭头函数,参数为接收到的值。最后把要渲染的数据return出去。</div>

            </div>
        )
    }li
}
