import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class DetailHeader extends Component {
    render() {
        return (
            <div className={`detailheader  ${this.props.active?'active':''}`}>
                <span onClick={()=>this.props.history.push('/home')}>{this.props.left}</span>
                <span>{this.props.children}</span>
                <span>{this.props.right}</span>
            </div>
        )
    }
}

export default withRouter(DetailHeader)
