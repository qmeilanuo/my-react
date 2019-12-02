import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import Axios from 'axios'
import { connect } from 'react-redux'
import { cancel_attention_action, attention_action } from '../../Store/Store'

 class Attention extends Component {
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
                list:res.data.data
            })
            // console.log(this.state.list);
        })
    }
    goCollect=()=>{
        this.props.history.push({pathname:'/collectdetail'})
    }
    render() {
        return (
            <div>
                
                <DetailHeader left='&lt;' right='...'>
                        关注，取消关注
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
                                <div className="btns" onClick={()=>this.props.cancel_collect(item.id)}>取消关注</div>:
                                <div className="btns" onClick={()=>this.props.collect(item)}>关注</div>
                             }
                            </div>
                        )
                    })
                }
                 <div className="goCollect" onClick={()=>{this.goCollect()}}>去关注页</div>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return{
            list:state.data
        }
    },
    (dispatch)=>{
        return{
            collect(item){
                dispatch(attention_action(item))
            },
            cancel_collect(id){
                dispatch(cancel_attention_action(id))
            },
        }
    }
)(Attention)