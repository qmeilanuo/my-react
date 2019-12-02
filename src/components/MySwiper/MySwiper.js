import React, { Component } from 'react'
import Swiper from 'swiper'
import Axios from 'axios'
import DetailHeader from '../Header/DetailHeader/DetailHeader'

export default class MYSwiper extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidUpdate(){
        new Swiper ('.swiper-container', {
            //开启垂直轮播
            // direction: 'vertical',
            //开启自动轮播，delay是间隔时长
            autoplay:{
                delay:1000
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
    }
    componentDidMount(){
       Axios.get('/swiper').then(res=>{
           this.setState({
               list:res.data.list
           })
       })
    }
    render() {
        return (
            <div>
                <DetailHeader left='&lt;' right='...'>轮播图组件</DetailHeader>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.state.list.map((item,index)=>{
                            return(
                                <div className="swiper-slide" key={index}><img src={item.src} alt=""/></div>
                            )
                        })}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="header-text">
                    这是轮播组件。
                    <br/>
                    注意事项：引入轮播脚手架前首先引入swiper的CSS样式，如果引入的是外部数据-->实例化Swiper时要放到componentDidUpdata生命周期函数中
                </div>
            </div>
        )
    }
}
