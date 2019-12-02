import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import {Switch,NavLink,Route,Redirect} from 'react-router-dom'
import TabBarHome from './TabBar-Home/TabBarHome'
import TabBarDetail from './TabBar-detail/TabBarDetail'
import TabBarClassify from './TabBar-classify/TabBarClassify'
import TabBarMy from './TabBar-my/TabBarMy'


export default class TabBar extends Component {
    render() {
        return (
            <div className='tabbar-page'>
                 <DetailHeader left='&lt;' right='...'>
                        tabBar组件
                </DetailHeader>
                <div className="header-text">这是一个2级路由组件，用的时候直接引入即可。如果有需求也可以封装成1级路由。</div>
                <div className="header-text">注意：2级路由写LINK的时候To后边一定要跟当前组件的路径。</div>
                <div className="header-text">例：当前路由接口是'/tab-bar',2级路由就要写成'/tab-bar/"这里写2级路由"'</div>
                <div className="tabBar-nav">
                     <NavLink to='/tab-bar/first'>首页</NavLink>
                    <NavLink to='/tab-bar/detail'>详情</NavLink>
                    <NavLink to='/tab-bar/classify'>分类</NavLink>
                    <NavLink to='/tab-bar/my'>我的</NavLink>
                </div>
               
                <Switch>
                    <Route path='/tab-bar/first' component={TabBarHome}></Route>
                    <Route path='/tab-bar/detail' component={TabBarDetail}></Route>
                    <Route path='/tab-bar/classify' component={TabBarClassify}></Route>
                    <Route path='/tab-bar/my' component={TabBarMy}></Route>
                    <Redirect to='/tab-bar/first'></Redirect>
                </Switch>
            </div>
        )
    }
}
