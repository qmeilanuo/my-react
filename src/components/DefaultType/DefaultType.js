import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import DefaultTypes from './DefaultTypes/DefaultTypes'

export default class DefaultType extends Component {
    render() {
        return (
            <div className='default-type'>
                <DetailHeader left='&lt;' right='...'>
                    默认值和类型检测
                </DetailHeader>
                <DefaultTypes data='这是测试传来的值的类型是否符合要求，不符合要求弹出一条警告'></DefaultTypes>
            </div>
        )
    }
}
