import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import MatchRouter from './MatchRouter/MatchRouter'

export default class Match extends Component {
    constructor(){
        super()
        this.state={
            list:['测试1','测试2','测试3','测试4','测试5','测试6','测试7',]
        }
    }
    render() {
        return (
            <div className='match-page'>
               <DetailHeader left='&lt;' right='...'>
                        动态路由组件
               </DetailHeader>
                <div className="match-nav">
                    {
                        this.state.list.map((item,index)=>{
                            return(
                            <NavLink to={{pathname:'/match/'+index,state:'天下'}} key={index}>{item}</NavLink>
                            )
                        })
                    }
                </div>
                <Switch>
                    <Route path='/match/:currIndex' component={MatchRouter}></Route>
                    <Redirect to={{pathname:'/match/0',state:'天下'}}></Redirect>
                </Switch>
            </div>
        )
    }
}
