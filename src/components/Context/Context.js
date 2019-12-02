import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import Contexts from './utiles/Context2'
import ContextItem from './context-item/ContextItem'

export default class Context extends Component {
    constructor(){
        super()
        this.state={
            list:'这是Context组件的数据'
        }
    }
    render() {
        return (
            <div className='context-page'>
                <DetailHeader left='&lt;' right='...'>
                        跨组件传值
                </DetailHeader>
                <div className="header-text">这是根组件位置</div>
                <div className="header-text" style={{color:'red',fontSize:20}}>{this.state.list}</div>
               <Contexts.Provider value={this.state.list}>
                    <ContextItem list='这是自定义属性传值'></ContextItem>
               </Contexts.Provider>
            </div>
        )
    }
}
