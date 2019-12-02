import React, { Component } from 'react'

export default class MatchRouter extends Component {
    render() {
        // console.log(this.props.match.params.currIndex);
        // console.log(this.props.history.location.state);
        
        return (
            <div className='matchrouter'>
                <div className="header-text" style={{color:'#f90',fontSize:20}}>MatchRouter{this.props.match.params.currIndex}</div>
                <div className="header-text">这是动态路由</div>
                <div className="header-text">一、NavLink中的Pathname中写动态参数，注意需俩个大括号。</div>
                <div className="header-text">二、Route中的path中动态接收变量</div>
                <div className="header-text">三、在Route组件中用this.props.match.params接收动态路由参数，自己传的参数用this.props.history.location.state接收</div>
            </div>
        )
    }
}
