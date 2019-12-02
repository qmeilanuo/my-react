import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'

import WithRouterItem from './WithRouterItem/WithRouterItem'


export default class WithRouter extends Component {
    
    render() {
       
        return (
            <div>
               <DetailHeader left='&lt;' right='...'>
                        路由高阶组件
                </DetailHeader>
                <WithRouterItem></WithRouterItem>
               
            </div>
        )
    }
}

// export default withRouter(WithRouter)
