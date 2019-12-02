import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'

export default class Ref extends Component {
    constructor(){
        super()
        this.state={
            data:'',
            data2:''
        }
        this.myRef=React.createRef()
    }
    componentDidMount(){
        // console.log(this.myRef.current);
        
        this.setState({
            data:this.refs.rs.innerHTML,
            data2:this.myRef.current.innerHTML
        })
    }
    render() {
        return (
            <div className='ref-page'>
                <DetailHeader left='&lt;' right='...'>
                       ref获取Dom元素
                </DetailHeader>
                <div ref='rs' className='header-text' style={{color:'red'}}>我是rs代表的标签的内容</div>
                <div className='header-text'>这里显示获取到rs标签-->{this.state.data}</div>
                <div className="header-text" ref={this.myRef}  style={{color:'red'}}>我是函数式获取Dom</div>
                <div className="header-text">这里显示从函数式中获取的Dom值-->{this.state.data2}</div>
                <div className="header-text">注意：ref直接用refs获取ref的值就可以获取到这个DOM元素</div>
                <div className="header-text">注意：函数式需要定义一个全局变量接收React.createRef创建的函数。把这个全局变量写在ref的值里。
                            调用的时候直接调用这个变量的current属性。</div>
            </div>
        )
    }
}
