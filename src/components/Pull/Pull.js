import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import Axios from 'axios'
import BScroll from 'better-scroll'

export default class Pull extends Component {
    constructor(){
        super()
        this.state={
            //定义默认数据，和默认页数
            list:[],
            currIndex:1
        }
    }
    componentDidMount(){
        //初始刷新页面请求数据
        Axios.post('/pull-list',{count:20,page:1}).then(res=>{
            this.setState({
                list:res.data.list
            })
        })
        //实例化BScroll
        let bs=new BScroll('.pull-header',{
            pullDownRefresh:true,//开启下拉刷新功能
            pullUpLoad:true,//开启上拉加载功能
            bounceTime:800
        })
        bs.on('pullingUp',()=>{//注册事件pullingUp，用于操作上拉加载的数据
            // console.log(1);
            this.setState({//先改变传入的参数
                currIndex:this.state.currIndex+1
            },()=>{
                 Axios.post('/pull-list',{count:20,page:this.state.currIndex}).then(res=>{//因this.setState是异步，所以在回调请求数据
                this.setState({
                    list:[...this.state.list,...res.data.list]//新数据和旧数据合并。...是扩展数据
                },()=>{
                    // console.log(this.state.list);
                    bs.finishPullUp()//处理只刷新一次的问题
                    bs.refresh()//处理页面不刷新的问题
                })
            })
            })
           
            
        })
        bs.on('pullingDown',()=>{
            // console.log(2);
            
            this.setState({
                currIndex:this.state.currIndex+1
            },()=>{
                Axios.post('/pull-list',{count:20,page:this.state.currIndex}).then(res=>{
                    this.setState({
                        list:res.data.list
                    },()=>{
                        // console.log(this.state.list);
                        bs.finishPullDown()
                        bs.refresh()
                    })
                   
                    
                })
            })
           
        })
    }
    render() {
        return (
            <div className='pull-page'>
                <div className="pull-nav">
                    <DetailHeader left='&lt;' right='...'>
                        上拉加载--下拉刷新组件
                    </DetailHeader>
                </div>
                <div className="pull-header">
                    <div className="pull-header-text">
                        <div className="pull-top">下拉刷新...</div>
                        <div className="pull-bottom">上拉加载...</div>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <div className="pull-list" key={index}>
                                        <div className="pull-img">
                                                <img src={item.src} alt=""/>
                                        </div>
                                        <div className="pull-text">
                                            <div>{item.title}</div>
                                            <div>{item.id}&nbsp;{item.name}</div>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
                <div className="pull-footer">底部数据</div>
            </div>
        )
    }
}
