const initialState ={
    posts:[
        {
            title:'title',
            description:'description',
            postedBy:'Ali',
            category:{
                categoryName:'coding',
            }
        },{
            title:'title2',
            description:'description',
            postedBy:'Ali',
            category:{
                categoryName:'travelling',
            }
        },
    ]
}
import {initialState} from '../store'
export default function (state = initialState, action){
    switch(action.type){
        
        default:
            return state;
    }
}