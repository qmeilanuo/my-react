import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
               <div className="home-title">react综合案例</div>
               <div className="header">
                    <div className="detailList" onClick={()=>this.props.history.push('/header')}>自定义头部组件案例<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/swiper')}>swiper组件封装<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/pull')}>上拉加载，下拉刷新<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/lazy')}>懒加载，lazy<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/default-type')}>默认值与数据验证<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/ref')}>ref获取Dom<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/context')}>跨组件传值<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/withrouter')}>路由高阶组件<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/match')}>动态路由<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/table')}>Table组件<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/tab-bar')}>TabBar组件<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/input')}>受控组件<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/collect')}>收藏，取消收藏<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/attention')}>关注，取消关注<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/collectdetail')}>收藏和关注页面<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/shopping')}>购物车<span>&gt;</span></div>
                    <div className="detailList" onClick={()=>this.props.history.push('/detailantd')}>antd使用<span>&gt;</span></div>
                    
               </div>
            </div>
        )
    }
}
