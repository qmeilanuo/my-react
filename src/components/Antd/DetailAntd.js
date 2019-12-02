import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import {Button,Icon} from 'antd-mobile'


export default class DetailAntd extends Component {
    render() {
        return (
            <div>
                <DetailHeader left='&lt;' right='...'>
                        antd的使用
                </DetailHeader>
                
                <div className="header-text">这里只是简单举几个例子，更多情况请看antd的官网。里面有很多好的方案。组件的属性具体看各方案的API。</div>
                <div className="header-text">在这里我引的样式是antd的所有样式。如要提升运行速度，单独引入各方案的样式。</div>
                <div className="header-text" style={{color:'red',background:'#f90'}}>下边是button按钮的使用</div>
                <br/>
                <div style={{display:'flex',justifyContent:'space-around'}}>
               
                <Button type='primary' size='small'>按钮</Button>
                <Button shape='circle' size='small'>按钮</Button>
                <Button type='ghost' size='small'>按钮</Button>
                <Button type='warning' size='small'>按钮</Button>

            
                
                </div>
                <br/>
                <div className="header-text" style={{color:'red',background:'#f90'}}>下边是Icon图标的使用</div>
                <br/>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                
                <Icon type='check-circle' style={{color:'red',fontSize:35}}></Icon>
                <Icon type='cross-circle-o' style={{color:'red',fontSize:35}}></Icon>
                <Icon type='ellipsis' style={{color:'red',fontSize:35}}></Icon>
                <Icon type='down' style={{color:'red',fontSize:35}}></Icon>
                </div>
            </div>
           
        )
    }
}
