// import {createStore,combineReducers} from 'redux'//combineReducers的用途 是把reduercs合并。
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Axios from 'axios'


function savemock_shopping_action(){
    return function (dispatch){
       Axios.get('/shopping').then(res=>{
        dispatch(save_shopping_action(res.data.list))
       })
    }
}

function save_shopping_action(data){

    return {
        type:'SAVE_SHOPPING_ACTION',
        data
    }
}
function add_shopping_action(item){
    return {
        type:'ADD_SHOPPING_ACTION',
        item
    }
}

function add_count_action(num){
    return {
        type:'ADD_COUNT_ACTION',
        num
    }
}

function dianji_action(id){
    return {
        type:'DIANJI_ACTION',
        id
    }
}

function dianall_action(){
    return {
        type:'DIANALL_ACTION'

    }
}





//收藏action
function collect_action(item){
    return {
        type:'COLLECT_ACTION',
        item
    }
}

function cancel_collect_action(id){
    return {
        type:'CANCEL_COLLECT_ACTION',
        id
    }
}





//关注action
function attention_action(item){
    return {
        type:'ATTENTION_ACTION',
        item
    }
}

function cancel_attention_action(id){
    return {
        type:'CANCEL_ATTENTION_ACTION',
        id
    }
}

//购物车reducer
let data={
    flag:false,
    list:[],
    data:[]
}

function shopping_reducer(state=data,action){
    state=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'DIANALL_ACTION':
            state.flag=!state.flag
            state.data.forEach(item=>{
                item.flag=state.flag
            })
            return state;
        case 'DIANJI_ACTION':
                let dianjifind=state.data.find(item=>{return item.id===action.id})
                // console.log(dianjifind);
                dianjifind.flag=!dianjifind.flag
               let rs= state.data.every(item=>{return item.flag})
               if(rs){
                   state.flag=true
               }else{
                   state.flag=false
               }
            return state;
        case 'SAVE_SHOPPING_ACTION':
            state.list=action.data
            // console.log(state.list);
            return state;
        case 'ADD_COUNT_ACTION':
            let finds=state.data.find(item=>{return item.id===action.num.id})
            // console.log(action);
            finds.count+=action.num.num
            if(finds.count<1){
                let findIndexs=state.data.findIndex(item=>{return item.id===action.num.id})
                state.data.splice(findIndexs,1)
             }
            return state;
        case 'ADD_SHOPPING_ACTION':
            let find=state.data.find((item)=>{return item.id===action.item.id})
            // console.log(find);
            if(find){
                find.count+=1
            }else{
                state.data.push(action.item)
            }
            return state;    
        default:
            return state;
    }
}





//收藏reducer
function collect_reducer(state=[],action){
    state=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'COLLECT_ACTION':
            state.push(action.item)
            return state;
        case 'CANCEL_COLLECT_ACTION':
            let findIndex=state.findIndex(item=>{return item.id===action.id})
            state.splice(findIndex,1)
            // console.log(state);
            return state;
            default:
            return state;
    }
}


//关注reducer
function attention_reducer(state=[],action){
    state=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'ATTENTION_ACTION':
            state.push(action.item)
            return state;
        case 'CANCEL_ATTENTION_ACTION':
            let findIndex=state.findIndex(item=>{return item.id===action.id})
            state.splice(findIndex,1)
            // console.log(state);
            return state;
            default:
            return state;
    }
}


let collectAttention=combineReducers({
    list:collect_reducer,
    data:attention_reducer,
    shop:shopping_reducer
})

let store=createStore(collectAttention,applyMiddleware(thunk))

export{
    store,
    collect_action,
    cancel_collect_action,
    attention_action,
    cancel_attention_action,
    savemock_shopping_action,
    add_shopping_action,
    add_count_action,
    dianji_action,
    dianall_action
}



















