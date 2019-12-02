import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DefaultTypes extends Component {
    constructor(){
        super()
        this.state={
            data:''
        }
    }
    static defaultProps={
        list:'这是测试没接收到父组件传来的值得默认值'
    }
    static propTypes={
        data:PropTypes.string
    }
    render() {
        return (
            <div>
                <div className="header-text">默认值：如果父组件没有传过来值。就需要用到这个功能。</div>
                <div className='default-text'>{this.props.list}</div>
                <hr/>
                <div className="header-text">类型检测：检测传来的值是不是符合自己定义的数据类型，如果不符合就弹出警告。需要引入‘prop-types’包，这是react的内置包，无需下载。</div>
                <div className="default-text">{this.props.data}</div>
            </div>
        )
    }
}

