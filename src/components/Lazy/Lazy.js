import React, { Component,Suspense} from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import ReactLoadable from 'react-loadable'
// import DetailHeader2 from './DetailLazy/DetailLazy'

const DetailLazy2=React.lazy(()=>import('./DetailLazy/DetailLazy'))


const DetailLazy=ReactLoadable(
    {
        loader:()=>import('./DetailLazy/DetailLazy'),
        loading:()=><div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    }
)

export default class Lazy extends Component {
    render() {
        return (
            <div className='loading-page'>
                <DetailHeader left='&lt;' rigth='...'>懒加载和lazy组件</DetailHeader>
                <DetailLazy></DetailLazy>
                <div className="header-text">
                    在懒加载函数中传入要懒加载的组件，loader为组件路径，loading为懒加载时显示的是什么。注意需引入'react-loadable'包
                </div>
                
                <Suspense fallback={<div className='loading'>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span></div>}>
                    <DetailLazy2></DetailLazy2>
                </Suspense>
                <div className="header-text">
                    用lazy写懒加载需在react库中结构出'Suspense,lazy'变量。用Suspense外部组件包裹需要懒加载的组件，Suspense属性上需要定义一个fallback属性，fallback写懒加载时显示什么。
                </div>
            </div>
        )
    }
}
