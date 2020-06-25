import React, {useReducer, createContext} from 'react'
import AppReducer from './AppReducer'
const initialState = {

    transactions: [{id: 1, name: 'Shoes' , cost: 2400},
                     {id: 2, name: 'flower' , cost: -1500}]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
   
    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    return(
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

/*
const [state, dispatch] = useReducer(GlobalState, initialState)

const GlobalState = (state,action)=>{
    switch(action.type){
        default:
            return state;
    }

}

export default GlobalState*/