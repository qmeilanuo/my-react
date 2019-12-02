import React, { Component } from 'react'
import DetailHeader from './DetailHeader/DetailHeader'


export default class Header extends Component {
    render() {
        return (
            <div className='header-page'>
                    <div className="header-text">头部文件，可以自定义传入组件</div>
                    <hr/>
                    <div className="header-text">传入自定义组件left，right</div>
                    <DetailHeader left='&lt;' right='...'>
                        头部文件
                    </DetailHeader>
                    <div className="header-text">只传入组件内部文件，以this.props.children接收</div>
                    <DetailHeader>
                        我是传入头部文件
                    </DetailHeader>
                    <div className="header-text">传入left自定义属性，组件内部已写入返回上一页功能</div>
                    <DetailHeader left='&lt;'>
                        我是传入头部文件
                    </DetailHeader>
                    <div className="header-text">传入right自定义属性，可以自定义功能</div>
                    <DetailHeader right='...'>
                        我是传入头部文件
                    </DetailHeader>
                    <div className="header-text">传入active自定义属性，为true底白字蓝，为false底蓝字白</div>
                    <DetailHeader right='...' active={true}>
                        我是传入头部文件
                    </DetailHeader>
            </div>
        )
    }
}
