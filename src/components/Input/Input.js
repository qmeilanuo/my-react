import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'

export default class Input extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
    saveUsername=(e)=>{
        // console.log(e.target.value);
        
        this.setState({
            username:e.target.value
        })
    }
    savePassword=(e)=>{
        // console.log(e.target.value);
        
        this.setState({
            password:e.target.value
        })
    }
    render() {
        return (
            <div>
                 <DetailHeader left='&lt;' right='...'>
                        受控组件
                </DetailHeader>
                <div className="header-text">受控组件就是把表单元素实现双向绑定</div>
                <div className="ipt"><input type="text" placeholder='输入姓名' value={this.state.username} onChange={(e)=>this.saveUsername(e)}/></div>
                <div className="ipt"><input type="text" placeholder='输入密码' value={this.state.password} onChange={(e)=>this.savePassword(e)}/></div>
                <div className="header-text">用户名：{this.state.username}</div>
                <div className="header-text">密码：{this.state.password}</div>
            </div>
        )
    }
}
