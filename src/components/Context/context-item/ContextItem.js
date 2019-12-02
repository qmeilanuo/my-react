import React, { Component } from 'react'
import ContextSon from './contextSon/contextSon'

export default class ContextItem extends Component {
    render() {
        return (
            <div>
                <div className="header-text">这是子组件位置</div>
                <div className="header-text" style={{color:'red',fontSize:20}}>{this.props.list}</div>
               <ContextSon></ContextSon>
            </div>
        )
    }
}

