import {createStore} from 'redux';
import {reducer} from './reducers/index'

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

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);