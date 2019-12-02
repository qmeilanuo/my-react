import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import {connect} from 'react-redux'
import { savemock_shopping_action, add_shopping_action } from '../../Store/Store'
import {Link} from 'react-router-dom'
import {Toast} from 'antd-mobile'

class Shopping extends Component {
    componentDidMount(){
        this.props.save_shopping()
    }
    render() {
        // console.log(this.props.list);
        let list=this.props.list.list
        return (
            <div className='shopping-page'>
                <DetailHeader left='&lt;' right='...'>
                        购物车组件
                </DetailHeader>
                {
                    list.map((item)=>{
                        return (
                            <div className="shopping-list" key={item.id}>
                                <div className="shopping-pic">
                                    <img src={item.src} alt=""/>
                                </div>
                                <div className="shopping-text">
                                    <div className='names'>{item.name}</div>
                                    <div>{item.text}</div>
                                    <div style={{color:'#f90'}}>￥{item.price}元</div>
                                </div>
                                <div className="btn" onClick={()=>{this.props.savecart(item);Toast.success('加入购物车成功！',.8)}}>
                                    加入购物车
                                </div>
                            </div>
                        )
                    })
                }
                <Link className="goshopping" to='/cart'>到购物车页面</Link>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            list:state.shop
        }
    },
    (dispatch)=>{
        return {
            save_shopping(){
                dispatch(savemock_shopping_action())
            },
            savecart(item){
                dispatch(add_shopping_action(item))
            }
        }
    }
)(Shopping)