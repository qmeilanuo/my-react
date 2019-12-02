import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import { connect } from 'react-redux'

class CollectDetail extends Component {
    render() {
        let list=this.props.list
        let data=this.props.data
        return (
            <div className='CollectDetail'>
                <DetailHeader left='&lt;' right='...'>
                        收藏，关注页面
                </DetailHeader>
                <div className="header-text" style={{fontSize:16,color:'red'}}>下边是收藏的数据</div>
                {   this.props.list.length?
                    list.map((item,index)=>{
                        return (
                            <div className="collect-text" key={index}>
                            <div className="pic">
                                   <img src={item.src} alt=""/>
                            </div>
                            <div className="text">
                               <div>书名：{item.title}</div>
                               <div>￥：{item.price}</div>
                               <div>库存：{item.num}万册</div>
                            </div>
                            
                            </div>
                        )
                    }):
                    <div className="header-text" style={{fontSize:20,color:'#f90'}}>还没有收藏数据！</div>
                }
                <hr/>
                <div className="header-text" style={{fontSize:16,color:'red'}}>下边是关注的数据</div>
                {   this.props.data.length?
                    data.map((item,index)=>{
                        return (
                            <div className="collect-text" key={index}>
                            <div className="pic">
                                   <img src={item.src} alt=""/>
                            </div>
                            <div className="text">
                               <div>书名：{item.title}</div>
                               <div>￥：{item.price}</div>
                               <div>库存：{item.num}万册</div>
                            </div>
                            
                            </div>
                        )
                    }):
                    <div className="header-text" style={{fontSize:20,color:'#f90'}}>还没有关注数据！</div>
                }
                <div className="goCollect" onClick={()=>{this.props.history.go(-1)}}>返回上一页</div>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return{
            list:state.list,
            data:state.data
        }
    },
    (dispatch)=>{
        return{

        }
    }
)(CollectDetail)
