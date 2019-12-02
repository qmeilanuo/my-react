import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import Axios from 'axios'
import { connect } from 'react-redux'
import { collect_action, cancel_collect_action } from '../../Store/Store'


class Collect extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            currentIndex:1,

        }
    }
    componentDidMount(){
        Axios.get('/collect').then(res=>{
            this.setState({
                list:res.data.list
            })
            // console.log(this.state.list);
        })
    }
    goCollect=()=>{
        this.props.history.push({pathname:'/collectdetail'})
    }
    render() {
        // console.log(this.state.list);
        return (
            <div className='collect-page'>
                <DetailHeader left='&lt;' right='...'>
                        收藏，取消收藏
                </DetailHeader>
                {   
                    this.state.list.map((item,index)=>{
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
                            {   this.props.list.find((i)=>{return item.id===i.id})?
                                <div className="btns" onClick={()=>this.props.cancel_collect(item.id)}>取消收藏</div>:
                                <div className="btns" onClick={()=>this.props.collect(item)}>收藏</div>
                             }
                            </div>
                        )
                    })
                }
                <div className="goCollect" onClick={()=>{this.goCollect()}}>去收藏页</div>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return{
            list:state.list
        }
    },
    (dispatch)=>{
        return{
            collect(item){
                dispatch(collect_action(item))
            },
            cancel_collect(id){
                dispatch(cancel_collect_action(id))
            },
        }
    }
)(Collect)
