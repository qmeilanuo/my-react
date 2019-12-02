import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
import MYSwiper from '../components/MySwiper/MySwiper'
import Lazy from '../components/Lazy/Lazy'
import DefaultType from '../components/DefaultType/DefaultType'
import Pull from '../components/Pull/Pull'
import Table from '../components/Tables/Tables'
import TabBar from '../components/TabBar/TabBar'
import Input from '../components/Input/Input'
import Collect from '../components/Collect/Collect'
import Attention from '../components/Attention/Attention'
import Shopping from '../components/Shopping/Shopping'
import CollectDetail from '../components/CollectDetail/CollectDetail'
import Ref from '../components/Ref/Ref'
import Match from '../components/Match/Match'
import Context from '../components/Context/Context'
import WithRouter from '../components/WithRouter/WithRouter'
import DetailAntd from '../components/Antd/DetailAntd'
import Cart from '../components/Cart/Cart'

export default class Router extends Component {
    render() {
        return (
           <Switch>
               <Route path='/home' component={Home}></Route>
               <Route path='/header' component={Header}></Route>
               <Route path='/swiper' component={MYSwiper}></Route>
               <Route path='/lazy' component={Lazy}></Route>
               <Route path='/pull' component={Pull}></Route>
               <Route path='/default-type' component={DefaultType}></Route>
               <Route path='/withrouter' component={WithRouter}></Route>
               <Route path='/table' component={Table}></Route>
               <Route path='/tab-bar' component={TabBar}></Route>
               <Route path='/input' component={Input}></Route>
               <Route path='/ref' component={Ref}></Route>
               <Route path='/match' component={Match}></Route>
               <Route path='/context' component={Context}></Route>
               <Route path='/collect' component={Collect}></Route>
               <Route path='/attention' component={Attention}></Route>
               <Route path='/shopping' component={Shopping}></Route>
               <Route path='/collectdetail' component={CollectDetail}></Route>
               <Route path='/detailantd' component={DetailAntd}></Route>
               <Route path='/cart' component={Cart}></Route>
               <Redirect to='/home'></Redirect>
           </Switch>
        )
    }
}
