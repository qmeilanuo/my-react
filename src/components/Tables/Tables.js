import React, { Component } from 'react'
import DetailHeader from '../Header/DetailHeader/DetailHeader'
import Axios from 'axios'

export default class Table extends Component {
    constructor(){
        super()
        this.state={
            data:[],//接收请求数据
            currentIndex:1,//重点，所有数据都是围绕这个数据操作的。
            page:[]//这个是为了遍历页码的。
        }
    }
    componentDidMount(){
        Axios.post('/table-list',{count:20,page:1}).then(res=>{
            let num =Math.ceil(res.data.total/res.data.count)
            let sum=[]
            for(let i=1;i<=num;i++){
                sum.push(i)
            }
            this.setState({
                data:res.data.list,
                page:sum
                
            })
            // console.log(this.state.page);
            
        })
    }
    btns=(page)=>{
        let sum=this.state.currentIndex+page
        if(sum<1){
            sum=1
        }
        // console.log(this.state.page.length);
        if(sum>this.state.page.length){
            sum=this.state.page.length
        }
        this.setState({
            currentIndex:sum
        },()=>{
            Axios.post('/table-list',{count:20,page:this.state.currentIndex}).then(res=>{
              this.setState({
                data:res.data.list
              })
                
            })
        })
    }
    btnsPage=(page)=>{
        this.setState({//注意this.setState是异步。如果想用里面改变过的数据需要在他的回调中操作。
            currentIndex:page+1
        },()=>{
             Axios.post('/table-list',{count:20,page:this.state.currentIndex}).then(res=>{
            this.setState({
                data:res.data.list
              })
        })
        })
       
    }
    render() {
        return (
            <div className='table-page'>
                 <DetailHeader left='&lt;' right='...'>
                        表格组件
                </DetailHeader>
               <table border='1'>
                   <tbody>
                         <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>爱好</th>
                    </tr>
                    </tbody>
                    <tbody>
                    {this.state.data.map((item,index)=>{
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.sex}</td>
                                <td>{item.love}</td>
                            </tr>
                        )
                    })}
                   </tbody>
               </table>
               
               <div className="anniu">
                   <div className="btns" onClick={()=>this.btns(-1)}>&lt;</div>
                    {this.state.page.map((item,index)=>{
                        return (
                        <div className={`btns-page ${index+1===this.state.currentIndex?'active':''}`} key={index}  onClick={()=>this.btnsPage(index)}>{item}</div>
                        )
                    })}
                    <div className="btns" onClick={()=>this.btns(1)}>&gt;</div>    
                    
               </div>
               
                

            </div>
        )
    }
}
