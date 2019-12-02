import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailHeader from '../Header/DetailHeader/DetailHeader';
import { add_count_action, dianji_action, dianall_action } from '../../Store/Store';


class Cart extends Component {
    render() {
        let data = this.props.list.data
        // console.log(this.props.list.data);
        // console.log(this.props.flag);
        let count=0
        let price=0
        data.forEach(item=>{
            if(item.flag){
                count+=item.count;
                price+=item.count*item.price
            }
        })
        return (
            <div className='cart-page'>
                 <DetailHeader left='&lt;' right='...'>
                        购物车页面
                </DetailHeader>
                {
                    data.map((item, index) => {
                        return (
                            <div className='cart-page'  key={item.id}>
                                <div className="shopping-list">
                                    <div className={`all ${item.flag?'active':''}`} onClick={()=>this.props.dianji(item.id)}>√</div>
                                    <div className="shopping-pic">
                                        <img src={item.src} alt="" />
                                    </div>
                                    <div className="shopping-text">
                                        <div className='names'>{item.name}</div>
                                        <div>{item.text}</div>
                                        <div style={{ color: '#f90' }}>￥{item.price}元</div>
                                    </div>
                                    <div className="btn">
                                        <span onClick={()=>this.props.add_count({num:-1,id:item.id})}>-</span>
                                        <span>{item.count}</span>
                                        <span onClick={()=>this.props.add_count({num:1,id:item.id})}>+</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='cart-bottom'>
                    <div className={`all ${this.props.flag?'active':''}`} onClick={()=>this.props.dianall()}>√</div>
                    <div className="cart-bottom-text">
                        <span>总数：{count}个</span>
                        <span>总价：{price}元</span>
                    </div>
                </div>
                <div onClick={()=>this.props.history.go(-1)} style={{width:340,height:30,textAlign:'center',background:'#f90',paddingTop:20,marginLeft:15}}>返回上一页</div>
            </div>

        )
    }
}
export default connect(
    (state) => {
        return {
            list: state.shop,
            flag:state.shop.flag
        }
    },
    (dispatch) => {
        return {
            add_count(sum){
                dispatch(add_count_action(sum))
            },
            dianji(id){
                dispatch(dianji_action(id))
            },
            dianall(){
                dispatch(dianall_action())
            }
        }
    }
)(Cart)