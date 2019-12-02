import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class WithRouterItem extends Component {
    dianji=()=>{
        this.props.history.push('/home')
        
    }
    render() {
        return (
            <div>
               <div onClick={()=>this.dianji()} style={{color:'red',fontSize:18,textAlign:'center',marginTop:50,marginBottom:30}}>这里封装了路由高阶组件，点击就会跳转。</div>
               <div className="header-text">在一个标签不能跳转的时候，就需要在‘react-router-dom’中引入‘withRouter’方法。</div>
               <div className="header-text">然后抛出‘withRouter’方法，它的参数是需要跳转的组件。</div>
               <div className="header-text">跳转需用this.props.history.push('这里放跳转的地址')</div>
            </div>
        )
    }
}

export default withRouter(WithRouterItem)